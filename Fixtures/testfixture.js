import {test, expect} from '@playwright/test';

let random= Math.floor(Math.random() * 500);
export const customTest= test.extend({
    testData: {
        BussName: 'Test Business',
        UserName: `test${random}user`,
        Email: `test${random}@example.com`,
        Password: 'testpassword'
    }
});

export{expect}