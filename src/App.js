import React, { Component } from 'react';
import './App.css';
import { Layout, Header, Navigation, Content } from 'react-mdl';
import Main from './components/Main.js';
import { Link } from 'react-router-dom';

class App extends Component {
  render() {
    return (
        <div className="demo-big-content">
          <Layout>
            <Header className="header-color" title="Personal Profile" scroll>
              <Navigation>
                <Link to="/home">Home</Link>
                <Link to="/resume">Resume</Link>
                <Link to="/contact">Contact</Link>
              </Navigation>
            </Header>
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
