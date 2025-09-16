import {Page, expect} from '@playwright/test';
//export class DashboardPage 
export class DashboardPage {
    //Define selectors
    readonly page: Page;
    readonly userDropdown;
    readonly LogoutButton;

    //Constructor to initialize the page object and selectors
    constructor(Page: Page){
        this.page = Page; // Initialize the page object
        this.userDropdown = Page.locator('p.oxd-userdropdown-name'); // Selector for user dropdown
        this.LogoutButton = Page.getByText('Logout'); // Selector for logout button

    }
    // Method to perform logout action
    async logout(){
        await this.userDropdown.click();// Click on user dropdown
        await this.LogoutButton.click();// Click on logout button
        // Verify successful logout by checking the URL
        await expect(this.page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    }
}