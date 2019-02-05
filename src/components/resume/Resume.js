import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import ProfilePicture from '../res/avatar_image.jpg';
import Education from './Education.js';
import Experience from './Experience.js';
import TechnicalSkills from "./TechnicalSkills.js";
import Projects from "./Projects.js";

const myItems = ["fun","watching the world cup","programming"];

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
                                style={{paddingRight: '5em', paddingTop: '3em', height: '200px'}}/>
                        </div>
                        <h2 style={{paddingTop: '0em'}}>Tony Huang</h2>
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
                        <Experience
                            startDate="Jan 2017"
                            endDate="Aug 2017"
                            companyAndPosition="Samsung Electronics - Junior QA Software Engineer"
                            jobDescription={[
                                "Implemented automated scripts for new features and bugs tracked in JIRA " +
                                "tickets using Python and Robot Framework with the Selenium WebDriver",
                                "Maintained daily automated regression test runs with tools such as Docker " +
                                "and Jenkins that ensured new bug reports were instantly raised for developers fixing issues",
                                "Refactored and improved existing scripts for better efficiency and maintainability " +
                                "and to output more useful information upon failure for easier debugging"]}/>

                        <Experience
                            startDate="Jan 2016"
                            endDate="Apr 2016"
                            companyAndPosition="BlackBerry Limited - Software Development Student - Enterprise Software"
                            jobDescription={[
                                "Implemented and tested new features for BlackBerry’s mobile management software and " +
                                "industrial applications using Java and tools such as Fiddler, REST API, and OpenSSL",
                                "Maintained and refactored unit tests for new and existing projects through use of the " +
                                "Mockito and TestNG frameworks",
                                "Created, maintained, and contributed to existing Atlassian Confluence wiki pages as " +
                                "resources for team members",
                                "Attended daily team scrum meetings where brief reports of progress on assigned JIRA implementation/testing " +
                                "tasks were given to ensure tasks were on track for the sprints"]}/>

                        <Experience
                            startDate="Sep 2015"
                            endDate="Dec 2015"
                            companyAndPosition="BlackBerry Limited - Software Development Student - Devices"
                            jobDescription={[
                                "Implemented and tested new features for the BlackBerry Priv Android device primarily in Java " +
                                "that involved the use of real-time logging tools such as QXDM, QPST, and Wireshark",
                                "Performed daily sanity tests and sent out daily test reports which may include newly created JIRAs containing " +
                                "newly collected logs for issues/bugs found"]}/>

                        <hr style={{borderTop: '3px solid #e22947'}}/>

                        <h2>Projects</h2>
                        <Projects
                            startDate="Dec 2018"
                            endDate="Current"
                            projectName="Android Notetaking Application"
                            projectDescription={[
                                "Created a note taking Android application written in Java through Android Studio that includes image scanning" +
                                " and cropping functionality through Scanlibrary and written text to text document conversion using Java OCR",
                                "Maintained, debugged, and tested through unit tests and Android emulators"]}/>
                        <Projects
                            startDate="Sep 2018"
                            endDate="Sep 2018"
                            projectName="Wikipedia Scraper"
                            projectDescription={[
                                "Created a web scraper in Python using BeautifulSoup and Graphviz that produces a graphical " +
                                "representation of the connection between all the linked pages in a given Wikipedia page"]}/>
                        <Projects
                            startDate="Jan 2018"
                            endDate="Apr 2018"
                            projectName="MiniJava Compiler"
                            projectDescription={[
                                "Created a mini Java compiler written in Java using the JavaCC parser that included steps such " +
                                "as parsing, type checking, IR representation, liveness, and register allocation",
                                "Maintained and debugged through JUnit tests and through passing in short Java programs"]}/>
                        <Projects
                            startDate="Sep 2016"
                            endDate="Dec 2016"
                            projectName="Course Scheduler"
                            projectDescription={[
                                "Created a course scheduler in TypeScript using NodeJS and jQuery that schedules a set of " +
                                "courses based on a given set of constraints such as room location/size and available time slots",
                                "Maintained, debugged and tested with Mocha/Chai Framework"]}/>

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