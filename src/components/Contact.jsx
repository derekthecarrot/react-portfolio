import React from 'react'
import Col from 'react-bootstrap/Col'


function Contact () {

    return (
        <React.Fragment>
            <Col md={4}>
            <div className='contactmediv'>
                <span className='contactspan'>
                    <img className='contactmesec' src='./images/email.png'></img><p className='contactp'>jpastvait@gmail.com</p></span>
                <span className='contactspan'><img className='contactmesec' src='./images/phone.png'></img><p className='contactp'>919-675-8539</p></span>
                <span className='contactspan'><a href='https://www.linkedin.com/in/jeffery-pastva-21ba0018b/' target='_blank' rel='noreferrer'><img className='contactmesec' src='./images/linkedin.png'></img></a></span>
                <span className='contactspan'><a href='https://github.com/derekthecarrot' target='_blank' rel='noreferrer'><img className='contactmesec' src='./images/github.png'></img></a></span>
            </div>
            </Col>
        </React.Fragment>
    )
}

export default Contact

