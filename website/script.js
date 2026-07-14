const text = "Your Perfect Bridal Look Starts Here🎀";
let index = 0;

function typeEffect() {
  if (index < text.length) {
    document.getElementById("typing").innerHTML += text.charAt(index);
    index++;
    setTimeout(typeEffect, 100);
  } else {
    setTimeout(() => {
      document.getElementById("typing").innerHTML = "";
      index = 0;
      typeEffect();
    }, 1000);
  }
}

typeEffect();

function openForm() {
  document.getElementById("formBox").style.display = "block";
}

function closeForm() {
  document.getElementById("formBox").style.display = "none";
}
window.onclick = function(event) {
  let formBox = document.getElementById("formBox");
  let formContent = document.querySelector (".form-content");

  if (event.target === formBox) {
    formBox.style.display = "none";
  }
};

function sendToWhatsApp(e) {
  e.preventDefault(); // page reload rok

  let name = document.getElementById("name").value;
  let phone = document.getElementById("phone").value;
  let service = document.getElementById("service").value;
  let gender = document.getElementById("gender").value;
  let city = document.getElementById("city").value;
  let address = document.getElementById("address").value;
  let message = document.getElementById("message").value;

  let text = 
`Name: ${name}
Phone: ${phone}
Service: ${service}
Gender:${gender}
City: ${city}
Address: ${address}
Message: ${message}`;

  let url = "https://wa.me/919335437729?text=" + encodeURIComponent(text);

  window.location.href=url;
}
function toggleMenu() {
    document.getElementById("navBar").classList.toggle("active");
}
