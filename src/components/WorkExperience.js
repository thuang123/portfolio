import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class WorkExperience extends Component {
    render() {
        return(
            <Grid>
                <Cell col={4}>
                    <p>{this.props.startDate} - {this.props.endDate}</p>
                </Cell>
                <Cell col={8}>
                    <h4 style={{marginTop: '0px'}}>{this.props.companyAndPosition}</h4>
                    <p>{this.props.jobDescription}</p>
                </Cell>
            </Grid>
        )
    }
}

export default WorkExperience;