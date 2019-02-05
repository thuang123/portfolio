import React, { Component } from 'react';
import { Grid, Cell} from 'react-mdl';
import ProfilePicture from './res/avatar_image.jpg';

class LandingPage extends Component {
    render() {
        return(
            <div style={{width: ' 100%', margin: 'auto'}}>
                <Grid className={"landing-grid"}>
                    <Cell col={12}>
                        <img
                            src={ProfilePicture}
                            alt="avatar"
                            className="avatar-img"/>
                        <div className="banner-text">
                            <h1>tony huang</h1>
                            <hr/>
                            <p>Java | Python | C/C++ | TypeScript | JavaScript | HTML/CSS</p>
                            <div className="social-links">

                                {/* LinkedIn */}
                                <a href="https://www.linkedin.com/in/tonyhuang9" target="_blank" rel="noopener norefferer">
                                    <i className="fa fa-linkedin-square" aria-hidden="true"/>
                                </a>

                                {/* Github */}
                                <a href="https://www.github.com/thuang123" target="_blank" rel="noopener norefferer">
                                    <i className="fa fa-github-square" aria-hidden="true"/>
                                </a>

                            </div>
                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default LandingPage;