import React from 'react';
import Item from '../components/Item';
import _ from 'lodash'
import {connect} from 'react-redux'

const ListItem = (props) => {
console.log("debug: ListItem -> props", props)
    
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
                        return <Item item={item} index={index} handleDelete={()=>props.handleDelete(item)} />
                    })}
                </tbody>
            </table>
        </div>
    )
}

const mapStateToProps = (state) => ({
    listItem: state.item
})

export default connect(mapStateToProps, null)(ListItem);