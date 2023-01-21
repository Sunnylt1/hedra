import { CardContent, Grid } from "@mui/material";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchAllUnits, selectUnits } from "./unitsSlice";

const Units = () => {
  const dispatch = useDispatch();
  const Units = useSelector(selectUnits);
  const [units, setUnits] = useState(Units);
  function selectVacantUnits(e) {
    const value = e.target.value;
    const filteredUnits =
      value === "all" ? Units : Units.filter((u) => u.occupancy === value);
    setUnits(filteredUnits);
  }

  useEffect(() => {
    dispatch(fetchAllUnits());
  }, [dispatch]);

  return (
    <div>
      <h1>View All Units</h1>
      <div>
        <label>Filter by Occupancy</label>
        <select onChange={selectVacantUnits}>
          <option value="all">All Units</option>
          <option value="VACANT">Vacant</option>
          <option value="OCCUPIED">Occupied</option>
        </select>
      </div>
      <span></span>
      <span></span>
      <div>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
          sx={{ justifyContent: "left" }}
        >
          {units.map((unit) => {
            return (
              <div key={unit.id}>
                <Card raised sx={{ width: 400, ml: 10, mb: 3, padding: "1em" }}>
                  <CardContent>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      align="center"
                    >
                      Property ID: {unit.propertyId}
                    </Typography>
                    <Link to={`/units/${unit.id}`}>
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        align="center"
                      >
                        Unit Name: {unit.name}
                      </Typography>
                    </Link>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      align="center"
                    >
                      Unit Type: {unit.unitType}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      align="center"
                    >
                      Unit Status: {unit.occupancy}
                    </Typography>
                  </CardContent>
                </Card>
              </div>
            );
          })}
        </Grid>
      </div>
    </div>
  );
};

export default Units;
