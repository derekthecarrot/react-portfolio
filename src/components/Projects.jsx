import React from "react"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function Projects () {
    return (
        <React.Fragment>
		    <Container fluid>
                <Row>
                    <div className='divprojtop'>
                    <h1 className='projhead projtop'>My Projects</h1>
                    </div>
                </Row>
                <Row>
                    <Col md={4}>
                        <a href='https://derekthecarrot.github.io/PasswordGenerator/'><img src='./images/pwgenerator.PNG' alt='Project1' /></a>
                        <h3 className='projhead'>Password Generator</h3>
                        <p className='projdesc'>This is a project that generates passwords based on math random Javascript.</p>
                        <div className='projbuttondiv'>
                        <a href='https://github.com/derekthecarrot/PasswordGenerator' target='_blank' rel='noreferrer'>
                            <button className='projrepo'>
                            </button>
                        </a>
                        </div>
                    </Col>
                    <Col md={4}>
                        <a href='https://derekthecarrot.github.io/Coding-Quiz/'><img src='./images/codingquiz.PNG' alt='Project2' /></a>
                        <h3 className='projhead'>Coding Quiz</h3>
                        <p className='projdesc'>This project uses Javascript in order to dynamically populate questions. It also takes local storage in order to store highscores.</p>
                        <div className='projbuttondiv'>
                        <a href='https://github.com/derekthecarrot/Coding-Quiz' target='_blank' rel='noreferrer'>
                            <button className='projrepo'>
                            </button>
                        </a>
                        </div>
                    </Col>
                    <Col md={4}>
                        <a href='https://derekthecarrot.github.io/DayPlanner/'><img src='./images/workday.PNG' alt='Project3' /></a>
                        <h3 className='projhead'>Day Planner</h3>
                        <p className='projdesc'>This project incorporates the localstorage function along with moment.js in order to show availability</p>
                        <div className='projbuttondiv'>
                        <a href='https://github.com/derekthecarrot/DayPlanner' target='_blank' rel='noreferrer'>
                            <button className='projrepo'>
                            </button>
                        </a>
                        </div>
                    </Col>
                    <Col md={4}>
                        <a href='https://derekthecarrot.github.io/weatherdashboard/'><img src='./images/weatherdashboard.PNG' alt='Project4' /></a>
                        <h3 className='projhead'>Weather Dashboard</h3>
                        <p className='projdesc'>This project applies pulling data from a third party weather api along with local storage.</p>
                        <div className='projbuttondiv'>
                        <a href='https://github.com/derekthecarrot/weatherdashboard' target='_blank' rel='noreferrer'>
                            <button className='projrepo'>
                            </button>
                        </a>
                        </div>
                    </Col>
                    <Col md={4}>
                        <a href='https://boiling-ocean-85036.herokuapp.com/'><img src='./images/notetaker.PNG' alt='Project5' /></a>
                        <h3 className='projhead'>Note Taker</h3>
                        <p className='projdesc'>This project primarily was to focus on express routing. You have the ability to take notes and save them.</p>
                        <div className='projbuttondiv'>
                        <a href='https://github.com/derekthecarrot/Note-Taker' target='_blank' rel='noreferrer'>
                            <button className='projrepo'>
                            </button>
                        </a>
                        </div>
                    </Col>
                    <Col md={4}>
                        <a href='https://guarded-forest-76392.herokuapp.com/?id=624f29e69166ba001684f8fe'><img src='./images/fitness.PNG' alt='Project6' /></a>
                        <h3 className='projhead'>Fitness Tracker</h3>
                        <p className='projdesc'>This project primarily focused on MongoDB/NoSQL. Track your workouts offline and online the application</p>
                        <div className='projbuttondiv'>
                        <a href='https://github.com/derekthecarrot/Fitness-Tracker' target='_blank' rel='noreferrer'>
                            <button className='projrepo'>
                            </button>
                        </a>
                        </div>
                    </Col>
                    <Col md={4}>
                        <a href='https://hidden-earth-94634.herokuapp.com/'><img src='./images/budget.PNG' alt='Project7' /></a>
                        <h3 className='projhead'>Budget Tracker</h3>
                        <p className='projdesc'>This project uses PWA with manifest technology to track budgets. Uses a service worker in order to work offline as well.</p>
                        <div className='projbuttondiv'>
                        <a href='https://github.com/derekthecarrot/progressive-budget-app' target='_blank' rel='noreferrer'>
                            <button className='projrepo'>
                            </button>
                        </a>
                        </div>
                    </Col>
                    <Col md={4}>
                        <a href='https://marketocracyproject.herokuapp.com/'><img src='./images/marketplace.PNG' alt='Project8' /></a>
                        <h3 className='projhead'>Marketocracy E-commerce</h3>
                        <p className='projdesc'>This is a MERN stack application attempting to replicate the functions of an e-commerce website/marketplace.</p>
                        <div className='projbuttondiv'>
                        <a href='https://github.com/derekthecarrot/project3-marketplace' target='_blank' rel='noreferrer'>
                            <button className='projrepo'>
                            </button>
                        </a>
                        </div>
                    </Col>
                    <Col md={4}>
                        <a href='https://derekthecarrot.github.io/Math-Tutoring/'><img src='./images/screenshot.PNG' alt='Project9' /></a>
                        <h3 className='projhead'>Coding Quiz</h3>
                        <p className='projdesc'>Use's react with conditional rendering to tell you if you are correct, validation using math.js - and using react state to store questions, results, and score.</p>
                        <div className='projbuttondiv'>
                        <a href='https://github.com/derekthecarrot/Math-Tutoring' target='_blank' rel='noreferrer'>
                            <button className='projrepo'>
                            </button>
                        </a>
                        </div>
                    </Col>
                </Row>
		    </Container>
        </React.Fragment>
    )
}

export default Projects