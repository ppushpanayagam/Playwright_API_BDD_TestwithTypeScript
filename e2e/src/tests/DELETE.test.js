import {test, expect} from '@playwright/test'


test.only('Verify DELETE request test', async ({request}) => {

    const response = await request.delete('/api/users/2');
    expect(await response.status()).toEqual(204);
    expect(await response.statusText()).toEqual('No Content');
})