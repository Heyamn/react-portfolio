import React from 'react';
import './Skills.css';

const Skills = () => {
  return (
    
    <div className='box-5' id='skills'>
      <h3 style={{textAlign: 'center', fontSize: '10px', color:'white', marginTop:'100px'}} >What Skills I Have</h3>
      <h2 style={{textAlign:'center', fontSize:'30px', color:'white', marginLeft: '20px'}} >My Experience</h2>
      <div className='container-2'>
      <div style={{width:"20%",fontSize:"40px",marginTop:"10px"}} className='skl'>
          <h1 style={{    writingMode: "vertical-lr", transform: "rotate(-180deg)"}}>My Skills</h1>
      </div>
      <div style={{marginLeft:"200px",width:"30%",marginTop:"50px"}} className='skl-1'>
      <h1 style={{color:"white",fontSize:"20px",fontFamily: "Garamond"}}>HTML</h1>
      <span class="fa fa-star checked"></span>
      <span class="fa fa-star checked"></span>
      <span class="fa fa-star checked"></span>
      <span class="fa fa-star checked"></span>
      <span class="fa fa-star"></span>
      <h1 style={{color:"white",fontSize:"20px",fontFamily: "Garamond"}}>CSS</h1>
      <span class="fa fa-star checked"></span>
      <span class="fa fa-star checked"></span>
      <span class="fa fa-star checked"></span>
      <span class="fa fa-star checked"></span>
      <span class="fa fa-star"></span>
      <h1 style={{color:"white",fontSize:"20px",fontFamily: "Garamond"}}>JavaScript</h1>
      <span class="fa fa-star checked"></span>
      <span class="fa fa-star checked"></span>
      <span class="fa fa-star checked"></span>
      <span class="fa fa-star"></span>
      <span class="fa fa-star"></span>
      </div>
      <div style={{width:"25%",marginRight:"270px",marginTop:"50px"}} className='skl-2'>
      <h1 style={{color:"white",fontSize:"20px",fontFamily: "Garamond"}}>C++</h1>
      <span class="fa fa-star checked"></span>
      <span class="fa fa-star checked"></span>
      <span class="fa fa-star checked"></span>
      <span class="fa fa-star "></span>
      <span class="fa fa-star"></span>
      <h1 style={{color:"white",fontSize:"20px",fontFamily: "Garamond"}}>React</h1>
      <span class="fa fa-star checked"></span>
      <span class="fa fa-star checked"></span>
      <span class="fa fa-star checked"></span>
      <span class="fa fa-star checked"></span>
      <span class="fa fa-star"></span>
      <h1 style={{color:"white",fontSize:"20px",fontFamily: "Garamond"}}>Unit Testing</h1>
      <span class="fa fa-star checked"></span>
      <span class="fa fa-star checked"></span>
      <span class="fa fa-star checked"></span>
      <span class="fa fa-star"></span>
      <span class="fa fa-star"></span>
      </div>
      </div>
      
    </div>
    
  )
}

export default Skills;