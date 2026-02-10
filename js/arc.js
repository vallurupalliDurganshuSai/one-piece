/* ================================================================
   ONE PIECE — Arc Detail Page Logic
   ================================================================ */

document.addEventListener('DOMContentLoaded', () => {
  // Read arc id from query param
  const params = new URLSearchParams(window.location.search);
  const arcId = params.get('arc');

  if (!arcId || typeof ARC_DATA === 'undefined') {
    window.location.href = 'index.html';
    return;
  }

  const arc = ARC_DATA.find(a => a.id === arcId);
  if (!arc) {
    window.location.href = 'index.html';
    return;
  }

  // Populate banner
  document.getElementById('arc-title').textContent = arc.title;
  document.getElementById('arc-saga').textContent = arc.saga;
  document.getElementById('arc-desc').textContent = arc.desc;

  // Build character cards
  const charGrid = document.getElementById('character-grid');
  arc.characters.forEach((char, idx) => {
    const card = document.createElement('div');
    card.className = 'character-card';
    card.innerHTML = `
      <div class="character-card__info">
        <div class="character-card__avatar">${char.initial}</div>
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

  // ---- Modal Logic ----
  const backdrop = document.getElementById('modal-backdrop');
  const panel    = document.getElementById('modal-panel');
  const closeBtn = document.getElementById('modal-close');

  function openModal(char) {
    document.getElementById('modal-char-name').textContent   = char.name;
    document.getElementById('modal-char-role').textContent   = char.role;
    document.getElementById('modal-char-bounty').textContent = char.bounty;
    document.getElementById('modal-char-desc').textContent   = char.desc;

    // Set avatar initial
    const imgPlaceholder = document.getElementById('modal-char-image');
    imgPlaceholder.textContent = char.initial;

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
