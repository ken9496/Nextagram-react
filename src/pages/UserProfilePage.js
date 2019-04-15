import React from "react"

import UserImage from '../pages/UserImages.js'


class UserProfilePage extends React.Component {


  render() {


    return (

      <div>

        <UserImage userId={this.props.match.params.id} />

      </div>



    )
  }
}



export default UserProfilePage