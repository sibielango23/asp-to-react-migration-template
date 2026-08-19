import { FormEvent, useState } from "react";
import { useAuth } from "../hooks/useAuth";

export function LoginForm() {
  const { token, loading, error, signIn } = useAuth();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    await signIn(username, password);
  }

  return (
    <section>
      <h2>Login</h2>
      <form onSubmit={onSubmit}>
        <label>
          Username
          <input
            aria-label="Username"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          />
        </label>
        <label>
          Password
          <input
            aria-label="Password"
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </label>
        <button type="submit" disabled={loading}>
          {loading ? "Signing in..." : "Sign in"}
        </button>
      </form>
      {token ? <p>Signed in</p> : null}
      {error ? <p role="alert">{error}</p> : null}
    </section>
  );
}

