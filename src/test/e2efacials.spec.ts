import { test, expect } from '@playwright/test';

test('Create Facial 1 from e2e', async ({ page }) => {
  await page.goto('http://localhost:3000/auth');
  await page.getByLabel('Email').click();
  await page.getByLabel('Email').fill('admin@admin.com');
  await page.getByLabel('Password').click();
  await page.getByLabel('Password').fill('1234');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('link', { name: 'Skin Problems' }).click();
  await page.getByRole('button', { name: 'Add facial' }).click();
  await page.getByPlaceholder('Facial Name').click();
  await page.getByPlaceholder('Facial Name').fill('Facial 1');
  await page.getByPlaceholder('upload image').click();
  await page.getByPlaceholder('upload image').setInputFiles("C:\\Users\\koonf\\OneDrive\\รูปภาพ\\Screenshots\\Screenshot 2025-02-13 195403.png");
  await page.getByRole('button', { name: 'Add Skincare' }).click();
  await page.getByRole('button', { name: 'Done' }).click();
  await page.close();
});