const form = document.getElementById("form");
form.addEventListener("submit", render);

function render(event) {
  event.preventDefault();

  const fullname = document.getElementById("fullname").value;
  const pass = document.getElementById("pass").value;
  const dob = document.getElementById("dob").value;
  const gender = document.querySelector('input[name="gen"]:checked').value;
  const phone = document.getElementById("phone").value;
  const ordertype = document.querySelector(
    'input[name="ordertype"]:checked'
  ).value;
  const orderoption = document.querySelector(
    'input[name="orderoption"]:checked'
  ).value;

  let isValid = true;

  // Fullname Validation
  if (/\s/.test(fullname)) {
    document.getElementById("usernameError").textContent =
      "Fullname must not contain spaces.";
    isValid = false;
  } else {
    document.getElementById("usernameError").textContent = "";
  }

  // Password Validation
  const passwordRegex =
    /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
  if (!passwordRegex.test(pass)) {
    document.getElementById("passwordError").textContent =
      "Password must be at least 8 characters long, include one number, one uppercase letter, and one special character.";
    isValid = false;
  } else {
    document.getElementById("passwordError").textContent = "";
  }

  // Date of Birth Validation
  const birthdayRegex = /^\d{4}-\d{2}-\d{2}$/;
  if (!birthdayRegex.test(dob)) {
    document.getElementById("birthdayError").textContent =
      "Date of Birth must be in the format YYYY-MM-DD.";
    isValid = false;
  } else {
    document.getElementById("birthdayError").textContent = "";
  }

  // Phone Validation
  const phoneRegex = /^07\d{8}$/;
  if (!phoneRegex.test(phone)) {
    document.getElementById("phoneError").textContent =
      "Phone number must start with 07 and be exactly 10 digits.";
    isValid = false;
  } else {
    document.getElementById("phoneError").textContent = "";
  }

  // If all validations pass
  if (isValid) {
    alert("Registration successful!");
    const newcustomer = new Customer(
      fullname,
      pass,
      dob,
      gender,
      phone,
      ordertype,
      orderoption
    );

    let gettedlocal = [];
    gettedlocal = JSON.parse(window.localStorage.getItem("key")) || [];
    gettedlocal.push(newcustomer);
    localStorage.setItem("key", JSON.stringify(gettedlocal));

    document.getElementById("form").reset();

    fullthecard(newcustomer);
  }
}

function Customer(fullname, pass, dob, gender, phone, ordertype, orderoption) {
  this.fullname = fullname;
  this.pass = pass;
  this.dob = dob;
  this.gender = gender;
  this.phone = phone;
  this.ordertype = ordertype;
  this.orderoption = orderoption;
}

function fullthecard(newcustomer) {
  const container = document.getElementById("container");
  const card = document.createElement("div");
  const img = document.createElement("img");
  const p1 = document.createElement("p");
  const p2 = document.createElement("p");
  const p3 = document.createElement("p");

  img.src = "bth.jpg";
  p1.textContent = "Fullname: " + newcustomer.fullname;
  p2.textContent = "Order Type: " + newcustomer.ordertype;
  p3.textContent = "Order Option: " + newcustomer.orderoption;

  card.appendChild(p1);
  card.appendChild(p2);
  card.appendChild(p3);
  card.appendChild(img);
  container.appendChild(card);
}
