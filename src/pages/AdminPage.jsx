import React, {useState} from 'react'

import ProductTable from '../components/ProductTable';
import NewItemForm from '../components/NewItemForm';
import {Button, Container, Modal} from 'react-bootstrap'


const AdminPage = () => {

    const [showModal, setShowModal] = useState(false);

  return (
    <Container fluid>
        <Button 
            className="float-end"
            onClick={()=>setShowModal(true)}
            >+ Create New Product</Button>
        <div>
            <h2 className="mt-2">Products</h2>
            <ProductTable/>
        </div>
        <Modal show={showModal} onHide={()=>setShowModal(false)}>
            <NewItemForm setShowModal={setShowModal}/>
        </Modal>
    </Container>
  )
}

export default AdminPage