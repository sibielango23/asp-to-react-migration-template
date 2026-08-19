export type LoginPayload = {
  username: string;
  password: string;
};

export async function login(payload: LoginPayload): Promise<{ token: string }> {
  const response = await fetch("/api/auth/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload)
  });

  if (!response.ok) {
    throw new Error(`Login failed with status ${response.status}`);
  }

  return response.json() as Promise<{ token: string }>;
}

