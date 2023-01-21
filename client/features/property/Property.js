import { Card, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import UpdateUnitModal from "../modal/UpdateUnitModal";
import { fetchProperty, selectProperty } from "./propertySlice";

const Property = () => {
  const property = useSelector(selectProperty);
  const { name, address, imageUrl, yearBuilt, totalUnits, description } =
    property;
  const dispatch = useDispatch();
  const { propertyId } = useParams();

  useEffect(() => {
    dispatch(fetchProperty(propertyId));
  }, [dispatch]);

  const [openModal, setOpenModal] = useState(false);

  return (
    <div className="single-property">
      <h1>{name}</h1>
      <Grid
        container
        justifyContent="left"
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
        sx={{
          justifyContent: "left",
          mt: 30,
        }}
      >
        <Card raised sx={{ width: 400, height: 700, ml: 10, mt: 8 }}>
          <div key={propertyId}>
            <Grid align="center">
              <CardMedia
                component="img"
                image={imageUrl}
                sx={{ height: 300, width: 250, mt: 1 }}
              />
            </Grid>
            <CardContent align="center">
              <Typography variant="p" align="center">
                Name: {name}
              </Typography>
              <Typography variant="p" align="center">
                Address:{address}
              </Typography>
              <br />
              <Typography variant="p" align="center">
                Description: {description}
              </Typography>
              <br />
              <Typography variant="p" align="center">
                Total Units: {totalUnits}
              </Typography>
              <br />
              <Typography variant="p" align="center">
                Year Built: {yearBuilt}
              </Typography>
            </CardContent>
          </div>
          <Grid align="center">
            <button className="button-34" type="submit" display="flex">
              Edit Property
            </button>
          </Grid>
        </Card>
        <div>
          <div className="unitList">
            <h3>Units List</h3>
            <ul>
              {property.units && property.units.length
                ? property.units.map((unit) => {
                    return (
                      <div key={unit.id}>
                        <li>
                          <p>
                            Unit Id: {unit.id} | Unit: {unit.name} | Type:{" "}
                            {unit.unitType} | Lease Start: {unit.leaseStart} |
                            Lease End: {unit.leaseEnd} | Occupancy:{" "}
                            {unit.occupancy}
                          </p>
                          <button
                            className="button-30"
                            onClick={() => setOpenModal(unit.id)}
                          >
                            Update Lease Status
                          </button>
                          {openModal == unit.id && (
                            <UpdateUnitModal
                              closeModal={setOpenModal}
                              unit={unit}
                            />
                          )}
                        </li>
                      </div>
                    );
                  })
                : null}
            </ul>
          </div>
        </div>
      </Grid>
    </div>
  );
};

export default Property;
