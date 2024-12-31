import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://localhost:3000/auth');
  await page.locator('div').filter({ hasText: 'Email' }).nth(3).click();
  await page.getByLabel('Email').fill('narutchai@kmutt.com');
  await page.getByLabel('Password').click();
  await page.getByLabel('Password').fill('123456789');
  await page.getByLabel('Email').dblclick();
  await page.getByLabel('Email').press('ControlOrMeta+a');
  await page.getByLabel('Email').fill('narutchai@kmutt.com');
  await page.getByRole('button', { name: 'Login' }).click();
});