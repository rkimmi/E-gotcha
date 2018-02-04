import React from 'react'
import { Progress } from 'react-sweet-progress';

class HP extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      avatarHealth: 60, // starting health
      numClicks: { 
        eat: 0, // track no of clicks for each action
        sleep: 0,
        excercise: 0,
      }
  }
  this.changeHealth = this.changeHealth.bind(this)
}


changeHealth (healthNo, action) { 
//  let newHealth = (this.state.avatarHealth + healthNo)

 let newEat = (this.state.numClicks.eat)
 let newSleep = (this.state.numClicks.sleep)
 let newExcercise = (this.state.numClicks.excercise)


 if (action === "eat" && newEat > 4) {healthNo = 0} 
    else if (action === "eat") {newEat += 1}
 if (action === "sleep"  && newSleep > 0) 
 {healthNo = 0} 
    else if (action === "sleep") {newSleep += 1}
 if (action == "excercise" && newExcercise > 1) {healthNo = 0}
    else if (action === "excercise") {newExcercise += 1}


 let newHealth = (this.state.avatarHealth + healthNo)
 if (newHealth > 100) newHealth = 100
 if (newHealth < 0) newHealth = 0
 
console.log(newHealth)
console.log(newEat)
console.log(newSleep)
console.log(newExcercise)

 this.setState({
   avatarHealth: newHealth + healthDecrement,
   numClicks: {
   eat: newEat,
   sleep: newSleep,
   excercise: newExcercise
   }
 })
}

    render() {
           return (
        <div>
          <Progress percent={this.state.avatarHealth} />
        </div>
      );
    }
  }
   
export default HP