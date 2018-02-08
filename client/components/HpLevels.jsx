import React from 'react'
import { Progress } from 'react-sweet-progress';

import Sound from 'react-sound'

class HP extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      avatarHealth: 60, // starting health
      numClicks: { 
        eat: 0, // track no of clicks for each action
        sleep: 0,
        exercise: 0,
      }
  }
  this.changeHealth = this.changeHealth.bind(this)
}

  componentDidMount() {
    setInterval(() => {
      const decrement = 2
      if (this.state.avatarHealth - decrement > 0) {
        this.setState({
          avatarHealth: this.state.avatarHealth - decrement
        })
      }
    }, 5000)
  }

changeHealth (healthNo, action) { 
//  let newHealth = (this.state.avatarHealth + healthNo)

  //  setInterval(this.state.avatarHealth + decrement, 3000);

 let newEat = (this.state.numClicks.eat)
 let newSleep = (this.state.numClicks.sleep)
 let newExercise = (this.state.numClicks.exercise)


 if (action === "eat" && newEat > 4) {healthNo = 0} 
    else if (action === "eat") {newEat += 1}
 if (action === "sleep"  && newSleep > 0) {healthNo = 0} 
    else if (action === "sleep") {newSleep += 1}
 if (action == "exercise" && newExercise > 1) {healthNo = 0}
    else if (action === "exercise") {newExercise += 1}

 let newHealth = (this.state.avatarHealth + healthNo)
 let decrement = (this.state.avatarHealth - 1)
 if (newHealth > 100) newHealth = 100
 if (newHealth < 0) newHealth = 0
 
console.log(newHealth)
console.log(newEat)
console.log(newSleep)
console.log(newExercise)

 this.setState({
   avatarHealth: newHealth,
   numClicks: {
   eat: newEat,
   sleep: newSleep,
   exercise: newExercise
   }
 })
}

    render() {
           return (
        <div>
          <Progress percent={this.state.avatarHealth}/>
          <h1>{this.state.healthDecrement}</h1>
        </div>
      );
    }
  }
   
export default HP