import React from 'react';
import Loader from 'react-loader-spinner';




//passing in a property to see whether it will render or not
const Spinner = (props) => {
    if (props.loading) {
        return (
            <div className='sweet-loading' style={styles.sweetLoading}>
                <Loader
                    type="ThreeDots"
                    color="red"
                    height="100"
                    width="200"
                />
            </div>
        )
    } else {
        return null
    }
}

const styles = {
    sweetLoading: {
        marginLeft: '45%',
        marginTop: '20%'
    }
}

export default Spinner;