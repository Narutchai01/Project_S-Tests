import { test, expect } from "@playwright/test";
import { adminUserConfig } from "../../config/config";
import fs from "fs";
import FormData from "form-data";
import { axiosInstance } from "../../lib/axiosInstace";
import { acne } from "../../data/acne";

test("createAcne", async () => {
  const formData = new FormData();

  const filePath = "./assets/admin/33741.jpg";
  const file = fs.readFileSync(filePath);

  formData.append("name", "Acne");
  formData.append("file", file, "33741.jpg");

  const response = await axiosInstance.post(`/admin/acne`, formData, {
    headers: {
      token:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE3MzczMDUzNTIsInVzZXJfaWQiOjF9.UycnQIEGCAt4kGsEPdZynD1ol_OGhZtNrngwdS1Qz70",
    },
  });

  expect(response.status).toBe(201);
});

test("getAcne", async () => {
  const response = await axiosInstance.get(`/acne`);

  expect(response.status).toBe(200);
  expect(response.data).not.toBeNull();
  expect(response.data).not.toBeUndefined();
});

test("getAcneById", async () => {
  const response = await axiosInstance.get("/acne/1");

  expect(response.status).toBe(200);
  expect(response.data).not.toBeNull();
  expect(response.data).not.toBeUndefined();
});

test("getAcneById NotFound", async ({ request, baseURL }) => {
  const response = await request.get(`${baseURL}/acne/1000`);

  expect(response.status()).toBe(404);
  expect(response.json()).not.toBeNull();
});


