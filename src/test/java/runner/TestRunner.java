package runner;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(
        features = "src/test/java/feature"
        ,glue="stepDefinition"
        ,plugin = {"pretty",
                   "json:reporting/cucumber.json",
                   "html:reporting/cucumber-pretty",
                   "junit:reporting/junit_xml/cucumber.xml",
                   "com.cucumber.listener.ExtentCucumberFormatter:output/report.html"
        })

public class TestRunner {


}
