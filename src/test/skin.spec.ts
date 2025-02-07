import { test, expect } from "@playwright/test";
import FormData from "form-data";
import { axiosInstance } from "../../lib/axiosInstace";
import fs from "fs";
import { skinConfig } from "../../config/config";

test("createSkin", async ({ baseURL }) => {
  const formData = new FormData();

  const filePath = "./assets/admin/33741.jpg";
  const file = fs.readFileSync(filePath);

  formData.append("name", skinConfig.skintype);
  formData.append("description", skinConfig.description);
  formData.append("file", file, "33741.jpg");

  const response = await axiosInstance.post(`/admin/skin`, formData, {
    headers: formData.getHeaders(),
  });

  expect(response.status).toBe(201);
});

test("getSkin", async ({ request, baseURL }) => {
  const response = await request.get(`${baseURL}/skin`);

  expect(response.status()).toBe(200);
  expect(response.json()).not.toBeNull();
  expect(response.json()).not.toBeUndefined();
});

test("getSkinByID", async ({ request, baseURL }) => {
    const response = await request.get(`${baseURL}/skin/1`);
  
    expect(response.status()).toBe(200);
  });
  
  test("getSkinByID NotFound", async ({ request, baseURL }) => {
    const response = await request.get(`${baseURL}/skin/1000`);
  
    expect(response.status()).toBe(404);
  });
