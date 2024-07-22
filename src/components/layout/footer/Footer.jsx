import React from 'react'
import './footer.scss'
import logo from '../logo.jpeg'

function Footer() {
  return (
    <footer id="footer">
    <div className="leftFooter">
      <img src={logo} alt="" />
      
    </div>

    <div className="midFooter">
      <p>Copyrights 2024 &copy;sombhu das</p>
    </div>

    <div className="rightFooter">
      <h4>Follow Us</h4>
      <a href="https://www.linkedin.com/in/sombhu-das-21176823a/">Linkedin</a>
      <a href="https://www.facebook.com/profile.php?id=100051059566434">Facebook</a>
    </div>
  </footer>
  )
}

export default Footer