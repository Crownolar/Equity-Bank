// const loginValidateForm = (event) => {
//   event.preventDefault();

//   const signUpButton = document.querySelector('button[type="submit"]');
//   signUpButton.disabled = true;
//   signUpButton.textContent = "Loading...";

//   const email = document.getElementById("email").value;
//   const password = document.getElementById("password").value;

//   if (!isValidEmail(email)) {
//     displayModal("Invalid Email. Please enter a valid email address.", true);
//     resetSignUpButton();
//     return;
//   }

//   console.log(isValidEmail(email));

//   const passwordValidation = isValidPassword(password);
//   if (!passwordValidation.isValid) {
//     displayModal(`Invalid Password. ${passwordValidation.message}`, true);
//     resetSignUpButton();
//     return;
//   }

//   const formData = {
//     email: email,
//     password: password,
//   };

//   axios.post("https://equity-application.onrender.com/login", formData)
//     .then((response) => {
//       console.log(response.data);
//       displayModal("Login successful!");
//       document.getElementById("email").value = "";
//       document.getElementById("password").value = "";
//       window.location.href = "../index.html";
//     })
//     .catch((error) => {
//       console.error("Error:", error);
//       document.getElementById("email").value = "";
//       document.getElementById("password").value = "";
//       displayModal("Login failed. Please try again.", true);
//     })
//     .finally(() => {
//       resetSignUpButton();
//     });
// }

// const resetSignUpButton = () => {
//   const signUpButton = document.querySelector('button[type="submit"]');
//   signUpButton.disabled = false;
//   signUpButton.textContent = "Sign Up";
// }

// const isValidEmail = (email) => {
//   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//   return emailRegex.test(email);
// }

// const isValidPassword = (password) => {
//   const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}$/;
//   const isPasswordValid = passwordRegex.test(password);

//   if (!isPasswordValid) {
//     return {
//       isValid: false,
//       message:
//         "Password requirements: At least one lowercase letter, one uppercase letter, one digit, minimum length of 6 characters",
//     };
//   }

//   return {
//     isValid: true,
//     message: "Password is valid",
//   };
// }

// const displayModal = (message, isError = false) => {
//   const modal = document.getElementById("loginMyModal");
//   const modalMessage = document.getElementById("loginModalMessage");

//   modal.style.display = "block";
//   modalMessage.textContent = message;
// }


// const closeModal = () => {
//   const modal = document.getElementById("loginMyModal");
//   modal.style.display = "none";
// }
