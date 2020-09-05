import React from 'react';
import Home from './pages/Home/Home';
import Charts from './pages/Charts/Charts';
import Contact from './pages/Contact/Contact';

const routes = [
    {
        path : '/',
        exact : true,
        main : () => <Home />
    },
    {
        path : '/charts',
        exact : false,
        main : () => <Charts />
    },
    {
        path : '/contact',
        exact : false,
        main : () => <Contact />
    },
    
];

export default routes;