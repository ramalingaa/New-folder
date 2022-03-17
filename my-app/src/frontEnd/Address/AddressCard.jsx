import axios from "axios";
import "./Address.css";

export default function AddressCard({
    ele,
    setEditElement,
    setPage,
    address,
    setAddress,
    setEdit
  }) {

    const editClickHandler = () => {
        setEdit(true)        
        setEditElement(ele);
    };
    const deleteAddress = () => {
      const addressUpdatedAfterDelete = address.filter((element)=>element.id !== ele.id)
      axios.delete(`https://6217d5f51a1ba20cba924689.mockapi.io/api/address/${ele.id}`).then((res)=>res.status === 200 && setAddress(addressUpdatedAfterDelete))
    };
  
    return (
      <div className = "address-card-container">
        <strong>{ele.name}</strong>
        <p>{ele.address}, {ele.locality}</p>
        <p>{ele.district}, {ele.state.toUpperCase()}- {ele.pincode}</p>
        <p>Mobile: {ele.mobile}</p>
        <div className="form-card-btnWrapper">
            <button onClick={editClickHandler} className = "btn outlined">Edit</button>
            <button onClick={deleteAddress} className = "btn outlined">Delete</button>
        </div>
       
      </div>
    );
  }
  