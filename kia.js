const changebg = () => {
    var navbar = document.getElementsByClassName('nevbar')[0]; 
    var scroll = window.scrollY; 
    if (scroll > 50) {
      navbar.classList.add('nevbarsec'); 
    } else {
      navbar.classList.remove('nevbarsec'); 
    }
    
  };
  window.addEventListener('scroll', changebg);
  


 