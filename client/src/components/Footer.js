import React from 'react';
import { IconContext } from "react-icons";
import { FaDiscord, FaLinkedin, FaGithub, FaInstagram, FaYoutube } from "react-icons/fa";
import Container from 'react-bootstrap/esm/Container';

function Footer() {
  return (
    <Container>
      <div className="p-4 mb-2 rounded-3 border-top">
        <p className='d-flex justify-content-center'>&copy; {new Date().getFullYear()} | Xander Billa, Inc. All rights reserved.</p>
        <div className='d-flex justify-content-center'>
          <IconContext.Provider value={{ size: "2em", color: "black", style: { marginRight: '0.8rem' } }}>
            <a href="https://discord.com/channels/@me/843582508124995605"><FaDiscord /></a>
            <a href="https://github.com/xanderbilla"><FaGithub /></a>
            <a href="https://www.instagram.com/xander.billa"><FaInstagram /></a>
            <a href="https://www.linkedin.com/in/vikas-singh-212278165/"><FaLinkedin /></a>
            <a href="https://youtube.com/xanderbilla"><FaYoutube /></a>
          </IconContext.Provider>
        </div>
      </div>

    </Container >
  );
}

export default Footer;