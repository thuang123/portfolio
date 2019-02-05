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
              <Navigation className="navigation-text">
                <Link to="/home">
                  <i className="fa fa-home" aria-hidden="true"/>
                </Link>
                <Link to="/resume">
                  <i className="fa fa-id-card" aria-hidden="true"/>
                </Link>
                <Link to="/contact">
                  <i className="fa fa-at" aria-hidden="true"/>
                </Link>
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
