import auxiliumWindow from "./../images/auxiliumWindow.png";
import oceaneyesWindow from "./../images/oceaneyesWindow.png";
import JazzClubWindow from "./../images/jazzClubWindow.png";
import HabidaptWindow from "./../images/habidaptWindow.png";
import DiscoverWindow from "./../images/discoverWindow.png";
import ProcastWindow from "./../images/procastWindow.png";
import linkedin from "./../images/linkedin.png";
import email from "./../images/email.png";
import ParticleBackground from "./../ParticleBackground.js";


function Introduction () {


    window.addEventListener('scroll', function() {
        let wave1 = document.getElementById("wave1");
        let wave2 = document.getElementById("wave2");
        let wave3 = document.getElementById("wave3");
        let wave4 = document.getElementById("wave4");

        let value = window.scrollY;
        wave1.style.backgroundPositionX = 400 + value * 4 + 'px';
        wave2.style.backgroundPositionX = 300 + value * -4 + 'px';
        wave3.style.backgroundPositionX = 200 + value * 2 + 'px';
        wave4.style.backgroundPositionX = 100 + value * -2 + 'px';
    });

    return(
        <div className="bodyContent">
            
                <section>
                    <div style={{backgroundSize: "cover", backgroundRepeat: "no-repeat", backgroundPosition: "50% 50%"}}>
                        <ParticleBackground/>
                        <div style={{marginTop: "0"}} className="introBox introduction">
                            <h2><strong>Hi, I'm Lucy Zhu</strong>.</h2>
                            <h2>I’m an aspiring developer who is passionate about finding and developing apps and solutions.</h2>
                            <br/>
                            <h2>(This site is still under construction! But here it is so far!)</h2>
                            {/*<div className="myButton">Learn more about me here!</div>*/}
                        </div>

                        <div className="wave" id="wave1" style={{"--i":"1"}}></div>
                        <div className="wave" id="wave2" style={{"--i":"2"}}></div>
                        <div className="wave" id="wave3" style={{"--i":"3"}}></div>
                        <div className="wave" id="wave4" style={{"--i":"4"}}></div>
                    </div>
                </section>

                <div className="introBox">
                    <h1>Skills that I'm fairly confident with:</h1>
                    <p>Since I'm still quite new, I am still further developing all of these skills!</p>
                    <div className="skillsBox">
                        <h3>Development Skills</h3>
                        <ul>
                            <li>React.js</li>
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>Python</li>
                            <li>Javascript</li>
                            <li>MySQL</li>
                            <li>Flask</li>
                        </ul>
                    </div>
                    <div className="skillsBox">
                        <h3>Other Skills / Tools</h3>
                        <ul>
                            <li>UX/UI Design</li>
                            <li>Sketching</li>
                            <li>Graphic Design</li>
                            <li>Responsive Design</li>
                            <li>Accounting (Statements)</li>
                            <li>Financial Analysis</li>
                            <li>Social Media Marketing</li>
                            <li>Agile</li>
                            <li>Figma</li>
                            <li>Miro</li>
                        </ul>
                    </div>
                    <div style={{clear: "left"}}/><br/>
                    <p>I'm also learning plenty of new skills at the moment! Some of the main ones are:</p>
                    <br/><br/><h1>Some of the skills I am currently learning:</h1>
                    <div className="skillsBox">
                        <h3>Development Skills</h3>
                        <ul>
                            <li>Node.js</li>
                            <li>MongoDB</li>
                            <li>React Native</li>
                            <li>MATLAB</li>
                            <li>C</li>
                            <li>Solidity</li>
                            <li>Git</li>
                        </ul>
                    </div>
                    <div className="skillsBox">
                        <h3>Other Skills / Tools</h3>
                        <ul>
                            <li>Photoshop</li>
                            <li>Investment & Trading</li>
                            <li>Digital Art</li>
                            <li>Microsoft Excel</li>
                            <li>Notion</li>
                        </ul>
                    </div>
                    <div style={{clear: "left"}}/>
                    {/*<div className="myButton">Learn more about my skills here!</div>*/}
                    
                </div>

                <div className="introBox">
                    <h1>Projects</h1>
                    <h3>This is what I've been up to lately:<br/>(Demos / links will be up soon! Contact me if you'd like to view any of these projects.)</h3>
                    <div className="projectBox">
                        <img className="projectImage" src={ProcastWindow} alt="Procast Project"/>
                        <div className="projectText">
                            <p>An interesting web app which promotes a healthy 'work life balance' for the 2021 WDCC x SESA Hackathon themed 'pro-procrastination'.</p>
                            <p> Basically a productivity tool that distracts you while you do work, and justifies that it's trying to help you keep that work life balance by taking breaks, showing you videos and events near you, and encouraging you to have fun with friends and family instead.</p>
                        </div>
                        <div style={{clear: "left"}}/>
                    </div>
                    <div className="projectBox">
                        <img className="projectImage" src={DiscoverWindow} alt="Discover Project"/>
                        <div className="projectText">
                            <p>'Discover' is a web app created for the 2021 MYOB IT Challenge, which had a theme that invovled helping small NZ and Australian Businesses.</p>
                            <p>It is very difficult and costly for small businesses to get the exposure they deserve, so our platform aims to increase their exposure to a wider audience.</p>
                            <p>Businesses can register themselves onto the platform and showcase their products or services, view analytics, and provide discounts. Customers will be able to view this and refer their friends.</p>
                        </div>
                        <div style={{clear: "left"}}/>
                    </div><div className="projectBox">
                        <img className="projectImage" src={HabidaptWindow} alt="Habidapt Board Game"/>
                        <div className="projectText">
                            <p>Created a board game, 'Habidapt', for the 2021 KiwiJam, which was themed 'adapt'.</p>
                            <p>Habidapt involved strategically transformaing into different animals to enter different terrains to gain the most tokens possible.</p>
                            <p>We illustrated our designs, laser cut the board and tokens, 3d printed our animal game pieces, and spent a very long time figuring out game logic.</p>
                        </div>
                        <div style={{clear: "left"}}/>
                    </div>
                    <div className="projectBox">
                        <img className="projectImage" src={JazzClubWindow} alt="Jazz Club Website"/>
                        <div className="projectText">
                            <p>Currently creating a website for the UoA Jazz Club.</p>
                            <p>Users will be able to learn about the club and its events through the site, along with registering to be a member and for events as well.</p>
                        </div>
                        <div style={{clear: "left"}}/>
                    </div>
                    <div className="projectBox">
                        <img className="projectImage" src={auxiliumWindow} alt="Auxilium Project"/>
                        <div className="projectText">
                            <p>Auxilium is a project created for the 2021 DEVS Hackathon (themed 'Devs for Devs') that secured our group 3rd place.</p>
                            <p>The lack of a beginner-friendly community is a real issue, so we created one ourselves. This web app includes a Q&A, groups, achievements, and challenges, alongside many other features that allow beginner developers to help each other, connect with one another, and encourage them to gain more skills and opportunities.</p>
                        </div>
                        <div style={{clear: "left"}}/>
                    </div>
                    <div className="projectBox">
                        <img className="projectImage" src={oceaneyesWindow} alt="OceanEyes Project"/>
                        <div className="projectText">
                            <p>OceanEyes is a project created for the 2021 CENNZ Blockchain Hackathon.</p>
                            <p>An ocean health and biodiversity project which aims to ensure the transparency and credibility of fisheries and conservations by using NFT and blockchain during issuance of certifications and charity efforts.</p>
                        </div>
                        <div style={{clear: "left"}}/>
                    </div>
                    {/*<div className="myButton">Discover more of my projects here!</div>*/}
                
                </div>

                <div className="introBox">
                    <h1>Contact me!</h1>
                    <h3>I would love to chat about any working opportunities, projects, or just anything in general!</h3>
                    <h3>You can reach me through my email (lzlucyz@gmail.com) or my linkedin (Lucy Zhu) below:</h3><br/>
                    <a href="https://www.linkedin.com/in/lucy-zhu-60107a1b9/"><img className="contactIcons" src={linkedin} alt="Linkedin Icon"/></a>
                    <a href="mailto:lzlucyz@gmail.com"><img className="contactIcons" style={{marginLeft: "2%"}} src={email} alt="Email Icon"/></a>
                    <div style={{clear: "left"}}/>
                </div>




        </div>
    )};


export default Introduction;