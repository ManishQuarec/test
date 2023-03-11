const express = require('express');
// const generateHtmlWithMetaTags = require('./data');

const app = express();
const puppeteer = require('puppeteer');
const cors = require("cors");

app.use(cors());



// async function main() {
//     const url = 'https://example.com/my-page';
//     const title = 'My Dynamic Title';
//     const description = 'My Dynamic Description';
//     const image = 'https://example.com/my-image.jpg';

//     const html = await generateHtmlWithMetaTags(url, title, description, image);

//     // Do something with the generated HTML
// }





// app.get('/ntr', async (req, res) => {
//     const url = 'https://example.com/my-page';
//     const title = 'My Dynamic Title';
//     const description = 'My Dynamic Description';
//     const image = 'https://example.com/my-image.jpg';

//     const html = await generateHtmlWithMetaTags(url, title, description, image);

//     res.send(html);
// });

app.get('/ntr2', async (req, res) => {
    const url = 'http://localhost:3000/';
    const title = 'My DynamicM Title';
    const description = 'My DynamicM Description';
    const image = 'www.secret17.com';

    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url);
  
    // Set the dynamic meta tags
    await page.evaluate((title, description, image) => {
        document.querySelector('meta[name="image"]').setAttribute('content', image);
      document.querySelector('meta[property="og:title"]').setAttribute('content', title);
      document.querySelector('meta[property="og:description"]').setAttribute('content', description);
      document.querySelector('meta[property="og:image"]').setAttribute('content', image);
    }, title, description, image);
  
    // Get the modified HTML of the page
    const html = await page.content();
  
    await browser.close();
//   console.log("data");
    // return html;
    res.type('.html').send(html);


    
});

app.listen(5000, () => {
    console.log('Server listening on port 5000');
});