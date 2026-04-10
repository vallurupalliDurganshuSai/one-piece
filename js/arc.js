/* ================================================================
   ONE PIECE — Arc Detail Page Logic
   ================================================================ */

document.addEventListener('DOMContentLoaded', async () => {
  // Read arc id from query param
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
  
  // Safety check: only render if characters exist
  if (arc.characters && arc.characters.length > 0) {
    arc.characters.forEach((char, idx) => {
      const card = document.createElement('div');
      card.className = 'character-card';
      card.innerHTML = `
        <div class="character-card__info">
          <img class="character-card__avatar" src="${char.image}" alt="${char.name}" />
          <div>
            <div class="character-card__name">${char.name}</div>
            <div class="character-card__role">${char.role}</div>
          </div>
        </div>
        <span class="character-card__arrow">→</span>
      `;

      card.addEventListener('click', () => openModal(char));

      // Entrance animation
      setTimeout(() => card.classList.add('visible'), idx * 100);

      charGrid.appendChild(card);
    });
  } else {
    // Fallback if the database has no characters for this arc yet
    charGrid.innerHTML = '<p style="color: var(--text-muted); text-align: center; grid-column: 1/-1;">No characters found in the database for this arc.</p>';
  }

  // ---- Modal Logic ----
  const backdrop = document.getElementById('modal-backdrop');
  const panel    = document.getElementById('modal-panel');
  const closeBtn = document.getElementById('modal-close');

  function openModal(char) {
    document.getElementById('modal-char-name').textContent   = char.name;
    document.getElementById('modal-char-role').textContent   = char.role;
    document.getElementById('modal-char-bounty').textContent = char.bounty || 'Unknown';
    document.getElementById('modal-char-desc').textContent   = char.desc;

    // Set character image
    const imgPlaceholder = document.getElementById('modal-char-image');
    imgPlaceholder.innerHTML = `<img src="${char.image}" alt="${char.name}" class="modal-image" />`;

    backdrop.classList.add('active');
    panel.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    backdrop.classList.remove('active');
    panel.classList.remove('active');
    document.body.style.overflow = '';
  }

  closeBtn.addEventListener('click', closeModal);
  backdrop.addEventListener('click', closeModal);

  // Close on Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
  });
});