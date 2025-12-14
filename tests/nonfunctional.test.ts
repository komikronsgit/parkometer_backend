import request from "supertest";
import express from "express";

const app = express();

app.get("/health", (req, res) => {
  res.status(200).json({ status: "healthy" });
});

app.get("/", (req, res) => {
  res.status(200).send("Parkometer API is running 🚗");
});

describe("Non-Functional Tests (Performance)", () => {
  test("Health endpoint responds within 200ms", async () => {
    const start = Date.now();
    await request(app).get("/health");
    const duration = Date.now() - start;
    expect(duration).toBeLessThan(200);
  });

  test("Root endpoint responds within 200ms", async () => {
    const start = Date.now();
    await request(app).get("/");
    const duration = Date.now() - start;
    expect(duration).toBeLessThan(200);
  });
});
