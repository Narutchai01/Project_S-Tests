import { test, expect } from "@playwright/test";
import FormData from "form-data";
import { axiosInstance } from "../../lib/axiosInstace";
import fs from "fs";
import axios from "axios";

test("createSkincare", async ({ baseURL }) => {
  test.slow();
  
  const skincareData = await axios.get(
    "https://67acb8e13f5a4e1477dba002.mockapi.io/skincareData/skincare"
  );

  const data = skincareData.data;

  console.log(`Total Skincare Data: ${data.length}`);

  for (let index = 0; index < data.length; index++) {
    const formData = new FormData();

    const filePath = "./assets/admin/34420.jpg";
    const file = fs.readFileSync(filePath);

    formData.append("skincareName", data[index].skincareName);
    formData.append("description", data[index].description);
    formData.append("file", file, "34420.jpg");

    const response = await axiosInstance.post(`/admin/skincare`, formData, {
      headers: formData.getHeaders(),
    });

    expect(response.status).toBe(201);
  }
});
