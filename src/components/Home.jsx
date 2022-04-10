import React from "react"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Home () {
    return (
        <React.Fragment>
            <Container>
                <Row>
                    <Col md={4}>
                        <div className='aboutme'>
                            <h1 className='aboutmeheader'>About Me</h1>
                        </div>
                        <div>
                            <p className='aboutmedesc'>
                                Hello, I'm currently in IT and looking for a career change into development/coding. 
                                Some of my hobbies are gaming, longboarding, and drawing! 
                                Below you can find some of the projects I've been working on. 
                                Clicking on the images will link you to the deployed application.
                            </p>
                        </div>
                    </Col>
                    <Col md={8}>
                        <div className='aboutmeimgdiv'>
                            <img className='aboutmeimg' src='./images/jpprofile.jpg' alt='JefferyPastva'></img>
                        </div>
                    </Col>
                </Row>
            </Container>
</React.Fragment>

    )
}

export default Home