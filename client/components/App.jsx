import React from 'react'
import HP from './HpLevels'
import { Line, Circle } from 'rc-progress';

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            num: 0
        }
        // this.function = this.function.bind(this)
    }
    //function? () {
    //this.setState({
    //object: prop
    //     })
    // }

    render() {
        return (
            <div>
            <div className="container">
            <div className="row">
                <div className="buttonsleft">
                    <button className="button" value="workout">Excercise</button>
                    <button className="email" value="emails">Email</button>
                </div>
                <div className="character"> 
                    <div className="characterpic"/>
                    <Line className="HPbar" percent="60" strokeWidth="15" strokeColor="#25a340" />
                </div>
            <div className="buttonsright">
                <button className="button" value="eat">Eat</button>
                <button className="button" value="zzz">Sleep</button>
                </div>
            </div>
            </div>
            </div>
        )
    }
}

export default App

