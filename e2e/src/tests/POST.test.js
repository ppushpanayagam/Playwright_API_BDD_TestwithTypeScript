import {test, expect} from '@playwright/test'


test('Verify POST request test', async ({request}) => {

    const response = await request.post('/api/users', {
        data:{
            name: 'John',
            job: 'IT'
        }
    })
    expect(response.status()).toBe(201);
    expect(response.ok()).toBeTruthy

    console.log(await response.json());

})

test('Verify POST request response test', async ({request}) => {

    const response = await request.post('/api/login', {
        data:{
            email: 'eve.holt@reqres.in',
            password: 'cityslicka'
        }
    })

    expect(response.status()).toBe(200);
    expect(response.ok()).toBeTruthy();
    console.log(await response.json());
    const responseBody = JSON.parse(await response.text());

    console.log(await responseBody.token);
})

test('Verify unsuccessful POST request response object test', async ({request}) => {

    const response = await request.post('/api/login', {
        data:{
            email: 'peter@klaven'
        }
    })

    expect(await response.status()).toBe(400)

    expect(await response.json()).toEqual(expect.objectContaining({
        error: 'Missing password'
    }))
    
})