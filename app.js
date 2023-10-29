const passwordDisplay = document.getElementById("password");
const generateButton = document.querySelector("button");
const clipboardIcon = document.querySelector("img[src='clipboard-fill.png']");

function createPassword() {
  const passwordLength = 12;
  const characterList =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()-_=+[]{}|;:,.<>?";
  let password = "";
  for (let i = 0; i < passwordLength; i++) {
    password += characterList.charAt(
      Math.floor(Math.random() * characterList.length)
    );
  }
  passwordDisplay.value = password;
}

function copyPassword() {
  passwordDisplay.select();
  document.execCommand("copy");
}

generateButton.addEventListener("click", createPassword);
clipboardIcon.addEventListener("click", copyPassword);
