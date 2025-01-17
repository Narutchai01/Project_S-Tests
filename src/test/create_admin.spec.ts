import { test, expect } from "@playwright/test";
import FormData from "form-data";
import { axiosInstance } from "../../lib/axiosInstace";
import fs from "fs";
import admin from "../../data/admin.json";
import axios from "axios";

test("createAdmin", async ({ baseURL }) => {
  test.slow();
  const adminData = await axios.get(
    "https://6788e1092c874e66b7d6ac7e.mockapi.io/admin"
  );

  const data = adminData.data;

  console.log(data.length);

  for (let index = 0; index < 67; index++) {
    const formData = new FormData();

    const filePath = "./assets/admin/33741.jpg";
    const file = fs.readFileSync(filePath);

    formData.append("fullname", data[index].fullname);
    formData.append("email", data[index].email);
    formData.append("password", "password1");
    formData.append("file", file, "33741.jpg");

    const response = await axiosInstance.post(`/admin/manage`, formData, {
      headers: formData.getHeaders(),
    });

    expect(response.status).toBe(201);
  }
});
