import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { showEmailBox } from '../actions'

import EmailBox from './EmailBox'

class Email extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isOpen: false,
            isClosed: true
        }
        this.openEmail = this.openEmail.bind(this)
        this.closeEmail = this.closeEmail.bind(this)
    }

    openEmail () {
        this.setState({
            isOpen: true,
            isClosed: false
        })
    }

    closeEmail () {
        this.setState({
            isOpen: false,
            isClosed: true
        })
    }

    // handleChange () {
    //     this.props.showEmailBox // does nothing
    // }

    render () {
            return (
                <div>
                    {
                        (this.state.isOpen === true)
                        ? <EmailBox />
                        : <button className='email' value='email' onClick={this.openEmail}>Email</button>

                    }
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