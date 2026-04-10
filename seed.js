// seed.js
import neo4j from 'neo4j-driver';
import dotenv from 'dotenv'; // You'll need to run: npm install dotenv

dotenv.config(); // Loads credentials from a .env file

// 1. Paste your entire ARC_DATA array here
const ARC_DATA = [
  // ... your data ...
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
      // Create the Arc node
      await session.run(`
        MERGE (a:Arc {id: $id})
        SET a.title = $title, a.saga = $saga, a.desc = $desc, 
            a.gradient = $gradient, a.image = $image
      `, {
        id: arc.id, title: arc.title, saga: arc.saga, 
        desc: arc.desc, gradient: arc.gradient, image: arc.image
      });

      // Create Characters and link them to the Arc
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
    console.log("Database seeded successfully!");
  } catch (error) {
    console.error("Error seeding database:", error);
  } finally {
    await session.close();
    await driver.close();
  }
}

seedDatabase();