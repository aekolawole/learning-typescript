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
        // spnResult.textContent = "";
        let txtFirstNum = firstNum.value;
        let txtSecondNum = secondNum.value;
        let isFirstEmpty = !firstNum || 0 === firstNum.value.length;
        let isSecondEmpty = !secondNum || 0 === secondNum.value.length;
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
// let logMsg: string = "";
// let currentURL: string = location.href;
// let loginPageUrl: string = "add-page.html";
// let isLoginSuccessful: boolean = false;
// function login(username: string, password: string): void {
//   if (username === "username" && password === "password") {
//     logMsg = "Successful!!!";
//     isLoginSuccessful = true;
//     window.open(loginPageUrl, "_self");
//     console.log(logMsg);
//   } else {
//     logMsg = "Unsuccessful. Check your username or password";
//     isLoginSuccessful = false;
//     console.log(logMsg);
//   }
// }
// //manual validation
// function sum(firstNum: number, secondNum: number): number {
//   let isFirstEmpty = !firstNum || 0 === firstNum.toString.length;
//   logMsg = "isFirstEmpty:" + isFirstEmpty.toString();
//   console.log("Empty Field?: " + logMsg);
//   let isSecondEmpty = !secondNum || 0 === secondNum.toString.length;
//   logMsg = "isSecondEmpty:" + isSecondEmpty.toString();
//   console.log("Empty Field?: " + logMsg);
//   if (
//     typeof firstNum !== "number" ||
//     (typeof secondNum !== "number" && (isFirstEmpty || isSecondEmpty))
//   ) {
//     throw new Error(
//       "Incorrect/invalid input was passed!. Please check and try again."
//     );
//   }
//   return firstNum + secondNum;
// }
// if (btnLogin)
//   btnLogin.addEventListener("click", function (): void {
//     console.log("-----------------------------------------------------------");
//     logMsg = currentURL;
//     console.log("URL: " + logMsg);
//     console.log(btnLogin.type + SPACE + btnLogin.value + SPACE + "clicked");
//     let txtUsername = username.value;
//     let txtPassword = password.value;
//     console.log("Username: " + txtUsername);
//     console.log("Password: " + txtPassword);
//     login(txtUsername, txtPassword);
//     logMsg = "";
//     console.log(logMsg);
//   });
// if (btnSum)
//   btnSum.addEventListener("click", function (): void {
//     console.log("-----------------------------------------------------------");
//     logMsg = currentURL;
//     console.log("URL: " + logMsg);
//     console.log(btnSum.type + SPACE + btnSum.value + SPACE + "clicked");
//     let txtFirstNum = +firstNum.value;
//     let txtSecondNum = +secondNum.value;
//     console.log("First Num: " + txtFirstNum);
//     console.log("Second Num: " + txtSecondNum);
//     logMsg = sum(txtFirstNum, txtSecondNum).toString();
//     console.log("Sum: " + logMsg);
//   });
//Utility
const SPACE = " ";
const COMMA = ",";
