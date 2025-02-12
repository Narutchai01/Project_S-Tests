import { test, expect } from "@playwright/test";
import FormData from "form-data";
import { axiosInstance } from "../../lib/axiosInstace";
import fs from "fs";
import { facial } from "../../data/facial";

test("createFacial", async () => {
  const formData = new FormData();

  const filePath = "./assets/admin/33741.jpg";
  const file = fs.readFileSync(filePath);

  formData.append("name", "Facial"); 
  formData.append("file", file, "33741.jpg"); 
  const response = await axiosInstance.post(`/admin/facial`, formData, {
    headers: {
      token:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE3MzczMDUzNTIsInVzZXJfaWQiOjF9.UycnQIEGCAt4kGsEPdZynD1ol_OGhZtNrngwdS1Qz78",
    },
  });
  expect(response.status).toBe(201);
});

test("getFacial", async ({ request, baseURL }) => {
  const response = await request.get(`${baseURL}/facial`);

  expect(response.status()).toBe(200);
  expect(response.json()).not.toBeNull();
  expect(response.json()).not.toBeUndefined();
});

test("getFacialByID", async ({ request, baseURL }) => {
  const response = await request.get(`${baseURL}/facial/1`);

  expect(response.status()).toBe(200);
});

test("getFacialByID NotFound", async ({ request, baseURL }) => {
  const response = await request.get(`${baseURL}/facial/1000`);

  expect(response.status()).toBe(404);
});
