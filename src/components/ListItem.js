import React, {useState} from 'react';
import Item from '../components/Item';
import _ from 'lodash';
import { connect } from 'react-redux';
import ItemEdit from './ItemEdit';

// call action


const ListItem = (props) => {
    console.log("debug: ListItem -> ListItem")
    const [dataHandle, setDataHandle] = useState()
    const [editData, setEditData] = useState({
        idEdit: '',
        nameEdit: '',
        levelEdit: 0
    })
    
    const handleTem = (items) => {
        // console.log("debug: handleTem -> items", items)
        setEditData({
            idEdit: items.id,
            nameEdit: items.name,
            levelEdit: items.level,
        }
        )
        // console.log("debug: ListItem -> props",editData)
        
    }

    return (
        <div className="panel panel-success">
            <div className="panel-heading">List Item</div>
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th style={{ width: '10%' }} className="text-center">#</th>
                        <th>Name</th>
                        <th style={{ width: '15%' }} className="text-center">Level</th>
                        <th style={{ width: '15%' }}>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {_.map(props.listItem, (item, index) => {
                        return <Item item={item} index={index} handleTem={handleTem} />
                    })}
                </tbody>
            </table>
        </div>
    )
}

const mapStateToProps = (state) => ({
    listItem: state.handleItem.Items
})


export default connect(mapStateToProps, null)(ListItem);