import React, { Component } from 'react';



  class Contact extends Component {

  render() {

  return(
  <div>
  <a  name="contact"></a>
    <div className="banner">

        <div className="container">

            <div className="row">
                <div className="col-lg-6">
                    <h2>Contact us</h2>
                </div>
                <div className="col-lg-6">
                    <ul className="list-inline banner-social-buttons">
                        <li>
                            hungerfeed.atak@gmail.com
                        </li>

                    </ul>
                </div>
            </div>

        </div>


    </div>

    <footer>
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <ul className="list-inline">
                        <li>
                            <a href="#">Home</a>
                        </li>
                        <li className="footer-menu-divider">&sdot;</li>
                        <li>
                            <a href="#about">About</a>
                        </li>
                        <li className="footer-menu-divider">&sdot;</li>
                        <li>
                            <a href="#services">Services</a>
                        </li>
                        <li className="footer-menu-divider">&sdot;</li>
                        <li>
                            <a href="#contact">Contact</a>
                        </li>
                    </ul>
                    <p className="copyright text-muted small">Copyright &copy; Hunger Feed</p>
                </div>
            </div>
        </div>
    </footer>
 </div>


  );
 }
}

export default Contact;
