import React from 'react'
import './footer.css' ;
export default function Footer() {
  return (
  <>
    <footer>  
   <div class="content">
     <div class="left box">
       <div class="upper">
         <div class="topic">MENU</div>
         <p>
         <a href="">Privacy</a><br />
            <a href="">Terms & Conditions</a><br />
            <a href="">About Us</a><br />
            <a href="">FAQs</a>
            </p>
       </div>
       <div class="lower">
         <div class="topic">Contact us</div>
         <div class="phone">
           <a href="#"><i class="fas fa-phone-volume"></i>984 657 7843</a>
         </div>
         <div class="email">
           <a href="#"><i class="fas fa-envelope"></i>artifactsindia@gmail.com</a>
         </div>
       </div>
     </div>
     <div class="middle box">
         <div class="upper">
       <div class="topic">ACCOUNTS</div>
       <div><a href="#">Track Order</a></div>
       <div><a href="#">Cancellation & Refund</a></div>
       <div><a href="#">Shipping & Delivery</a></div>
    </div>
    <div class="lower">
        <div class="topic">HELP</div>
            <div><a href="#">Help Centre</a></div>
            <div><a href="#">Trust & Safety</a></div>
            <div><a href="#">Privacy Settings</a></div>
        </div>
    </div>
     
     <div class="right box">
       <div class="topic">Subscribe us</div>
       <form action="#">
         <input type="text" placeholder="Enter email address" />
         <input type="submit" name="" value="Send" />
         <div class="media-icons">
           <a href="#"><i class="fab fa-facebook-f"></i></a>
           <a href="#"><i class="fab fa-instagram"></i></a>
           <a href="#"><i class="fab fa-twitter"></i></a>
           <a href="#"><i class="fab fa-youtube"></i></a>
           <a href="#"><i class="fab fa-linkedin-in"></i></a>
         </div>
       </form>
     </div>
   </div>
   <div class="bottom">
     <p>Copyright © 2020 <a href="#">ArtifactsIndia</a> All rights reserved</p>
   </div>
   </footer>
  </>
  )
}
