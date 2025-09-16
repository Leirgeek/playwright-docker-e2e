import {Page, expect} from '@playwright/test';
//export class LoginPage
export class LoginPage {
    //Define selectors
    readonly page: Page;
    readonly usernameInput;
    readonly passwordInput;
    readonly loginButton;

    constructor(page){
        this.page = page; // Initialize the page object
        this.usernameInput = page.locator('input.oxd-input,oxd-input--active').first();
        this.passwordInput = page.locator('input.oxd-input,oxd-input--active').nth(1);
        this.loginButton = page.getByRole('button', {name: 'Login'});
    }
    async goto(){ // Navigate to the login page
        await this.page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    }
    // Method to perform login  action
    async login(username : string, password: string){
        await this.usernameInput.click();
        await this.usernameInput.fill(username);
        await this.passwordInput.click();
        await this.passwordInput.fill(password);
        await this.loginButton.click();

        // Verify successful login by checking the URL and presence of 'Time at Work' text
        await expect(this.page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index');
        await expect(this.page.getByText('Time at Work')).toBeVisible();
    }


}