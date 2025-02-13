import { test, expect } from "@playwright/test";
import { axiosInstance } from "../../lib/axiosInstace";
import { UserConfig } from "../../config/config";

test("UserRegister", async () => {
  const response = await axiosInstance.post(`/user/register`, {
    fullname: UserConfig.fullname,
    email: UserConfig.email,
    password: UserConfig.password,
    birthday: UserConfig.birthday,
    sensitive_skin: UserConfig.sensitive_skin,
  });

  expect(response.status).toBe(201);
  expect(response.data).toHaveProperty("user_id");
});

test("UserLogin", async () => {
  const response = await axiosInstance.post(`/user/login`, {
    email: UserConfig.email,
    password: UserConfig.password,
  });

  expect(response.status).toBe(200);
  expect(response.data).toHaveProperty("token");
});
