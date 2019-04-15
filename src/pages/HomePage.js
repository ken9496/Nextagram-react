import React from 'react';
import 'react-bootstrap';
import UserImages from './UserImages'
import { Link } from "react-router-dom"


class HomePage extends React.Component {
  render() {
    const { users } = this.props;
    return (
      <div>

        <ul>
          {
            users.map(user => {
              return (

                <div className="row">
                  <div className="col-md-2" >
                    <img className="profile" src={user.profileImage} style={{ width: '200px' }} alt="user" />
                    <Link to={`/users/${user.id}`}>
                      <h4>{user.username}</h4>
                    </Link>


                  </div>

                  <div className="col-md-10">
                    <div className=" inline-block flex-wrap ">
                      <UserImages className="images" userId={user.id} />
                    </div>
                  </div>
                </div>

              )
            })
          }
        </ul>
      </div>
    )
  }
}

export default HomePage;