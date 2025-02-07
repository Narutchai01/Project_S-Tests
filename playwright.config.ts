import type { PlaywrightTestConfig } from "@playwright/test";

const config: PlaywrightTestConfig = {
  testDir: "./src/test",
  timeout: 30000,
  reporter: "html",
  use: {
    headless: true,
    screenshot: "only-on-failure",
    browserName: "chromium",
    baseURL: "http://localhost:8080/api",
  },
};

export default config;
