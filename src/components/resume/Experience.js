import React, { Component } from 'react';
import { Grid, Cell, List, ListItem } from 'react-mdl';

const Descriptions = (props) => {
    return props.des.map((item) => <p>- {item}</p>)
}

class Experience extends Component {
    render() {
        return(
            <Grid>
                <Cell col={4}>
                    <p>{this.props.startDate} - {this.props.endDate}</p>
                </Cell>
                <Cell col={8}>
                    <h4 style={{marginTop: '0px'}}>{this.props.companyAndPosition}</h4>
                    <Descriptions des={this.props.jobDescription}/>
                </Cell>
            </Grid>
        )
    }
}

export default Experience;