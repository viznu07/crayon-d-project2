import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Avatar, Typography } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  borderBottom:"none",
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: '#f4f6f8',
    color: '#637381',
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
   backgroundColor:"#fff",
  // '&:nth-of-type(odd)': {
  //   backgroundColor: theme.palette.action.hover,
  // },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

const InProgress =()=>{
  return(
    <div style={{backgroundColor:"rgba(255, 193, 7, 0.16)",padding:2,textAlign:"center",borderRadius:'6px',color:"rgb(183, 129, 3)"}}>
      In propgress
    </div>
  )
}

const Completed =()=>{
  return(
    <div style={{backgroundColor:"rgba(84, 214, 44, 0.16)",padding:2,textAlign:"center",borderRadius:'6px',color:"rgb(34, 154, 22)"}}>
      Completed
    </div>
  )
}

const Failed =()=>{
  return(
    <div style={{backgroundColor:"rgba(255, 72, 66, 0.16)",padding:2,textAlign:"center",borderRadius:'6px',color:"rgb(183, 33, 54)"}}>
      Failed
    </div>
  )
}

const Date =()=>{
  return(
   <div>
     <div style={{fontWeight:600}}>
       29-Jun-2021
      </div>
      <div style={{opacity:0.75}}>
        4.28 AM
      </div>
   </div>
  )
}


const rows = [
  {
    desc: <div style={{display:'flex',alignItems:'center'}}>
      <Avatar src='https://minimal-assets-api.vercel.app/assets/images/avatars/avatar_9.jpg'/>
      <div style={{flexDirection:"column",marginLeft:7}}>
      <Typography style={{opacity:0.65}}>Receiving Money From</Typography>
      <Typography style={{fontWeight:600}}>Anna</Typography>
      </div>  
    </div>,
    date:<Date/>,
    amount:'$811.45',
    status:<InProgress/>
  },
  {
    desc: <div style={{display:'flex',alignItems:'center'}}>
      <Avatar src='https://minimal-assets-api.vercel.app/assets/images/avatars/avatar_10.jpg'/>
      <div style={{flexDirection:"column",marginLeft:7}}>
      <Typography style={{opacity:0.65}}>Payment For</Typography>
      <Typography style={{fontWeight:600}}>Courtney Henry</Typography>
      </div>  
    </div>,
    date:<Date/>,
    amount:'$811.45',
    status:<Completed/>
  },
  {
    desc: <div style={{display:'flex',alignItems:'center'}}>
      <Avatar src='https://minimal-assets-api.vercel.app/assets/images/avatars/avatar_13.jpg'/>
      <div style={{flexDirection:"column",marginLeft:7}}>
      <Typography style={{opacity:0.65}}>Payment For</Typography>
      <Typography style={{fontWeight:600}}>Theresa Webb</Typography>
      </div>  
    </div>,
    date:<Date/>,
    amount:'$811.45',
    status:<Failed/>
  },
  {
    desc: <div style={{display:'flex',alignItems:'center'}}>
      <Avatar src='https://minimal-assets-api.vercel.app/assets/images/avatars/avatar_13.jpg'/>
      <div style={{flexDirection:"column",marginLeft:7}}>
      <Typography style={{opacity:0.65}}>Payment For</Typography>
      <Typography style={{fontWeight:600}}>Beauty & Health</Typography>
      </div>  
    </div>,
    date:<Date/>,
    amount:'$811.45',
    status:<InProgress/>
  }
];

export const CustomizedTables =()=>{
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Description</StyledTableCell>
            <StyledTableCell align="center">Date</StyledTableCell>
            <StyledTableCell align="right">Amount</StyledTableCell>
            <StyledTableCell align="center">Status</StyledTableCell>  
            <StyledTableCell align="right"></StyledTableCell>  
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.desc}>
              <StyledTableCell component="th" scope="row">
                {row.desc}
              </StyledTableCell>
              <StyledTableCell align="center">{row.date}</StyledTableCell>
              <StyledTableCell align="right">{row.amount}</StyledTableCell>
              <StyledTableCell align="right">{row.status}</StyledTableCell>
              <StyledTableCell align="right"><MoreVertIcon/></StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
