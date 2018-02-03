import React from 'react'
import Progress from'react-progressbar'

class HP extends React.Component {
    render() {
           return (
        <div>
          <Progress completed={75} />
        </div>
      );
    }
  }
   
export default HP