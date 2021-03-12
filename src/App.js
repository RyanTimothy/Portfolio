import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import mug from './images/profile-mug.png';
import Grid from '@material-ui/core/Grid';
import Fade from 'react-reveal/Fade';
import Bounce from 'react-reveal/Bounce';
import Flip from 'react-reveal/Flip';

function App() {
  return (
    <div className="App">

      <header className="header">
        <Grid container spacing={2} 
          justify="center"
          alignItems="center">
          <Grid item lg={6}>
            <div className="header-text">
                <Flip top delay={50}>
                  <h1>Ryan Beausoleil</h1>
                </Flip>
              <Bounce left delay={200}>
                <h4>I'm an <b>innovative back-end developer</b> with 16 months of full-stack co-op work experience.</h4>
              </Bounce>
              <div>
                <Flip bottom delay={600}>
                  <a className="social-icon" href="https://github.com/ryanbeau" title="Ryan's Github">
                    <i className="fab fa-github"></i>
                  </a>
                </Flip>
                <Flip bottom delay={800}>
                  <a className="social-icon" href="https://www.linkedin.com/in/ryan-beausoleil/" title="Ryan's LinkedIn">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                </Flip>
                <Flip bottom delay={1000}>
                  <a className="social-icon" href="mailto:ryanbeausoleil@gmail.com" title="Ryan's Email">
                    <i className="fas fa-at"></i>
                  </a>
                </Flip>
              </div>
            </div>
          </Grid>
          <Grid item lg={3}>
            <Fade delay={500} duration={400}>
              <img src={mug} className="profile-picture" title="Ryan Beausoleil - Saint Lawrence River" alt="Ryan Beausoleil catching fish at Saint Lawrence river" />
            </Fade>
          </Grid>
        </Grid>
      </header>

      <hr />

      <div className="content-container">
        <Grid container spacing={2}
          justify="center">
          <Grid item xl={4} className="dev-icons">
            <Bounce left>
              <h3 className="title"><i class="fas fa-book"></i> Technical Skills</h3>
            </Bounce>
            <Flip bottom delay={300}>
              <div>
                <i className="devicon devicon-go-plain" title="Go"></i>
                <i className="devicon devicon-javascript-plain" title="JavaScript"></i>
                <i className="devicon devicon-react-original" title="React"></i>
                <i className="devicon devicon-git-plain" title="Git"></i>
              </div>
            </Flip>
            <Flip bottom delay={600}>
              <div>
                <i className="devicon devicon-csharp-plain" title="C#"></i>
                <i className="devicon devicon-nodejs-plain" title="Nodejs"></i>
                <i className="devicon devicon-mysql-plain" title="MySQL"></i>
                <i className="devicon devicon-docker-plain" title="Docker"></i>
              </div>
            </Flip>
            <Flip bottom delay={900}>
              <div>
                <i className="devicon devicon-cplusplus-plain" title="C++"></i>
                <i className="devicon devicon-java-plain" title="Java"></i>
                <i className="devicon devicon-oracle-original" title="Oracle"></i>
                <i className="devicon devicon-kubernetes-plain" title="Kubernetes"></i>
              </div>
            </Flip>
          </Grid>
          <Grid item lg={6}>
            <Fade delay={800}>
              <p className="text">Experienced back-end developer in RESTful architecture, GraphQL or gRPC protocols. Driven to follow standards such as structured JSON logging useful for debugging and data analytics querying, and most importantly security and monitoring.<br /><i class="far fa-circle"></i><br />Developed an efficient rules service using Open Policy Agent for nationwide broker quoting.</p>
            </Fade>
          </Grid>
        </Grid>
      </div>

      <hr />

      <div className="content-container">

        <Fade top delay={100}>
          <h3 className="title"><i class="fas fa-university"></i> Education</h3>
        </Fade>

        <Grid container spacing={2}
          justify="center"
          className="experience-grid">
          <Grid item xl={2} className="dev-icons experience-date-location">
            <Flip bottom delay={100}>
              1/2018 – 4/2021
            </Flip>
            <Flip bottom delay={400}>
              Kitchener ON
            </Flip>
          </Grid>
          <Grid item lg={8}>
            <Flip top cascade>
              <div>
                <h4 className="experience-title">Conestoga College</h4>
                <h5 className="experience-description">Computer Programmer/Analyst</h5>
              </div>
            </Flip>
            <Fade right cascade>
              <ul>
                <li>Maintaining a 3.95 GPA – graduating April 2021</li>
              </ul>
            </Fade>
          </Grid>
        </Grid>

        <Fade top delay={100}>
          <h3 className="title"><i class="fas fa-flask"></i> Experience</h3>
        </Fade>

        <Grid container spacing={2}
          justify="center"
          className="experience-grid">
          <Grid item xl={2} className="dev-icons experience-date-location">
            <Flip bottom delay={100}>
              9/2019 – 9/2020
            </Flip>
            <Flip bottom delay={400}>
              Cambridge ON
            </Flip>
          </Grid>
          <Grid item lg={8}>
            <Flip top cascade>
              <div>
                <h4 className="experience-title">Software Programmer Co-op</h4>
                <h5 className="experience-description">Gore Mutual</h5>
              </div>
            </Flip>
            <Fade right cascade>
              <ul>
                <li>Developed RESTful microservices in Go and C# ASP .NET Core with MongoDB &#38; MS SQL</li>
                <li>Improved existing APIs by addressing security weaknesses and race condition vulnerabilities</li>
                <li>Executed a rules service using Open Policy Agent from initial design through completion</li>
                <li>Knowledge with Docker containers and Kubernetes cluster management on Azure</li>
                <li>Introduced JSON structured logging and persisting Jaeger trace and span IDs for traceability with Azure log analytics Kusto queries and alerts</li>
                <li>Experienced with continuous integration tools such as SonarCloud, and Snyk</li>
                <li>Collaborated in teams of 7-12, Agile dev environment, and performing peer code review</li>
                <li>Worked in using React JS components such as Router, and using Material UI</li>
              </ul>
            </Fade>
          </Grid>
        </Grid>

        <Grid container spacing={2}
          justify="center"
          className="experience-grid">
          <Grid item xl={2} className="dev-icons experience-date-location">
            <Flip bottom delay={100}>
              5/2019 – 9/2019
            </Flip>
            <Flip bottom delay={400}>
              Waterloo ON
            </Flip>
          </Grid>
          <Grid item lg={8}>
            <Flip top cascade>
              <div>
                <h4 className="experience-title">Software Development &#38; Research Co-op</h4>
                <h5 className="experience-description">Applied Research – Client: Digital Boundary Group</h5>
              </div>
            </Flip>
            <Fade right cascade>
              <ul>
                <li>Developed an automated tool for security professionals to exploit and assess Microsoft networks with concurrent data collection and processing</li>
                <li>Integrated the client’s backend into a stylized C# WPF tool with XAML and MVVM architecture</li>
                <li>Designed and implemented an asynchronous job manager with task cancellation and dynamic semaphore limiting to prevent network detection</li>
                <li>Handled management of volatile network uncertainties within the automated scanning process</li>
                <li>Regularly demonstrating software and code to client, and delivering on expectations, while designing and planning for future capabilities</li>
              </ul>
            </Fade>
          </Grid>
        </Grid>

      </div>
        
      <hr />

      <div className="content-container">

        <Fade top delay={100}>
          <h3 className="title"><i class="fas fa-briefcase"></i> Projects</h3>
        </Fade>

        <Grid container spacing={2}
          justify="center"
          alignItems="center"
          className="project-grid">
          <Grid item xl={4}>
            <Fade left>
              <div className="iframe-centered">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/Hooshu3dcqs?version=3&vq=hd720" frameborder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowfullscreen="allowfullscreen"
                  mozallowfullscreen="mozallowfullscreen" 
                  msallowfullscreen="msallowfullscreen" 
                  oallowfullscreen="oallowfullscreen" 
                  webkitallowfullscreen="webkitallowfullscreen"></iframe>
              </div>
            </Fade>
          </Grid>
          <Grid item xl={6}>
            <Fade right>
              <h4 className="project-title">Firestorm</h4>
            </Fade>
            <Fade right delay={300}>
              <p className="project-text">
                Developed a professional 3D game in the span of 3 months, using C# MonoGame for the course <b>Game Programming with Data Structures</b>. Designed with custom 2D collision detections, billboard particle emissions, frustum model culling, and for efficient garbage and resource management.
              </p>
            </Fade>
            <Fade right delay={500}>
              <div><a href="https://github.com/ryanbeau/firestorm">View on Github</a></div>
            </Fade>
          </Grid>
        </Grid>

        <Grid container spacing={2}
          justify="center"
          alignItems="center"
          className="project-grid">
          <Grid item xl={6}>
            <Fade left>
              <h4 className="project-title">USA Covid &#38; Political Map</h4>
            </Fade>
            <Fade left delay={300}>
              <p className="project-text">
                Developed an ASP .NET Core web API to project the 2016 USA political information with an overlay of COVID-19 data to compare democrat vs republican rates of infection. Using the Mapbox API and the COVID19 data is requested from the arcgis.com API. Basic JWT Authentication.
              </p>
            </Fade>
            <Fade left delay={500}>
              <div><a href="https://github.com/ryanbeau/usa-covid-political">View on Github</a></div>
            </Fade>
          </Grid>
          <Grid item xl={4}>
            <Fade right>
              <img src="https://github.com/ryanbeau/usa-covid-political/raw/main/screenshot.png" 
                title="USA Covid Political Map" 
                alt="Screenshot of USA Covid Political Map" 
                className="project-image" />
            </Fade>
          </Grid>
        </Grid>

        <Grid container spacing={2}
          justify="center"
          alignItems="center"
          className="project-grid">
          <Grid item xl={4}>
            <Fade left>
              <img src="https://github.com/ryanbeau/games-store/raw/master/games-screenshot.png" 
                title="Game Store" 
                alt="Screenshot of the Game Store web application" 
                className="project-image" />
            </Fade>
          </Grid>
          <Grid item xl={6}>
            <Fade right>
              <h4 className="project-title">Game Store</h4>
            </Fade>
            <Fade right delay={300}>
              <p className="project-text">
                Group project developed with 4 students, an ASP .NET Core MVC web eCommerce games store. Using entity framework for DB access. Developed with games discounts, custom sorting, wishlisting, add/remove to cart features, and checkout.
              </p>
            </Fade>
            <Fade right delay={500}>
              <div><a href="https://github.com/ryanbeau/games-store">View on Github</a> • <a href="https://moistgaming.azurewebsites.net/">Visit Site</a></div>
            </Fade>
          </Grid>
        </Grid>

        <Grid container spacing={2}
          justify="center"
          alignItems="center"
          className="project-grid">
          <Grid item xl={6}>
            <Fade left>
              <h4 className="project-title">RC Controller</h4>
            </Fade>
            <Fade left delay={300}>
              <p className="project-text">
                Personal hobby project using ESP32 embedded systems Arduino programming environment in C++. Constrained to the size limitations of the 8-MB of flash memory, the 512-byte EEPROM, and the 2.4GHz transceiver's 32-byte packet size.
              </p>
            </Fade>
            <Fade left delay={500}>
              <div><a href="https://github.com/ryanbeau/rc-remote">View on Github</a></div>
            </Fade>
          </Grid>
          <Grid item xl={4}>
            <Fade right>
              <img src="https://github.com/ryanbeau/rc-remote/raw/main/controller.jpg" 
                title="RC Remote Controller" 
                alt="RC Remote Controller with LCD touch screen" 
                className="project-image" />
            </Fade>
          </Grid>
        </Grid>

      </div>

      <footer></footer>
    </div>
  );
}

export default App;
