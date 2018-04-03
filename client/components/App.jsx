import React from 'react'
import { HashRouter as Router, Route, Link } from 'react-router-dom'

import EmailBox from './EmailBox'
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
                 <Route exact path='/e' component={EmailBox} />
                
            </div>
            </Router>
        )
    }
}

export default App

