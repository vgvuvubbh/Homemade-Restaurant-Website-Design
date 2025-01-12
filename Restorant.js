import React from "react";
import "./restorant.css";
import { GiHamburgerMenu } from "react-icons/gi";
import IMG2 from "./assets/pic2.jpg";
import IMG3 from "./assets/pic3.jpg";
import IMG4 from "./assets/pic4.jpg";
import IMG5 from "./assets/pic5.jpeg";
import IMG6 from "./assets/pic6.jpeg";
import IMG7 from "./assets/pic7.jpeg";
import IMG8 from "./assets/pic8.jpeg";
import IMG9 from "./assets/pic9.jpeg";
import IMG12 from "./assets/pic12.jpg";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa";
const Restorant = () => {
  return (
    <div className="restorant">
     <navbar className="navbari">
        <div className="logo">Logo</div>
        <GiHamburgerMenu className="pages"/>
     </navbar>
     <div className="page1">
        <div className="title">HOMEMADE RESTORANT</div>
        <div className="text1">Uis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur Image from <a href="https://www.freepik.com/free-photos-vectors/background">Freepik</a></div>
        <a href="#" className="btn1">LEARN MORE</a>
     </div>
     <div className="page2">
        <div className="colorframe1"></div>
        <div className="colorframe2"></div>
      <img alt="pic1"src={IMG2} className="pic1"/>
      <img alt="pic2"src={IMG3} className="pic2"/>
      <div className="menu">Menu</div>
      <div className="text2">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </div>
      <a href="#" className="btn2">learn more</a>
      <div className="colorframe3"></div>

     </div>
     <div className="page3">
      <div className="title3">Learn Cooking Online</div>
      <div className="text3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</div>
    
    <div className="card1">
      <div className="one">1</div>
      <div className="card-text">Base Meals</div>
      <div className="card-text2">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</div>
      <a href="#" className="btn3">LEARN MORE</a>
    </div>

    <div className="card2">
      <div className="two">2</div>
      <div className="card-text3">Knife Skills</div>
      <div className="card-text4">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</div>
      <a href="#" className="btn4">LEARN MORE</a>
    </div>


    <div className="card3">
      <div className="three">2</div>
      <div className="card-text5">Knife Skills</div>
      <div className="card-text6">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</div>
      <a href="#" className="btn5">LEARN MORE</a>
    </div>


     </div>

     <div className="page4">
      <div className="colorframe4"></div>
      <div className="title4">Asian  Food</div>
      <div className="text4">While it is important to have naturally occurring sugars in your diet, many foods contain harmful added sugars that contain no nutritional value.</div>
      <div className="text5">While it is important to have naturally occurring sugars in your diet, many foods contain harmful added sugars that contain no nutritional value.</div>
      <img src={IMG5} alt="pic4" className="pic4"/>
      <img src={IMG6} alt="pic5" className="pic5"/>
      <img src={IMG7} alt="pic6" className="pic6"/>
     </div>
     <div className="page5">
     <img src={IMG8} alt="pic5" className="pic7"/>
     <img src={IMG9} alt="pic6" className="pic8"/>
     <div className="mf">M F</div>
     <div className="ei">E I</div>
     <div className="as">A S</div>
     <div className="th">T H</div>
     <div className="and">AND</div>
     </div>
     <div className="page6">
      <div className="colorframe5"></div>
      <img src={IMG7} alt="pic9" className="pic9"/>
      <img src={IMG6} alt="pic10" className="pic10"/>
      <div className="title5">Farm Products</div>
     <div className="text6">The use of local farm products lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc justo sagittis suscipit ultrices.</div>
     <a href="#" className="btn6">LEARN MORE</a>
     </div>
     <div className="page7">
      <div className="text7">FRESH FOOD EVERYDAY</div>
      <div className="text8">Our Restaurant is a family-owned restaurant that has been proudly serving around the
         1940s located on the corner of Broadway and West 112th Street in New York,<a href="#"> learn more</a></div>
         <FaFacebookF className="icon1"/> 
         <FaTwitter className="icon2"/> 
         <FaInstagram className="icon3"/>
         <FaYoutube className="icon4"/> 
         <FaPinterestP className="icon5"/>  
     </div>
     <div className="page8">
      
<div className="copyright">
        <div className="copyrighttext">@ Copyright Subx. All right reserved</div>
       </div>
     </div>
    </div>
  );
};

export default Restorant;