import React from 'react';
import './Container.css';

function Container(props) {
    return (
        <div class="container cont">
            {props.children}
        </div>
    );
}

export default Container;



