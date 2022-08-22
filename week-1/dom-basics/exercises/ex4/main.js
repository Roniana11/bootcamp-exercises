const nameInput = document.getElementById("name");
const salaryInput = document.getElementById("salary");
const birthdayInput = document.getElementById("birthday");
const phoneInput = document.getElementById("phone");
const validationMessage = document.getElementById("validation-message");
const submitBtn = document.getElementById("submit-btn");



const showWelcome = (name) =>{
  const container = document.getElementById("container");
  const form = document.getElementById("form");
  form.style.display ='none';
  const welcome = document.createElement('div');
  welcome.innerHTML = `<h1>WELCOME ${name}</h1>`;
  container.appendChild(welcome);
}

const validateForm = () => {
  const nameValue = nameInput.value;
  const salaryValue = parseInt(salaryInput.value)||0;
 
  const birthdayValue = birthdayInput.value;
  const phoneValue = phoneInput.value;
  console.log(phoneValue);
  let errormessage;

  const nameError = nameValue.length < 3;
  const salaryError =  salaryValue < 10000 || salaryValue > 16000;
  const birthdayError = !birthdayValue;
  const phoneError = phoneValue.length !== 10;

  if(nameError){
    errormessage ='name must be longer than two charachters';
  }else if(salaryError){
    errormessage ='salary must be between 10,000 to 16,000';
  }else if(birthdayError){
    errormessage='birthday is required!';
  }else if(phoneError){
    errormessage = 'Phone number must be 10 digits long';
  }else{
    errormessage ='';
  }

  validationMessage.innerHTML = errormessage;
  if(!errormessage){
    showWelcome(nameValue.toUpperCase());
  }
};

submitBtn.addEventListener("click", validateForm);
