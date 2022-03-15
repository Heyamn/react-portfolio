import React from 'react';
import Image1 from '../assests/aman.jpeg';
import Image2 from '../assests/aman1.png';
import Resume from '../assests/Aman_Resume.pdf';
import TypeWriter from './TypeWriter';
import Ripples from 'react-ripples';
import { WhatsAppOutlined, GithubOutlined, LinkedinOutlined } from "@ant-design/icons";
import './Header.css'

const Header = () => {

  return (
    <>
      <Ripples>
        <div className='box-1'>
        
            <div className='header'>
                <a className='nav' href='#'>Home</a>
                <a className='nav' href='#about'>About</a>
                <a className='nav' href='#skills'>Skills</a>
                <a className='nav' href='#contact'>Contact</a>
            </div>
            
            <img className='logo' src={Image2} alt='aman1'/>
            <div className='container-main'>
            <div className='icon'>
              
              <a href='https://api.whatsapp.com/send?phone=919680993087&amp;text=Welcome%20to%20my%20website.%20Please%20message%20to%20aman%20here.%20Thank%20You.'><WhatsAppOutlined className='fa' /></a>
              <a href='https://www.linkedin.com/in/aman-tailor-438524191/'><LinkedinOutlined className='fa'/></a>
              <a href='https://github.com/Heyamn'><GithubOutlined className='fa' /> </a>
              
            </div>
              <div style={{width: '50%', paddingLeft: '200px'} }>
               <h2 className='heading'>Hello I'm</h2>
                <h1 className='name'>Aman Tailor</h1>
                <h3 className='job'><TypeWriter /></h3>
                <div style={{marginTop:'60px'}}><a className='btn' href={Resume}>Download CV</a></div>
              </div>
              <div className='container' style={{ marginTop: '100px'}}>
               <img className='image' style={{borderRadius:'400px', width:'70%'}} src={Image1} alt= 'aman' />
               <div className='middle'>
                 <div className='text'>Aman Tailor</div>
               </div>
              </div>
              
            </div>
            
        </div>
        </Ripples>
        
        
    </>
  )
}

export default Header;