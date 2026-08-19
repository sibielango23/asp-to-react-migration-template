import { useState } from "react";
import { login } from "../services/auth";

export function useAuth() {
  const [token, setToken] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function signIn(username: string, password: string) {
    setLoading(true);
    try {
      const result = await login({ username, password });
      setToken(result.token);
      setError(null);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Login failed");
      throw err;
    } finally {
      setLoading(false);
    }
  }

  return { token, loading, error, signIn };
}

