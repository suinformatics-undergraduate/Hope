// src/components/EditData.js
import React, { useState } from "react";
import { usePocket } from "../contexts/PocketContext";

export const EditData = ({ item }) => {
  const { pb } = usePocket();
  const [name, setName] = useState(item.name);
  const [description, setDescription] = useState(item.description);

  const handleSubmit = async (e) => {
    e.preventDefault();

    await pb.collection("my-collection")
      .update(item.id, {
        name,
        description,
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        name="description"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

/ src/routes/EditData.js
import React from "react";
import { EditData } from "../components/EditData";

const EditDataRoute = ({ item })