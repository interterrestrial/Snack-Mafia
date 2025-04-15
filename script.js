let generatedOTP = null;

// Generate 6-digit OTP
function generateOTP() {
  return Math.floor(100000 + Math.random() * 900000);
}

// ---------- Sign Up ----------
function sendSignupOTP() {
  const name = document.getElementById("signup-name").value;
  const email = document.getElementById("signup-email").value;
  const phone = document.getElementById("signup-phone").value;

  if (!name || !email || !phone) {
    alert("Please fill all fields");
    return;
  }

  generatedOTP = generateOTP();
  alert("Your OTP is: " + generatedOTP); // Simulated OTP delivery
  document.getElementById("signup-otp-section").style.display = "block";
}

function verifySignupOTP() {
  const enteredOTP = document.getElementById("signup-otp").value;
  if (enteredOTP == generatedOTP) {
    alert("Sign Up Successful!");
    window.location.href = "index.html";
  } else {
    alert("Invalid OTP");
  }
}

// ---------- Login ----------
function sendLoginOTP() {
  const phone = document.getElementById("login-phone").value;

  if (!phone) {
    alert("Enter your phone number");
    return;
  }

  generatedOTP = generateOTP();
  alert("Your OTP is: " + generatedOTP); // Simulated OTP delivery
  document.getElementById("login-otp-section").style.display = "block";
}

function verifyLoginOTP() {
  const enteredOTP = document.getElementById("login-otp").value;
  if (enteredOTP == generatedOTP) {
    alert("Login Successful!");
    // Redirect to dashboard or home page
  } else {
    alert("Invalid OTP");
  }
}
