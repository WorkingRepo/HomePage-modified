import React, { Component } from 'react';



  class Services extends Component {

  render() {

  return(
  <div>
  <a  name="services"></a>
    <div className="content-section-a">

        <div className="container">
            <div className="row">
                <div className="col-lg-5 col-sm-6">
                    <hr className="section-heading-spacer"/>
                    <div className="clearfix"></div>
                    <h2 className="section-heading">Find nearby Restaurants:<br/></h2>
                    <p className="lead">Find nearby restaurants based on your current location</p>
                </div>
                <div className="col-lg-5 col-lg-offset-2 col-sm-6">
                    <img className="img-responsive" src="src/rest.jpg" alt="" width="500px" height="100px"/>
                </div>
            </div>

        </div>


    </div>


    <div className="content-section-b">

        <div className="container">

            <div className="row">
                <div className="col-lg-5 col-lg-offset-1 col-sm-push-6  col-sm-6">
                    <hr className="section-heading-spacer"/>
                    <div className="clearfix"></div>
                    <h2 className="section-heading">Search for a restaurant</h2>
                    <p className="lead">Search for a particular restaurant by giving its name.</p>
              </div>
                <div className="col-lg-5 col-sm-pull-6  col-sm-6">
                    <img className="img-responsive" src="src/food1.jpg" alt=""/>
                </div>
            </div>

        </div>


    </div>

    <div className="content-section-a">

        <div className="container">

            <div className="row">
                <div className="col-lg-5 col-sm-6">
                    <hr className="section-heading-spacer"/>
                    <div className="clearfix"></div>
                    <h2 className="section-heading">Find complete information about restaurants</h2>
                    <p className="lead">Visit restaurants homepage and facebook page,call them,know their opening and closing times,etc</p>
                </div>
                <div className="col-lg-5 col-lg-offset-2 col-sm-6">
                    <img className="img-responsive" src="src/food4.jpg" alt=""/>
                </div>
            </div>

        </div>


    </div>


 </div>


  );
 }
}

export default Services;
