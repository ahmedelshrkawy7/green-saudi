// import React from "react";

const hero = () => {
  return <div> 
    {/* <!--********************************
  Code Start From Here 
******************************** --> */}


{/* <!--==============================
Preloader
==============================--> */}
{/* <div className="preloader ">
<div className="preloader-inner">
   <img src="./src/assets/img/logo.svg" alt="Ecofine"/>
   <span className="loader"></span>
</div>
</div> */}



{/* <!--==============================
Hero Area
==============================--> */}
<div className="hero-wrapper hero-1" id="hero">
<div className="global-carousel" id="heroSlider1" data-fade="true" data-slide-show="1" data-arrows="true" data-xl-arrows="true" data-ml-arrows="true" data-lg-arrows="true" data-dots="true" data-xl-dots="true" data-ml-dots="true" data-lg-dots="true">
   <div className="hero-slider" data-bg-src="./src/assets/img/hero/hero-bg-1-1.jpg">
       <div className="container">
           <div className="row">
               
               <div className="col-lg-8">
                   <div className="hero-style1">
                       <span className="hero-subtitle" data-ani="slideinup" data-ani-delay="0.3s">NATURAL ENVIRONMENT</span>
                       <h1 className="hero-title" data-ani="slideinup" data-ani-delay="0.4s"> Leading the way to</h1>
                       <h1 className="hero-title" data-ani="slideinup" data-ani-delay="0.5s">a greener future </h1>
                       <p className="hero-text" data-ani="slideinup" data-ani-delay="0.6s"> Ecology is the scientific study of the relationships between organisms and their environment, including their physical, chemical. </p>
                       <div className="btn-wrap" data-ani="slideinup" data-ani-delay="0.7s">
                           <a href="contact.html" className="btn style2">Join Us Now<i className="fas fa-angle-double-right"></i></a>
                           <a href="contact.html" className="btn style3">Get Started<i className="fas fa-angle-double-right"></i></a>
                       </div>
                   </div>
               </div>
           </div>                
       </div>
   </div>
   {/*  second hero */}
   {/* <div className="hero-slider" data-bg-src="./src/assets/img/hero/hero-bg-1-2.jpg">  
       <div className="container">
           <div className="row">
               
               <div className="col-lg-8 col-md-12">
                   <div className="hero-style1">
                       <span className="hero-subtitle" data-ani="slideinup" data-ani-delay="0.3s">NATURAL ENVIRONMENT</span>
                       <h1 className="hero-title" data-ani="slideinup" data-ani-delay="0.4s">  Saving the planet</h1>
                       <h1 className="hero-title" data-ani="slideinup" data-ani-delay="0.5s">one step at a time</h1>
                       <p className="hero-text" data-ani="slideinup" data-ani-delay="0.6s"> Ecology is the scientific study of the relationships between organisms and their environment, including their physical, chemical. </p>
                       <div className="btn-wrap" data-ani="slideinup" data-ani-delay="0.7s">
                           <a href="contact.html" className="btn style2">Join Us Now<i className="fas fa-angle-double-right"></i></a>
                           <a href="contact.html" className="btn style3">Get Started<i className="fas fa-angle-double-right"></i></a>
                       </div>
                   </div>
               </div>
           </div>                
       </div>
   </div> */}
</div>
<div className="slider-social-area">
   <ul>
       <li>
           <a href="https://www.facebook.com/"> Facebook </a>
       </li>
       <li>
           <a href="https://www.instagram.com/"> Instagram </a>
       </li>
       <li>
           <a href="https://www.twitter.com/"> Twitter </a>
       </li>
   </ul>
</div> 
</div>
</div>;
};

export default hero;
