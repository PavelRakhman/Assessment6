const { Builder, Browser, By, until } = require("selenium-webdriver");

let driver;

beforeEach(async () => {
  driver = await new Builder().forBrowser("firefox").build();
});

afterEach(async () => {
  await driver.quit();
});

describe("Duel Duo tests", () => {
  test("page loads with title", async () => {
    await driver.get("http://localhost:8000");
    await driver.wait(until.titleIs("Duel Duo"), 1000);
  });
  
  test("The div choices appears when the user clicks the draw-button", async ()=>{
  await driver.get("http://localhost:8000")
  await driver.findElement(By.id("draw")).click()
  await driver.wait(until.elementLocated(By.id("choices")), 1000)
  })

  test("The div with the id of player-duo appears when the user clicks the Add-to Duo Button", async()=>{
    await driver.get("http://localhost:8000")
    await driver.findElement(By.id("draw")).click()
  await driver.wait(until.elementLocated(By.id("choices")), 1000)
    await driver.findElement(By.xpath('/html/body/section[1]/div/div[1]/button')).click()
    await driver.wait(until.elementLocated(By.id("player-duo")), 1000)
  })

  test("Clicking the remove-from-duo button removes the bot from the player-du0", async ()=>{
    await driver.get("http://localhost:8000")
    await driver.findElement(By.id("draw")).click()
  await driver.wait(until.elementLocated(By.id("choices")), 1000)
    await driver.findElement(By.xpath('/html/body/section[1]/div/div[1]/button')).click()
    await driver.wait(until.elementLocated(By.id("player-duo")), 1000)
    await driver.findElement(By.xpath('/html/body/section[2]/section[1]/div/div/button')).click()
  })
});