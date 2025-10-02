// pages/LoginPage.ts
import { Page } from '@playwright/test';
import { TestData } from '../utils/TestData'; 

export class LoginPage {// Define selectors
  readonly page: Page;
  readonly usernameField;
  readonly passwordField;
  readonly loginButton;

  constructor(page: Page) {// Constructor to initialize the page object and selectors
    this.page = page;
    this.usernameField = page.locator('[name ="username"]');
    this.passwordField = page.getByPlaceholder('Password');
    this.loginButton = page.getByRole('button', { name: 'Login' });
  }

  async goto() {// Navigate to the login page
    await this.page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  }

  async loginWithValidUser() {// Login using valid user credentials from TestData
    await this.usernameField.fill(TestData.validUser.username);
    await this.passwordField.fill(TestData.validUser.password);
    await this.loginButton.click();
  }

  async loginWithInvalidUser() {// login with invalid user credentials
    await this.usernameField.fill(TestData.invalidUser.username);
    await this.passwordField.fill(TestData.invalidUser.password);
    await this.loginButton.click();

  }

  async login(username: string, password: string) {// Generic login method
    await this.usernameField.fill(username);
    await this.passwordField.fill(password);
    await this.loginButton.click();
  }
}
