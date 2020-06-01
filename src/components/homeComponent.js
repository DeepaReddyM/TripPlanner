import React,{Component} from 'react';
 import './styles.css';
 import 'font-awesome/css/font-awesome.css';
import 'bootstrap-social/bootstrap-social.css';
import Header from './header';
class Home extends Component{
  constructor(props)
  {
    super(props);
    this.state=
    {
      
      
      image: 'assets/img/connect.jpg'
    };
   
  }
  submitTrip = (event) =>{
    event.preventDefault()
    const userId = this.props.user.id
    this.props.createTrip(userId)
  }
  componentDidMount(){
   
   
    this.startCarousel();
  }
  startCarousel=()=>{
    const theHP = this;
    const images = ['assets/img/connect.jpg', 'assets/img/plan.jpg', 'assets/img/travel.png'];
    let counter = 0;
    this.carouselInterval = setInterval(() => {
      counter = (counter + 1) % (images.length);
      theHP.setState({
        image: images[counter]
      });
    }, 5000);
  };
  render(){
  return (
   <div>
     <Header/>
        <div className="carousel-container">
        <div id="carousel-text">
              <h1 className="hp-header"><strong>Tripineree</strong></h1>
            </div>
        <img className="carousel-image" src={this.state.image} />
        </div>
        <div className="tripineree-intro">
          <h3><i>Welcome to Tripineree</i></h3>
          <p>Don't call it a dream<br></br>
            Call it a plan
          </p>
        </div>
        <footer className="homepage-footer">
          <div className="footer-names">
          <div className="container">
            <div className="row justify-content-center">            
                <div className="col-7 col-sm-5">
                    <h5>Our Address</h5>
                    <address>
             Road No. 12<br />
             Jubliee Hills<br />
             HYDERABAD<br />
             <i className="fa fa-phone fa-lg"></i>: +7997023344<br />
             <i className="fa fa-fax fa-lg"></i>: +8332868155<br />
             <i className="fa fa-envelope fa-lg"></i>: <a href="mailto:tripineree@plan.net">                   
             tripineree@plan.net</a>
                    </address>
                </div>
                <div className="col-12 col-sm-4 align-self-center">
                    <div className="text-center">
                        <a className="btn btn-social-icon btn-google" href="http://google.com/+"><i className="fa fa-google-plus"></i></a>
                        <a className="btn btn-social-icon btn-facebook" href="http://www.facebook.com/profile.php?id="><i className="fa fa-facebook"></i></a>
                        <a className="btn btn-social-icon btn-linkedin" href="http://www.linkedin.com/in/"><i className="fa fa-linkedin"></i></a>
                        <a className="btn btn-social-icon btn-twitter" href="http://twitter.com/"><i className="fa fa-twitter"></i></a>
                        <a className="btn btn-social-icon btn-google" href="http://youtube.com/"><i className="fa fa-youtube"></i></a>
                        <a className="btn btn-social-icon" href="mailto:"><i className="fa fa-envelope-o"></i></a>
                    </div>
                </div>
            </div>
            <div className="row justify-content-center">            
                <div className="col-auto">
                    <p>© Copyright 2019 Tripineree</p>
                </div>
            </div>
        </div>
          </div>
        </footer>
        </div>
  );
}
}
export default Home;
