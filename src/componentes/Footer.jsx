import React from "react";
import { Link} from "react-router-dom";

const Footer =()=>{
    return(
 <footer id="footer">
 {/* <!-- ======= Footer ======= --> */}
 <div className="footer-top">
   <div className="container">
     <div className="row">

       <div className="col-lg-12 text-center">
         <div className="footer-info">

          
         
            
           <Link to="/" className="" style={{color: 'white'}} href="#about">
            <h3> SOFTCAMP </h3>       
           </Link>
           
           <p>
             SOFTBALL <br/>
             Carrera 4 # 15 - 30, Santa Marta<br/><br/>
             <strong>Teléfono:</strong> +1 555 666 777<br/>
             <strong>Email:</strong> campeonatossoftball@softcamp.com<br/>
           </p>

           {/*
           <div className="social-links mt-3">
             <a href="#" className="twitter"><i className="bx bxl-twitter"></i></a>
             <a href="#" className="facebook"><i className="bx bxl-facebook"></i></a>
             <a href="#" className="instagram"><i className="bx bxl-instagram"></i></a>
             <a href="#" className="google-plus"><i className="bx bxl-skype"></i></a>
             <a href="#" className="linkedin"><i className="bx bxl-linkedin"></i></a>
           </div>
           */}

           
         </div>
       </div>
      {/*
       <div className="col-lg-2 col-md-6 footer-links">
         <h4>Useful Links</h4>
         <ul>
           <li><i className="bx bx-chevron-right"></i> <a href="#">Home</a></li>
           <li><i className="bx bx-chevron-right"></i> <a href="#">About us</a></li>
           <li><i className="bx bx-chevron-right"></i> <a href="#">Services</a></li>
           <li><i className="bx bx-chevron-right"></i> <a href="#">Terms of service</a></li>
           <li><i className="bx bx-chevron-right"></i> <a href="#">Privacy policy</a></li>
         </ul>
       </div>

       <div className="col-lg-3 col-md-6 footer-links">
         <h4>Our Services</h4>
         <ul>
           <li><i className="bx bx-chevron-right"></i> <a href="#">Web Design</a></li>
           <li><i className="bx bx-chevron-right"></i> <a href="#">Web Development</a></li>
           <li><i className="bx bx-chevron-right"></i> <a href="#">Product Management</a></li>
           <li><i className="bx bx-chevron-right"></i> <a href="#">Marketing</a></li>
           <li><i className="bx bx-chevron-right"></i> <a href="#">Graphic Design</a></li>
         </ul>
       </div>
      
       
       <div className="col-lg-4 col-md-6 footer-newsletter">
         <h4>Our Newsletter</h4>
         <p>Tamen quem nulla quae legam multos aute sint culpa legam noster magna</p>
         <form action="" method="post">
           <input type="email" name="email"/><input type="submit" value="Subscribe"/>
         </form>

       </div>
       */}
      

     </div>
   </div>
 </div>

 <div className="container">
   <div className="copyright">
     &copy; Copyright <strong><span>Gp</span></strong>. All Rights Reserved
   </div>
   <div className="credits">
     {/* <!-- All the links in the footer should remain intact. --> */}
     {/* <!-- You can delete the links only if you purchased the pro version. --> */}
     {/* <!-- Licensing information: https://bootstrapmade.com/license/ --> */}
     {/* <!-- Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/gp-free-multipurpose-html-bootstrap-template/ --> */}
     Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
   </div>
 </div>
</footer>
);
}

export default Footer;