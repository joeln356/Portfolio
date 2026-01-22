// scroll suave para links de navegação

const navlinks = document.querySelectorAll('a.nav');

navlinks.forEach(link => {
  link.addEventListener('click', function (e) {
    const href = this.getAttribute('href');
    if (!href || !href.startsWith('#')) return;

    e.preventDefault();

    const target = document.querySelector(href);
    if (!target) return;

    const headerHeight = document.querySelector('header').offsetHeight;
    const targetPosition = target.offsetTop - headerHeight - 28;

    window.scrollTo({
      top: targetPosition,
      behavior: 'smooth'
    });
  });
});

// mudar edioma

function ShowEdiomas(){

  if(ediomas.style.display == 'block'){
    ediomas.style.display = 'none'
  } else{
    ediomas.style.display = 'block'
  }

}