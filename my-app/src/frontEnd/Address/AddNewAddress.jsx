import React from 'react'

export default function AddNewAddress({setPage}) {
    const openAddressForm = ()=> {
        setPage((prev)=>!prev)
      }
  return (
    <div className="add-new-button">
              <button className="btn primary" onClick={openAddressForm}><i className="fas fa-plus addNewAddress-icon"></i>Add New Address</button >

    </div>
  )
}
