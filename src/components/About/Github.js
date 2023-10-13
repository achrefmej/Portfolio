import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Row } from "react-bootstrap";
import './Services.css'
import{BsCheck2All} from 'react-icons/bs'
function Github() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
      <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
      What i offer <strong className="purple">Services</strong>
      </h1>
      <div className="container services__container">

<article className="service">
  
   <div className="service__head">
   <h3>Mobile Development</h3>
   </div>
<ul className='service__list'>

<li> 
  <BsCheck2All className='service__liste-icon'/>
  <p>iOS Development: I specialize in creating feature-rich, intuitive,
     and scalable iOS applications that are compatible with various devices, 
     utilizing the latest technologies and tools such as Swift and Xcode</p>
</li>

<li> 
  <BsCheck2All className='service__liste-icon'/>
  
  <p>Android Development: I develop high-performance Android applications
     that leverage the full potential of the platform,
      ensuring seamless functionality and optimal user experience.</p>
</li>
<li> 
  <BsCheck2All className='service__liste-icon'/>

  <p>Utilizing frameworks like React Native or Flutter,
     I can create cross-platform applications that run smoothly on both iOS and Android devices,
     significantly reducing development time and costs while maintaining a native-like experience.</p>
</li>



</ul>

</article>
{/* web development*/}

<article className="service">
  
   <div className="service__head">
   <h3>web Development</h3>
   </div>
<ul className='service__list'>

<li> 
  <BsCheck2All className='service__liste-icon'/>
  <p>I specialize in creating customized, scalable, and high-performance websites that are tailored to your unique requirements. By leveraging modern technologies and frameworks such as React, .net ,html/css, JavaScript, and nodejs ,springboot, Symfony/PHP,</p>
</li>

<li> 
  <BsCheck2All className='service__liste-icon'/>
  <p>I develop responsive websites that adapt seamlessly to desktops, tablets, and mobile devices, providing an optimal user experience for all visitors.</p>
</li>



</ul>

</article>
{/*en ui/ux*/}


<article className="service">
  
   <div className="service__head">
   <h3>Game Development</h3>
   </div>
<ul className='service__list'>

<li> 
  <BsCheck2All className='service__liste-icon'/>
  <p> creating visually stunning and captivating virtual environments.</p>
</li>

<li> 
  <BsCheck2All className='service__liste-icon'/>
  <p>avatar creation and customization services</p>
</li>
<li> 
  <BsCheck2All className='service__liste-icon'/>
  <p>Interactive Experiences and Gameplay</p>
</li>
<li> 
  <BsCheck2All className='service__liste-icon'/>
  <p>develop social features and networking capabilities within the metaverse, allowing users to connect, communicate, and collaborate with others in real-time</p>
</li>



</ul>

</article>
{/*en ui/ux*/}








 
 </div>

    </Row>
  );
}

export default Github;
