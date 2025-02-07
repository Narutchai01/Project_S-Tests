import { test, expect } from "@playwright/test";
import FormData from "form-data";
import { axiosInstance } from "../../lib/axiosInstace";
import fs from "fs";
import { SkincareConfig } from "../../config/config";

test("createSkincare", async ({ baseURL }) => {
  const formData = new FormData();

  const filePath = "./assets/admin/33741.jpg";
  const file = fs.readFileSync(filePath);

  formData.append("name", SkincareConfig.skincare);
  formData.append("description", SkincareConfig.description);
  formData.append("file", file, "33741.jpg");

  const response = await axiosInstance.post(`/admin/skincare`, formData, {
    headers: formData.getHeaders(),
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
