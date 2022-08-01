import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import style from "./Footer.module.scss";
const Footer = () => {
  return (
    <div className={style.footerMainContainer}>
      <Container>
        <div className={style.footerInnerContainer}>
          <div className={style.footerDiv1}>
            <p className={`p-16`}>Address</p>
            <p className={`p-14`}>73724 Route 30</p>
            <p className={`p-14`}>South Richmond Hill, NY 11419 </p>
            <p className={`p-14`}>Tel: (603)-677-3400</p>
            <p className={`p-14`}>Email: info@yourdomain.com</p>
            <p className={`p-14`}>Web: yourdomain.com</p>
          </div>
          <div className={style.footerDiv2}>
            <p className={`p-16`}>Help Center</p>
            <p className={`p-14`}>Documentation</p>
            <p className={`p-14`}>Tutorials</p>
            <p className={`p-14`}>Term of Use</p>
            <p className={`p-14`}>Privacy Policy</p>
          </div>
          <div className={style.footerDiv3}>
            <p className={`p-16`}>About Us</p>
            <p className={`p-14`}>Our Team</p>
            <p className={`p-14`}>Company</p>
            <p className={`p-14`}>Jobs</p>
            <p className={`p-14`}>News Latter</p>
          </div>
          <div className={style.footerDiv4}>
            <p className={`p-16`}>Tools</p>
            <p className={`p-14`}>Create Acccount</p>
            <p className={`p-14`}>Log In</p>
            <p className={`p-14`}>Services</p>
            <p className={`p-14`}>Sitemap</p>
          </div>
          <div className={style.footerDiv5}>
            <p className={`p-16`}>Get In Touch</p>
            <p className={`p-14`}>Contact Us</p>
            <p className={`p-14`}>Join Us</p>
            <p className={`p-14`}>Invite Us</p>
            <p className={`p-14`}>Donate</p>
          </div>
        </div>
        <div className={style.footerBottom}>
          <div>
            <p>Facebook. Twitter. Instagram. LinkedIn. Google Plus.</p>
          </div>
          <div>
            <p>Copyright © 2017 LMS EDUCATION. All Rights Reserved</p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
