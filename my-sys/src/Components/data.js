// src/components/DataList.js
import React, { useEffect, useState } from "react";
import { usePocket } from "../contexts/PocketContext";

export const DataList = ({ collection }) => {
  const { pb } = usePocket();
  const [data, setData] = useState([]);

  useEffect(() => {
    pb.collection(collection)
      .getFullList()
      .then((response) => {
        setData(response.data);
      });
  }, [pb, collection]);

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

