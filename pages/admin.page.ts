import {Page} from '@playwright/test';

//create the admin class
export class Admin{
    //define the selectors
    readonly page: Page;
    //readonly adminPage;
    readonly employeeName;
    readonly employeeNameSelect;
    readonly username;
    readonly password;
    readonly role;
    readonly status;
    readonly button;
    readonly addButton;
    readonly adminDropDown;
    readonly statusDropDown;

    //constructor to initialize the selectors
    constructor(page: Page){
        this.page= page; 
        //this.adminPage = page.getByRole('button', {name: 'Admin'});
        this.addButton = page.getByRole('button', {name: 'add'});
        //this.adminDropDown = page.locator('.oxd-icon.bi-caret-down-fill.oxd-select-text--arrow');
        this.adminDropDown = page.locator('form i');
        this.role = page.locator('oxd-select-option');// updated from list to option 
        this.employeeName = page.getByRole('textbox', {name: 'Type for hints...'});
        this.employeeNameSelect = page.getByText('James Butler');
        this.statusDropDown = page.locator('form i');
        //this.status = page.getByRole('option', {name: 'Enabled'});
        this.status = page.locator('.oxd-select-text-input');
        this.username = page.locator('oxd-input.oxd-input--active');
        this.password = page.getByLabel('textbox').nth(3);
        this.button = page.getByRole('button', {name: 'save'})
    }

    //creating the functions that define the actions for each test case
    //create a user 
    async registerNewUser(){
        await this.page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/admin/viewSystemUsers');
        await this.addButton.click();
        await this.adminDropDown.first().click();
        await this.role.click;
        await this.employeeName.fill('james');
        await this.employeeNameSelect.click();
        await this.statusDropDown.nth(1).click();
        //await this.status.selectOption('Enabled');
        await this.status.first().click();
        await this.username.click();
        await this.username.fill('james');
        await this.password.nth(3).click();
        await this.password.nth(3).fill('james123');
        await this.button.click();
    }

}