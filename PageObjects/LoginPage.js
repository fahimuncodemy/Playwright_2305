exports.LoginPage= 
class LoginPage{

    constructor(page){
        this.page = page;
        this.loginUsername= page.locator("input#UserUsername");
        this.loginPassword= page.locator("input#UserPassword");
        this.loginBtn= page.locator("//span[text()='Login'][@class='bigger-110']");
        // this.logoutBtn= page.getByRole('link', { name: 'Logout' });
    }
}
