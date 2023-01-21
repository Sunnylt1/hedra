import { Card, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchUnit, selectUnit } from "./unitSlice";

const Unit = () => {
  const unit = useSelector(selectUnit);
  const { name, unitType, floorPlan, propertyId } = unit;
  const dispatch = useDispatch();
  const { unitId } = useParams();

  useEffect(() => {
    dispatch(fetchUnit(unitId));
  }, [dispatch]);

  return (
    <div className="single-unit">
      <h1>
        Unit {name} at Property {propertyId}
      </h1>
      <Grid
        container
        justifyContent="center"
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 1 }}
        sx={{
          justifyContent: "center",
          mt: 1,
        }}
      >
        <Card raised sx={{ width: 1000, height: 700, ml: 1, mt: 8 }}>
          <div key={propertyId}>
            <CardContent align="center">
              <Typography variant="p" align="center">
                Name: {name}
              </Typography>
              <Typography variant="p" align="center">
                Unit Type:{unitType}
              </Typography>
              <br />
              <Typography variant="p" align="center">
                FloorPlan
              </Typography>
              <Grid align="center">
                <CardMedia
                  component="img"
                  image={floorPlan}
                  sx={{ height: 450, width: 400, mt: 1 }}
                />
              </Grid>
            </CardContent>
          </div>
        </Card>
      </Grid>
    </div>
  );
};

export default Unit;
