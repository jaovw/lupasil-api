const { MongoClient } = require("mongodb");

const uri = process.env.DATABASE_URL;

async function updateCAFieldToString() {
  let client;

  try {
    client = await MongoClient.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log("Conectado ao MongoDB Atlas");

    const database = client.db("nome_database");
    const collection = database.collection("nome_collection");

    const result = await collection.updateMany(
      { CA: { $exists: true } },
      [{ $set: { CA: { $toString: "$CA" } } }]
    );

    console.log(`Documentos atualizados: ${result.modifiedCount}`);
  } catch (error) {
    console.error("Erro ao atualizar documentos:", error);
  } finally {
    if (client) {
      await client.close();
      console.log("Conexão encerrada");
    }
  }
}

updateCAFieldToString();
