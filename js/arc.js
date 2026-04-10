/* ================================================================
   ONE PIECE — Arc Detail Page Logic
   ================================================================ */

document.addEventListener('DOMContentLoaded', async () => {
  const params = new URLSearchParams(window.location.search);
  const arcId = params.get('arc');

  if (!arcId) {
    window.location.href = 'index.html';
    return;
  }

  let arc;

  try {
    // Fetch the data from our API
    const response = await fetch('/api/arcs');
    const allArcs = await response.json();
    arc = allArcs.find(a => a.id === arcId);
    
    if (!arc) {
      window.location.href = 'index.html';
      return;
    }
  } catch (err) {
    console.error("Error fetching arc details:", err);
    return;
  }

  // Populate banner
  document.getElementById('arc-title').textContent = arc.title;
  document.getElementById('arc-saga').textContent = arc.saga;
  document.getElementById('arc-desc').textContent = arc.desc;

  // Build character cards
  const charGrid = document.getElementById('character-grid');
  // ... (Keep the rest of your character mapping and modal logic exactly the same from here down!)