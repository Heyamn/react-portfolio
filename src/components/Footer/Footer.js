import React from 'react';
import { WhatsAppOutlined, GithubOutlined, LinkedinOutlined } from "@ant-design/icons";
import './Footer.css' ;

const Footer = () => {
  return (
    <div className='box-4'>
      <h3 style={{textAlign: 'center', fontSize: '10px', color:'white', marginTop:'100px',paddingTop:'50px'}} >Made With ❤️ By Aman !</h3>
      <h2 style={{textAlign:'center', fontSize:'30px', color:'white', marginLeft: '20px'}} >
              <a href='https://api.whatsapp.com/send?phone=919680993087&amp;text=Welcome%20to%20my%20website.%20Please%20message%20to%20aman%20here.%20Thank%20You.'><WhatsAppOutlined className='fa' /></a>
              <a href='https://www.linkedin.com/in/aman-tailor-438524191/'><LinkedinOutlined className='fa'/></a>
              <a href='https://github.com/Heyamn'><GithubOutlined className='fa' /> </a></h2>
    </div>
  )
}

export default Footer;