migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("sydktarhcp2ongv")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "dxq8mcol",
    "name": "item",
    "type": "relation",
    "required": true,
    "unique": false,
    "options": {
      "collectionId": "zwksz57rr7tc2a2",
      "cascadeDelete": true,
      "maxSelect": 1,
      "displayFields": []
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("sydktarhcp2ongv")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "dxq8mcol",
    "name": "item",
    "type": "relation",
    "required": true,
    "unique": false,
    "options": {
      "collectionId": "zwksz57rr7tc2a2",
      "cascadeDelete": false,
      "maxSelect": 1,
      "displayFields": []
    }
  }))

  return dao.saveCollection(collection)
})
