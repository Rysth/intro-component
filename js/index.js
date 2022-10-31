const inputComponents = document.querySelectorAll(".input-text");
const labelContainer = document.querySelectorAll("label");

const emailAddress = document.querySelector("#email-address");
const submitButton = document.querySelector("#submit");

const displayInitial = "display-inherit";

window.onload = () => {
  inputComponents.forEach((element) => {
    element.addEventListener("change", () => {
      showErrorMessages(element);
    });
  });
};

submitButton.addEventListener("click", () => {
  inputComponents.forEach((element) => {
      showErrorMessages(element);
  });
});

showErrorMessages = (element) => {
  for (let index = 0; index < inputComponents.length; index++) {
    if (element === inputComponents[index] && element !== submitButton) {
      if (element.value === "") {
        inputComponents[index].classList.add("outline-red");
        labelContainer[index].children[1].classList.add(displayInitial);
        labelContainer[index].children[2].classList.add(displayInitial);
        if(element === emailAddress){
          element.classList.add("placeholder-red");
          element.placeholder = "email@example/com";
        }
      } else {
        if(element === emailAddress){
          element.classList.remove("placeholder-red");
          element.placeholder = "Email Address";
        }
        inputComponents[index].classList.remove("outline-red");
        labelContainer[index].children[1].classList.remove(displayInitial);
        labelContainer[index].children[2].classList.remove(displayInitial);
      }
    }
  }
};




