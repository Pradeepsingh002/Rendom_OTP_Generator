let form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let otp = Math.floor(Math.random() * 234567);
  if (100000 <= otp) {
    window.alert(`Your OTP : ${otp}`);
  } else {
    otp += 99999;
    window.alert(`Your OTP : ${otp}`);
  }
  form.reset();
});
