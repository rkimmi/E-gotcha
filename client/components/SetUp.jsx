import React from 'react'
import HP from './HpLevels'
import { HashRouter as Router, Route, Link } from 'react-router-dom'

class SetUp extends React.Component {
    render () {
        return (
            <div>
                <Router>
                    <div className="container">
                        <div className="row">
                            <div className="buttonsleft">
                                <button onClick={() => this.refs.kimmi.changeHealth(10, "exercise")} className="button" value="workout">Exercise</button>
                                <Link to='/e'><button className="email" value="emails" onClick={this.showEmail}>Email</button></Link>
                                {/* <Email email={this.showEmail} /> */}
                            </div>
                            <div className="character">
                                <img className="characterpic" src='blank-3.png' />
                                <div className="HPbar">
                                    <HP ref="kimmi" />
                                </div>
                            </div>
                            <div className="buttonsright">
                                <button onClick={() => this.refs.kimmi.changeHealth(2, "eat")} className="button" value="eat">Eat</button>
                                <button onClick={() => this.refs.kimmi.changeHealth(10, "sleep")} className="button" value="zzz">Sleep</button>
                            </div>
                        </div>
                    </div>
                </Router>
            </div>
        )
    }
}


export default SetUp 
