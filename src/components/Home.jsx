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
                                Hello, My name is Jeffery Pastva and I'm a Full Stack Developer. 
                                I bring strong leadership skills with articulate communication and multi-tasking to the table.
                                I enjoy problem solving and paying attention to detail.

                                Currently in the IT field, I support a wide range of issues and would like to bring the troubleshooting
                                and problem solving skills into my love for code. I wanted a change so I took the Full Stack Development 
                                bootcamp at University of North Carolina Chapel Hill where I learned HTML, CSS, and Javascript as well as frameworks and databases.
                                I love learning and I'm going to continue educating myself in the world of software engineering. 
                                You can find some of my projects by clicking the "My Projects" tab!
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