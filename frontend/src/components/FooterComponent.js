import React, { useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDiscord } from '@fortawesome/free-brands-svg-icons';

function FooterComponent() {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  // Function to handle button click
  const handleDiscordClick = () => {
    window.open('https://google.com', '_blank'); // Open the link in a new tab
  };

  return (
    <footer style={footerStyles}>
      <Container>
        <Row className="mt-4">
          <Col md={6}>
            <h5 style={footerTitleStyles}>About Us</h5>
            <p style={footerTextStyles}>
              We are a passionate team bringing the best products to our customers. Follow us on social media!
            </p>
          </Col>

          <Col md={6} className="text-md-right">
            {/* Discord Button */}
            <div>
            <Button
              variant="outline-light"
              style={{
                ...contactButtonStyles,
                backgroundColor: isHovered ? 'white' : '#6a0dad',
                color: isHovered ? '#6a0dad' : 'white',
              }}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              onClick={handleDiscordClick} // Navigate to the Discord link on click
              className="ml-3"
            >
              <FontAwesomeIcon icon={faDiscord} className="icons"  style={{
                ...contactButtonStyles,
                backgroundColor: isHovered ? 'white' : '#6a0dad',
                color: isHovered ? '#6a0dad' : 'white',
              }}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              onClick={handleDiscordClick}/>
              Server Discord
            </Button>
            </div>
          </Col>
        </Row>

        <Row>
          <Col className="text-center mt-3">
            <p style={footerTextStyles}>© 2024 MyStore - All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

// Styling for the footer and elements
const footerStyles = {
  background: 'linear-gradient(135deg, #000, #333)',
  color: 'white',
  padding: '2rem 0',
};

const footerTitleStyles = {
  fontWeight: 'bold',
  fontSize: '1.2rem',
};

const footerTextStyles = {
  color: '#ddd',
};

const contactButtonStyles = {
  backgroundColor: '#6a0dad',
  color: 'white',
  borderRadius: '20px',
  borderColor: '#6a0dad',
  padding: '5px 8px',
  transition: 'background-color 0.3s ease, color 0.3s ease',
};

const bitin = {
    marginTop: '100px',
}

export default FooterComponent;
