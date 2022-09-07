import React from 'react';
import { Container } from 'react-bootstrap';
import './Contact.css';

const Contact = () => {
    return (
        <Container>
            <div className='py-5'>
                <iframe className='map' src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d3652.2401846253647!2d90.38405986445561!3d23.73881294513696!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sShop%20No%3A726%2CLevel%207%2CSuvastu%20Arcade%20ICT%20Bhaban%20New%20Elephant%20Road%20Dhaka%2CBangladesh!5e0!3m2!1sen!2sbd!4v1662587966482!5m2!1sen!2sbd" title="map">
                </iframe>
            </div>
            <div className='bottom'>
                <div className='d-flex align-items-center'>
                    <img src="https://www.pikpng.com/pngl/b/314-3142242_call-now-contact-nbp-telecom-services-icon-clipart.png" width="30px" alt="" />
                    <h5 className='ps-2'>Phone: </h5>
                    <h6 className='ps-3'><small>+8801985007000</small></h6>
                </div>
                <div className='d-flex align-items-center'>
                    <img src="https://i1.wp.com/www.gauss-friends.org/wp-content/uploads/2020/04/location-pin-connectsafely-37.png?ssl=1" width="30px" alt="" />
                    <h5 className='ps-2'>location:</h5>
                    <h6 className='ps-3'><small>Shop No:726, Level 7, Suvastu Arcade ICT Bhaban, New Elephant Road Dhaka, Bangladesh</small></h6>
                </div>
                <div className='d-flex align-items-center'>
                    <img src="https://i.ibb.co/YRM2NnH/gmail.png" width="30px" height="30px" alt="" />
                    <h5 className='ps-2'>Email:</h5>
                    <h6 className='ps-3'><small>laptopgadgetsbds@gmail.com</small></h6>
                    <br />
                    <br />
                </div>
            </div >
        </Container>
    );
};

export default Contact;