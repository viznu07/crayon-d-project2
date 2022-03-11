import React from "react";
import { makeStyles } from "@mui/styles";
import CallMadeIcon from "@mui/icons-material/CallMade";
import CallReceivedIcon from "@mui/icons-material/CallReceived";
import { Add, BoltTwoTone } from "@mui/icons-material";
import {
  CardComponent,
  CarouselSliders,
  LineCharts,
  CenterMode,
  PChart,
  CustomizedTables,
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
  Box,
  TextField,
} from "@mui/material";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
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
    paddingTop: 90,
    padding: 5,
    width: "100%",
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
  cardI:{
    borderRadius: "16px",
    boxShadow:
      "rgb(145 158 171 / 20%) 0px 0px 2px 0px, rgb(145 158 171 / 12%) 0px 12px 24px -4px",
  },
  card: {
    height: 530,
    backgroundColor: "rgb(244, 246, 248)",
    borderRadius: "16px",
    boxShadow:
      "rgb(145 158 171 / 20%) 0px 0px 2px 0px, rgb(145 158 171 / 12%) 0px 12px 24px -4px",
  },
  card2: {
    borderRadius: "16px",
    marginTop: "-15px",
    [theme.breakpoints.down('sm')]: {
      marginTop:5,
    },
    boxShadow:
      "rgb(145 158 171 / 20%) 0px 0px 2px 0px, rgb(145 158 171 / 12%) 0px 12px 24px -4px",
  },
  card3:{
    height: 620,
    borderRadius: "16px",
    boxShadow:
      "rgb(145 158 171 / 20%) 0px 0px 2px 0px, rgb(145 158 171 / 12%) 0px 12px 24px -4px",
  },
  card4:{
    borderRadius: "16px",
    marginTop: "-72px",
    [theme.breakpoints.down('sm')]: {
      marginTop:5,
    },
    boxShadow:
      "rgb(145 158 171 / 20%) 0px 0px 2px 0px, rgb(145 158 171 / 12%) 0px 12px 24px -4px",
  },
  card5:{
    height: 420,
    borderRadius: "16px",
    marginTop: "-120px",
    backgroundImage:
      "linear-gradient(135deg, rgb(0, 171, 85) 0%, rgb(0, 123, 85) 100%)",
    boxShadow:
      "rgb(145 158 171 / 20%) 0px 0px 2px 0px, rgb(145 158 171 / 12%) 0px 12px 24px -4px",
  }
}));

const MainScreen = (props) => {
  // const classes = useStyles();
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
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQL31834A64fuv8BfepwAHOv7XjZPMLm7JWLw&usqp=CAU",
     
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdcclmCbmjsmTiuv-Id85fuBChQu9bE641dA&usqp=CAU",
    },
  ];
  let data2 = [
    {
      img: "/images/avatar_1.jpg",
      tittle: "FEATURED APP",
      des: "Lightroom mobile - Koloro",
      con: "Apply these 7 secret Thecnology",
    },
    {
      img: "/images/avatar_5.jpg",
      tittle: "FEATURED APP",
      des: "Lightroom mobile - Koloro",
      con: "Apply these 7 secret Thecnology",
    },
    {
      img: "/images/avatar_6.jpg",
      tittle: "FEATURED APP",
      des: "Lightroom mobile - Koloro",
      con: "Apply these 7 secret Thecnology",
    },
    {
      img: "/images/avatar_5.jpg",
      tittle: "FEATURED APP",
      des: "Lightroom mobile - Koloro",
      con: "Apply these 7 secret Thecnology",
    },
    {
      img: "/images/avatar_2.jpg",
      tittle: "FEATURED APP",
      des: "Lightroom mobile - Koloro",
      con: "Apply these 7 secret Thecnology",
    },
    {
      img: "/images/avatar_9.jpg",
      tittle: "FEATURED APP",
      des: "Lightroom mobile - Koloro",
      con: "Apply these 7 secret Thecnology",
    },
    {
      img: "/images/avatar_7.jpg",
      tittle: "FEATURED APP",
      des: "Lightroom mobile - Koloro",
      con: "Apply these 7 secret Thecnology",
    },
  ];
  let Contacts = [
    {
      icon: "/images/avatar_5.jpg",
      heading: "Javian Simon",
      notes: "nanne_abernathy.com",
    },
    {
      icon: "/images/avatar_7.jpg",
      heading: "Lucian Obrian",
      notes: "lucian_brian.com",
    },
    {
      icon: "/images/avatar_12.jpg",
      heading: "Deja Brady",
      notes: "deja_brady.com",
    },
    {
      icon: "/images/avatar_13.jpg",
      heading: "Harrison Stien",
      notes: "harrison_stien.com",
    },
    {
      icon: "/images/avatar_10.jpg",
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
        <Grid item xs={12} sm={6} md={4} lg={7} style={{ marginTop: 10 }}>
          <Card
           className={classes.cardI}
          >
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
        <Grid item xs={12} sm={6} md={4} lg={4} style={{ marginTop: 10 }}>
          <Card className={classes.card}>
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
          <Card
           className={classes.card2}
          >
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
            className={classes.card3}
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
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Button
                variant="outlined"
                style={{
                  padding: 10,
                  width: "300px",
                  backgroundColor: "#ffff",
                  color: "#111",
                }}
              >
                View All
              </Button>
            </div>
          </Card>
        </Grid>
        {/* Fourth Line */}
        <Grid item xs={12} sm={6} md={4} lg={7}>
          <Card
           className={classes.card4}
          >
            <Typography variant="h6" style={{ fontWeight: 600, margin: 20 }}>
              Recent Transactions
            </Typography>
            <div style={{ padding: 10 }}>
              <CustomizedTables />
            </div>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={4}>
          <Box
            style={{
              lineHeight: 0,
              display: "block",
              overflow: "hidden",
              left: "40px",
              zIndex: 9,
              width: "140px",
              position: "relative",
              filter: "drop-shadow(rgba(0, 0, 0, 0.24) 0px 12px 24px)",
            }}
          >
            <img src="/images/illustration_invite.png" alt="invite"></img>
          </Box>
          <Card
            className={classes.card5}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                marginTop: "150px",
                color: "#fff",
                width: "75%",
              }}
            >
              <Typography
                style={{
                  fontSize: "1.5rem",
                  paddingLeft: "35px",
                  fontWeight: 700,
                }}
              >
                Invite Friends and Earn
              </Typography>
              <Typography
                style={{
                  fontSize: "3rem",
                  paddingLeft: "15px",
                  fontWeight: 700,
                }}
              >
                $50
              </Typography>
            </div>
            <div>
              <Typography
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginLeft: 33,
                  color: "#fff",
                  width: "75%",
                  marginTop: "30px",
                }}
              >
                Praesent egestas tristique nibh. Duis lobortis massa imperdiet
                quam.
              </Typography>
            </div>
            <div
              style={{
                marginLeft: 33,
                marginTop: 10,
                display: "flex",
                alignItems: "center",
              }}
            >
              <TextField
                size="small"
                placeholder="Enter"
                style={{
                  width: "40%",
                  borderRadius: "6px",
                  color: "rgb(255, 255, 255)",
                }}
              ></TextField>
              <Button
                variant="contained"
                style={{
                  marginLeft: 5,
                  backgroundColor: "rgb(255, 193, 7)",
                  color: "rgb(33, 43, 54)",
                }}
              >
                Invite
              </Button>
            </div>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

export default withNavBars(MainScreen);
