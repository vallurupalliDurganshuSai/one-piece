// api/arcs.js
import neo4j from 'neo4j-driver';

export default async function handler(req, res) {
  // Connect to Neo4j using Vercel Environment Variables
  const driver = neo4j.driver(
    process.env.NEO4J_URI,
    neo4j.auth.basic(process.env.NEO4J_USER, process.env.NEO4J_PASSWORD)
  );

  const session = driver.session();

  try {
    // Example Cypher query: Get all Arcs and their connected Characters
    const result = await session.run(`
      MATCH (a:Arc)
      OPTIONAL MATCH (a)-[:HAS_CHARACTER]->(c:Character)
      RETURN a.id AS id, a.title AS title, a.saga AS saga, a.desc AS desc, 
             a.gradient AS gradient, a.image AS image, 
             collect(properties(c)) AS characters
    `);

    // Format the result to match your original ARC_DATA structure
    const arcs = result.records.map(record => ({
      id: record.get('id'),
      title: record.get('title'),
      saga: record.get('saga'),
      desc: record.get('desc'),
      gradient: record.get('gradient'),
      image: record.get('image'),
      characters: record.get('characters')
    }));

    res.status(200).json(arcs);
  } catch (error) {
    console.error("🔥 Neo4j API Error:", error); 
    res.status(500).json({ error: 'Failed to fetch data from Neo4j', details: error.message });
  } finally {
    await session.close();
    await driver.close();
  }
}