import React from 'react';
import styled from 'styled-components';

const ChevronLeft: React.FC = () => {
    return (
        <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
        >
            <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={3}
                d='M15 19l-7-7 7-7'
            />
        </svg>
    );
};

export default ChevronLeft;
