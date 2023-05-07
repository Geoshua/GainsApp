// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-auth.js";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAhBFouJOfiTlkJa1l7leNbs62X5MzI_EI",
  authDomain: "gainsapp-a6b2b.firebaseapp.com",
  projectId: "gainsapp-a6b2b",
  storageBucket: "gainsapp-a6b2b.appspot.com",
  messagingSenderId: "494044941350",
  appId: "1:494044941350:web:62dea86174ef17b2cbeae7",
  measurementId: "G-BHRZ8ZVPD4"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

let signupBtn = document.getElementById("sign-up-button");
let signinBtn = document.getElementById("sign-in-button");
let nameField = document.getElementById("name-field");
let loginTitle = document.getElementById("login-title");

const signupSubmit = document.getElementById("sign-up-button");
signupSubmit.addEventListener('click',(e) =>{
	if(!signupSubmit.classList.contains("disable")){
		var name = document.getElementById("username").value;
		var email = document.getElementById("email").value;
		var password = document.getElementById("password").value;

		createUserWithEmailAndPassword(auth, email, password)
		.then((userCredential) => {
			// Signed in 
			const user = userCredential.user;
			// ...
			alert('user created successfully')
		})
		.catch((error) => {
			const errorCode = error.code;
			const errorMessage = error.message;
			// ..
			alert(errorMessage)
		});
	}
	else{
		nameField.style.maxHeight = "60px";
		loginTitle.innerHTML = "Sign Up";
		signinBtn.classList.add("disable");
		signupBtn.classList.remove("disable");
	}

});

const signinSubmit = document.getElementById("sign-in-button");
signinSubmit.addEventListener('click',(e)=>{
	if(!signinSubmit.classList.contains("disable")){
		var email = document.getElementById("email").value;
		var password = document.getElementById("password").value;

		signInWithEmailAndPassword(auth, email, password)
		.then((userCredential) => {
			// Signed in 
			const user = userCredential.user;
			// ...
			alert('signed in successfully')
		})
		.catch((error) => {
			const errorCode = error.code;
			const errorMessage = error.message;
			alert(errorMessage);
		});
	}
	else{
		nameField.style.maxHeight = "0";
		loginTitle.innerHTML = "Sign In";
		signupBtn.classList.add("disable");
		signinBtn.classList.remove("disable");
	}
})

