import React from 'react';
import { Switch, Route } from 'react-router-dom';

import LandingPage from './LandingPage.js';
import Contact from './Contact.js';
import Github from './Github.js';
import LinkedIn from './LinkedIn.js';
import Resume from './Resume.js';

const Main = () => (
    <Switch>
        <Route exact path="/" component={ LandingPage } />
        <Route exact path="/resume" component={ Resume } />
        <Route exact path="/github" component={ Github } />
        <Route exact path="/linkedin" component={ LinkedIn } />
        <Route exact path="/contact" component={ Contact } />
    </Switch>
)

export default Main;