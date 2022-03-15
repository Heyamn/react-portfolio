import React from 'react';
import './About.css';

const About = () => {
  return (
  <>
  
    <div className='box-2' id='about'>
      <h3 style={{textAlign: 'center', fontSize: '10px', color:'white', marginTop:'100px'}} >Get To Know</h3>
      <h2 style={{textAlign:'center', fontSize:'30px', color:'white', marginLeft: '20px'}} >About Me</h2>
      <div className='container-1'>
        <div style={{width:"20%",fontSize:"50px",marginTop:"100px"}} className='edu'>
            <h1 style={{    writingMode: "vertical-lr", transform: "rotate(-180deg)"}} >About</h1>
        </div>
        <div style={{marginLeft:"200px",width:"30%",marginTop:"50px"}}>
            <h1 style={{color:"crimson",fontFamily: "Garamond"}}>Intermediate</h1>
            <p style={{color:"white",fontSize:"25px",fontFamily:"Courier New"}}>G.B.N Senior Secondary School</p>
            <h3 style={{color:"white"}}>2019-2023</h3>
            <h3 style={{color:"white",fontSize:"15px"}}>77%</h3>
            <h1 style={{color:"crimson",fontFamily: "Garamond"}}>Matriclation</h1>
            <p style={{color:"white",fontSize:"25px",fontFamily:"Courier New"}}>G.B.N Senior Secondary School</p>
            <h3 style={{color:"white"}}>2016-2018</h3>
            <h3 style={{color:"white",fontSize:"15px"}}>74%</h3>
            
        </div>
        <div style={{width:"25%",marginRight:"270px",marginTop:"50px"}}>
            <h1 style={{color:"crimson",fontFamily: "Garamond"}}>Undergraduate</h1>
            <p style={{color:"white",fontSize:"25px",fontFamily:"Courier New"}}>Indian Institute Of Information Technology,Una</p>
            <p style={{color:"white",fontSize:"25px",fontFamily:"Courier New"}}>B.Tech Electronic and Communication Technology</p>
            <h3 style={{color:"white"}}>2019-2023</h3>
        </div>
    </div>
    </div>
    
    
  </>
  )}

export default About;