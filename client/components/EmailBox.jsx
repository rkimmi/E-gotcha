import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { showEmailBox } from '../actions'

const EmailBox = (props) => {
            return (
                <div>
                    <div className='email-box'> Hi, here is the email box! </div>
                    <Link to='/'>
                        <button className='close-email' value='close'>X</button>
                    </Link>
                </div>
            )
        }

export default EmailBox