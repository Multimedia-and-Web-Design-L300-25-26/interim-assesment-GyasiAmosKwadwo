import { useQuery } from "@tanstack/react-query";
import { cryptoAPI } from "../services/api";

export function useAllCrypto() {
  return useQuery({
    queryKey: ["crypto", "all"],
    queryFn: () => cryptoAPI.getAll(),
  });
}

export function useCryptoGainers() {
  return useQuery({
    queryKey: ["crypto", "gainers"],
    queryFn: () => cryptoAPI.getGainers(),
  });
}

export function useCryptoNew() {
  return useQuery({
    queryKey: ["crypto", "new"],
    queryFn: () => cryptoAPI.getNew(),
  });
}
