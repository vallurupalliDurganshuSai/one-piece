/* ================================================================
   ONE PIECE — Arc Data & Landing Page Logic
   ================================================================ */

const ARC_DATA = [
  {
    id: 'romance-dawn',
    title: 'Romance Dawn',
    saga: 'East Blue Saga',
    desc: 'Where it all begins — Luffy sets sail to become the King of the Pirates.',
    gradient: 'linear-gradient(135deg, #1a3a5c, #0d1b2a)',
    image: 'images/img.png',
    characters: [
      { name: 'Monkey D. Luffy', role: 'Captain • Straw Hat Pirates', bounty: '₿3,000,000,000', desc: 'The rubber-powered dreamer who will become King of the Pirates. His unwavering determination and infectious spirit draw allies to his cause.', initial: 'L', image: 'images/luffy.jpg' },
      { name: 'Roronoa Zoro', role: 'Swordsman • First Mate', bounty: '₿1,111,000,000', desc: 'A three-sword-style master with an unyielding ambition to become the world\'s greatest swordsman. Luffy\'s first crewmate.', initial: 'Z', image: 'images/img.png' },
      { name: 'Nami', role: 'Navigator', bounty: '₿366,000,000', desc: 'A genius cartographer and thief with a dream to chart the entire world. Her mastery over weather makes her invaluable.', initial: 'N', image: 'images/img.png' },
      { name: 'Usopp', role: 'Sniper', bounty: '₿500,000,000', desc: 'The brave warrior of the sea — or so he claims. A gifted marksman and inventor whose lies have a way of coming true.', initial: 'U', image: 'images/img.png' },
      { name: 'Sanji', role: 'Cook • Black Leg', bounty: '₿1,032,000,000', desc: 'A chivalrous chef with devastating kick-based martial arts. Dreams of finding the All Blue, a sea with every fish in the world.', initial: 'S', image: 'images/img.png' }
    ]
  },
  {
    id: 'alabasta',
    title: 'Alabasta',
    saga: 'Alabasta Saga',
    desc: 'A desert kingdom on the brink of civil war — and a conspiracy that runs deep.',
    gradient: 'linear-gradient(135deg, #8B6914, #3d2e0a)',
    image: 'images/img.png',
    characters: [
      { name: 'Nefertari Vivi', role: 'Princess of Alabasta', bounty: 'None (Royalty)', desc: 'A courageous princess who infiltrated Baroque Works to save her kingdom from destruction. A friend of the Straw Hats forever.', initial: 'V', image: 'images/img.png' },
      { name: 'Sir Crocodile', role: 'Warlord • Baroque Works Boss', bounty: '₿1,965,000,000', desc: 'The sand-manipulating mastermind behind Alabasta\'s downfall. One of the Seven Warlords of the Sea turned rogue.', initial: 'C', image: 'images/img.png' },
      { name: 'Portgas D. Ace', role: 'Commander • Whitebeard Pirates', bounty: '₿550,000,000', desc: 'Luffy\'s older brother with the power of the Flame-Flame Fruit. Commander of Whitebeard\'s second division.', initial: 'A', image: 'images/img.png' },
      { name: 'Nico Robin', role: 'Archaeologist', bounty: '₿930,000,000', desc: 'The sole survivor of Ohara who can read the Poneglyphs. She joins the crew seeking the true history of the world.', initial: 'R', image: 'images/img.png' },
      { name: 'Tony Tony Chopper', role: 'Doctor • Reindeer', bounty: '₿1,000', desc: 'A reindeer who ate the Human-Human Fruit. A brilliant doctor with multiple transformation points and a heart of gold.', initial: 'Ch', image: 'images/img.png' }
    ]
  },
  {
    id: 'skypiea',
    title: 'Skypiea',
    saga: 'Sky Island Saga',
    desc: 'An island in the clouds where a self-proclaimed god rules with thunder.',
    gradient: 'linear-gradient(135deg, #4a90d9, #1a3a6c)',
    image: 'images/img.png',
    characters: [
      { name: 'Enel', role: 'God of Skypiea', bounty: '₿500,000,000 (est.)', desc: 'A tyrannical ruler wielding the power of lightning. Considers himself an almighty god destined to reach the moon.', initial: 'E', image: 'images/img.png' },
      { name: 'Wyper', role: 'Shandian Warrior', bounty: 'None', desc: 'A fierce Shandian warrior determined to reclaim his ancestral homeland. Carries the will of the great warrior Kalgara.', initial: 'W', image: 'images/img.png' },
      { name: 'Gan Fall', role: 'Former God of Skypiea', bounty: 'None', desc: 'The benevolent former ruler of Skypiea who rides a pegasus named Pierre. Fights to liberate his homeland.', initial: 'G', image: 'images/img.png' },
      { name: 'Conis', role: 'Skypiean Citizen', bounty: 'None', desc: 'A kind-hearted sky islander who befriends the Straw Hats and risks everything to oppose Enel\'s tyranny.', initial: 'Co', image: 'images/img.png' },
      { name: 'Mont Blanc Noland', role: 'Explorer (Flashback)', bounty: 'None (Executed)', desc: 'The legendary explorer branded a liar for telling of a city of gold. His tale spans 400 years of sorrow.', initial: 'MN', image: 'images/img.png' }
    ]
  },
  {
    id: 'enies-lobby',
    title: 'Enies Lobby',
    saga: 'Water 7 Saga',
    desc: 'The Straw Hats declare war on the World Government to save a friend.',
    gradient: 'linear-gradient(135deg, #c0392b, #5a1a14)',
    image: 'images/img.png',
    characters: [
      { name: 'Franky', role: 'Shipwright • Cyborg', bounty: '₿394,000,000', desc: 'A cola-powered cyborg shipwright who built the Thousand Sunny. His dream is to sail aboard a ship that conquers the seas.', initial: 'F', image: 'images/img.png' },
      { name: 'Rob Lucci', role: 'CP9 Agent', bounty: 'Classified', desc: 'The deadliest assassin of Cipher Pol 9 with mastery over Rokushiki and a leopard Zoan fruit. A cold-blooded killing machine.', initial: 'RL', image: 'images/img.png' },
      { name: 'Iceburg', role: 'Mayor of Water 7', bounty: 'None', desc: 'The president of the Galley-La Company and mayor of Water 7. A former apprentice of the legendary shipwright Tom.', initial: 'I', image: 'images/img.png' },
      { name: 'Spandam', role: 'CP9 Chief', bounty: 'None (Government)', desc: 'The incompetent head of CP9 whose obsession with ancient weapons leads to the Buster Call on Enies Lobby.', initial: 'Sp', image: 'images/img.png' },
      { name: 'Kaku', role: 'CP9 Agent • Swordsman', bounty: 'Classified', desc: 'A skilled swordsman and CP9 agent who consumed the Giraffe Zoan fruit. Expert in Rokushiki techniques.', initial: 'K', image: 'images/img.png' }
    ]
  },
  {
    id: 'thriller-bark',
    title: 'Thriller Bark',
    saga: 'Thriller Bark Saga',
    desc: 'A haunted ship the size of an island — where shadows come alive.',
    gradient: 'linear-gradient(135deg, #2c1445, #0d0517)',
    image: 'images/img.png',
    characters: [
      { name: 'Brook', role: 'Musician • Soul King', bounty: '₿383,000,000', desc: 'A living skeleton revived by the Revive-Revive Fruit. A soulful musician carrying a promise made 50 years ago.', initial: 'B', image: 'images/img.png' },
      { name: 'Gecko Moria', role: 'Warlord of the Sea', bounty: '₿320,000,000', desc: 'A former Warlord who commands shadows. Once rivaled Kaido and now rules Thriller Bark with an army of zombies.', initial: 'GM', image: 'images/img.png' },
      { name: 'Perona', role: 'Ghost Princess', bounty: 'Unknown', desc: 'Moria\'s commander who uses Hollow-Hollow Fruit to project ghosts that drain all will to live from her enemies.', initial: 'P', image: 'images/img.png' },
      { name: 'Absalom', role: 'Zombie General', bounty: 'Unknown', desc: 'A stitched-together general with invisibility powers from the Clear-Clear Fruit. Commands the zombie soldiers.', initial: 'Ab', image: 'images/img.png' },
      { name: 'Oars', role: 'Special Zombie', bounty: 'None (Zombie)', desc: 'A massive ancient giant zombie brought to life with Luffy\'s shadow. The "Continent Puller" is Moria\'s ultimate weapon.', initial: 'O', image: 'images/img.png' }
    ]
  },
  {
    id: 'marineford',
    title: 'Marineford',
    saga: 'Summit War Saga',
    desc: 'The greatest war in pirate history — where legends clashed and the world changed forever.',
    gradient: 'linear-gradient(135deg, #1a1a2e, #780000)',
    image: 'images/img.png',
    characters: [
      { name: 'Edward Newgate', role: 'Whitebeard • Yonko', bounty: '₿5,046,000,000', desc: 'The strongest man in the world and "father" to thousands. He who stood at the pinnacle of the pirate era.', initial: 'WB', image: 'images/img.png' },
      { name: 'Akainu', role: 'Admiral • Magma', bounty: 'None (Marine)', desc: 'Fleet Admiral Sakazuki — the embodiment of Absolute Justice. His magma fists changed the tide of the war.', initial: 'Ak', image: 'images/img.png' },
      { name: 'Sengoku', role: 'Fleet Admiral • Buddha', bounty: 'None (Marine)', desc: 'The Buddha — strategic mastermind of the Marines who orchestrated the public execution to lure Whitebeard.', initial: 'Se', image: 'images/img.png' },
      { name: 'Jinbe', role: 'Helmsman • Fish-Man', bounty: '₿1,100,000,000', desc: 'A Fish-Man Karate master and former Warlord. His honor and loyalty make him one of the most respected figures on the seas.', initial: 'J', image: 'images/img.png' },
      { name: 'Boa Hancock', role: 'Warlord • Pirate Empress', bounty: '₿1,659,000,000', desc: 'The most beautiful woman in the world and wielder of the Love-Love Fruit. Empress of Amazon Lily.', initial: 'H', image: 'images/img.png' }
    ]
  },
  {
    id: 'fishman-island',
    title: 'Fishman Island',
    saga: 'Fish-Man Island Saga',
    desc: 'Beneath the sea — a kingdom of prejudice, prophecy, and redemption.',
    gradient: 'linear-gradient(135deg, #0077b6, #023e5c)',
    image: 'images/img.png',
    characters: [
      { name: 'Hody Jones', role: 'New Fish-Man Pirates Captain', bounty: 'Unknown', desc: 'A great white shark Fish-Man driven by hatred for humans. He uses Energy Steroids to fuel his campaign of terror.', initial: 'HJ', image: 'images/img.png' },
      { name: 'Shirahoshi', role: 'Mermaid Princess', bounty: 'None', desc: 'The giant mermaid princess with the power of Poseidon — the ability to command the Sea Kings. A gentle soul.', initial: 'Sh', image: 'images/img.png' },
      { name: 'Fisher Tiger', role: 'Adventurer (Flashback)', bounty: '₿230,000,000', desc: 'The legendary Sun Pirates captain who climbed the Red Line bare-handed to free slaves from the World Nobles.', initial: 'FT', image: 'images/img.png' },
      { name: 'Queen Otohime', role: 'Queen (Flashback)', bounty: 'None', desc: 'The beloved queen who championed coexistence between humans and Fish-Men through peaceful petition.', initial: 'Ot', image: 'images/img.png' },
      { name: 'Neptune', role: 'King of Fish-Man Island', bounty: 'None', desc: 'The coelacanth merman who rules the Ryugu Kingdom. A powerful warrior and devoted father protecting his people.', initial: 'Np', image: 'images/img.png' }
    ]
  },
  {
    id: 'dressrosa',
    title: 'Dressrosa',
    saga: 'Dressrosa Saga',
    desc: 'A kingdom of passion, toys, and a tyrant who pulls strings from the shadows.',
    gradient: 'linear-gradient(135deg, #e63946, #4a0d17)',
    image: 'images/img.png',
    characters: [
      { name: 'Donquixote Doflamingo', role: 'Warlord • Heavenly Demon', bounty: '₿340,000,000', desc: 'The Heavenly Demon — a fallen Celestial Dragon who rules Dressrosa with string powers and an iron grip.', initial: 'Do', image: 'images/img.png' },
      { name: 'Trafalgar D. Law', role: 'Surgeon of Death', bounty: '₿3,000,000,000', desc: 'The "Surgeon of Death" wielding the Op-Op Fruit. His alliance with Luffy aims to topple the Emperor Kaido.', initial: 'TL', image: 'images/img.png' },
      { name: 'Rebecca', role: 'Gladiator Princess', bounty: 'None', desc: 'The undefeated gladiator of the Corrida Colosseum. She fights with a defensive style to protect without killing.', initial: 'Re', image: 'images/img.png' },
      { name: 'Sabo', role: 'Chief of Staff • Revolutionary', bounty: '₿602,000,000', desc: 'Luffy\'s sworn brother, thought to be dead. Inheritor of Ace\'s Flame-Flame Fruit and the No. 2 of the Revolutionary Army.', initial: 'Sa', image: 'images/img.png' },
      { name: 'Kyros', role: 'Legendary Gladiator', bounty: 'None', desc: 'The undefeated gladiator turned tin soldier. A one-legged warrior whose 3,000-win record was erased from history.', initial: 'Ky', image: 'images/img.png' }
    ]
  },
  {
    id: 'whole-cake',
    title: 'Whole Cake Island',
    saga: 'Whole Cake Saga',
    desc: 'A tea party you can\'t refuse — in a candy-coated nightmare empire.',
    gradient: 'linear-gradient(135deg, #d63384, #4a1038)',
    image: 'images/img.png',
    characters: [
      { name: 'Big Mom', role: 'Yonko • Charlotte Linlin', bounty: '₿4,388,000,000', desc: 'The iron-willed matriarch of the Charlotte Family. Her Soul-Soul Fruit powers create a living nightmare of homies.', initial: 'BM', image: 'images/img.png' },
      { name: 'Katakuri', role: 'Sweet Commander', bounty: '₿1,057,000,000', desc: 'Big Mom\'s strongest son with advanced Observation Haki. His mochi powers and honor make him Luffy\'s greatest rival.', initial: 'Ka', image: 'images/img.png' },
      { name: 'Charlotte Pudding', role: 'Three-Eyed Tribe', bounty: 'Unknown', desc: 'A three-eyed girl torn between her mother\'s cruelty and her own kindness. Her true feelings for Sanji define her arc.', initial: 'Pu', image: 'images/img.png' },
      { name: 'Pedro', role: 'Guardian • Mink Warrior', bounty: '₿382,000,000', desc: 'A jaguar mink and Mokomo Dukedom\'s guardian. His sacrifice lit the fuse for the crew\'s daring escape.', initial: 'Pe', image: 'images/img.png' },
      { name: 'Vinsmoke Judge', role: 'Germa 66 Commander', bounty: 'Unknown', desc: 'The ruthless king of the Germa Kingdom and leader of Germa 66. A scientist who turned his own children into weapons.', initial: 'VJ', image: 'images/img.png' }
    ]
  },
  {
    id: 'wano',
    title: 'Wano',
    saga: 'Wano Country Saga',
    desc: 'The land of samurai — where 20 years of prophecy converge in an epic battle.',
    gradient: 'linear-gradient(135deg, #6d28d9, #1a0a3e)',
    image: 'images/img.png',
    characters: [
      { name: 'Kaido', role: 'Yonko • King of Beasts', bounty: '₿4,611,100,000', desc: 'The world\'s strongest creature in the form of a mythical dragon. An indestructible force who seeks the ultimate war.', initial: 'Ka', image: 'images/img.png' },
      { name: 'Yamato', role: 'Oni Princess', bounty: 'Unknown', desc: 'Kaido\'s daughter who idolizes Kozuki Oden. She has awaited the one Oden prophesied for twenty long years.', initial: 'Y', image: 'images/img.png' },
      { name: 'Kozuki Oden', role: 'Daimyo • Samurai Legend', bounty: 'Unknown', desc: 'The legendary samurai who sailed with both Roger and Whitebeard. His sacrifice ignited the flame of Wano\'s liberation.', initial: 'Od', image: 'images/img.png' },
      { name: 'Kinemon', role: 'Samurai • Leader of Scabbards', bounty: 'Unknown', desc: 'Leader of the Nine Red Scabbards, loyal retainers of Oden. He traveled through time to gather allies for the raid.', initial: 'Ki', image: 'images/img.png' },
      { name: 'Momonosuke', role: 'Shogun of Wano', bounty: 'Unknown', desc: 'Son of Oden, sent 20 years into the future. A young dragon who must grow into the leader Wano needs.', initial: 'Mo', image: 'images/img.png' }
    ]
  }
];

/* ---------- DOM Ready ---------- */
document.addEventListener('DOMContentLoaded', () => {
  const grid = document.getElementById('arc-grid');
  if (!grid) return;

  ARC_DATA.forEach((arc, idx) => {
    const card = document.createElement('div');
    card.className = 'arc-card';
    card.setAttribute('data-arc', arc.id);
    card.style.animationDelay = `${idx * .08}s`;

    card.innerHTML = `
      <div class="arc-card__bg" style="background: ${arc.gradient};opacity:.55;"></div>
      <img class="arc-card__image" src="${arc.image}" alt="${arc.title}" />
      <span class="arc-card__arrow">→</span>
      <div class="arc-card__content">
        <p class="arc-card__saga">${arc.saga}</p>
        <h3 class="arc-card__title">${arc.title}</h3>
        <p class="arc-card__desc">${arc.desc}</p>
      </div>
    `;

    card.addEventListener('click', () => {
      window.location.href = `arc.html?arc=${arc.id}`;
    });

    grid.appendChild(card);
  });

  // Stagger entrance animation
  requestAnimationFrame(() => {
    grid.querySelectorAll('.arc-card').forEach((c, i) => {
      setTimeout(() => c.classList.add('visible'), i * 80);
    });
  });
});
