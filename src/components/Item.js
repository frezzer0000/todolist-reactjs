import React, {useState}  from 'react';
import { connect } from 'react-redux';
// import { deleteItem } from '../actions';
// import * as contactAction from './actions/contactAction';
// import {deleteItem} from '../actions/index'



const Item = (props) => {
// console.log("debug: Item -> props", props)

    let classNameLabel="";
    let nameLabel="";
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
                <button type="button" className="btn btn-danger btn-sm" onClick={()=> {props.handleDelete(props)}} >Delete</button>
            </td>
        </tr>
      
        </>
    )
}

// const mapStateToProps = (state, ownProps) => {
//     return {
//       contacts: state.contacts
//     }
//   };
  
//   const mapDispatchToProps = (dispatch) => {
//     return {
//       createContact: contact => dispatch(contactAction.createContact(contact)),
//       deleteContact: index =>dispatch(contactAction.deleteContact(index))
//     }
//   };
  
  export default(Item);
