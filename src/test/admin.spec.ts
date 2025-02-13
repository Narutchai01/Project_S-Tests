import { test, expect } from "@playwright/test";
import FormData from "form-data";
import { axiosInstance } from "../../lib/axiosInstace";
import fs from "fs";
import { adminUserConfig } from "../../config/config";

test("createAdmin", async ({ baseURL }) => {
  const formData = new FormData();

  const filePath = "./assets/admin/33741.jpg";
  const file = fs.readFileSync(filePath);

  formData.append("fullname", adminUserConfig.fullname);
  formData.append("email", adminUserConfig.email);
  formData.append("password", adminUserConfig.password);
  formData.append("file", file, "33741.jpg");

  const response = await axiosInstance.post(`/admin/manage`, formData, {
    headers: formData.getHeaders(),
  });

  expect(response.status).toBe(201);
});

test("createAdmin without email ", async ({ baseURL }) => {
  const formData = new FormData();

  const filePath = "./assets/admin/33741.jpg";
  const file = fs.readFileSync(filePath);

  formData.append("fullname", adminUserConfig.fullname);
  formData.append("email", adminUserConfig.email);
  formData.append("password", adminUserConfig.password);
  formData.append("file", file, "33741.jpg");

  const response = await axiosInstance.post(`/admin/manage`, formData, {
    headers: formData.getHeaders(),
  });

  expect(response.status).toBe(500);
});



test("getAdmins", async ({ request, baseURL }) => {
  const response = await request.get(`${baseURL}/admin/manage`);

  expect(response.status()).toBe(200);
  expect(response.json()).not.toBeNull();
  expect(response.json()).not.toBeUndefined();
});

test("getAdmin", async ({ request, baseURL }) => {
  const response = await request.get(`${baseURL}/admin/manage/2`);

  expect(response.status()).toBe(200);
});

test("getAdmin NotFound", async ({ request, baseURL }) => {
  const response = await request.get(`${baseURL}/admin/manage/1000`);

  expect(response.status()).toBe(404);
});

test("loginAdmin", async ({ baseURL }) => {
  const response = await axiosInstance.post(`/admin/login`, {
    email: adminUserConfig.email,
    password: adminUserConfig.password,
  });

  console.log(response.data.data.token);
  

  expect(response.status).toBe(200);
  expect(response.data).not.toBeNull();
  expect(response.data).not.toBeUndefined();
});
