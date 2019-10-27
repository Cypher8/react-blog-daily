import React from 'react';
import { Route } from 'react-router-dom';
import { Blog, Post } from './views';

const RouterApp = () => {
    return (
        <div>
            <Route exact path="/" component={Blog} />
            <Route path="/post/:id" component={Post} />
        </div>
    );
}

export default RouterApp;