import React from "react";
import { makeStyles } from "@mui/styles";
import CallMadeIcon from "@mui/icons-material/CallMade";
import CallReceivedIcon from "@mui/icons-material/CallReceived";
import {Add, BoltTwoTone } from "@mui/icons-material";
import {
  CardComponent,
  CarouselSliders,
  LineCharts,
  CenterMode,
  PChart,
} from "../components";
import withNavBars from "../HOC/withNavBar";
import {
  Button,
  NativeSelect,
  Slider,
  Grid,
  Card,
  Typography,
  Divider,
  IconButton,
  CardContent,
  List,
  ListItem,
  ListItemIcon,
  Avatar,
  ListItemText,
  CardActionArea,
} from "@mui/material";


const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    background: "white",
  },

  openroot: {
    width: "100%",
    background: "white",
  },
  

  button: {
    display: "flex",
    justifyContent: "flex-end",
    marginLeft: "auto",
    alignItems: "center",
  },

  varybutton: {
    marginLeft: 5,
    background: "lightgreen",
    color: "#036303",
  },

  content: {
    flexGrow: 1,
    overflow: "auto",
  },
  container: {
    position: "absolute",
    paddingTop: 70,
    margin: 10,
  },
  cardQuick: {
    height: 530,
    backgroundColor: "rgb(244, 246, 248)",
    borderRadius: "16px",
  },
  title: {
    fontWeight: 600,
  },
  bigDiv: {
    display: "flex",
    flexDirection: "column",
    margin: 15,
  },
  currenct: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    margin: 15,
    flexDirection: "row",
  },
  balance: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: 30,
    alignItems: "center",
  },
  recent: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: 30,
  },
  transfer: {
    padding: 15,
    marginTop: 35,
  },
  pie: {},
}));

const MainScreen = (props) => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleSliderChange = (event, newValue) => {
    setValue(newValue);
  };

  const card = [
    {
      title: "Income",
      value: "$18,600",
      subText: "+2.5% than last month",
      icon: <CallMadeIcon />,
      type: "up",
    },
    {
      title: "Expences",
      value: "$8,600",
      subText: "-2.5% than last month",
      icon: <CallReceivedIcon />,
      type: "down",
    },
  ];
  let data = [
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQL31834A64fuv8BfepwAHOv7XjZPMLm7JWLw&usqp=CAU",
      tittle: "FEATURED APP",
      des: "Lightroom mobile - Koloro",
      con: "Apply these 7 secret Thecnology",
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQL31834A64fuv8BfepwAHOv7XjZPMLm7JWLw&usqp=CAU",
      tittle: "FEATURED APP",
      des: "Lightroom mobile - Koloro",
      con: "Apply these 7 secret Thecnology",
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdcclmCbmjsmTiuv-Id85fuBChQu9bE641dA&usqp=CAU",
      tittle: "FEATURED APP",
      des: "Lightroom mobile - Koloro",
      con: "Apply these 7 secret Thecnology",
    },
  ];
  let data2 = [
    {
      img: "https://media.istockphoto.com/photos/excited-happy-indian-girl-celebrating-online-win-holding-phone-picture-id1188562868?k=20&m=1188562868&s=612x612&w=0&h=QHvJ0Jo8q5un_R0gbZ7ZgO__qrKzUrhro2-olhLcfKs=",
      tittle: "FEATURED APP",
      des: "Lightroom mobile - Koloro",
      con: "Apply these 7 secret Thecnology",
    },
    {
      img: "https://minimal-assets-api.vercel.app/assets/images/avatars/avatar_1.jpg",
      tittle: "FEATURED APP",
      des: "Lightroom mobile - Koloro",
      con: "Apply these 7 secret Thecnology",
    },
    {
      img: "https://minimal-assets-api.vercel.app/assets/images/avatars/avatar_12.jpg",
      tittle: "FEATURED APP",
      des: "Lightroom mobile - Koloro",
      con: "Apply these 7 secret Thecnology",
    },
    {
      img: "https://minimal-assets-api.vercel.app/assets/images/avatars/avatar_2.jpg",
      tittle: "FEATURED APP",
      des: "Lightroom mobile - Koloro",
      con: "Apply these 7 secret Thecnology",
    },
    {
      img: "https://minimal-assets-api.vercel.app/assets/images/avatars/avatar_11.jpg",
      tittle: "FEATURED APP",
      des: "Lightroom mobile - Koloro",
      con: "Apply these 7 secret Thecnology",
    },
    {
      img: "https://media.istockphoto.com/photos/productivity-powered-by-digital-technology-picture-id1330965067?b=1&k=20&m=1330965067&s=170667a&w=0&h=ys_MV3zYkn2HJCtHC4s_03Sz1MUC2BZv6PcDdk__XSc=",
      tittle: "FEATURED APP",
      des: "Lightroom mobile - Koloro",
      con: "Apply these 7 secret Thecnology",
    },
    {
      img: "https://minimal-assets-api.vercel.app/assets/images/avatars/avatar_11.jpg",
      tittle: "FEATURED APP",
      des: "Lightroom mobile - Koloro",
      con: "Apply these 7 secret Thecnology",
    },
    
  ];
  let Contacts = [
    {
      icon: "https://res.cloudinary.com/minimal-ui/image/upload/v1614655910/upload_minimal/avatar/minimal_avatar.jpg",
      heading: "Javian Simon",
      notes: "nanne_abernathy.com",
    },
    {
      icon: "https://minimal-assets-api.vercel.app/assets/images/avatars/avatar_6.jpg",
      heading: "Lucian Obrian",
      notes: "lucian_brian.com",
    },
    {
      icon: "https://minimal-assets-api.vercel.app/assets/images/avatars/avatar_7.jpg",
      heading: "Deja Brady",
      notes: "deja_brady.com",
    },
    {
      icon: "https://minimal-assets-api.vercel.app/assets/images/avatars/avatar_8.jpg",
      heading: "Harrison Stien",
      notes: "harrison_stien.com",
    },
    {
      icon: "https://minimal-assets-api.vercel.app/assets/images/avatars/avatar_9.jpg",
      heading: "Reece Chung",
      notes: "reece_chung.com",
    },
  ];

  return (
    <div className={classes.root}>
    
       {/* First Line */}
      <Grid container className={classes.container} spacing={2}>
        {card.map((items, index) => (
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <CardComponent data={items} />
          </Grid>
        ))}
        <Grid item xs={12} sm={6} md={4} lg={5}>
          <CarouselSliders data={data} />
        </Grid>
        {/* Second Line */}
        <Grid item xs={12} sm={6} md={4} lg={7} style={{marginTop:10}}>
          <Card style={{ borderRadius: "16px" }}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                margin: 15,
              }}
            >
              <div style={{ flexDirection: "column" }}>
                <Typography variant="h6" style={{ fontWeight: 600 }}>
                  Balance Statistics
                </Typography>
                <Typography variant="subtitle2" style={{ opacity: 0.55 }}>
                  (+43% Income | +12% Expense) than last year
                </Typography>
              </div>
              <div>
                <NativeSelect defaultValue={30}>
                  <option value={10}>Ten</option>
                  <option value={20}>Twenty</option>
                  <option value={30}>Thirty</option>
                </NativeSelect>
              </div>
            </div>

            <LineCharts />
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={4} style={{marginTop:10}}>
          <Card
            style={{
              height: 530,
              backgroundColor: "rgb(244, 246, 248)",
              borderRadius: "16px",
            }}
          >
            <div className={classes.bigDiv}>
              <div>
                <Typography variant="h6" style={{ fontWeight: 600 }}>
                  Quick Transfer
                </Typography>
              </div>
              <div className={classes.recent}>
                <Typography style={{ opacity: 0.6, fontWeight: 600 }}>
                  Recent
                </Typography>
                <Typography style={{ color: "rgb(0, 171, 85)" }}>
                  View All
                </Typography>
              </div>
              <CenterMode data={data2} />
              <Typography
                style={{
                  opacity: 0.6,
                  fontSize: "13px",
                  paddingTop: 20,
                  fontWeight: 600,
                }}
              >
                INSERT AMOUNT
              </Typography>
              <Typography
                style={{
                  textAlign: "center",
                  padding: 20,
                  fontWeight: 600,
                  fontSize: "30px",
                }}
              >{`$ ${value}`}</Typography>
              <Slider
                aria-label="Temperature"
                defaultValue={0}
                onChange={handleSliderChange}
                valueLabelDisplay="auto"
                step={50}
                marks
                min={0}
                max={1000}
              />
              <div className={classes.balance}>
                <Typography style={{ opacity: 0.6, fontWeight: 600 }}>
                  Your Balance
                </Typography>
                <Typography style={{ fontWeight: 600, fontSize: "20px" }}>
                  $34,212
                </Typography>
              </div>
              <Button
                variant="contained"
                disabled
                style={{ padding: 15, marginTop: 35 }}
              >
                Transfer Now
              </Button>
            </div>
          </Card>
        </Grid>
        {/* Third Line */}
        <Grid item xs={12} sm={6} md={4} lg={7}>
          <Card style={{ borderRadius: "16px", marginTop: "-15px" }}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                margin: 15,
              }}
            >
              <Typography variant="h6" style={{ fontWeight: 600 }}>
                Expence Categories
              </Typography>
            </div>
            <PChart />
            <Divider />
            <div style={{ display: "flex", justifyContent: "space-around" }}>
              <div
                style={{
                  padding: 25,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <Typography variant="h7">Categories</Typography>
                <Typography variant="h4">6</Typography>
              </div>
              <Divider variant="horizontal" style={{ borderWidth: "1px" }} />
              <div
                style={{
                  padding: 25,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <Typography variant="h7">Categories</Typography>
                <Typography variant="h4">$18,675</Typography>
              </div>
            </div>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={4}>
          <Card
            style={{
              height: 620,
              borderRadius: "16px",
            }}
          >
            <div className={classes.currenct}>
              <div style={{ flexDirection: "column" }}>
                <Typography variant="h6" style={{ fontWeight: 600 }}>
                  Contacts
                </Typography>
                <Typography variant="subtitle2" style={{ opacity: 0.55 }}>
                  You Have 122 Contacts
                </Typography>
              </div>
              <div>
                <IconButton>
                  <Add style={{ color: "#00ab55" }} />
                </IconButton>
              </div>
            </div>
            {Contacts?.length > 0 && (
              <CardContent>
                {Contacts?.map((items, index) => (
                  <List style={{ overflow: "auto" }}>
                    <div>
                      <ListItem>
                        <ListItemIcon>
                          <Avatar
                            src={items.icon}
                            sx={{ width: "55.56px", height: "55.56px" }}
                          />
                        </ListItemIcon>
                        <ListItemText
                          style={{
                            marginLeft: 10,
                          }}
                          primary={items.heading}
                          secondary={items.notes}
                        />

                        <BoltTwoTone />
                      </ListItem>
                    </div>
                  </List>
                ))}
              </CardContent>
            )}
            <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
            <Button
                variant="outlined"
                style={{ padding: 10,width:'300px',backgroundColor:"#ffff",color:"#111" }}
              >
                View All
              </Button>

            </div>
      
           
          </Card>
        </Grid>
        {/* Fourth Line */}
        <Grid item xs={12} sm={6} md={4} lg={7}>
          <Card style={{ borderRadius: "16px", marginTop: "-72px" }}>
           
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={4}>
          <Card
            style={{
              height: 620,
              borderRadius: "16px",
            }}
          >
            <div className={classes.currenct}>
              <div style={{ flexDirection: "column" }}>
                <Typography variant="h6" style={{ fontWeight: 600 }}>
                  Contacts
                </Typography>
                <Typography variant="subtitle2" style={{ opacity: 0.55 }}>
                  You Have 122 Contacts
                </Typography>
              </div>
              <div>
                <IconButton>
                  <Add style={{ color: "#00ab55" }} />
                </IconButton>
              </div>
            </div>
            {Contacts?.length > 0 && (
              <CardContent>
                {Contacts?.map((items, index) => (
                  <List style={{ overflow: "auto" }}>
                    <div>
                      <ListItem>
                        <ListItemIcon>
                          <Avatar
                            src={items.icon}
                            sx={{ width: "55.56px", height: "55.56px" }}
                          />
                        </ListItemIcon>
                        <ListItemText
                          style={{
                            marginLeft: 10,
                          }}
                          primary={items.heading}
                          secondary={items.notes}
                        />

                        <BoltTwoTone />
                      </ListItem>
                    </div>
                  </List>
                ))}
              </CardContent>
            )}
            <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
            <Button
                variant="outlined"
                style={{ padding: 10,width:'300px',backgroundColor:"#ffff",color:"#111" }}
              >
                View All
              </Button>

            </div>
      
           
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

export default withNavBars(MainScreen);
