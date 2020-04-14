import React, { Component, useState, useEffect } from 'react';
import Title from './components/Title';
import Search from './components/Search';
import Sort from './components/Sort';
import Form from './components/Form';
import ListItem from './components/ListItem';
import Items from './mockData/Item';
import SweetAlert from 'sweetalert-react';
import _ from 'lodash';
import ItemEdit from './components/ItemEdit';

function App() {
  console.log("debug: App -> App")
  const [showAlert, setShowAlert] = useState(false)
  const [showForm, setShowForm] = useState(false)
  const [itemIdCallBack, setItemCallBack] = useState("")
  const [items, setItems] = useState(Items)

  // console.log("debug: handleDelete -> item", itemIdCallBack)
  const handleDelete = (item) => {
    setShowAlert(true)
    setItemCallBack(item.id)
  }

  const handleDelete2 = () => {
    setShowAlert(false)
    setItems(_.filter(items, (i) => {
      return i.id !== itemIdCallBack
    }))
  }
  const showFormHandle =() =>{
    setShowForm(!showForm)
  }

  return (
    <div className="container">
      <div>
        <SweetAlert
          show={showAlert}
          title="Delete Mission"
          text="Do you want to delete ?"
          onConfirm={() => handleDelete2()}
        />;
      </div>
      <Title />
      <div className="row">
        <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
          <Search />
        </div>
        <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
          <Sort />
        </div>
        <div className="col-xs-5 col-sm-5 col-md-5 col-lg-5">
          <button type="button" className="btn btn-info btn-block marginB10" onClick={()=>showFormHandle()}>Add Item</button>
        </div>
      </div>
     { showForm ? <div className="row marginB10">
        <div className="col-md-offset-7 col-md-5">
          <Form showForm={showFormHandle}/>
        </div>
      </div> : null}
      <ListItem handleDelete={handleDelete} />
    </div>
  );

}

export default App;