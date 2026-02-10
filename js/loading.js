/* ================================================================
   ONE PIECE — Loading Screen Controller
   ================================================================ */

document.addEventListener('DOMContentLoaded', () => {
  const loader = document.getElementById('loading-screen');
  if (!loader) return;

  // After 2.5 seconds, trigger the slide-up exit
  setTimeout(() => {
    loader.classList.add('hide');
  }, 2500);

  // After the transition ends, remove from DOM completely
  loader.addEventListener('transitionend', () => {
    loader.style.display = 'none';
  });
});
