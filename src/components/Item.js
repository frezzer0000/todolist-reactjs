import React, { useState } from 'react';
import { connect } from 'react-redux';
import { deleteItems } from '../actions/index'

const Item = (props) => {
    console.log("debug: Item -> props", props)

    let classNameLabel = "";
    let nameLabel = "";
    switch (props.item.level) {
        case 1:
            classNameLabel = 'label label-warning';
            nameLabel = 'Medium';
            break;
        case 2:
            classNameLabel = 'label label-danger';
            nameLabel = 'High';
            break;
        default:
            classNameLabel = 'label label-info';
            nameLabel = 'Low';
            break;
    }
    return (
        <>

            <tr>
                <td className="text-center">
                    {props.index}
                </td>
                <td>
                    {props.item.name}
                </td>
                <td className="text-center">
                    <span className={classNameLabel}>{nameLabel}</span>
                </td>
                <td>
                    <button type="button" className="btn btn-warning btn-sm" >Edit</button>
                    <button type="button" className="btn btn-danger btn-sm" onClick={() => props.deleteItems(props.item)}> >Delete</button>
                </td>
            </tr>

        </>
    )
}

export default connect(null, { deleteItems })(Item);
