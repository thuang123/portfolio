import React, { Component } from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import Main from './components/Main.js';
import { Link } from 'react-router-dom';

class App extends Component {
  render() {
    return (
        <div className="demo-big-content">
          <Layout>
            <Header className="header-color" title="tony huang" scroll>
              <Navigation>
                <Link to="/resume">Resume</Link>
                <Link to="/github">GitHub</Link>
                <Link to="/linkedin">LinkedIn</Link>
                <Link to="/contact">Contact</Link>
              </Navigation>
            </Header>
            <Drawer title="Title">
              <Navigation>
                <Link to="/resume">Resume</Link>
                <Link to="/github">GitHub</Link>
                <Link to="/linkedin">LinkedIn</Link>
                <Link to="/contact">Contact</Link>
              </Navigation>
            </Drawer>
            <Content>
              <div className="page-content" />
              <Main />
            </Content>
          </Layout>
        </div>
    );
  }
}

export default App;