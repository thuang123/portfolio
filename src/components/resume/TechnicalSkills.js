import React, { Component } from 'react';
import { Grid, Cell, Chip } from 'react-mdl';

class TechnicalSkills extends Component {
    render() {
        return(
            <Grid>
                <Cell col={12}>
                    <h5>Languages</h5>
                    <Chip>Java</Chip>
                    <Chip>Python</Chip>
                    <Chip>C/C++</Chip>
                    <Chip>TypeScript</Chip>
                    <Chip>JavaScript</Chip>
                    <Chip>HTML/CSS</Chip>

                    <h5>Tools/Frameworks</h5>
                    <Chip>Oracle</Chip>
                    <Chip>Microsoft SQL Server</Chip>
                    <Chip>Robot Framework</Chip>
                    <Chip>Selenium WebDriver</Chip>
                    <Chip>NodeJS</Chip>

                    <h5>Team Tools</h5>
                    <Chip>Agile</Chip>
                    <Chip>Scrum</Chip>
                    <Chip>Jenkins</Chip>
                </Cell>
            </Grid>
        )
    }
}

export default TechnicalSkills;