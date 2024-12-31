import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://narutchai.com/');
  await page.getByRole('link').first().click();
  await page.getByRole('link', { name: 'Repositories' }).click();
  await page.getByRole('link', { name: 'paralle_bfs' }).click();
  await page.locator('#repository-container-header').getByRole('link', { name: 'Narutchai01' }).click();
  await page.getByRole('link', { name: 'Repositories' }).click();
  await page.getByRole('link', { name: 'dsde' }).click();
  await page.close();
});


