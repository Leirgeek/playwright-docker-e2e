import {test, expect} from '@playwright/test';

test('login test', async ({page}) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await page.locator('input.oxd-input.oxd-input--active').first().click();
    await page.locator('input.oxd-input.oxd-input--active').fill('Admin');
    await page.getByPlaceholder ('Password').click();
    await page.getByPlaceholder('Password').fill('admin123');
    await page.getByRole('button', {name: 'Login'}).click();
    await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index');
    await expect(page.getByText('Time at Work')).toBeVisible();

    //access the logout button and click it
    await page.locator('p.oxd-userdropdown-name').click();
    await page.getByText('Logout').click();
    //await page.getByRole('link', {name: 'Logout'}).click();
    await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
})