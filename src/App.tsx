import { FC } from 'react'
import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { HomePage, LoginPage } from './pages'


import './App.css'

const App: FC = () => {

  return (
    <Router>
      <Switch>
        <Route exact path= "/">
          <HomePage />
        </Route>
        <Route exact path="/login">
          <LoginPage />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
