// pages/login.page.js

class LoginPage {
    constructor(page) {
        this.page = page;
        this.usernameInput = '#emailAddressField';
        this.passwordInput = '#passwordField';
        this.loginButton = '#enableButton';
    }

    async navigate() {
        await this.page.goto('https://dev.provenorigin.com/');
    }

    async AcceptCookies() {
        await this.page.locator('text="Accept All Cookies"').click();
    }
    async login(username, password) {
        await this.page.fill(this.usernameInput, username);
        await this.page.fill(this.passwordInput, password);
        await this.page.click(this.loginButton);
    }
}

module.exports = LoginPage;
