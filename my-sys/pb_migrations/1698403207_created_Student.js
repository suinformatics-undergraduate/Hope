/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "evch68f8pztal3h",
    "created": "2023-10-27 10:40:07.715Z",
    "updated": "2023-10-27 10:40:07.715Z",
    "name": "Student",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "cjvoazlg",
        "name": "Full_name",
        "type": "text",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "vhl4zsf9",
        "name": "Number",
        "type": "text",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "hlvvcfrz",
        "name": "Email",
        "type": "email",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "exceptDomains": null,
          "onlyDomains": null
        }
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("evch68f8pztal3h");

  return dao.deleteCollection(collection);
})
