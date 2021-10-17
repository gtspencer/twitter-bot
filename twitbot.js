const puppeteer = require('puppeteer');
const username = 'avgcryptodude'
const password = 'spencer17'

let browser = null;
let page = null;

(async () => {
    browser = await puppeteer.launch({ headless: false });
        
    page = await browser.newPage();
    page.setViewport({
        width: 1280,
        height: 800,
        isMobile: false
    });

    // await page.goto('https://twitter.com/login', {waitUntil: 'networkidle2'});

    // //LOGIN
    // await page.type('input[name="session[username_or_email]"]',username,{delay: 25});
	// await page.type('input[name="session[password]"]',password,{delay: 25});
    // await page.click('div[data-testid="LoginForm_Login_Button"]');

    await page.goto('https://twitter.com/spencerobsitnik')
    await page.waitFor(2000)
    // //SEARCH TERM
    // await page.waitFor('input[data-testid="SearchBox_Search_Input"]');
    // await page.type('input[data-testid="SearchBox_Search_Input"]', '#tesla', {delay:25});
    // await page.keyboard.press('Enter');
    // await page.waitFor(2000)

    const results = await page.$$eval('article div[lang]', (tweets) => tweets.map((tweet) => tweet.textContent));
    console.log(results);

    await page.waitForSelector('#react-root > div > div > div > main > div > div > div > div.css-1dbjc4n.r-14lw9ot.r-1tlfku8.r-1ljd8xs.r-13l2t4g.r-1phboty.r-1jgb5lz.r-11wrixw.r-61z16t.r-1ye8kvj.r-13qz1uu.r-184en5c > div > div.css-1dbjc4n.r-14lw9ot.r-184en5c > div.css-1dbjc4n.r-156q2ks > div:nth-child(1) > div > div > div.css-1dbjc4n.r-1iusvr4.r-16y2uox.r-15d164r.r-5f2r5o.r-1bylmt5.r-13tjlyg.r-7qyjyx.r-1ftll1t > div:nth-child(2) > div > div > div:nth-child(2) > div.css-18t94o4.css-1dbjc4n.r-urgr8i.r-42olwf.r-sdzlij.r-1phboty.r-rs99b7.r-1w2pmg.r-1n0xq6e.r-1vuscfd.r-1dhvaqw.r-1fneopy.r-o7ynqc.r-6416eg.r-lrvibr')[0];
    await page.click('#react-root > div > div > div > main > div > div > div > div.css-1dbjc4n.r-14lw9ot.r-1tlfku8.r-1ljd8xs.r-13l2t4g.r-1phboty.r-1jgb5lz.r-11wrixw.r-61z16t.r-1ye8kvj.r-13qz1uu.r-184en5c > div > div.css-1dbjc4n.r-14lw9ot.r-184en5c > div.css-1dbjc4n.r-156q2ks > div:nth-child(1) > div > div > div.css-1dbjc4n.r-1iusvr4.r-16y2uox.r-15d164r.r-5f2r5o.r-1bylmt5.r-13tjlyg.r-7qyjyx.r-1ftll1t > div:nth-child(2) > div > div > div:nth-child(2) > div.css-18t94o4.css-1dbjc4n.r-urgr8i.r-42olwf.r-sdzlij.r-1phboty.r-rs99b7.r-1w2pmg.r-1n0xq6e.r-1vuscfd.r-1dhvaqw.r-1fneopy.r-o7ynqc.r-6416eg.r-lrvibr')[0];
    // await page.waitFor(2000)
    // await page.waitForSelector('div[name="0 Replies. Reply"]');
    // await page.click('div[name="css-901oao r-1awozwy r-9ilb82 r-6koalj r-37j5jr r-a023e6 r-16dba41 r-1h0z5md r-rjixqe r-bcqeeo r-o7ynqc r-clp7b1 r-3s2u2q r-qvutc0"]');
    // browser.close();

    //SCROLL DOWN + GET AUTHORS 
    // let authorsSet = new Set()
    // try {
    //     let previousHeight;
    //     for (let i = 0; i < 10; i++) {
    //         const elementHandles = await page.$$('a.css-4rbku5.css-18t94o4.css-1dbjc4n.r-sdzlij.r-1loqt21.r-1adg3ll.r-ahm1il.r-1udh08x.r-o7ynqc.r-6416eg.r-13qz1uu');
    //         const propertyJsHandles = await Promise.all(
    //           elementHandles.map(handle => handle.getProperty('href'))
    //         );
    //         const urls = await Promise.all(
    //           propertyJsHandles.map(handle => handle.jsonValue())
    //         );

    //         urls.forEach(item => authorsSet.add(item))
    //         urls.forEach(item => console.log(item))
            
    //         previousHeight = await page.evaluate('document.body.scrollHeight');
    //         await page.evaluate('window.scrollTo(0, document.body.scrollHeight)');
    //         await page.waitForFunction(`document.body.scrollHeight > ${previousHeight}`);
    //         await page.waitFor(2000);
    //     }
    // } catch(e) {console.log(e); }

    // console.log("-----")
    // console.log(authorsSet);

    // // VISIT ALL AUTHORS AND CLICK FOLLOW BUTTON
    // const urls = Array.from(authorsSet)
    // for (let i = 0; i < urls.length; i++) {
    //   try {
    //     const url = urls[i];
    //     console.log(url);
    //     await page.goto(`${url}`);

    //     await page.waitFor(2000)
    //     await page.click('div[class="css-18t94o4 css-1dbjc4n r-1niwhzg r-p1n3y5 r-sdzlij r-1phboty r-rs99b7 r-1w2pmg r-1vuscfd r-1dhvaqw r-1fneopy r-o7ynqc r-6416eg r-lrvibr"]')
    //     await page.waitFor(2000)
    //     await page.goBack();
    //   }
    //   catch(error) {
    //     console.error(error);
    //   }
    //}
})();