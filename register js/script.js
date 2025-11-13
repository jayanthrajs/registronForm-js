function validatePasswords() { 
  const pwd = document.getElementById("password").value; 
  const confirmPwd = document.getElementById("confirmPassword").value; 
 
  if (pwd !== confirmPwd) { 
    alert("Passwords do not match!"); 
    return false; 
  } 
 
  document.getElementById("successMessage").innerText = "Sign-up successful!";
  return false;}