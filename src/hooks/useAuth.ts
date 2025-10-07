// src/hooks/useAuth.ts
import { useState } from "react";
import { loginUser } from "../api/auth";

export function useAuth() {
  const [token, setToken] = useState<string | null>(
    sessionStorage.getItem("token")
  );
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const login = async (email: string, password: string) => {
    try {
      setLoading(true);
      setError(null);

      const { token } = await loginUser(email, password);

      // ✅ Guardar token en sessionStorage
      sessionStorage.setItem("token", token);
      setToken(token);

      return token;
    } catch (err: any) {
      setError(err.message);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    sessionStorage.removeItem("token");
    setToken(null);
  };

  return { token, login, logout, loading, error };
}
