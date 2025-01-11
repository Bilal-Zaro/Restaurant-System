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
  gettedlocal;
  localStorage.setItem("key", JSON.stringify(gettedlocal));

  document.getElementById("form").reset();

  fullthecard(newcustomer);
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
  p1.textContent = "fullname: " + newcustomer.fullname;
  p2.textContent = "order type: " + newcustomer.ordertype;
  p3.textContent = "order option: " + newcustomer.orderoption;

  card.appendChild(p1);
  card.appendChild(p2);
  card.appendChild(p3);
  card.appendChild(img);
  container.appendChild(card);
}
