// src/components/Player.js
import React from "react";
import Card from "react-bootstrap/Card";

const Player = ({
  name = "Unknown",
  team = "Unknown",
  nationality = "Unknown",
  jerseyNumber = 0,
  age = 0,
  imageUrl = "https://via.placeholder.com/150",
}) => {
  return (
    <Card style={{ width: "18rem", margin: "10px", display: "inline-block" }}>
      <Card.Img variant="top" src={imageUrl} style={{ height: "200px", objectFit: "cover" }} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          <p><strong>Team:</strong> {team}</p>
          <p><strong>Nationality:</strong> {nationality}</p>
          <p><strong>Jersey Number:</strong> {jerseyNumber}</p>
          <p><strong>Age:</strong> {age}</p>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Player;