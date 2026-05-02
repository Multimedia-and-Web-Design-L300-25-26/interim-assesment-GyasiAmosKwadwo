const BASE = import.meta.env.VITE_API_URL || "http://localhost:5000";

async function request(path, options = {}) {
  const token = localStorage.getItem("token");
  const headers = { "Content-Type": "application/json", ...options.headers };
  if (token) headers.Authorization = `Bearer ${token}`;
  const res = await fetch(`${BASE}${path}`, {
    ...options,
    headers,
    credentials: "include",
  });
  const data = await res.json();
  if (!res.ok) throw new Error(data.message || "Request failed");
  return data;
}

export const authAPI = {
  register: (body) =>
    request("/register", { method: "POST", body: JSON.stringify(body) }),
  login: (body) =>
    request("/login", { method: "POST", body: JSON.stringify(body) }),
  logout: () => request("/logout", { method: "POST" }),
  profile: () => request("/profile"),
};

export const cryptoAPI = {
  getAll: () => request("/crypto/"),
  getGainers: () => request("/crypto/gainers"),
  getNew: () => request("/crypto/new"),
};

export const testServer = {
  checkActive: () => request("/"),
};
