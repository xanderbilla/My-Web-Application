import React from 'react';
import { IconContext } from "react-icons";
import { FaDiscord, FaLinkedin, FaInstagram, FaYoutube } from "react-icons/fa";
import Container from 'react-bootstrap/esm/Container';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <Container>
      <div className="p-4 mb-2 rounded-3 border-top">
        <p className='d-flex justify-content-center'>&copy; {new Date().getFullYear()} | Xander Billa, Inc. All rights reserved.</p>
        <div className='d-flex justify-content-center'>
          <IconContext.Provider value={{ size: "2em", color: "black", style: { marginRight: '0.8rem' } }}>
            <Link to="https://discord.com/channels/@me/843582508124995605"><FaDiscord /></Link>
            <Link to="https://www.instagram.com/xander.billa"><FaInstagram /></Link>
            <Link to="https://www.linkedin.com/in/vikas-singh-212278165/"><FaLinkedin /></Link>
            <Link to="https://youtube.com/xanderbilla"><FaYoutube /></Link>
          </IconContext.Provider>
        </div>
      </div>

    </Container >
  );
}

export default Footer;