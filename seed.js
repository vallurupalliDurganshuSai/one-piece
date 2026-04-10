import neo4j from 'neo4j-driver';
import dotenv from 'dotenv';

// Load variables from .env.local
dotenv.config({ path: '.env.local' }); 

const ARC_DATA = [
  {
    id: 'romance-dawn',
    title: 'Romance Dawn',
    saga: 'East Blue Saga',
    desc: 'Where it all begins — Luffy sets sail to become the King of the Pirates.',
    gradient: 'linear-gradient(135deg, #1a3a5c, #0d1b2a)',
    image: 'images/Screenshot 2026-02-13 234254.png',
    characters: [
      { name: 'Monkey D. Luffy', role: 'Captain • Straw Hat Pirates', bounty: '₿3,000,000,000', desc: 'The rubber-powered dreamer who will become King of the Pirates. His unwavering determination and infectious spirit draw allies to his cause.', initial: 'L', image: 'images/luffy.jpg' },
      { name: 'Roronoa Zoro', role: 'Swordsman • First Mate', bounty: '₿1,111,000,000', desc: 'A three-sword-style master with an unyielding ambition to become the world\'s greatest swordsman. Luffy\'s first crewmate.', initial: 'Z', image: 'images/zoro.jpg' },
      { name: 'Nami', role: 'Navigator', bounty: '₿366,000,000', desc: 'A genius cartographer and thief with a dream to chart the entire world. Her mastery over weather makes her invaluable.', initial: 'N', image: 'images/nami.jpg' },
      { name: 'Usopp', role: 'Sniper', bounty: '₿500,000,000', desc: 'The brave warrior of the sea — or so he claims. A gifted marksman and inventor whose lies have a way of coming true.', initial: 'U', image: 'images/usopp.jpg' },
      { name: 'Sanji', role: 'Cook • Black Leg', bounty: '₿1,032,000,000', desc: 'A chivalrous chef with devastating kick-based martial arts. Dreams of finding the All Blue, a sea with every fish in the world.', initial: 'S', image: 'images/sanji.jpg' }
    ]
  },
  {
    id: 'alabasta',
    title: 'Alabasta',
    saga: 'Alabasta Saga',
    desc: 'A desert kingdom on the brink of civil war — and a conspiracy that runs deep.',
    gradient: 'linear-gradient(135deg, #8B6914, #3d2e0a)',
    image: 'images/arabasta saga.jpg',
    characters: [
      { name: 'Nefertari Vivi', role: 'Princess of Alabasta', bounty: 'None (Royalty)', desc: 'A courageous princess who infiltrated Baroque Works to save her kingdom from destruction. A friend of the Straw Hats forever.', initial: 'V', image: 'images/vivi.jpg' },
      { name: 'Sir Crocodile', role: 'Warlord • Baroque Works Boss', bounty: '₿1,965,000,000', desc: 'The sand-manipulating mastermind behind Alabasta\'s downfall. One of the Seven Warlords of the Sea turned rogue.', initial: 'C', image: 'images/sir.jpg' },
      { name: 'Portgas D. Ace', role: 'Commander • Whitebeard Pirates', bounty: '₿550,000,000', desc: 'Luffy\'s older brother with the power of the Flame-Flame Fruit. Commander of Whitebeard\'s second division.', initial: 'A', image: 'images/ace.jpg' },
      { name: 'Nico Robin', role: 'Archaeologist', bounty: '₿930,000,000', desc: 'The sole survivor of Ohara who can read the Poneglyphs. She joins the crew seeking the true history of the world.', initial: 'R', image: 'images/robin.jpg' },
      { name: 'Tony Tony Chopper', role: 'Doctor • Reindeer', bounty: '₿1,000', desc: 'A reindeer who ate the Human-Human Fruit. A brilliant doctor with multiple transformation points and a heart of gold.', initial: 'Ch', image: 'images/chopper.jpg' }
    ]
  },
  {
    id: 'marineford',
    title: 'Marineford',
    saga: 'Summit War Saga',
    desc: 'The greatest war in pirate history — where legends clashed and the world changed forever.',
    gradient: 'linear-gradient(135deg, #1a1a2e, #780000)',
    image: 'images/marine.jpg',
    characters: [
      { name: 'Edward Newgate', role: 'Whitebeard • Yonko', bounty: '₿5,046,000,000', desc: 'The strongest man in the world and "father" to thousands. He who stood at the pinnacle of the pirate era.', initial: 'WB', image: 'images/newgate.jpg' },
      { name: 'Akainu', role: 'Admiral • Magma', bounty: 'None (Marine)', desc: 'Fleet Admiral Sakazuki — the embodiment of Absolute Justice. His magma fists changed the tide of the war.', initial: 'Ak', image: 'images/akainu.jpg' },
      { name: 'Sengoku', role: 'Fleet Admiral • Buddha', bounty: 'None (Marine)', desc: 'The Buddha — strategic mastermind of the Marines who orchestrated the public execution to lure Whitebeard.', initial: 'Se', image: 'images/goku.jpg' },
      { name: 'Jinbe', role: 'Helmsman • Fish-Man', bounty: '₿1,100,000,000', desc: 'A Fish-Man Karate master and former Warlord. His honor and loyalty make him one of the most respected figures on the seas.', initial: 'J', image: 'images/jin.jpg' },
      { name: 'Boa Hancock', role: 'Warlord • Pirate Empress', bounty: '₿1,659,000,000', desc: 'The most beautiful woman in the world and wielder of the Love-Love Fruit. Empress of Amazon Lily.', initial: 'H', image: 'images/boa.jpg' }
    ]
  },
  {
    id: 'wano',
    title: 'Wano',
    saga: 'Wano Country Saga',
    desc: 'The land of samurai — where 20 years of prophecy converge in an epic battle.',
    gradient: 'linear-gradient(135deg, #6d28d9, #1a0a3e)',
    image: 'images/wano.jpg',
    characters: [
      { name: 'Kaido', role: 'Yonko • King of Beasts', bounty: '₿4,611,100,000', desc: 'The world\'s strongest creature in the form of a mythical dragon. An indestructible force who seeks the ultimate war.', initial: 'Ka', image: 'images/kaido.jpg' },
      { name: 'Yamato', role: 'Oni Princess', bounty: 'Unknown', desc: 'Kaido\'s daughter who idolizes Kozuki Oden. She has awaited the one Oden prophesied for twenty long years.', initial: 'Y', image: 'images/yam.jpg' },
      { name: 'Kozuki Oden', role: 'Daimyo • Samurai Legend', bounty: 'Unknown', desc: 'The legendary samurai who sailed with both Roger and Whitebeard. His sacrifice ignited the flame of Wano\'s liberation.', initial: 'Od', image: 'images/oden.jpg' },
      { name: 'Kinemon', role: 'Samurai • Leader of Scabbards', bounty: 'Unknown', desc: 'Leader of the Nine Red Scabbards, loyal retainers of Oden. He traveled through time to gather allies for the raid.', initial: 'Ki', image: 'images/kine.jpg' },
      { name: 'Momonosuke', role: 'Shogun of Wano', bounty: 'Unknown', desc: 'Son of Oden, sent 20 years into the future. A young dragon who must grow into the leader Wano needs.', initial: 'Mo', image: 'images/momo.jpg' }
    ]
  }
];

const driver = neo4j.driver(
  process.env.NEO4J_URI,
  neo4j.auth.basic(process.env.NEO4J_USER, process.env.NEO4J_PASSWORD)
);

async function seedDatabase() {
  const session = driver.session();
  console.log("Setting sail to seed the database...");

  try {
    for (const arc of ARC_DATA) {
      await session.run(`
        MERGE (a:Arc {id: $id})
        SET a.title = $title, a.saga = $saga, a.desc = $desc, 
            a.gradient = $gradient, a.image = $image
      `, {
        id: arc.id, title: arc.title, saga: arc.saga, 
        desc: arc.desc, gradient: arc.gradient, image: arc.image
      });

      for (const char of arc.characters) {
        await session.run(`
          MATCH (a:Arc {id: $arcId})
          MERGE (c:Character {name: $name})
          SET c.role = $role, c.bounty = $bounty, 
              c.desc = $desc, c.initial = $initial, c.image = $image
          MERGE (a)-[:HAS_CHARACTER]->(c)
        `, {
          arcId: arc.id,
          name: char.name, role: char.role, bounty: char.bounty,
          desc: char.desc, initial: char.initial, image: char.image
        });
      }
      console.log(`Inserted Arc: ${arc.title}`);
    }
    console.log("Database seeded successfully with REAL data!");
  } catch (error) {
    console.error("Error seeding database:", error);
  } finally {
    await session.close();
    await driver.close();
  }
}

seedDatabase();