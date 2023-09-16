const buttonSendText = document.querySelector(".buttonBirdText");
const buttonSend = document.querySelector(".buttonBird");
buttonSend.addEventListener("click", change);

function change() {
  if (buttonSend.classList.contains("actif")) {
    buttonSendText.innerHTML = "SEND";
  } else buttonSendText.innerHTML = "SENDING";
  buttonSend.classList.toggle("actif");
}







// ====================================


