import React from 'react';
import { HashRouter as Router } from 'react-router-dom'
import Layouts from './layouts/';

const App = () => {
    return (
        <Router>
            <Layouts />
        </Router>
    );
};

export default App;
