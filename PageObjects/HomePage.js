exports.HomePage=
class HomePage{
    constructor(page){
        this.page= page;
        this.registerBtn= page.locator("//a[text()='Join Us']");
        this.login= page.getByRole('link', { name: 'Login' });
    }

    async clickRegister(){
        await this.registerBtn.click();
    }

    async clickLogin(){
        await this.login.click();
    }
}