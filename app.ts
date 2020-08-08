//Elements on Homepage for users to logMsgin
const btnLogin = document.getElementById("login")! as HTMLButtonElement;
const username = document.getElementById("username")! as HTMLInputElement;
const password = document.getElementById("password") as HTMLInputElement;

//Elements on Addition App Page
const btnSum = document.getElementById("sum")! as HTMLButtonElement;
const firstNum = document.getElementById("first")! as HTMLInputElement;
const secondNum = document.getElementById("second") as HTMLInputElement;

var logMsg: string = "";
var url = location.href;
function login(username: string, password: string): void {
  if (username === "username" && password === "password") {
    logMsg = "Successful!!!";
    window.open("add-page.html", "_self");
  } else {
    logMsg = "Unsuccessful. Check your username or password";
  }
}

//manual validation
function sum(firstNum: number, secondNum: number): number {
  let isFirstEmpty = !firstNum || 0 === firstNum.toString.length;
  logMsg = "isFirstEmpty:" + isFirstEmpty.toString();
  console.log("Empty Field?: " + logMsg);
  let isSecondEmpty = !secondNum || 0 === secondNum.toString.length;
  logMsg = "isSecondEmpty:" + isSecondEmpty.toString();
  console.log("Empty Field?: " + logMsg);
  if (
    typeof firstNum !== "number" ||
    (typeof secondNum !== "number" && (isFirstEmpty || isSecondEmpty))
  ) {
    throw new Error(
      "Incorrect/invalid input was passed!. Please check and try again."
    );
  }
  return firstNum + secondNum;
}

if (btnLogin)
  btnLogin.addEventListener("click", function (): void {
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
  btnSum.addEventListener("click", function (): void {
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
const SPACE: string = " ";
const COMMA: string = ",";
