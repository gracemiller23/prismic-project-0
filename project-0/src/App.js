import React, { Fragment } from 'react'
import { Helmet } from 'react-helmet'
import {
  BrowserRouter,
  Route,
  Switch,
} from 'react-router-dom'
import { apiEndpoint } from './prismic-configuration'
import { Help, Preview, NotFound, Page, Post, Home } from './pages'
import 'bootstrap/dist/css/bootstrap.min.css';


/**
 * Main application componenet
 */
const App = (props) => {
  const repoNameArray = /([^/]+)\.cdn.prismic\.io\/api/.exec(apiEndpoint)
  const repoName = repoNameArray[1]

  return (
    <Fragment>
      <Helmet>
        <script async defer src={`//static.cdn.prismic.io/prismic.js?repo=${repoName}&new=true`} />
      </Helmet>
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/help' component={Help} />
          <Route exact path='/preview' component={Preview} />
          <Route exact path='/page/:uid' component={Page} />
          <Route exact path='/post/:uid' component={Post} />
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    </Fragment>
  )
}

export default App
