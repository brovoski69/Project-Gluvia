document.addEventListener("DOMContentLoaded", function () {
  const loginBtn = document.getElementById("loginBtn");
  const loginMessage = document.getElementById("loginMessage");

  loginBtn.addEventListener("click", function () {
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();

    if (username === "root" && password === "12345") {
      loginMessage.style.color = "green";
      loginMessage.textContent = "Login successful! Redirecting...";
      setTimeout(() => {
        window.location.href = "dashboard.html";
      }, 1500);
    } else {
      loginMessage.style.color = "red";
      loginMessage.textContent = "Invalid username or password";
    }
  });
});
