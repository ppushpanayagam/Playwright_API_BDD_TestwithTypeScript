import {test, expect} from '@playwright/test'


test('Verify PUT request test', async ({request}) => {

    const response = await request.put('/api/users/2', {
        data: {
            name: 'morpheus',
            job: 'zion resident'
        }
        
    })

    expect(response.status()).toEqual(200);
    expect(response.ok()).toBeTruthy();

    console.log(await response.text());
    const responseData = JSON.parse(await response.text());
    console.log(await responseData.name);
    console.log(await responseData.job);
    console.log(await responseData.updatedAt);
})