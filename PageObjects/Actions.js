exports.Actions= 
class Actions {
    constructor(page) {
        this.page = page;
    }

async clickElement(locator) {
    await locator.click();
}

async fillInput(locator, value) {
    await locator.fill(value);  
}
async getText(locator) {
    return await locator.textContent(); 
}

async gotoUrl(url) {
    await this.page.goto(url);  
}

}