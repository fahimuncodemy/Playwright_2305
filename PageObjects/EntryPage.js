exports.EntryPage=
class EntryPage{

    constructor(page){
        this.page = page;
        this.homeBtn= page.getByRole('link', { name: 'Home' });
    }

    // async goto(){
    //     await this.page.goto('https://medimention.com/');
    // }

    // async clickHome(){
    //     await this.homeBtn.click();
    // }
}