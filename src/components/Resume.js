import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import ProfilePicture from './res/avatar_image.jpg';
import Education from './Education.js';
import WorkExperience from './WorkExperience.js';
import TechnicalSkills from "./TechnicalSkills.js";
import Projects from "./Projects.js";

class Resume extends Component {
    render() {
        return(
            <div>
                <Grid>
                    <Cell col={4}>
                        <div style={{textAlign: 'center'}}>
                            <img
                                src={ProfilePicture}
                                alt="avatar"
                                style={{height: '200px'}}/>
                        </div>
                        <h2 style={{paddingTop: '2em'}}>Tony Huang</h2>
                        <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
                        <h5>Phone</h5>
                        <p>778-233-2282</p>
                        <h5>Email</h5>
                        <p>thuang.cpsc@gmail.com</p>
                        <h5>Github</h5>
                        <p>github.com/thuang123</p>
                        <h5>LinkedIn</h5>
                        <p>linkedin.com/in/tonyhuang9</p>
                    </Cell>
                    <Cell className="resume-right-col" col={8}>

                        <h2>Work Experience</h2>
                        <WorkExperience
                            startDate="Jan 2017"
                            endDate="Aug 2017"
                            companyAndPosition="Samsung Electronics - Junior QA Software Engineer"
                            jobDescription="Placeholder..."/>

                        <WorkExperience
                            startDate="Jan 2016"
                            endDate="Apr 2016"
                            companyAndPosition="BlackBerry Limited - Software Development Student - Enterprise Software"
                            jobDescription="Placeholder..."/>

                        <WorkExperience
                            startDate="Sep 2015"
                            endDate="Dec 2015"
                            companyAndPosition="BlackBerry Limited - Software Development Student - Devices"
                            jobDescription="Placeholder..."/>
                        <hr style={{borderTop: '3px solid #e22947'}}/>

                        <h2>Projects</h2>
                        <Projects
                            startDate="Dec 2018"
                            endDate="Current"
                            projectName="Android Notetaking Application"
                            projectDescription="Placeholder..."
                        />
                        <Projects
                            startDate="Sep 2018"
                            endDate="Sep 2018"
                            projectName="Wikipedia Scraper"
                            projectDescription="Placeholder..."
                        />
                        <Projects
                            startDate="Jan 2018"
                            endDate="Apr 2018"
                            projectName="MiniJava Compiler"
                            projectDescription="Placeholder..."
                        />
                        <Projects
                            startDate="Sep 2016"
                            endDate="Dec 2016"
                            projectName="Course Scheduler"
                            projectDescription="Placeholder..."
                        />
                        <hr style={{borderTop: '3px solid #e22947'}}/>

                        <h2>Education</h2>
                        <Education
                            startDate="Sep 2012"
                            endDate="May 2018"
                            schoolName="University of British Columbia"
                            schoolMajor="Bachelors of Science in Computer Science"
                        />
                        <hr style={{borderTop: '3px solid #e22947'}}/>

                        <h2>Technical Skills</h2>
                        <TechnicalSkills/>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Resume;