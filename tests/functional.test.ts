import request from "supertest";
import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import router from "../src/router";

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.get("/health", (req, res) => {
  res.status(200).json({ status: "healthy", environment: "test" });
});

app.get("/", (req, res) => {
  res.status(200).send("Parkometer API is running 🚗");
});

app.use("/", router);

describe("Functional Tests", () => {
  test("Health endpoint returns healthy status", async () => {
    const res = await request(app).get("/health");
    expect(res.status).toBe(200);
    expect(res.body.status).toBe("healthy");
  });

  test("Root endpoint returns API running message", async () => {
    const res = await request(app).get("/");
    expect(res.status).toBe(200);
    expect(res.text).toContain("Parkometer API is running");
  });

  test("Invalid route returns 404", async () => {
    const res = await request(app).get("/invalid-route");
    expect(res.status).toBe(404);
  });
});
