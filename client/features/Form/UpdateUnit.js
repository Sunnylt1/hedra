import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { updateUnit } from "../unit/unitSlice";

const UpdateUnitForm = ({ unit }) => {
  const dispatch = useDispatch();

  const [leaseStart, setLeaseStart] = useState("");
  const [leaseEnd, setLeaseEnd] = useState("");
  const [occupancy, setOccupancy] = useState("");

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    dispatch(updateUnit({ unitId: unit.id, leaseStart, leaseEnd, occupancy }));
    setLeaseStart("");
    setLeaseEnd("");
    setOccupancy("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="leaseStart">Lease Start</label>
      <input
        name="leaseStart"
        value={leaseStart}
        onChange={(e) => setLeaseStart(e.target.value)}
      />
      <label htmlFor="leaseEnd">Lease End</label>
      <input
        name="leaseEnd"
        value={leaseEnd}
        onChange={(e) => setLeaseEnd(e.target.value)}
      />
      <label htmlFor="occupancy">Occupancy</label>
      <input
        name="occupancy"
        value={occupancy}
        onChange={(e) => setOccupancy(e.target.value)}
      />
      <div>
        <span></span>
        <button type="submit" className="button-34">
          Submit
        </button>
      </div>
    </form>
  );
};

export default UpdateUnitForm;
