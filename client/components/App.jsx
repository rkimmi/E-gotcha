import React from 'react'
// import HP from './HpLevels'
import { HashRouter as Router, Route, Link } from 'react-router-dom'
import Email from './Email'

import SetUp from './SetUp'

class App extends React.Component {
    // constructor(props) {
    //     super(props)
    //     this.state = {
    //         emails: [],
    //         emailsVisible: false
    //     }
    //     this.showEmail = this.showEmail.bind(this)
    // }

    // showEmail() {
    //     this.setState({
    //         emailsVisible: true
    //     })
    // }

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

