import React, { useState } from 'react';
import { connect } from 'react-redux';
import * as handleItem from '../actions/index';
import SweetAlert from 'sweetalert-react';



const Form = (props) => {
    console.log("debug: Form -> props", props)
    const [nameAdd, setnameAdd] = useState('')
    const [levelAdd, setlevelAdd] = useState(0)
    const [showAlert, setShowAlert] = useState(false)
    const handleAddInputChange = (value) => {
        setnameAdd(value)
    }
    const handleAddSelectChange = (value) => {
        setlevelAdd(value)
    }
    const cancleAdd = () => {
        props.showForm()
    }
    const handleAddItem = () => {
        if (!nameAdd) {
            setShowAlert(true)
        }
        props.addItem({ nameAdd, levelAdd })
        props.showForm()
    }
    const handleAlert =() =>{
        setShowAlert(false)
    }
    return (
        <>
        <div>
            <SweetAlert
                show={showAlert}
                title="Thông báo !"
                text="Bạn chưa điền đầy đủ thông tin"
                onConfirm={() => handleAlert()}
            />
        </div>
        <form className="form-inline">
            <div className="form-group">
                <input type="text" className="form-control" placeholder="Item Name" onChange={(event) => handleAddInputChange(event.target.value)} />
            </div>
            <div className="form-group">
                <select className="form-control" onChange={(event) => handleAddSelectChange(event.target.value)} >
                    <option value={0}>Low</option>
                    <option value={1}>Medium</option>
                    <option value={2}>High</option>
                </select>
            </div>
            <button type="button" className="btn btn-primary" onClick={() => { handleAddItem() }}>Submit</button>
            <button type="button" className="btn btn-default" onClick={() => { cancleAdd() }}>Cancel</button>
        </form>
        </>
    )

}
const mapDispatchToProps = (dispatch) => {
    return {
        addItem: payload => dispatch(handleItem.addItem(payload))
    }
}
export default connect(null, mapDispatchToProps)(Form);

