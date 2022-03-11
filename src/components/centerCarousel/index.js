import React  from "react";
import Slider from "react-slick";
import { Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";


const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    background: "white",
  },
  img:{
    width:"50px",
    height:"50px",
    borderRadius: "50%",
    transition: 'all 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
    transform: 'scale(1)',
    boxShadow: 'rgb(0 0 0 / 24%) -4px 12p'
  }
}));

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "green",borderRadius:"50%" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "red",borderRadius:"50%" }}
      onClick={onClick}
    />
  );
}



export const CenterMode =({
  data = [],
})=> {
  var settings = {
    infinite: true,
    slidesToShow: 4,
    autoplay: false,
    className: "center",
    centerMode: true,
    centerPadding: "35px",
    speed: 1000,
    arrows: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };
  const classes = useStyles()

  return (
    <div style={{ cursor: "pointer" }}>
      <Grid container justifyContent="center" style={{padding:20,marginTop:20}}>
        <Grid item xs={12} alignItems={"center"}>
          <Slider {...settings}>
            {data.map((val) => {
              return (
                <div>
                    <img
                      src={val.img}
                      alt="img"
                      className={classes.img}
                    />
                </div>
              );
            })}
          </Slider>
        </Grid>
      </Grid>
    </div>
  );
  
}