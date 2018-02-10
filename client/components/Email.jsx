class Email extends React.Component {
    render() {
        return (
         <div>
             <div className="emailbox">
             {this.props.email}
             email!
             </div>
         </div>
      )
    }
}

export default Email