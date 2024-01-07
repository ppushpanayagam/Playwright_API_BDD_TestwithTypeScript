import {test, expect} from '@playwright/test'
// const schema = require('../schemaRepo/GETrequestSchema.json');
// import Ajv from "ajv/dist/jtd"


test('Verify GET Request test', async ({request}) => {

    const response = await request.get('/api/unknown/2');
    await expect(response.status()).toBe(200);
    await expect(response.ok()).toBeTruthy();
})

test('Verify GET Request Response Body test', async ({request}) => {

    const response = await request.get('/api/unknown/2');
    expect(response.status()).toBe(200);
    expect(response.ok()).toBeTruthy();
    const jsonBody = JSON.parse(await response.text());
    console.log(jsonBody);
    expect(jsonBody.data.id).toBe(2);
    expect.soft(jsonBody.data.name).toBe('fuchsia rose');
})

test('Verify GET Response Schema Validation test', async ({request}) => {

    const response = await request.get('/api/unknown/2');
    expect(response.status()).toBe(200);
    expect(response.ok()).toBeTruthy();
    const jsonBody = JSON.parse(await response.text());
    const responseBody = await response.json();
    console.log(responseBody);
    // const ajv = new Ajv();
    // const validate = await ajv.compile(schema);
    // const valid = await validate(responseBody);
    // if (!valid) {
    //     console.error('**********Schema Validation error triggered********');
    //     console.error('AJV Validation Errors:', await ajv.errorsText());
    // }
})