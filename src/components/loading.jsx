import React from 'react';
import { BeatLoader } from 'react-spinners';

const LoadingSpinner = ({ load }) => {
    return (
        <div className="loading-spinner">
            <BeatLoader color={'#b74555'} loading={load} />
        </div>
    );
};

export default LoadingSpinner;