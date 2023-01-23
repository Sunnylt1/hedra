import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { editProperty } from "../property/propertySlice";

const EditPropertyForm = () => {
  const dispatch = useDispatch();
  const { propertyId } = useParams();
  console.log(propertyId);

  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [yearBuilt, setYearBuilt] = useState("");
  const [totalUnits, setTotalUnits] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    dispatch(
      editProperty({
        propertyId,
        name,
        address,
        imageUrl,
        yearBuilt,
        totalUnits,
        description,
      })
    );
    setName("");
    setAddress("");
    setImageUrl("");
    setYearBuilt("");
    setTotalUnits("");
    setDescription("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name</label>
      <input
        name="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <label htmlFor="address">Address</label>
      <input
        name="address"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
      />
      <label htmlFor="imageUrl">Photo</label>
      <input
        name="imageUrl"
        value={imageUrl}
        onChange={(e) => setImageUrl(e.target.value)}
      />
      <label htmlFor="yearBuilt">Year Built</label>
      <input
        name="yearBuilt"
        value={yearBuilt}
        onChange={(e) => setYearBuilt(e.target.value)}
      />
      <label htmlFor="totalUnits">Total Units</label>
      <input
        name="totalUnits"
        value={totalUnits}
        onChange={(e) => setTotalUnits(e.target.value)}
      />
      <label htmlFor="description">Description</label>
      <input
        name="description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <div>
        <span></span>
        <button type="submit" className="button-34">
          Save
        </button>
      </div>
    </form>
  );
};

export default EditPropertyForm;
