import React from 'react'
import HP from './HpLevels'
// import Email from './Email'

class App extends React.Component {
   constructor(props) {
       super(props)

       this.state = {
          emails: [],
          emailsVisible: false
       }
       this.showEmail = this.showEmail.bind(this)
   }

   showEmail () {
    this.setState({
        emailsVisible: true
    })
   }

    render() {
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="buttonsleft">
                            <button onClick={() => this.refs.kimmi.changeHealth(10, "exercise")} className="button" value="workout">Exercise</button>
                            <button className="email" value="emails" onClick={this.showEmail}>Email</button>
                        </div>
                        <div className="character">
                            <img className="characterpic" src='blank-3.png'/>
                            <div className="HPbar">
                            <HP ref="kimmi"/>
                            </div>
                        </div>
                        <div className="buttonsright">        
                            <button onClick={() => this.refs.kimmi.changeHealth(2, "eat")} className="button" value="eat">Eat</button>
                            <button onClick={() => this.refs.kimmi.changeHealth(10, "sleep")}className="button" value="zzz">Sleep</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default App

