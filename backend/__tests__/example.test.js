import request from "supertest";
import { describe, expect, it } from "vitest";
import { app } from "../src/server.js";

describe("backend scaffold", () => {
  it("returns health status", async () => {
    const response = await request(app).get("/health");
    expect(response.status).toBe(200);
    expect(response.body.status).toBe("ok");
  });

  it("returns products", async () => {
    const response = await request(app).get("/api/products");
    expect(response.status).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
    expect(response.body.length).toBeGreaterThan(0);
  });

  it("protects users route", async () => {
    const response = await request(app).get("/api/users");
    expect(response.status).toBe(401);
  });
});

