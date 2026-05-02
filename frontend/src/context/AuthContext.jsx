import { createContext, useContext } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { authAPI } from "../services/api";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const queryClient = useQueryClient();

  const { data: profileData, isLoading } = useQuery({
    queryKey: ["auth", "profile"],
    queryFn: () =>
      authAPI.profile().catch(() => {
        localStorage.removeItem("token");
        return null;
      }),
    enabled: !!localStorage.getItem("token"),
    retry: false,
    staleTime: Infinity,
  });

  const user = profileData?.user ?? null;

  const loginMutation = useMutation({
    mutationFn: ({ email, password }) => authAPI.login({ email, password }),
    onSuccess: (data) => {
      localStorage.setItem("token", data.token);
      queryClient.setQueryData(["auth", "profile"], { user: data.user });
    },
  });

  const registerMutation = useMutation({
    mutationFn: ({ name, email, password }) =>
      authAPI.register({ name, email, password }),
    onSuccess: (data) => {
      localStorage.setItem("token", data.token);
      queryClient.setQueryData(["auth", "profile"], { user: data.user });
    },
  });

  const logoutMutation = useMutation({
    mutationFn: () => authAPI.logout().catch(() => {}),
    onSettled: () => {
      localStorage.removeItem("token");
      queryClient.setQueryData(["auth", "profile"], null);
    },
  });

  function login(email, password) {
    return loginMutation.mutateAsync({ email, password });
  }

  function register(name, email, password) {
    return registerMutation.mutateAsync({ name, email, password });
  }

  function logout() {
    return logoutMutation.mutateAsync();
  }

  return (
    <AuthContext.Provider value={{ user, loading: isLoading, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
