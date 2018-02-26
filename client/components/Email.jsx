import React from 'react'
import {connect} from 'react-redux'
import {showEmailBox} from '../actions'

class Email extends React.Component {
    constructor(props) {
        super(props)
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange () {
    this.props.showEmailBox // does nothing
    }

    render() {
        return (
         <div>
         <button className='email' value='email' onClick={this.handleChange}>Email</button> 
             {/* <div className="emailbox">
             <h1>email!</h1>
             </div> */}
         </div>
      )
    }
}

const mapStateToProps = (state) => {
    return {
        email: state.email
    }
}

export default connect(mapStateToProps)(Email)