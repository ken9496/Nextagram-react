import React from 'react';
import Spinner from '../images/loader.gif'

const SpinnerLoader = () => {
    return (
        <div style={styles.spinnerBox}>
            <img src={Spinner} style={styles.spinnerWheel} alt='spinner' />
        </div>
    )
}

const styles = {
    spinnerBox: {
        width: '100vw',
        height: '100vh',
        position: 'relative'
    },
    spinnerWheel: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)'
    }
}

export default SpinnerLoader;