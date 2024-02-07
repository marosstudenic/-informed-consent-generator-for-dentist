"use node";

import { action } from "./_generated/server";
import puppeteer from 'puppeteer';


export const doSomething = action({
    args: {},
    handler: async () => {
        const browser = await puppeteer.launch();
        const page = await browser.newPage();

        await page.setContent('<h1>Hello, Puppeteer!</h1>');

        const file = await page.pdf({ path: 'example.pdf', format: 'A4' });

        await browser.close();
        console.log('Heres your PDF!.')

        // do something with SomeNpmPackage
    },
});