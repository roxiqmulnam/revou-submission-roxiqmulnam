// slider
const sliderMain = document.getElementById('slider-main');
const item = sliderMain.getElementsByClassName('items');
function next() {
  sliderMain.append(item[0]);
}
function prev() {
  sliderMain.prepend(item[item.length - 1]);
}

// navbar
const myNav = document.getElementById('navbar');
window.onscroll = function () {
  if (
    document.body.scrollTop >= 100 ||
    document.documentElement.scrollTop >= 100
  ) {
    myNav.classList.add('nav-colored');
    myNav.classList.remove('nav-transparent');
  } else {
    myNav.classList.add('nav-transparent');
    myNav.classList.remove('nav-colored');
  }
};

const mobileMenu = document.querySelector('.btn-mobile-navbar');
const linkNavbar = document.querySelector('.mobile-navbar');

mobileMenu.addEventListener('click', function () {
  linkNavbar.classList.toggle('open');
});
linkNavbar.addEventListener('click', function () {
  linkNavbar.classList.remove('open');
});



// Validate Form Message Us
function resultMessageUs() {
    var today = new Date();
    var nama = document.forms['submit-form']['nama'].value;
    var tanggal = document.forms['submit-form']['tanggal'].value;
    var kelamin = document.forms['submit-form']['kelamin'].value;
    var pesan = document.forms['submit-form']['pesan'].value;

    var tanggalArr = tanggal.split("-");
    var newTanggal = tanggalArr[2] + "-" + tanggalArr[1] + "-" + tanggalArr[0];

    var newToday = today.toString().slice(0, 33);

    document.querySelector(".data-time").innerText = newToday;
    document.querySelector(".data-name").innerHTML = nama;
    document.querySelector(".data-born").innerHTML = newTanggal;
    document.querySelector(".data-gender").innerHTML = kelamin;
    document.querySelector(".data-message").innerHTML = pesan;
    return false;
}
