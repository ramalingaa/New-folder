import "./Address.css";
import Form from "./Form";
import SavedAddress from "./SavedAddress";
import { useState,useEffect } from "react";
import AddNewAddress from "./AddNewAddress";
import axios from "axios";
import OrderSummary from "../Cart/OrderSummary"



export default function Address() {
  const [page, setPage] = useState(false);
  const [edit, setEdit] = useState(false)
  const [address, setAddress] = useState([]);
  const [editElement, setEditElement] = useState({});

  useEffect(()=>{
    axios.get("https://6217d5f51a1ba20cba924689.mockapi.io/api/address").then((res)=> res.status === 200 && setAddress(res.data))
  },[])

  //form input values at initial render
  const formObject = {
    name: "",
    mobile: "",
    pincode: "",
    address: "",
    locality: "",
    district:"",
    state:""
  };

  return (
    <div className="address-wrapper-main">
      <AddNewAddress setPage = {setPage}/>
      <div>
              {edit && (
                  <Form
                    setPage={setPage}
                    setAddress={setAddress}
                    editElement={editElement}
                    formObject={editElement}
                    address = {address}
                    edit = {edit}
                    setEdit = {setEdit}
                    btnText = "Update Address"
                    editFormClass = "edit-form"
                  />
                )}
          </div>
      {page && (
            <Form
              setPage={setPage}
              setAddress={setAddress}
              formObject={formObject}
            />
          )}
        <div className = "address-card-wrapper">
          
          
          
            <div className="saved-address-wrapper">
                <SavedAddress
                  address={address}
                  setPage={setPage}
                  setEditElement={setEditElement}
                  setAddress={setAddress}
                  setEdit = {setEdit}
                />

            </div>
          
         
          <div>
            <OrderSummary />
          </div>
          
        </div>
        
    </div>
  );
}
