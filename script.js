
document.querySelectorAll('nav a').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const targetId = this.getAttribute('href').substring(1);
    const target = document.getElementById(targetId);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});


const nav = document.getElementById('mainNav');
const homeSection = document.getElementById('home');

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        nav.classList.remove('top'); 
      } else {
        nav.classList.add('top'); 
      }
    });
  },
  {
    threshold: 0.75,
  }
);

observer.observe(homeSection);
  function toggleSlide(card) {
    card.classList.toggle("active");
  }


