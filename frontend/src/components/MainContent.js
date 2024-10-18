import React from "react";
import { Card } from "react-bootstrap";
import "../style/MainContent.css"; // Import file CSS untuk styling

function MainContent() {
  return (
    <div className="content">
      <div className="left">
        <h1>Welcome</h1>
      </div>
      <div className="right">
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src="https://via.placeholder.com/150" />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              This is a card with a placeholder image. You can replace this image with your own photo.
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}

export default MainContent;
