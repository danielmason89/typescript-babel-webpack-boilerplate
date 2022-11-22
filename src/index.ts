import {formData} from "./form";

const form = document.querySelector("form")!;

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const data = formData(form);
  console.log(data);
});


// import { initializeApp } from "./firebase/app";

// const firebaseConfig = {
//   apiKey: "AIzaSyDy45yIGeqs89IW6T9VWEQa96hku_qfBpg",
//   authDomain: "fir-test-app-a338c.firebaseapp.com",
//   projectId: "fir-test-app-a338c",
//   storageBucket: "fir-test-app-a338c.appspot.com",
//   messagingSenderId: "542511881170",
//   appId: "1:542511881170:web:17546d743b1592ad29060b",
//   measurementId: "G-00FHGSL5ET",
// };

// initializeApp(firebaseConfig);
