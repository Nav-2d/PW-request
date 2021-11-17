const { test, expect } = require('@playwright/test');
const email = 'MY_EMAIL'
const password = 'MY_PASSWORD'
test('should create a bug report', async ({ request }) => {
  const response = await request.post(`MY_URL`, {
    headers: { 'accept': '*/*' },
    data: {email,password,},
  })
  expect(response.status()).toBe(403)
});