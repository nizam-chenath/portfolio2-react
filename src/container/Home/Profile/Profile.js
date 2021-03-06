import React from 'react';
import Typical from 'react-typical';
import './Profile.css'

export default function Profile() {
    return (
        <div className='profile-container'>
            <div className='profile-parent'>
                <div className='profile-details'>
                    <div className='colz'>
                        <div className="colz-icon">


                        <a href='https://www.youtube.com/watch?v=ilw_g_rxtVc&t=898s'>
                            <i className='fa fa-github'></i>
                        </a>
                        <a href='#'>
                            <i className='fa fa-google-plus-square'></i>
                        </a>
                        <a href='#'>
                            <i className='fa fa-instagram'></i>
                        </a>
                        <a href='#'>
                            <i className='fa fa-youtube-square'></i>
                        </a>
                        <a href='#'>
                            <i className='fa fa-twitter'></i>
                        </a>
                        </div>
                    </div>
                    <div className="profile-details-name">
                    <span className="primary-text">
                        {" "}
                        Hello, I'm <span className="highlighted-text">Nizam</span>
                    </span>
                      </div>
                      <div className="profile-details-role">
                          <span className="primary-text">
                              {" "}
                              <h1>
                                  {" "}
                                  <Typical
                                  loop={Infinity}
                                  steps={[
                                      "Enthusiastic Dev ๐ง๐ปโ๐ป",
                                      1000,
                                      "Full stack developer ๐คน๐ปโโ๏ธ",
                                      1000,
                                      "React js developer  ๐ถ๐ผ",
                                      1000,
                                      "web designer  ๐ต๐ผ",
                                      1000,
                                      "python developer  ๐จ๐ผโ๐ป",
                                      1000,
                                  ]}/>
                              </h1>
                              <span className='profile-role-tagline'>
                                  knack of building application with front and back end operations.
                              </span>
                          </span>
                      </div>
                      <div className='profile-options'>
                          <button className="btn primary-btn">
                              {""}
                              Hire Me{" "}
                          </button>
                          <a href="resume.png" download="resume.png">
                              <button className="btn highlighted-btn">Get Resume</button>
                          </a>
                      </div>
                </div>
                   <div className="profile-picture">
                       <div className="profile-picture-background"> </div>
                   </div>
            </div>
        </div>
    );
}


