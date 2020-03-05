$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("login.feature");
formatter.feature({
  "line": 1,
  "name": "Login into account",
  "description": "Exisiting stackoverflow user should be able to log into account\r\nusing correct credentials.",
  "id": "login-into-account",
  "keyword": "Feature"
});
formatter.before({
  "duration": 10929706600,
  "status": "passed"
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
  "duration": 1991173900,
  "status": "passed"
});
formatter.match({
  "location": "Login.user_clicks_on_the_login_button_on_homepage()"
});
formatter.result({
  "duration": 2676482600,
  "status": "passed"
});
formatter.match({
  "location": "Login.user_enters_valid_username()"
});
formatter.result({
  "duration": 209757200,
  "status": "passed"
});
formatter.match({
  "location": "Login.user_enters_valid_password()"
});
formatter.result({
  "duration": 125429900,
  "status": "passed"
});
formatter.match({
  "location": "Login.user_clicks_on_the_login_button()"
});
formatter.result({
  "duration": 73935700,
  "status": "passed"
});
formatter.match({
  "location": "Login.the_user_should_be_taken_to_the_successful_login_page()"
});
formatter.result({
  "duration": 3200875600,
  "status": "passed"
});
formatter.after({
  "duration": 1019265200,
  "status": "passed"
});
});