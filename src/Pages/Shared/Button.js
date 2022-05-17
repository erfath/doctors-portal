import React from 'react';

const Button = ({children}) => {
    return (
        <button className="btn btn-primary font-bold uppercase text-white bg-gradient-to-r from-secondary to-primary">{children}</button>
    );
};

export default Button;