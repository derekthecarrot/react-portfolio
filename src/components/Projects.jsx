import React from "react"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function Projects () {
    return (
        <React.Fragment>
		    <Container fluid>
                <Row>
                    <Col md={4}>
			        <a href=''><img src='./images/pwgenerator.PNG' alt='Project1' /></a>
				    <h3 className='projhead'>Project 1</h3>
				    <p className='projdesc'>lorem ipsum dolor</p>
                    <div className='projbuttondiv'>
                        <button className='projrepo'>
                            <a href='https://github.com/' target='_blank' rel='noreferrer'> Repository </a>
                        </button>
                    </div>
                    </Col>
                    <Col md={4}>
			        <a href=''><img src='./images/codingquiz.PNG' alt='Project2' /></a>
				    <h3 className='projhead'>Project 2</h3>
				    <p className='projdesc'>lorem ipsum dolor</p>
                    <div className='projbuttondiv'>
                        <button className='projrepo'>
                            <a href='https://github.com/' target='_blank' rel='noreferrer'> Repository </a>
                        </button>
                    </div>
                    </Col>
                    <Col md={4}>
			        <a href=''><img src='./images/workday.PNG' alt='Project3' /></a>
				    <h3 className='projhead'>Project 3</h3>
				    <p className='projdesc'>lorem ipsum dolor</p>
                    <div className='projbuttondiv'>
                        <button className='projrepo'>
                            <a href='https://github.com/' target='_blank' rel='noreferrer'> Repository </a>
                        </button>
                    </div>
                    </Col>
                    <Col md={4}>
			        <a href=''><img src='./images/weatherdashboard.PNG' alt='Project4' /></a>
				    <h3 className='projhead'>Project 4</h3>
				    <p className='projdesc'>lorem ipsum dolor</p>
                    <div className='projbuttondiv'>
                        <button className='projrepo'>
                            <a href='https://github.com/' target='_blank' rel='noreferrer'> Repository </a>
                        </button>
                    </div>
                    </Col>
                    <Col md={4}>
			        <a href=''><img src='./images/notetaker.PNG' alt='Project5' /></a>
				    <h3 className='projhead'>Project 5</h3>
				    <p className='projdesc'>lorem ipsum dolor</p>
                    <div className='projbuttondiv'>
                        <button className='projrepo'>
                            <a href='https://github.com/' target='_blank' rel='noreferrer'> Repository </a>
                        </button>
                    </div>
                    </Col>
                    <Col md={4}>
			        <a href=''><img src='./images/fitness.PNG' alt='Project6' /></a>
				    <h3 className='projhead'>Project 6</h3>
				    <p className='projdesc'>lorem ipsum dolor</p>
                    <div className='projbuttondiv'>
                        <button className='projrepo'>
                            <a href='https://github.com/' target='_blank' rel='noreferrer'> Repository </a>
                        </button>
                    </div>
                    </Col>
                    <Col md={4}>
			        <a href=''><img src='./images/budget.PNG' alt='Project7' /></a>
				    <h3 className='projhead'>Project 7</h3>
				    <p className='projdesc'>lorem ipsum dolor</p>
                    <div className='projbuttondiv'>
                        <button className='projrepo'>
                            <a href='https://github.com/' target='_blank' rel='noreferrer'> Repository </a>
                        </button>
                    </div>
                    </Col>
                    <Col md={4}>
			        <a href=''><img src='./images/marketplace.PNG' alt='Project8' /></a>
				    <h3 className='projhead'>Project 8</h3>
				    <p className='projdesc'>lorem ipsum dolor</p>
                    <div className='projbuttondiv'>
                        <button className='projrepo'>
                            <a href='https://github.com/' target='_blank' rel='noreferrer'> Repository </a>
                        </button>
                    </div>
                    </Col>
                </Row>
		    </Container>
        </React.Fragment>
    )
}

export default Projects