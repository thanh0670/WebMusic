import React from 'react';

const Input = (props) => {
    const handleGetData = (e) => {
        props.onGetdData(e.target.value)

    }
    return (
        <input
            className='w-[360px] h-[50px] pl-[20px] pr-[20px] focus:outline-none focus:ring-0 border border-gray-300 rounded'
            placeholder={props.placeholder}
            onChange={handleGetData}
            type={props.type}
        />
    );
}

export default Input;
