import React from 'react';

const Item = (props) => {
    return (
        <div className="eachItem">
            <h3>{props.item}</h3>
            <i className="far fa-trash-alt add-btn" title="Delete Item" onClick={() => props.deleteItem(props.item)}></i>
        </div>
    );
};

export default Item;