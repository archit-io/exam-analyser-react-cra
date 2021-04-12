import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

export default function toolsSelection() {
  return(
  <React.Fragment>
    <div style={{width: "40%", margin: "50px auto"}}>
      <Card>
        <Card.Header as="h3">Keyword Analyser</Card.Header>
        <Card.Body>
          <Card.Title></Card.Title>
          <Card.Text>
            Keyword analysis of previous years questions and current affairs.
          </Card.Text>
          <Link to="/keyword-analyser"><Button variant="primary">Launch</Button></Link>
        </Card.Body>
      </Card>
    </div>
    <div style={{width: "40%", margin: "50px auto"}}>
      <Card>
        <Card.Header as="h3">Previous Year Questions Analysis</Card.Header>
        <Card.Body>
          <Card.Title></Card.Title>
          <Card.Text>
            Previous years questions analysis for awesome results.
          </Card.Text>
          <Button variant="primary">Launch</Button>
        </Card.Body>
      </Card>
    </div>
    <div style={{width: "40%", margin: "50px auto"}}>
      <Card >
        <Card.Header as="h3">Readymade Trends</Card.Header>
        <Card.Body>
          <Card.Title></Card.Title>
          <Card.Text>
            Readymade trend for your analysis.
          </Card.Text>
          <Button variant="primary">Launch</Button>
        </Card.Body>
      </Card>
    </div>
  </React.Fragment>
  );
}
