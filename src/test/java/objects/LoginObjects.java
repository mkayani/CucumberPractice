package objects;

import dataProvider.LoginCredentials;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;


public class LoginObjects {


   // public static WebDriver driver;
    public static LoginCredentials loginCredentials = new LoginCredentials();


    @FindBy (partialLinkText = "Log in")
    private WebElement loginButton;

    @FindBy (id = "email")
    private WebElement emailSearchBox;

    @FindBy (id = "password")
    private WebElement passwordSearchBox;



    public void loginButton(){
        loginButton.click();
    }

    public void emailSearchBox(){
        emailSearchBox.clear();
        emailSearchBox.sendKeys(loginCredentials.username());
    }

    public void passwordSearchBox(){
        passwordSearchBox.clear();
        passwordSearchBox.sendKeys(loginCredentials.password());
    }


}
