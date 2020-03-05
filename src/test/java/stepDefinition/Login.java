package stepDefinition;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import dataProvider.LoginCredentials;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.Assert;

import java.util.concurrent.TimeUnit;

public class Login {
WebDriver driver;
LoginCredentials loginCredentials = new LoginCredentials();

    @Before
    public void setUp(){
        System.setProperty("webdriver.chrome.driver","C:\\Users\\marya\\IdeaProjects\\CucumberPractice\\src\\test\\java\\Resources\\chromedriver_win32 (3)\\chromedriver_win32 (4)\\chromedriver.exe");
        this.driver = new ChromeDriver();
        this.driver.manage().window().maximize();
        this.driver.manage().timeouts().pageLoadTimeout(20, TimeUnit.SECONDS);
    }

    @After
    public void tearDown(){
        this.driver.manage().deleteAllCookies();
        this.driver.quit();
        this.driver = null;
    }
    @Given("^User navigates to stackoverflow website$")
    public void user_Navigates_To_Stackoverflow_Website() {
        driver.get(loginCredentials.getdbAddress());

    }

    @And("^User clicks on the login button on homepage$")
    public void user_clicks_on_the_login_button_on_homepage() throws InterruptedException {
        Thread.sleep(2000);
        driver.findElement(By.partialLinkText("Log in")).click();
    }


    @And("^User enters valid username$")
    public void user_enters_valid_username() {

        WebElement email = driver.findElement(By.id("email"));
        email.clear();
        email.sendKeys(loginCredentials.username());

    }

    @And("^User enters valid password$")
    public void user_enters_valid_password() {
        WebElement password = driver.findElement(By.id("password"));
        password.clear();
        password.sendKeys(loginCredentials.password());

    }

    @When("^User clicks on the login button$")
    public void user_clicks_on_the_login_button() {
        driver.findElement(By.id("submit-button")).click();

    }

    @Then("^the user should be taken to the successful login page$")
    public void the_user_should_be_taken_to_the_successful_login_page() throws InterruptedException {
        Thread.sleep(3000);
        WebElement askQuestion = driver.findElement(By.partialLinkText("Ask Question"));
        Assert.assertTrue(askQuestion.isDisplayed());

    }


}
