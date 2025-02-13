import { test, expect } from "@playwright/test";
import { axiosInstance } from "../../lib/axiosInstace";
import fs from "fs";
import FormData from "form-data";

test("createResult", async () => {
  try {
    const {
      data: {
        data: { token },
      },
    } = await axiosInstance.post("/user/google-signin", {
      email: "mauensaennarutchai@gmail.com",
      fullname: "string",
      image: "string",
    });

    const formData = new FormData();
    const filePath = "./assets/admin/33741.jpg";
    const file = fs.readFileSync(filePath);

    formData.append("name", "Acne");
    formData.append("file", file, "33741.jpg");

    const response = await axiosInstance.post("/results", formData, {
      headers: {
        token,
      },
    });

    expect(response.status).toBe(201);
    expect(response.data.status).toBe(true);
    expect(response.data.data.error).toBe(null);
    expect(response.data.data.result).not.toBe(null);
  } catch (error) {
    console.error(error);
  }
});

test("createResult without Image", async () => {
  try {
    const {
      data: {
        data: { token },
      },
    } = await axiosInstance.post("/user/goolge-signin", {
      email: "mauensaennarutchai@gmail.com",
      fullname: "string",
      image: "string",
    });

    const response = await axiosInstance.post(
      "/results",
      {},
      {
        headers: {
          token,
        },
      }
    );

    expect(response.data.status).toBe(false);
    expect(response.status).toBe(400);
    expect(response.data.data).toBe(null);
    expect(response.data.error).toBe(
      "request Content-Type has bad boundary or is not multipart/form-data"
    );
  } catch (error) {
    console.error(error);
  }
});

test("createResult Without Authen", async () => {
  try {
    const formData = new FormData();
    const filePath = "./assets/admin/33741.jpg";
    const file = fs.readFileSync(filePath);

    formData.append("name", "Acne");
    formData.append("file", file, "33741.jpg");

    const response = await axiosInstance.post("/results", formData);
    expect(response.status).toBe(401);
  } catch (error) {
    console.error(error);
  }
});
