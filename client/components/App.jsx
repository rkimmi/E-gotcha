import React from 'react'

// import HPLevels from './HpLevels'

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
            <div className="container">
                <div className="buttonsleft">
                    <button className="button" value="workout">Excercise</button>
                    <button className="email" value="emails">Email</button>
                </div>
                <div className="character">
                    {/* <HPLevels />  <HPLevels function={prop}/> */}
                </div>
                <div className="buttonsright">
                    <button className="button" value="eat">Eat</button>
                    <button className="button" value="zzz">Sleep</button>
                </div>
            </div>
        )
    }
}

export default App

