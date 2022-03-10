import { Grid } from "@mui/material";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

export const CarouselSliders = ({
  data = [],
  autoScroll = false,
  onClick = false,
}) => {
  var settings = {
    dots: true,
    infinite: true,
    // slidesToShow: 3,
    // slidesToScroll: 1,
    autoplay: autoScroll,
    speed: 1000,
    //     autoplaySpeed: 2000,
    cssEase: "linear",
    arrows: false,
  };

  return (
    <div style={{ cursor: "pointer" }}>
      <Grid container justifyContent="center">
        <Grid item xs={12} alignItems={"center"}>
          <Slider {...settings}>
            {data.map((val) => {
              return (
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    position: "relative",
                  }}
                  onClick={onClick ? onClick : false}
                >
                  <div
                    style={{
                      position: "relative",
                      width: "100%",
                      borderRadius: "16px",
                      backgroundImage: `linear-gradient(to bottom,to top, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5))`,
                      backgroundSize: "cover",
                    }}
                  >
                    <img
                      src={val.img}
                      alt="img"
                      style={{width:"100%",height:"250px",borderRadius: "16px"}}
                    />
                  </div>
                </div>
              );
            })}
          </Slider>
        </Grid>
      </Grid>
    </div>
  );
};
