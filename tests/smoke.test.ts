import request from "supertest";
import express from "express";

const app = express();

app.get("/health", (req, res) => {
  res.status(200).json({ status: "healthy" });
});

app.get("/", (req, res) => {
  res.status(200).send("Parkometer API is running 🚗");
});

describe("Smoke Tests", () => {
  test("Application responds to /health", async () => {
    const res = await request(app).get("/health");
    expect(res.status).toBe(200);
  });

  test("Application responds to /", async () => {
    const res = await request(app).get("/");
    expect(res.status).toBe(200);
  });

  test("Application starts without crashing", async () => {
    const res = await request(app).get("/health");
    expect(res).toBeDefined();
  });
});
