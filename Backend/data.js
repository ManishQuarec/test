const puppeteer = require('puppeteer');

 async function generateHtmlWithMetaTags(url, title, description, image) {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(url);

  // Set the dynamic meta tags
  await page.evaluate((title, description, image) => {
    document.querySelector('meta[property="og:title"]').setAttribute('content', title);
    document.querySelector('meta[property="og:description"]').setAttribute('content', description);
    document.querySelector('meta[property="og:image"]').setAttribute('content', image);
  }, title, description, image);

  // Get the modified HTML of the page
  const html = await page.content();

  await browser.close();

  return html;
}

