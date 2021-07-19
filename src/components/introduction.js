import auxiliumWindow from "./../images/auxiliumWindow.png";
import oceaneyesWindow from "./../images/oceaneyesWindow.png";

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
                    <div style={{marginTop: "0"}} className="introBox introduction">
                        <h2>Hi, I'm Lucy Zhu.</h2>
                        <h2>I’m an aspiring developer who is passionate about finding and developing solutions.</h2>
                        <div className="myButton">Learn more about me here!</div>
                    </div>

                    <div className="wave" id="wave1" style={{"--i":"1"}}></div>
                    <div className="wave" id="wave2" style={{"--i":"2"}}></div>
                    <div className="wave" id="wave3" style={{"--i":"3"}}></div>
                    <div className="wave" id="wave4" style={{"--i":"4"}}></div>
                </section>

                <div className="introBox">
                    <h1>Skills that I'm fairly confident with:</h1>
                    <p>I'm still very new, and am still further developing all of these skills above.</p>
                    <p>I'm also learning plenty of new skills at the moment!</p>
                    <h1>Some of the main skills I am currently learning:</h1>
                    <div className="myButton">Learn more about my skills here!</div>
                    
                </div>

                <div className="introBox">
                    <h1>Projects</h1>
                    <h3>This is what I've been up to lately:</h3>
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
                    <div className="myButton">Discover more of my projects here!</div>
                
                </div>

                <div className="introBox">
                    <h1>Contact me!</h1>
                    <h3>I would love to chat about any working opportunities, projects, or just anything in general!</h3>
                    <h3>You can reach me through any of the links below:</h3>
                </div>


        </div>
    )};


export default Introduction;