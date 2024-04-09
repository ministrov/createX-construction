const navLinks = document.querySelectorAll('.nav__item-link');

navLinks.forEach(link => link.addEventListener('click', function(){
  console.log(location.href);
}));

