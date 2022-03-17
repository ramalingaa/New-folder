import AddressCard from "./AddressCard";

export default function SavedAddress({ address, setPage, setEditElement, setAddress, setEdit }) {
  return (
    <div className="saved-address">
      <h3 className="saved-address-title">Saved address</h3>
      {address.map((ele) => {
        return (
          <AddressCard
            key = {ele.id}
            ele={ele}
            setEditElement={setEditElement}
            setPage={setPage}
            address={address}
            setAddress={setAddress}
            setEdit = {setEdit}
          />
        );
      })}
    </div>
  );
}
