exports.RegistrationPage=
class RegistrationPage {

    constructor(page){
        this.page = page;
        this.dropButton= page.locator("//button[@data-id='UserRole']");
        this.dropOption= page.locator("//ul[@role='menu']//a");
        this.BussName= page.locator("#DetailName");
        this.Username= page.locator("#UserUsername");
        this.email= page.locator("#UserEmail");
        this.password= page.locator("#UserPassword");
        this.confirmPassword= page.locator("#UserPassword1");
        this.agreeTick= page.locator("//input[@name='terms']");
        this.registerBtn= page.getByRole('button', { name: 'Register' });
    }

    // async registerNewUser(BName, UName, UEmail, UPass){
    //     await this.dropButton.click();
    //     await this.dropOption.nth(1).click();
    //     await this.BussName.fill(BName);
    //     await this.Username.fill(UName);
    //     await this.email.fill(UEmail);
    //     await this.password.fill(UPass);
    //     await this.confirmPassword.fill(UPass);
    //     await this.agreeTick.click();
    //     await this.registerBtn.click();
    // }

    // async dropAction(){
    //     await this.dropButton.click();
    //     await this.dropOption.nth(1).click();
    // }

    // async textActioin(BName, UName, UEmail, UPass){
    //      await this.BussName.fill(BName);
    //     await this.Username.fill(UName);
    //     await this.email.fill(UEmail);
    //     await this.password.fill(UPass);
    //     await this.confirmPassword.fill(UPass);
    // }

    // async submitAction(){
    //     await this.agreeTick.click();
    //     await this.registerBtn.click();
    // }
}