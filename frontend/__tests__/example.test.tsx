import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import App from "../src/App";

vi.stubGlobal(
  "fetch",
  vi.fn().mockResolvedValue({
    ok: true,
    json: async () => [{ id: 1, name: "Sample Product", price: 10 }]
  })
);

describe("App", () => {
  it("renders key sections", async () => {
    render(<App />);
    expect(screen.getByText("ASP to React Migration Template")).toBeInTheDocument();
    expect(screen.getByText("Login")).toBeInTheDocument();
    expect(screen.getByText("Dashboard")).toBeInTheDocument();
    expect(await screen.findByText("Sample Product - $10")).toBeInTheDocument();
  });
});

