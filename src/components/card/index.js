import React from "react";
import { Card,Typography,CardContent, Icon} from "@mui/material";
import { makeStyles } from "@mui/styles";
const drawerWidth = 260;

const useStyles = makeStyles((theme) => ({
    container: {
        position: "absolute",
        paddingTop: 70,
        paddingLeft: drawerWidth,
        margin:10
      },
      mainCard:{
        borderRadius: '16px',
      },
      IconUp:{
        backgroundColor:"rgb(0, 82, 73)",
        borderRadius:"50%",
        padding:12,
        display:"flex",
        justifyContent:'center',
        alignItems:'center',
        position: 'absolute',
        right: '30px',
        top: '20px',
        color:'white'
      },
      IconDown:{
        backgroundColor:"rgb(122, 79, 1)",
        borderRadius:"50%",
        padding:12,
        display:"flex",
        justifyContent:'center',
        alignItems:'center',
        position: 'absolute',
        right: '30px',
        top: '20px',
        color:'white'
      },
      cardUp:{
        backgroundImage: 'none',
        overflow: 'hidden',
        borderRadius: '16px',
        width: '100%',
        height:"100%",
        boxShadow: 'none',
        position: 'relative',
        color: 'rgb(0, 82, 73)',
        backgroundColor: 'rgb(200, 250, 205)',
      },    
      cardDown:{
        backgroundImage: 'none',
        overflow: 'hidden',
        borderRadius: '16px',
        width: '100%',
        height:"100%",
        boxShadow: 'none',
        position: 'relative',
        color: 'rgb(122, 79, 1)',
        backgroundColor: 'rgb(255, 247, 205)',
      },
      mainText:{
        fontSize:"26px",
        fontWeight:700,
      }
}))

export const CardComponent =(props)=>{
  const classes = useStyles()
  const {data} = props;
  
  return(
    <Card style={{borderRadius:"16px",height:250,
    boxShadow:
    "rgb(145 158 171 / 20%) 0px 0px 2px 0px, rgb(145 158 171 / 12%) 0px 12px 24px -4px",
    }}>
    <CardContent className={data.type === "up" ? classes.cardUp : data.type === "down" ? classes.cardDown :null}>
     <Typography variant="body2" fontWeight={400}>{data.title}</Typography>
     <Typography variant="h4" fontWeight={700} lineHeight={1.75}>{data.value}</Typography>
     <div className={data.type === "up" ? classes.IconUp : data.type === "down" ? classes.IconDown :null}>
     <Icon >{data.icon}</Icon>
     </div>  
     <div style={{display:"flex",flexDirection:"row",lineHeight:0.75}}>
     <Icon>{data.icon}</Icon>
     <Typography variant="subtitle1">{data.subText}</Typography>  
     </div>
    </CardContent>
  </Card>
  );
}