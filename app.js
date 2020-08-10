"use strict";
// prettier-ignore
//Elements on Homepage for users to logMsgin
const btnLogin = document.getElementById("login");
const inpUsername = document.getElementById("username");
const inpPassword = document.getElementById("password");
//Elements on Addition App Page
const btnSum = document.getElementById("sum");
const firstNum = document.getElementById("first");
const secondNum = document.getElementById("second");
//Result Display
const spnResult = document.getElementById("result");
//Error  Message Dispaly
const divErrorMsg = document.getElementById("errorMessage");
let logMsg = "";
let errorMsg = "";
let currentURL = location.href;
let additionPage = "add-page.html";
let loginPage = "index.html";
let isLoginSuccessful = false;
function login(username, password) {
    window.open(additionPage, "_self");
}
function addTwoNumbers(firstNum, secondNum) {
    let sum = firstNum + secondNum;
    return sum;
}
if (btnLogin)
    btnLogin.addEventListener("click", () => {
        let txtUsername = inpUsername.value;
        let txtPassword = inpPassword.value;
        // prettier-ignore
        if (txtUsername === "username" && txtPassword === "password" && isLoginSuccessful === false) {
            isLoginSuccessful = true;
            login(txtUsername, txtPassword);
        }
        else {
            isLoginSuccessful = false;
            errorMsg = "Your Username or passwors is incorrect.";
        }
        divErrorMsg.textContent = errorMsg; //show error message on page
        console.log("-----------------------------------------------------------");
        logMsg = currentURL;
        console.log("URL: " + logMsg);
        console.log(btnLogin.type + SPACE + btnLogin.value + SPACE + "clicked");
        console.log("Username: " + txtUsername + ", Password: " + txtPassword);
        console.log("User-Login: " + isLoginSuccessful);
    });
// prettier-ignore
if (btnSum)
    btnSum.addEventListener("click", () => {
        spnResult.textContent = "";
        let txtFirstNum = firstNum.value;
        let txtSecondNum = secondNum.value;
        let isFirstEmpty = !firstNum || 0 === firstNum.value.length || isNaN(+firstNum.value);
        let isSecondEmpty = !secondNum || 0 === secondNum.value.length || isNaN(+secondNum.value);
        let txtResult = addTwoNumbers(+txtFirstNum, +txtSecondNum);
        if (txtResult === 0 || isNaN(txtResult)) {
            spnResult.textContent = " ";
            errorMsg = "No valid result to display";
            divErrorMsg.textContent = errorMsg;
        }
        else {
            spnResult.textContent = txtResult.toString();
            errorMsg = "";
            divErrorMsg.textContent = errorMsg;
        }
        if (isFirstEmpty) {
            spnResult.textContent = "";
            errorMsg = "Your First input is either wrong or missing.";
            divErrorMsg.textContent = errorMsg;
        }
        if (isSecondEmpty) {
            spnResult.textContent = "";
            errorMsg = "Your Second input is either wrong or missing.";
            divErrorMsg.textContent = errorMsg;
        }
        if (isFirstEmpty && isSecondEmpty) {
            errorMsg = "Both of the boxes are either wrong or missing.";
            divErrorMsg.textContent = errorMsg;
        }
        else {
            errorMsg = "";
        }
        console.log("-----------------------------------------------------------");
        logMsg = currentURL;
        console.log("URL: " + logMsg);
        console.log(btnSum.type + SPACE + btnSum.value + SPACE + "clicked");
        console.log("First number: " + txtFirstNum + ", Second number: " + txtSecondNum);
        console.log("First Empty: " + isFirstEmpty + ", Second Empty: " + isSecondEmpty);
    });
//Utility
const SPACE = " ";
const COMMA = ",";
