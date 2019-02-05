import React from 'react';
import { Switch, Route } from 'react-router-dom';

import LandingPage from './LandingPage.js';
import Contact from './Contact.js';
import Resume from './Resume.js';

const Main = () => (
    <Switch>
        <Route exact path="/" component={ LandingPage } />
        <Route exact path="/home" component={ LandingPage } />
        <Route exact path="/resume" component={ Resume } />
        <Route exact path="/contact" component={ Contact } />
    </Switch>
)

export default Main;