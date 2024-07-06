import React, { useRef } from 'react';
import './Home.css'; 
import banoz from './nav/photo.jfif';
import cvpdf from './nav/shbCV.pdf';
//import { slide as Menu } from 'react-burger-menu';
//import menuLogo from './nav/menu-logo.png';
import './nav/nav.css'; 
import Nav from './nav/Nav';
import Carusel from './Carusel';

function Home() {

  const aboutRef = useRef(null);
  const contactRef = useRef(null);
  return (
    
    
    <>
      <Nav aboutRef={aboutRef}  />
      <div className="container-fluid bg-primary d-flex align-items-center mb-5 py-5" id="home" style={{ minHeight: '100vh' }}>
      <div className="container">
        <div className="row align-items-center justify-content-center">
          <div className="col-lg-5 col-md-6 text-center">
            <img src={banoz} className="img-fluid w-100 rounded-circle shadow-sm" alt="Arrow" />
          </div>
          <div className="col-lg-7 col-md-6 text-center">
            <h1 className="display-3 text-uppercase text-primary mb-2" style={{ WebkitTextStroke: '2px #ffffff' }}>Shaban Buja</h1>
            <h1 className="typed-text-output d-inline font-weight-lighter text-white"></h1>
            <div className="typed-text d-none">Web Designer, Web Developer, Front End Developer, Apps Designer, Apps Developer</div>
            <div className="d-flex flex-column flex-sm-row align-items-center justify-content-center justify-content-lg-start pt-5">
              <a href={cvpdf} className="btn btn-outline-light mb-3 mb-sm-0 mr-sm-5" download>Download CV</a>
              <a href="https://github.com/banibuja" target="_blank" rel="noopener noreferrer" className="btn btn-outline-light mb-3 mb-sm-0 mr-sm-5">GitHub</a>
              <a href="https://www.linkedin.com/in/banibuja" target="_blank" rel="noopener noreferrer" className="btn btn-outline-light mb-3 mb-sm-0 mr-sm-5">LinkedIn</a>
            </div>
          </div>
        </div>
      </div>
    </div>


    <div className="container-fluid py-5" id="about" ref={aboutRef}>
    <div className="container">
          <div className="position-relative d-flex align-items-center justify-content-center">
            <h1 className="display-1 text-uppercase text-white" style={{ WebkitTextStroke: '1px #dee2e6' }}>About</h1>
            <h1 className="position-absolute text-uppercase text-primary">About Me</h1>
          </div>
          <div className="row align-items-center">
            <div className="col-lg-5 pb-4 pb-lg-0">
              <img src={banoz} className="img-fluid rounded w-100" alt="Arrow" />

            </div>
            <div className="col-lg-7">
              <h3 className="mb-4"> Full-Stack Developer</h3>
              {/* <p>A passionate software developer 
             </p> */}
              <div className="row mb-3">
                <div className="col-sm-6 py-2"><h6>Name: <span className="text-secondary">Shaban Buja</span></h6></div>
                <div className="col-sm-6 py-2"><h6>Birthday: <span className="text-secondary">29 February 2004</span></h6></div>
                {/* <div className="col-sm-6 py-2"><h6>Degree: <span className="text-secondary">Master</span></h6></div> */}
                <div className="col-sm-6 py-2"><h6>Experience: <span className="text-secondary">2 Years</span></h6></div>
                <div className="col-sm-6 py-2"><h6>Phone: <span className="text-secondary">+383 (45) 963-828</span></h6></div>
                <div className="col-sm-6 py-2"><h6>Email: <span className="text-secondary">shaban.buja111@gmail.com</span></h6></div>
                <div className="col-sm-6 py-2"><h6>Address: <span className="text-secondary">22 Bujan, Lipjan, Kosova</span></h6></div>
                <div className="col-sm-6 py-2"><h6>Freelance: <span className="text-secondary">Available</span></h6></div>
              </div>
              <a href="" className="btn btn-outline-primary mr-4">Hire Me</a>
            </div>
          </div>
        </div>
      </div>

      {/* <Carusel /> */}
{/* 
      <div className="container-fluid py-5" id="qualification">
        <div className="container">
          <div className="position-relative d-flex align-items-center justify-content-center">
            <h1 className="display-1 text-uppercase text-white" style={{ WebkitTextStroke: '1px #dee2e6' }}>Quality</h1>
            <h1 className="position-absolute text-uppercase text-primary">Education & Experience</h1>
          </div>
          <div className="row align-items-center">
            <div className="col-lg-6">
              <h3 className="mb-4">My Education</h3>
              <div className="border-left border-primary pt-2 pl-4 ml-2">
                <div className="position-relative mb-4">
                  <i className="far fa-dot-circle text-primary position-absolute" style={{ top: '2px', left: '-32px' }}></i>
                  <h5 className="font-weight-bold mb-1">Master In CSE</h5>
                  <p className="mb-2"><strong>Cambridge University</strong> | <small>2000 - 2050</small></p>
                  <p>Tempor eos dolore amet tempor dolor tempor. Dolore ea magna sit amet dolor eirmod. Eos ipsum est tempor dolor. Clita lorem kasd sed ea lorem diam ea lorem eirmod duo sit ipsum stet lorem diam</p>
                </div>
                <div className="position-relative mb-4">
                  <i className="far fa-dot-circle text-primary position-absolute" style={{ top: '2px', left: '-32px' }}></i>
                  <h5 className="font-weight-bold mb-1">Master In CSE</h5>
                  <p className="mb-2"><strong>Cambridge University</strong> | <small>2000 - 2050</small></p>
                  <p>Tempor eos dolore amet tempor dolor tempor. Dolore ea magna sit amet dolor eirmod. Eos ipsum est tempor dolor. Clita lorem kasd sed ea lorem diam ea lorem eirmod duo sit ipsum stet lorem diam</p>
                </div>
                <div className="position-relative mb-4">
                  <i className="far fa-dot-circle text-primary position-absolute" style={{ top: '2px', left: '-32px' }}></i>
                  <h5 className="font-weight-bold mb-1">Master In CSE</h5>
                  <p className="mb-2"><strong>Cambridge University</strong> | <small>2000 - 2050</small></p>
                  <p>Tempor eos dolore amet tempor dolor tempor. Dolore ea magna sit amet dolor eirmod. Eos ipsum est tempor dolor. Clita lorem kasd sed ea lorem diam ea lorem eirmod duo sit ipsum stet lorem diam</p>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <h3 className="mb-4">My Experience</h3>
              <div className="border-left border-primary pt-2 pl-4 ml-2">
                <div className="position-relative mb-4">
                  <i className="far fa-dot-circle text-primary position-absolute" style={{ top: '2px', left: '-32px' }}></i>
                  <h5 className="font-weight-bold mb-1">Web Designer</h5>
                  <p className="mb-2"><strong>Soft Company</strong> | <small>2000 - 2050</small></p>
                  <p>Tempor eos dolore amet tempor dolor tempor. Dolore ea magna sit amet dolor eirmod. Eos ipsum est tempor dolor. Clita lorem kasd sed ea lorem diam ea lorem eirmod duo sit ipsum stet lorem diam</p>
                </div>
                <div className="position-relative mb-4">
                  <i className="far fa-dot-circle text-primary position-absolute" style={{ top: '2px', left: '-32px' }}></i>
                  <h5 className="font-weight-bold mb-1">Web Designer</h5>
                  <p className="mb-2"><strong>Soft Company</strong> | <small>2000 - 2050</small></p>
                  <p>Tempor eos dolore amet tempor dolor tempor. Dolore ea magna sit amet dolor eirmod. Eos ipsum est tempor dolor. Clita lorem kasd sed ea lorem diam ea lorem eirmod duo sit ipsum stet lorem diam</p>
                </div>
                <div className="position-relative mb-4">
                  <i className="far fa-dot-circle text-primary position-absolute" style={{ top: '2px', left: '-32px' }}></i>
                  <h5 className="font-weight-bold mb-1">Web Designer</h5>
                  <p className="mb-2"><strong>Soft Company</strong> | <small>2000 - 2050</small></p>
                  <p>Tempor eos dolore amet tempor dolor tempor. Dolore ea magna sit amet dolor eirmod. Eos ipsum est tempor dolor. Clita lorem kasd sed ea lorem diam ea lorem eirmod duo sit ipsum stet lorem diam</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}

      <div className="container-fluid py-5" id="skill">
  <div className="container">
    <div className="position-relative d-flex align-items-center justify-content-center">
      <h1 className="display-1 text-uppercase text-white" style={{ WebkitTextStroke: '1px #dee2e6' }}>Skills</h1>
      <h1 className="position-absolute text-uppercase text-primary">My Skills</h1>
    </div>
    <div className="row align-items-center">
      <div className="col-md-6">
        <div className="skill mb-4">
          <div className="d-flex justify-content-between">
            <h6 className="font-weight-bold">HTML, CSS, Bootstrap</h6>
            <h6 className="font-weight-bold">85%</h6>
          </div>
          <div className="progress">
            <div className="progress-bar bg-primary" role="progressbar" style={{ width: '80%' }} aria-valuenow={80} aria-valuemin={0} aria-valuemax={100}></div>
          </div>
        </div>
        <div className="skill mb-4">
          <div className="d-flex justify-content-between">
            <h6 className="font-weight-bold">MySQL</h6>
            <h6 className="font-weight-bold">95%</h6>
          </div>
          <div className="progress">
            <div className="progress-bar bg-warning" role="progressbar" style={{ width: '95%' }} aria-valuenow={95} aria-valuemin={0} aria-valuemax={100}></div>
          </div>
        </div>
        <div className="skill mb-4">
          <div className="d-flex justify-content-between">
            <h6 className="font-weight-bold">PHP, Java</h6>
            <h6 className="font-weight-bold">80%</h6>
          </div>
          <div className="progress">
            <div className="progress-bar bg-danger" role="progressbar" style={{ width: '80%' }} aria-valuenow={80} aria-valuemin={0} aria-valuemax={100}></div>
          </div>
        </div>
      </div>
      <div className="col-md-6">
        <div className="skill mb-4">
          <div className="d-flex justify-content-between">
            <h6 className="font-weight-bold">Javascript</h6>
            <h6 className="font-weight-bold">90%</h6>
          </div>
          <div className="progress">
            <div className="progress-bar bg-danger" role="progressbar" style={{ width: '90%' }} aria-valuenow={90} aria-valuemin={0} aria-valuemax={100}></div>
          </div>
        </div>
        <div className="skill mb-4">
          <div className="d-flex justify-content-between">
            <h6 className="font-weight-bold">React JS</h6>
            <h6 className="font-weight-bold">95%</h6>
          </div>
          <div className="progress">
            <div className="progress-bar bg-dark" role="progressbar" style={{ width: '95%' }} aria-valuenow={95} aria-valuemin={0} aria-valuemax={100}></div>
          </div>
        </div>
        <div className="skill mb-4">
          <div className="d-flex justify-content-between">
            <h6 className="font-weight-bold">NodeJS</h6>
            <h6 className="font-weight-bold">85%</h6>
          </div>
          <div className="progress">
            <div className="progress-bar bg-info" role="progressbar" style={{ width: '85%' }} aria-valuenow={85} aria-valuemin={0} aria-valuemax={100}></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

{/* <div className="container-fluid pt-5" id="service">
    <div className="container">
        <div className="position-relative d-flex align-items-center justify-content-center">
            <h1 className="display-1 text-uppercase text-white" style={{ WebkitTextStroke: '1px #dee2e6' }}>Service</h1>
            <h1 className="position-absolute text-uppercase text-primary">My Services</h1>
        </div>
        <div className="row pb-3">
            <div className="col-lg-4 col-md-6 text-center mb-5">
                <div className="d-flex align-items-center justify-content-center mb-4">
                    <i className="fa fa-2x fa-laptop service-icon bg-primary text-white mr-3"></i>
                    <h4 className="font-weight-bold m-0">Web Design</h4>
                </div>
                <p>Justo sit justo eos amet tempor amet clita amet ipsum eos elitr. Amet lorem lorem lorem est amet labore eirmod erat clita</p>
                <a className="border-bottom border-primary text-decoration-none" href="">Read More</a>
            </div>
            <div className="col-lg-4 col-md-6 text-center mb-5">
                <div className="d-flex align-items-center justify-content-center mb-4">
                    <i className="fa fa-2x fa-laptop-code service-icon bg-primary text-white mr-3"></i>
                    <h4 className="font-weight-bold m-0">Web Development</h4>
                </div>
                <p>Justo sit justo eos amet tempor amet clita amet ipsum eos elitr. Amet lorem lorem lorem est amet labore eirmod erat clita</p>
                <a className="border-bottom border-primary text-decoration-none" href="">Read More</a>
            </div>
            <div className="col-lg-4 col-md-6 text-center mb-5">
                <div className="d-flex align-items-center justify-content-center mb-4">
                    <i className="fab fa-2x fa-android service-icon bg-primary text-white mr-3"></i>
                    <h4 className="font-weight-bold m-0">Apps Design</h4>
                </div>
                <p>Justo sit justo eos amet tempor amet clita amet ipsum eos elitr. Amet lorem lorem lorem est amet labore eirmod erat clita</p>
                <a className="border-bottom border-primary text-decoration-none" href="">Read More</a>
            </div> 
           
         </div>
    </div>
</div> */}


<script src="https://cdn.voidanalytics.com/latest.min.js"></script>
<noscript><img src="https://cdn.voidanalytics.com/drop.gif" alt=""/></noscript>

    </>
  );
}

export default Home;

