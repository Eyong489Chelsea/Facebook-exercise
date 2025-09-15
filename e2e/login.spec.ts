import { test, expect, Page } from '@playwright/test'

const login = async (page: Page) => {
  await page.goto('http://localhost:5173')
  await page.getByTestId('email').fill('noniaves@gmail.com')
  await page.getByTestId('password').fill('123456')
  await page.getByTestId('login-button').click()
}

test.describe('Login Page', () => {
  test('should display successfully', async ({ page }) => {
    await page.goto('http://localhost:5173')
    await expect(page.getByText('Log In')).toBeVisible()
  })

  test('should display error messages if user submits empty credentials', async ({ page }) => {
    await page.goto('http://localhost:5173')
    await page.getByTestId('login-button').click({ force: true })
    await expect(page.getByTestId('email_error')).toBeVisible()
    await expect(page.getByTestId('password_error')).toBeVisible()
  })

  test('should redirect user to the home page with correct credentials', async ({ page }) => {
    await login(page)
    await expect(page.getByTestId('welcome')).toBeVisible()
  })
})

