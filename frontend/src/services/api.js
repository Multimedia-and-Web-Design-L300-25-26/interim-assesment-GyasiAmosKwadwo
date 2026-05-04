const readApiBase = () => {
  const configured = import.meta.env.VITE_API_URL?.trim();
  const firstToken = configured?.split(/\s+/)[0];
  const base = firstToken || "http://localhost:5000";
  return base.replace(/\/+$/, "");
};

const BASE = readApiBase();

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
