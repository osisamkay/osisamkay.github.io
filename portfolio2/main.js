(function(){
  const toggleIcon= document.querySelector(".icon");
  const nav=document.querySelector('.nav-hide');

  toggleIcon.addEventListener('click',function(){
    nav.classList.toggle('mobile');
  })

  const Year = document.querySelector('#date');
  const date = new Date().getFullYear();
  Year.textContent = date;


}());