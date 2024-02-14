// const validateForm = (event) => {
//   event.preventDefault();

//   const signUpButton = document.querySelector('button[type="submit"]');
//   signUpButton.disabled = true;
//   signUpButton.textContent = "Loading...";

//   const fullName = document.getElementById("fullName").value;
//   const email = document.getElementById("email").value;
//   const password = document.getElementById("password").value;
//   const zipCode = document.getElementById("zipCode").value;

//   console.log(isValidFullName(fullName));
//   console.log(isValidEmail(email));
//   console.log(isValidPassword(password));
//   console.log(isValidZipcode(zipCode));

//   if (!isValidFullName(fullName)) {
//     displayModal("Invalid Full Name. Full Name cannot be empty.", true);
//     resetSignUpButton();
//     return;
//   }

//   if (!isValidEmail(email)) {
//     displayModal("Invalid Email. Please enter a valid email address.", true);
//     resetSignUpButton();
//     return;
//   }

//   const passwordValidation = isValidPassword(password);
//   if (!passwordValidation.isValid) {
//     displayModal(`Invalid Password. ${passwordValidation.message}`, true);
//     resetSignUpButton();
//     return;
//   }

//   if (!isValidZipcode(zipCode)) {
//     displayModal("Invalid Zip Code. It should be a 5-digit number.", true);
//     resetSignUpButton();
//     return;
//   }

//   if (!fullName || !email || !password || !zipCode) {
//     displayModal("Please fill in all fields.", true);
//     resetSignUpButton();
//     return;
//   }

//   const formData = {
//     fullName: fullName,
//     email: email,
//     password: password,
//     zipCode: zipCode,
//   };

  
//   axios.post("https://equity-application.onrender.com/Registration", formData)
//     .then((response) => {
//       console.log(response.data)
//       displayModal("Registration successful!");
//       document.getElementById("fullName").value = "";
//       document.getElementById("email").value = "";
//       document.getElementById("password").value = "";
//       document.getElementById("zipCode").value = "";
//       window.location.href = "../index.html";
//     })
//     .catch((error) => {
//       console.error("Error:", error);
//       displayModal("Registration failed. Please try again.", true);

//       document.getElementById("fullName").value = "";
//       document.getElementById("email").value = "";
//       document.getElementById("password").value = "";
//       document.getElementById("zipCode").value = "";
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

// const isValidFullName = (fullName) => {
//   const fullNameRegex = /^[a-zA-Z\s]{3,}$/;
//   return fullNameRegex.test(fullName);
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

// const isValidZipcode = (zipcode) => {
//   const trimmedZipcode = zipcode.trim();
//   console.log("Zipcode:", trimmedZipcode);
//   const zipcodeRegex = /^\d{5}$/;
//   const isValid = zipcodeRegex.test(trimmedZipcode);
//   console.log("Is Zipcode Valid:", isValid);
//   return isValid;
// }

// const displayModal = (message, isError = false) => {
//   const modal = document.getElementById("myModal");
//   const modalMessage = document.getElementById("modalMessage");

//   modal.style.display = "block";
//   modalMessage.textContent = message;
// }

// const closeModal = () => {
//   const modal = document.getElementById("myModal");
//   modal.style.display = "none";
// }
