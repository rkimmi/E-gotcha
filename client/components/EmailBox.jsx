import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { showEmailBox } from '../actions'

class EmailBox extends React.Component {
    render () {
            return (
                <div>
                    <div className='email-box'> Hi, here is the email box! </div>
                </div>
            )
        }
}

export default EmailBox