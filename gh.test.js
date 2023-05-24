let page;

beforeEach(async () => {
  page = await browser.newPage();
});

afterEach(() => {
  page.close();
});

describe("Github page tests", () => {
beforeEach(async () => {
  page = await browser.newPage();
  await page.goto("https://github.com/team");
});

  test("The h1 header content'", async () => {
    const firstLink = await page.$("header div div a");
    await firstLink.click();
    await page.waitForTimeout (10000);
    await page.waitForSelector('h1');
    const title2 = await page.title();
    expect(title2).toEqual("GitHub: Let’s build from here · GitHub");
  }, 30000);

  test("The first link attribute", async () => {
    const actual = await page.$eval("a", link => link.getAttribute('href') );
    expect(actual).toEqual("#start-of-content");
  }, 30000);

  test("The page contains Sign in button", async () => {
    const btnSelector = ".btn-large-mktg.btn-mktg";
    await page.waitForSelector(btnSelector, {
      visible: true,
    });
    const actual = await page.$eval(btnSelector, link => link.textContent);
    expect(actual).toContain("Get started with Team")
  }, 30000);
});

describe("Github page tests new", () => {
    beforeEach (async () => {
      page = await browser.newPage();
      await page.goto("https://github.com");
    }, 50000);
    
    
    test("The h1 header content new'", async () => { 
      const firstLink = await page.$("header div div a");
      await firstLink.click();
      await page.waitForTimeout(10000);
      const title2 = await page.title();
      expect(title2).toEqual('GitHub: Let’s build from here · GitHub');    
    }, 30000);
  
    test("The first link attribute new", async () => {
      const actual = await page.$eval("a", link => link.getAttribute('href') );    
      expect(actual).toEqual("#start-of-content");
    }, 30000);
  
    test("The page contains Sign in button new", async () => {
      const btnSelector = ".btn-muted-mktg.btn-mktg";
      await page.waitForSelector(btnSelector, {
        visible: true,
      });    
      const actual = await page.$eval(btnSelector, link => link.textContent);    
      expect(actual).toContain("Start a free enterprise trial")
    }, 30000); 
  });
