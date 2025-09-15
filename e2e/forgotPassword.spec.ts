import { test, expect } from '@playwright/test'

test('should allow user to reset password via forgot password flow', async ({ page }) => {
  await page.goto('http://localhost:5173')
  await page.getByTestId('forgot-password-link').click()
  const resetForm = page.getByTestId('reset-form')
  await expect(resetForm.getByText('Reset Password')).toBeVisible()
})
