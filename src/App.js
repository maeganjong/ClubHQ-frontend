import React from 'react'
import { ApolloProvider } from '@apollo/react-hooks'
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import theme from './theme'
import client from './client'
import Home from './containers/Home'
import NavBar from './containers/NavBar'
import Footer from './containers/Footer'

const App = () => (
  <Router>
    <ThemeProvider theme={theme}>
      <ApolloProvider client={client}>
        <div className="App">
          <NavBar />
          <Switch>
            <Route path="/" component={Home} />
          </Switch>
          <Footer />
        </div>
      </ApolloProvider>
    </ThemeProvider>
  </Router>
)

export default App
