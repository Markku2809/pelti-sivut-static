function toggleMenu(){
  const nav = document.getElementById('mainnav');
  nav.style.display = nav.style.display === 'flex' ? 'none' : 'flex';
}

function sendMessage(e){
  e.preventDefault();
  // Tässä voisi lähettää lomakkeen esim. Formspreen kautta.
  document.getElementById('ok').hidden = false;
  e.target.reset();
}

document.getElementById('year').textContent = new Date().getFullYear();
