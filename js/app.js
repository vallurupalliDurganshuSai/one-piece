/* ================================================================
   ONE PIECE — Arc Data & Landing Page Logic (Dynamic & Graph-Enabled)
   ================================================================ */

// We keep this global so arc.js can potentially use it if navigating locally, 
// though ideally arc.js will fetch its own data.
window.ARC_DATA = [];

document.addEventListener('DOMContentLoaded', async () => {
  const grid = document.getElementById('arc-grid');
  if (!grid) return;

  try {
    // 1. Fetch data from your new Neo4j API
    const response = await fetch('/api/arcs');
    if (!response.ok) {
      throw new Error(`Server returned ${response.status}: Make sure Neo4j is running!`);
    }
    window.ARC_DATA = await response.json();

    // ==============================================================
    // UPGRADE 1: LIVE DATABASE STATISTICS
    // ==============================================================
    let totalArcs = window.ARC_DATA.length;
    let totalCharacters = 0;

    window.ARC_DATA.forEach(arc => {
      if (arc.characters) {
        totalCharacters += arc.characters.length;
      }
    });

    const nodeCount = totalArcs + totalCharacters;
    const relCount = totalCharacters; // One relationship per character to their arc

    const dbStatsEl = document.getElementById('db-stats');
    const nodeCountEl = document.getElementById('node-count');
    const relCountEl = document.getElementById('rel-count');

    if (nodeCountEl && relCountEl && dbStatsEl) {
      nodeCountEl.innerText = nodeCount;
      relCountEl.innerText = relCount;
      // Fade it in to look smooth
      dbStatsEl.style.opacity = 1;
      dbStatsEl.style.transition = "opacity 0.8s ease";
    }

    // ==============================================================
    // 2. Render the cards using the fetched data
    // ==============================================================
    window.ARC_DATA.forEach((arc, idx) => {
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

    // 3. Trigger entrance animations
    requestAnimationFrame(() => {
      grid.querySelectorAll('.arc-card').forEach((c, i) => {
        setTimeout(() => c.classList.add('visible'), i * 80);
      });
    });

    // ==============================================================
    // UPGRADE 2: INTERACTIVE KNOWLEDGE GRAPH TOGGLE
    // ==============================================================
    const toggleBtn = document.getElementById('toggle-view-btn');
    const graphContainer = document.getElementById('graph-container');
    let graphInitialized = false;

    if (toggleBtn && graphContainer) {
      toggleBtn.addEventListener('click', () => {
        if (graphContainer.style.display === 'none') {
          // Show Graph, Hide Grid
          graphContainer.style.display = 'block';
          grid.style.display = 'none';
          toggleBtn.innerHTML = '🃏 View Card Grid';
          
          // Only build the graph once to save performance
          if (!graphInitialized) {
            buildNeo4jGraph(window.ARC_DATA);
            graphInitialized = true;
          }
        } else {
          // Show Grid, Hide Graph
          graphContainer.style.display = 'none';
          grid.style.display = 'grid';
          toggleBtn.innerHTML = '👁️ View Neo4j Knowledge Graph';
        }
      });
    }

  } catch (error) {
    console.error("Failed to load arcs from database:", error);
    grid.innerHTML = "<p style='color: var(--white); text-align: center; grid-column: 1/-1;'>Failed to load Grand Line data. The World Government might be blocking the signal.</p>";
  }
});

// ==============================================================
// PREMIUM VIS.JS KNOWLEDGE GRAPH BUILDER
// ==============================================================
function buildNeo4jGraph(data) {
  const nodes = [];
  const edges = [];

  data.forEach(arc => {
    // 1. Create a Premium Node for the Arc
    nodes.push({
      id: arc.id,
      label: arc.title.toUpperCase(),
      shape: 'hexagon',
      size: 35,
      color: {
        background: 'rgba(20, 34, 64, 0.9)', 
        border: '#d4a84b', // Gold border for Arcs
        highlight: { background: '#2e6ea3', border: '#f0cc73' }
      },
      font: { color: '#ffffff', size: 18, face: 'Cinzel', bold: true, strokeWidth: 2, strokeColor: '#0a1424' },
      borderWidth: 3,
      shadow: { enabled: true, color: 'rgba(212, 168, 75, 0.4)', size: 15, x: 0, y: 0 }
    });

    // 2. Create Image Nodes for Characters
    if (arc.characters) {
      arc.characters.forEach(char => {
        const charId = char.name.replace(/\s+/g, '-').toLowerCase();
        
        // Only add character if it doesn't exist yet 
        if (!nodes.find(n => n.id === charId)) {
          nodes.push({
            id: charId,
            label: char.name,
            shape: 'circularImage',
            image: char.image, // PULLS EXACT IMAGE FROM DB
            size: 25,
            color: {
              border: '#4a9bd9',
              highlight: { border: '#ffffff' }
            },
            font: { 
              color: '#c8d6e8', 
              size: 11, 
              face: 'Inter',
              background: 'rgba(8, 14, 26, 0.7)' // Text readability background
            },
            borderWidth: 2,
            shadow: { enabled: true, color: 'rgba(0,0,0,0.6)', size: 10, x: 2, y: 2 }
          });
        }

        // Create Curved, Translucent Edges
        edges.push({
          from: arc.id,
          to: charId,
          label: 'IN_ARC',
          font: { align: 'middle', size: 9, color: 'rgba(94, 122, 154, 0.7)', face: 'Inter', strokeWidth: 0 },
          arrows: { to: { enabled: true, scaleFactor: 0.5 } },
          color: { color: 'rgba(74, 155, 217, 0.2)', highlight: 'rgba(212, 168, 75, 0.8)' },
          smooth: { type: 'continuous', roundness: 0.5 }, // Beautiful curves
          length: 200
        });
      });
    }
  });

  const container = document.getElementById('graph-container');
  const graphData = {
    nodes: new vis.DataSet(nodes),
    edges: new vis.DataSet(edges)
  };
  
  // Advanced Physics for a fluid, floating feel
  const options = {
    physics: {
      forceAtlas2Based: {
        gravitationalConstant: -100,
        centralGravity: 0.005,
        springLength: 200,
        springConstant: 0.04
      },
      maxVelocity: 50,
      solver: 'forceAtlas2Based',
      timestep: 0.35,
      stabilization: { iterations: 150 } // Settles into a nice layout quickly
    },
    interaction: { hover: true, tooltipDelay: 100, zoomView: true, dragView: true }
  };

  new vis.Network(container, graphData, options);
}