import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { Container, Grid, Grow, CircularProgress } from "@material-ui/core";
import "./styles.css";
import placeholderImage from "../../assets/img/2.png";
import { Box, CardMedia } from "@mui/material";

const Detail = () => {
  const { id } = useParams();
  const lists = useSelector((state) => state.listings);
  const details = lists.find((element) => element._id === id);

  return (
    <Grow in>
      <Container maxWidth="md" className="flex-box mb-5">
        {!details ? (
          <h1>Couldn't find the car :(</h1>
        ) : (
          <>
            <div className="text-align-left mb-2">
              <h1>{details.Make}</h1>
              <h5>{details.Model}</h5>
              <p className="small-font">{details.views} views</p>
            </div>
            <CardMedia
              component="img"
              src={!details.URL ? placeholderImage : details.URL}
              className="img-container"
            />
            <div className="details mt-4">
              <h5 className="mb-3">Details of the Car</h5>
              <p>
                <b>Year Built: </b>
                {details.Year}
              </p>
              <p style={{ textAlign: "justify" }}>
                <b>Description: </b>
                {details.Description}
              </p>
              <p>
                <b>Price: </b>
                {details.Price.toLocaleString() + "€"}
              </p>
              <p>
                <b>Email of the Owner: </b>
                {details.Email}
              </p>
            </div>
          </>
        )}
      </Container>
    </Grow>
  );
};

export default Detail;
