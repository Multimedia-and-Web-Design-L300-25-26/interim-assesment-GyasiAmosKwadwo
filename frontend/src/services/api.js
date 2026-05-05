const PROD_FALLBACK_API = "https://interim-assesment-gyasiamoskwadwo.onrender.com";
const DEV_FALLBACK_API = "http://localhost:5000";

const normalizeCandidate = (value = "") => {
  const cleaned = value.trim().replace(/^['"`]|['"`]$/g, "");
  const withoutKey = cleaned.startsWith("VITE_API_URL=")
    ? cleaned.slice("VITE_API_URL=".length)
    : cleaned;
  return withoutKey.trim().replace(/\/+$/, "");
};

const readApiBase = () => {
  const raw = import.meta.env.VITE_API_URL || "";
  const flattened = raw.replace(/\r?\n/g, " ").trim();
  const matchedUrl = flattened.match(/https?:\/\/[^\s"'`]+/i)?.[0];
  const firstToken = flattened.split(/\s+/)[0];
  const candidate = normalizeCandidate(matchedUrl || firstToken);
  const fallback = import.meta.env.PROD ? PROD_FALLBACK_API : DEV_FALLBACK_API;
  return candidate || fallback;
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
