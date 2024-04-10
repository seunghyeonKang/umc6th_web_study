document
  .getElementById("signup-form")
  .addEventListener("submit", function (event) {
    var name = document.getElementById("name").value.trim();
    var email = document.getElementById("email").value.trim();
    var age = document.getElementById("age").value.trim();
    // var age = parseInt(document.getElementById("age").value.trim());
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

    var nameValid = document.getElementById("name-valid");
    var emailValid = document.getElementById("email-valid");
    var ageValid = document.getElementById("age-valid");
    var passwordValid = document.getElementById("password-valid");
    var confirmPasswordValid = document.getElementById(
      "confirm-password-valid"
    );

    var passwordPattern =
      /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{4,12}$/;

    // 초기화
    nameError.textContent = "";
    emailError.textContent = "";
    ageError.textContent = "";
    passwordError.textContent = "";
    confirmPasswordError.textContent = "";

    nameValid.textContent = "";
    emailValid.textContent = "";
    ageValid.textContent = "";
    passwordValid.textContent = "";
    confirmPasswordValid.textContent = "";

    // 유효성 검사
    // 유효성 - 이름
    if (name !== "") {
      nameValid.textContent = "멋진 이름이네요!";
    } else {
      nameError.textContent = "필수 입력 항목입니다!";
      event.preventDefault();
    }
    // 유효성 - 이메일
    if (email !== "" && email.includes("@")) {
      emailValid.textContent = "올바른 이메일 형식입니다!";
    } else {
      emailError.textContent = "올바른 이메일 형식이 아닙니다!";
      event.preventDefault();
    }
    // 유효성 - 나이
    if (
      age !== "" &&
      !isNaN(age) &&
      age >= 19 &&
      age.indexOf(".") === -1 &&
      age.indexOf("-") === -1
      //   && Number.isInteger(age)
    ) {
      ageValid.textContent = "올바른 나이 형식입니다!";
    } else if (
      age !== "" &&
      !isNaN(age) &&
      age <= 19 &&
      age >= 0 &&
      age.indexOf(".") === -1
    ) {
      ageError.textContent = "19세 이상만 가입 가능합니다.";
      event.preventDefault();
    } else {
      ageError.textContent = "나이를 입력해주세요!";
      event.preventDefault();
    }
    // 유효성 - 비밀번호
    if (password !== "" && passwordPattern.test(password)) {
      passwordValid.textContent = "올바른 비밀번호 형식입니다!";
    } else {
      passwordError.textContent =
        "비밀번호는 영어/숫자/특수문자 조합, 최소 4자 이상, 최대 12자리 이하여야 합니다.";
      event.preventDefault();
    }
    // 유효성 - 비밀번호 확인
    if (confirmPassword === "") {
      confirmPasswordError.textContent = "필수 입력 항목입니다!";
      event.preventDefault();
    } else if (password === confirmPassword) {
      confirmPasswordValid.textContent = "비밀번호가 일치합니다.";
    } else {
      confirmPasswordError.textContent = "비밀번호가 일치하지 않습니다!";
      event.preventDefault();
    }

    // 폼 제출 알림
    if (
      nameValid.textContent !== "" &&
      emailValid.textContent !== "" &&
      ageValid.textContent !== "" &&
      passwordValid.textContent !== "" &&
      confirmPasswordValid.textContent !== ""
    ) {
      event.preventDefault();
      alert("umc 챌린저 가입을 축하합니다!!");
    }
  });
