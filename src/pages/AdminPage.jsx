import React, {useState} from 'react'

import ProductTable from '../components/ProductTable';
import NewItemForm from '../components/NewItemForm';
import {Button, Modal} from 'react-bootstrap'


const AdminPage = () => {

    const [showModal, setShowModal] = useState(false);

  return (
    <div>
        <Button 
            onClick={()=>setShowModal(true)}
            >+ Create New Product</Button>
        <div>

            <ProductTable/>
        </div>
        <Modal show={showModal} onHide={()=>setShowModal(false)}>
            <NewItemForm setShowModal={setShowModal}/>
        </Modal>
    </div>
  )
}

export default AdminPage