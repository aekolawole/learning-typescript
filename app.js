"use strict";
//Elements on Homepage for users to logMsgin
const btnLogin = document.getElementById("login");
const username = document.getElementById("username");
const password = document.getElementById("password");
//Elements on Addition App Page
const btnSum = document.getElementById("sum");
const firstNum = document.getElementById("first");
const secondNum = document.getElementById("second");
var logMsg = "";
var url = location.href;
function login(username, password) {
    if (username === "username" && password === "password") {
        logMsg = "Successful!!!";
        window.open("add-page.html", "_self");
    }
    else {
        logMsg = "Unsuccessful. Check your username or password";
    }
}
//manual validation
function sum(firstNum, secondNum) {
    let isFirstEmpty = !firstNum || 0 === firstNum.toString.length;
    logMsg = "isFirstEmpty:" + isFirstEmpty.toString();
    console.log("Empty Field?: " + logMsg);
    let isSecondEmpty = !secondNum || 0 === secondNum.toString.length;
    logMsg = "isSecondEmpty:" + isSecondEmpty.toString();
    console.log("Empty Field?: " + logMsg);
    if (typeof firstNum !== "number" ||
        (typeof secondNum !== "number" && (isFirstEmpty || isSecondEmpty))) {
        throw new Error("Incorrect/invalid input was passed!. Please check and try again.");
    }
    return firstNum + secondNum;
}
if (btnLogin)
    btnLogin.addEventListener("click", function () {
        console.log("-----------------------------------------------------------");
        logMsg = url;
        console.log("URL: " + logMsg);
        console.log(btnLogin.type + SPACE + btnLogin.value + SPACE + "clicked");
        let txtUsername = username.value;
        let txtPassword = password.value;
        console.log("Username: " + txtUsername);
        console.log("Password: " + txtPassword);
        login(txtUsername, txtPassword);
        logMsg = "";
        console.log(logMsg);
    });
if (btnSum)
    btnSum.addEventListener("click", function () {
        console.log("-----------------------------------------------------------");
        logMsg = url;
        console.log("URL: " + logMsg);
        console.log(btnSum.type + SPACE + btnSum.value + SPACE + "clicked");
        let txtFirstNum = +firstNum.value;
        let txtSecondNum = +secondNum.value;
        console.log("First Num: " + txtFirstNum);
        console.log("Second Num: " + txtSecondNum);
        logMsg = sum(txtFirstNum, txtSecondNum).toString();
        console.log("Sum: " + logMsg);
    });
//Utility
const SPACE = " ";
const COMMA = ",";
