import React from 'react';
import { Route } from 'react-router-dom';
import { Blogs, BlogPost, BlogCreate, BlogEdit } from './views';

const RouterApp = () => {
    return (
        <div>
            <Route exact path="/" component={Blogs} />
            <Route path="/post/:id" component={BlogPost} />
            <Route path="/blog-create" component={BlogCreate} />
            <Route path="/blog-edit/:id" component={BlogEdit} />
        </div>
    );
}

export default RouterApp;