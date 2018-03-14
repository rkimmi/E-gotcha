import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { showEmailBox } from '../actions'

class Email extends React.Component {
    constructor(props) {
        super(props)
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange() {
        this.props.showEmailBox // does nothing
    }

    render() {
        return (
            <div>
                <h3>Email!</h3>
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