import './about.scss';
import MainLayout from '../../layouts/MainLayout';
import myImg from '../../../assets/myPic.jpg';

const CV = () => {
  return (
    <MainLayout>
      <div className="aboutMeCont">
        <div className="topBorderDiv" />
        <div className="mainDiv" />
        <div className="bottomBorderDiv" />
        <div className="mainCvBox">
          <div className="cv">
            <div className="me">
              <div className="photoContainer">
                <img src={myImg} className="myPic"></img>
              </div>
              <h1 className="cv-header">Lilit Grigoryan</h1>
            </div>
            <div className="cv-section">
              <div className="cv-section-title">Contact</div>
              <p>Date of Birth: 14/10/1998</p>
              <p>
                LinkedIn:
                <a href="https://www.linkedin.com/in/lilit-grigoryan-242703233">
                  Lilit Grigoryan
                </a>
              </p>
              <p>Phone Number: +37493380548</p>
            </div>

            <div className="cv-section">
              <div className="cv-section-title">About Me</div>
              <p>
                I'm an enthusiastic and detail-oriented Frontend Software
                Engineer seeking a junior position with a company to use my
                skills in coding, troubleshooting complex problems, and
                assisting in the timely completion of projects.
              </p>
            </div>

            <div className="cv-section">
              <div className="cv-section-title">Work Experience</div>

              <div className="work-experience">
                <div className="work-experience-item">
                  <div className="work-experience-title">
                    Front-End Developer Intern
                  </div>
                  <div className="work-experience-details">
                    <p>Limino LLC [05/2022 – 07/2022]</p>
                    <p>City: Yerevan, Country: Armenia</p>
                  </div>
                </div>

                <div className="work-experience-item">
                  <div className="work-experience-title">
                    Front-End Developer
                  </div>
                  <div className="work-experience-details">
                    <p>NWS Lab [08/2022 – Current]</p>
                    <p>City: Yerevan, Country: Armenia</p>
                    <ol>
                      <li>
                        Developed and implemented front-end code using HTML,
                        CSS, and JavaScript libraries like React.js and Next.js
                        to meet business requirements.
                      </li>
                      <li>
                        Used Redux Toolkit to store data globally and for easy
                        retrieval of data to any component in the project.
                      </li>
                      <li>Tested Rest endpoints using Postman.</li>
                      <li>
                        Used TypeScript to debug errors during compile time.
                      </li>
                      <li>Worked with Form validations.</li>
                    </ol>
                  </div>
                </div>
              </div>
            </div>

            <div className="cv-section">
              <div className="cv-section-title">Education and Training</div>

              <div className="education">
                <div className="education-item">
                  <div className="education-title">
                    Bachelor of Oriental Studies
                  </div>
                  <div className="education-details">
                    <p>Yerevan State University [2016 – 2020]</p>
                    <p>Address: Yerevan</p>
                  </div>
                </div>

                <div className="education-item">
                  <div className="education-title">JavaScript</div>
                  <div className="education-details">
                    <p>
                      Microsoft Innovation Center Armenia [09/2021 – 11/2021]
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="cv-section">
              <div className="cv-section-title">Digital Skills</div>
              <p>
                JavaScript (poor) / React.js / Basics of NEXT.JS / Redux
                Redux-Saga / Redux, redux toolkit / Git / CSS / HTML / React,
                React Hooks, React Router / TypeScript / RTK Query
              </p>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default CV;
