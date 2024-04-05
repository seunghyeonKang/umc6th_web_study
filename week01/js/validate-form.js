document
  .getElementById("signup-form")
  .addEventListener("submit", function (event) {
    var name = document.getElementById("name").value.trim();
    var email = document.getElementById("email").value.trim();
    var age = document.getElementById("age").value.trim();
    var password = document.getElementById("password").value.trim();
    var confirmPassword = document
      .getElementById("confirm-password")
      .value.trim();

    var nameError = document.getElementById("name-error");
    var emailError = document.getElementById("email-error");
    var ageError = document.getElementById("age-error");
    var passwordError = document.getElementById("password-error");
    var confirmPasswordError = document.getElementById(
      "confirm-password-error"
    );

    // 초기화
    nameError.textContent = "";
    emailError.textContent = "";
    ageError.textContent = "";
    passwordError.textContent = "";
    confirmPasswordError.textContent = "";

    // 유효성 검사
    if (name === "") {
      nameError.textContent = "필수 입력 항목입니다!";
      event.preventDefault();
    }

    if (email === "") {
      emailError.textContent = "올바른 이메일 형식이 아닙니다!";
      event.preventDefault();
    }

    if (age === "") {
      ageError.textContent = "나이를 입력해주세요!";
      event.preventDefault();
    }

    if (password === "") {
      passwordError.textContent = "비밀번호는 최소 4자리 이상이어야 합니다.";
      event.preventDefault();
    }

    if (confirmPassword === "") {
      confirmPasswordError.textContent = "필수 입력 항목입니다!";
      event.preventDefault();
    }

    if (password !== confirmPassword) {
      confirmPasswordError.textContent = "비밀번호가 일치하지 않습니다!";
      event.preventDefault();
    }
  });
