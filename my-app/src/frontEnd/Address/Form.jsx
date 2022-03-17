import "./Address.css";
import {  useState } from "react";
import axios from "axios";

export default function Form({
  setPage,
  setAddress,
  editElement = {},
  formObject,
  setEdit,
  address,
  edit = false,
  btnText = "Add Address",
  editFormClass = ""
}) {

 
  const [error, setError] = useState({})
  const [formData, setFormData] = useState(formObject)

  const updateFormData = (e) => {
    const {name} = e.target
    setFormData((prev) => ({...prev, [name]: e.target.value}))
  }
 const cancelForm = ()  => {
    edit ? setEdit(false) : setPage(false)
 }
 const validate = () => {
  const err = {};
  if (!formData.name) {
    err["name"] = "name is needed*";
  }
  if (!formData.mobile ||!Number(formData.mobile)) {
    err["mobile"] = "Enter valid mobile number*";
  }
  if (!formData.pincode || !Number(formData.pincode)) {
    err["pincode"] = "Enter valid pincode number*";
  }
  if (!formData.address) {
    err["address"] = "address is needed*";
  }
  if (!formData.locality) {
    err["locality"] = "locality is needed*";
  }
  if (!formData.district) {
    err["district"] = "district is needed*";
  }
  if (!formData.state) {
    err["state"] = "state is needed*";
  }
  return err;
};
 const formSubmit = (e) => {
   
  e.preventDefault()
  const errorObject = validate()
  if (Object.keys(errorObject).length > 0) {
    setError(errorObject)
  }
   else {
        if(edit){
          (async ()=>{
            try {          
                  const addressUpdated = address.map((ele)=>
                  ele.id === editElement.id ? formData : ele)
                  const serverResponse = await axios.put(`https://6217d5f51a1ba20cba924689.mockapi.io/api/address/${editElement.id}`,formData)
                  if(serverResponse.status === 200){
                    setAddress(addressUpdated)
                    setEdit(false)
                  }
                  
            }
            catch(e){
                    console.log("data update failed",e)
                    
            }
          })()
        }
        else {
              (async ()=>{
                
                try {   
                      const serverResponse = await axios.post("https://6217d5f51a1ba20cba924689.mockapi.io/api/address", formData)
            
                        setAddress((prev)=>[serverResponse.data,...prev]) 
                        setPage(false)
                          
                      
                    }
                catch(e){
                        console.log("data uploading failed")
                }
              })()
        }
   }
  
 }
  return (
    <form onSubmit={formSubmit} className={`form-wrapper form-flex ${editFormClass}`}>
      <div className="form-flex">
          <strong>Contact Details</strong>
          <div className="form-input">
            <label htmlFor="name" className = "input-label">
            <input
              className="i-text input-name"
              type="text"
              id="name"
              name="name"
              defaultValue={editElement.name}
              onChange={updateFormData}
              placeholder = " "
            />
              <span className = "input-placeholder">Name</span>
              </label>
            
            <p className="error-message">{error.name}</p>
          </div>
          <div className="form-input">
            <label htmlFor="mobile" className = "input-label">
              <input
            className="i-text input-name"
              type="text"
              minLength = "10"
              maxLength="10" 
              id="mobile"
              name="mobile"
              defaultValue={editElement.mobile}
              onChange={updateFormData}
              placeholder = " "
            />
              <span className = "input-placeholder">Mobile</span>
            </label>
            
            <p className="error-message">{error.mobile}</p>
          </div>
      </div>
      <div className="form-flex">
          <strong>Address</strong>
          <div className="form-input">
            <label htmlFor="pincode" className = "input-label">
              <input
              className="i-text input-name"
              type="text"
              minLength="6"
              maxLength="6"
              id="pincode"
              name="pincode"
              defaultValue={editElement.pincode}
              onChange={updateFormData}
              placeholder = " "
            />
            <span className = "input-placeholder">Pin Code</span>

            </label>
            
            <p className="error-message">{error.pincode}</p>
          </div>
          <div className="form-input">
            <label htmlFor="address" className = "input-label">
              <input
              className="i-text input-name"
              type="text"
              id="address"
              name="address"
              defaultValue={editElement.address}
              onChange={updateFormData}
              placeholder = " "
            />
            <span className = "input-placeholder">Address(H.No, Street & Landmark)</span>
            </label>
            
            <p className="error-message">{error.address}</p>
          </div>
          <div className="form-input">
            <label htmlFor="locality" className = "input-label">
              <input
              className="i-text input-name"
              type="text"
              id="locality"
              name="locality"
              defaultValue={editElement.locality}
              onChange={updateFormData}
              placeholder = " "

            />
            <span className = "input-placeholder">Locality</span>
            </label>
            
            <p className="error-message">{error.locality}</p>
          </div>
          <div className="form-input">
            <label htmlFor="district" className = "input-label">
            <input
              className="i-text input-name"
              type="text"
              id="district"
              name="district"
              defaultValue={editElement.district}
              onChange={updateFormData}
              placeholder = " "

            />
              <span className = "input-placeholder">District</span>

              </label>
            
            <p className="error-message">{error.district}</p>
          </div>
          <div className="form-input">
            <label htmlFor="state" className = "input-label">
            <input
              className="i-text input-name"
              type="text"
              id="state"
              name="state"
              defaultValue={editElement.state}
              onChange={updateFormData}
              placeholder = " "
            />
            <span className = "input-placeholder">State</span>
              </label>
           
            <p className="error-message">{error.state}</p>
          </div>

      </div>
      <button type="submit" className="btn primary">{btnText}</button>
      <button className="cancel-btn" onClick={cancelForm}><i class="fas fa-times"></i></button>
    </form>
  );

}