import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import footer from '../images/footer1.png';
import '../App.css';

function Footer() {
  return (
    <footer className="section-footer testfootercolor">
    	<div className="container">
    <section className="footer-bottom row bcolor">
        <div>
              <b>How to use Keepfb.com?</b>
              <ul className="liststyled">
          <li>Step 1: Play the video, then Right Click -> Show video URL -> then copy the url shown.</li>

          <li>Step 2: Go to keepfb.com. Then paste the URL and Click 'Download'.</li>

          <li>Step 3: Click on "SD" or "HD" (if available) to start downloading the video in either HD quality or normal quality.</li>

          <li>Note 1: If the video opens up instead of downloading, then on Step 3 Right Click the link and "Save as..." to download the video.</li>

          <li>Note 2: If you get an error, then check if the video is public and not private.</li>
          </ul>
        </div>
    </section>

    <hr />
    		<section className="footer-bottom row">
    			<div className="col-sm-3">
    				<br /><i className="fa fa-briefcase acolor" ><a href="#" className="acolor">&nbsp;&nbsp;Seller Login</a></i>
    			</div>
    			<div className="col-sm-6"><center><img src={footer} /></center></div>
    			<div className="col-sm-3">
    				<p className="text-sm-right acolor">
    Copyright &copy 2020<br />
    <a className="acolor" href="http://zinyor.com">ENTIREMART</a>
    				</p>
    			</div>
    		</section>
    	</div>
    </footer>
  );
}

export default Footer;
