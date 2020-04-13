import React, { Component, useState } from 'react';
import { connect } from 'react-redux';
import * as handleItem from '../actions/index'


const ItemEdit = (props) => {
    console.log("debug: ItemEdit -> ItemEdit")
    const { loadingComponent, setLoadingComponent, dataItem } = props
    const [idEdit, setidEdit] = useState(dataItem.idEdit)
    const [nameEdit, setnameEdit] = useState('')
    const [levelEdit, setlevelEdit] = useState(0)

    const cancleEdit = () => {
        setidEdit('')
        setLoadingComponent(!loadingComponent)
    }
    const handleEditInputChange = (value) => {
        setnameEdit(value)
    }
    const handleEditSelectChange = (value) => {
        setlevelEdit(value)
    }
    const handleEdit = () => {
        props.editItem({nameEdit, levelEdit, idEdit})
        setLoadingComponent(!loadingComponent)

    }
    return (
        <tr>
            <td className="text-center">{dataItem.index}</td>
            <td><input type="text" className="form-control" placeholder={dataItem.nameEdit} onChange={(event) => handleEditInputChange(event.target.value)} /></td>
            <td className="text-center">
                <select className="form-control"
                 defaultValue={dataItem.levelEdit}
                 onChange={(event) => handleEditSelectChange(event.target.value)}>
                    <option value={0}>Low</option>
                    <option value={1}>Medium</option>
                    <option value={2}>High</option>
                </select>
            </td>
            <td>
                <button type="button" className="btn btn-default btn-sm" onClick={() => cancleEdit()}>Cancel</button>
                <button type="button" className="btn btn-success btn-sm" onClick={() => handleEdit()}>Save</button>
            </td>
        </tr>
    )
}
const mapDispatchToProps = (dispatch) => {
    return {
        editItem: payload => dispatch( handleItem.editItem(payload) )
    }
}

export default connect(null,mapDispatchToProps)(ItemEdit);