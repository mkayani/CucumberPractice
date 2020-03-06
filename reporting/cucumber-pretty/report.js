$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("login.feature");
formatter.feature({
  "line": 1,
  "name": "Login into account",
  "description": "Exisiting stackoverflow user should be able to log into account\r\nusing correct credentials.",
  "id": "login-into-account",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 5,
  "name": "Log into account with correct details",
  "description": "",
  "id": "login-into-account;log-into-account-with-correct-details",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 6,
  "name": "User navigates to stackoverflow website",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "User clicks on the login button on homepage",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "User enters valid username",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User enters valid password",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "User clicks on the login button",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "the user should be taken to the successful login page",
  "keyword": "Then "
});
formatter.match({
  "location": "Login.user_Navigates_To_Stackoverflow_Website()"
});
formatter.result({
  "duration": 358340500,
  "error_message": "java.lang.NullPointerException\r\n\tat stepDefinition.Login.user_Navigates_To_Stackoverflow_Website(Login.java:44)\r\n\tat ✽.Given User navigates to stackoverflow website(login.feature:6)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "Login.user_clicks_on_the_login_button_on_homepage()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Login.user_enters_valid_username()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Login.user_enters_valid_password()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Login.user_clicks_on_the_login_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Login.the_user_should_be_taken_to_the_successful_login_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 160100,
  "error_message": "java.lang.NullPointerException\r\n\tat stepDefinition.Login.tearDown(Login.java:38)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\r\n\tat cucumber.runtime.Runtime.runAfterHooks(Runtime.java:206)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:46)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:137)\r\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:68)\r\n\tat com.intellij.rt.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:33)\r\n\tat com.intellij.rt.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:230)\r\n\tat com.intellij.rt.junit.JUnitStarter.main(JUnitStarter.java:58)\r\n",
  "status": "failed"
});
});