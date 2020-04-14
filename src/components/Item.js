import React, { useState } from 'react';
import { connect } from 'react-redux';
// import * as handleItem from '../actions/index'
import { deleteItem, editItem } from '../actions/index';
import SweetAlert from 'sweetalert-react';
import ItemEdit from './ItemEdit';


const Item = (props) => {
    console.log("debug: Item -> Item")
    const [showAlert, setShowAlert] = useState(false)
    const [loadingComponent, setLoadingComponent] = useState(true)
    const [editData, setEditData] = useState({
        indexEdit: 0,
        idEdit: '',
        nameEdit: '',
        levelEdit: 0,
        Label : '',
    })
    // console.log("debug: Item -> editData", props.item)

    let classNameLabel = "";
    let nameLabel = "";
    switch (props.item.level) {
        case '1':
            classNameLabel = 'label label-warning';
            nameLabel = 'Medium';
            break;
        case '2':
            classNameLabel = 'label label-danger';
            nameLabel = 'High';
            break;
        default:
            classNameLabel = 'label label-info';
            nameLabel = 'Low';
            break;
    }
    const handleAlert = () => {
        setShowAlert(false)
        props.deleteItem(props.item.id)
    }
    const handleEditItem = () => {
        setLoadingComponent(false)
        setEditData({
            idEdit: props.item.id,
            nameEdit: props.item.name,
            levelEdit: props.item.level,
            index: props.index
        })
    }
    return (
        <>
            <div>
                <SweetAlert
                    show={showAlert}
                    title="Xóa"
                    text="Bạn có muốn xóa không ?"
                    onConfirm={() => handleAlert()}
                />
            </div>
             { loadingComponent ? 
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
                    <button type="button" className="btn btn-warning btn-sm"  onClick = {handleEditItem}>Edit</button>
                    <button type="button" className="btn btn-danger btn-sm" onClick={() => setShowAlert(true)} >Delete</button>
                </td>
            </tr>: <ItemEdit loadingComponent={loadingComponent} setLoadingComponent={setLoadingComponent} dataItem={editData} lable={nameLabel}/>
}
            </>
    )
}

// const mapDispatchToProps = (dispatch) => {
//     return {
//         deleteItem: index => dispatch( handleItem.deleteItem(index) )
//     }
// }
// const mapStateToProps = (state) => {
//     return {
//     }
// }

export default connect(null, { deleteItem })(Item);

