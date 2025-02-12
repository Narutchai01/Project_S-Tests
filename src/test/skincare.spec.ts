import { test, expect } from "@playwright/test";
import FormData from "form-data";
import { axiosInstance } from "../../lib/axiosInstace";
import fs from "fs";
import { skincare } from "../../data/skincare";

test("createSkincare", async () => {
  const formData = new FormData();

  const filePath = "./assets/admin/34420.jpg";
  const file = fs.readFileSync(filePath);

  formData.append("name", "Skincare"); 
  formData.append("description", "Summary"); 
  formData.append("file", file, "34420.jpg"); 
  const response = await axiosInstance.post(`/admin/skincare`, formData, {
    headers: {
      token:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE3MzczMDUzNTIsInVzZXJfaWQiOjF9.UycnQIEGCAt4kGsEPdZynD1ol_OGhZtNrngwdS1Qz77",
    },
  });
  expect(response.status).toBe(201);
});

test("getSkincare", async ({ request, baseURL }) => {
  const response = await request.get(`${baseURL}/skincare`);

  expect(response.status()).toBe(200);
  expect(response.json()).not.toBeNull();
  expect(response.json()).not.toBeUndefined();
});

test("getSkincareByID", async ({ request, baseURL }) => {
    const response = await request.get(`${baseURL}/skincare/1`);
  
    expect(response.status()).toBe(200);
  });
  
  test("getSkincareByID NotFound", async ({ request, baseURL }) => {
    const response = await request.get(`${baseURL}/skincare/1000`);
  
    expect(response.status()).toBe(404);
  });