import React from 'react';
import axios from 'axios';




class UserImages extends React.Component {
    state = {
        images: [],
    }

    componentDidMount() {
        // performing a GET request
        axios.get(`https://insta.nextacademy.com/api/v1/images?userId=${this.props.userId}`)
            .then(result => {
                // If successful, we do stuffs with 'result'
                console.log(result.data)
                this.setState({ images: result.data, })
            })
            .catch(error => {
                // If unsuccessful, we notify users what went wrong
                console.log('ERROR: ', error)
            })
    }

    render() {
        const { images } = this.state
        return (
            <>
                {
                    images.map(image => {
                        return (
                            <img src={image} alt='upload' style={{ width: '250px', margin: '10px', height: '150px', }} />
                        )
                    })
                }
            </>
        )
    }
}

export default UserImages;