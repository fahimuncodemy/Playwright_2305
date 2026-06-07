exports.AccountPage= 
class AccountPage{

    constructor(page){
        this.page = page;
        this.accountHead= page.locator("//a[@class='navbar-brand']/small");
        // this.logoutBtn= page.getByRole('link', { name: 'Logout' });
    }

    // async getAccountHead(){
    //     return await this.accountHead.textContent();
    // }

    // async clickLogout(){
    //     await this.
    // }
}