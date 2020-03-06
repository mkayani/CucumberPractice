package stepDefinition;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import dataProvider.LoginCredentials;
import objects.LoginObjects;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.PageFactory;
import org.testng.Assert;
import org.testng.annotations.BeforeMethod;

import java.util.concurrent.TimeUnit;

public class Login extends LoginObjects {



    public static WebDriver driver;
    public static LoginCredentials loginCredentials = new LoginCredentials();


    LoginObjects objOfLogin = PageFactory.initElements(driver, LoginObjects.class);




    @Before
    public void setUp(){
        System.setProperty("webdriver.chrome.driver","C:\\Users\\marya\\IdeaProjects\\CucumberPractice\\src\\test\\java\\Resources\\chromedriver_win32 (3)\\chromedriver_win32 (4)\\chromedriver.exe");
        driver = new ChromeDriver();
        driver.manage().window().maximize();
        driver.manage().timeouts().pageLoadTimeout(20, TimeUnit.SECONDS);
    }


    @After
    public void tearDown(){
        driver.manage().deleteAllCookies();
        driver.quit();
        driver = null;
    }
    @Given("^User navigates to stackoverflow website$")
    public void user_Navigates_To_Stackoverflow_Website() {
        driver.get(loginCredentials.getdbAddress());

    }

    @And("^User clicks on the login button on homepage$")
    public void user_clicks_on_the_login_button_on_homepage() throws InterruptedException {
        Thread.sleep(5000);
       objOfLogin.loginButton();
    }


    @And("^User enters valid username$")
    public void user_enters_valid_username() {
        objOfLogin.emailSearchBox();

    }

    @And("^User enters valid password$")
    public void user_enters_valid_password() {
        objOfLogin.passwordSearchBox();
    }

    @When("^User clicks on the login button$")
    public void user_clicks_on_the_login_button() {
        driver.findElement(By.id("submit-button")).click();

    }

    @Then("^the user should be taken to the successful login page$")
    public void the_user_should_be_taken_to_the_successful_login_page() throws InterruptedException {
        Thread.sleep(5000);
        WebElement askQuestion = driver.findElement(By.partialLinkText("Ask Question"));
        Assert.assertTrue(askQuestion.isDisplayed());

    }


}
