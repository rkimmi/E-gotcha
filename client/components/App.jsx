import React from 'react'
// import HP from './HpLevels'
import { HashRouter as Router, Route, Link } from 'react-router-dom'

import Email from './Email'
import SetUp from './SetUp'

class App extends React.Component {
    constructor(props) {
        super(props)
    }

    showEmail() {
        this.setState({
            emailsVisible: true
        })
    }

    hideDetails () {
        this.setState({
          detailsVisible: false
        })
    }
    
    render() {
        return (
            <Router>
            <div>
                 <Route path='/' component={SetUp} />
                 <Route path='/:e' component={Email} />
                
            </div>
            </Router>
        )
    }
}

export default App

