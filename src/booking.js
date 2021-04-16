import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import { useSelector, useDispatch } from 'react-redux';
import {add} from './Slice';
import Datetime from 'react-datetime';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';


const Booking = ()=>{

    const useStyles = makeStyles((theme) => ({
        root: {
          '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: 200,
          },
        },
      }));

    const dispatch = useDispatch();

    const[name,setName] = useState('');
    const[mobilenum,setMobNum] = useState('');
    const[plate,setPlate] = useState('');
    // const[dateTime, setDateTime] = useState('');

    const handleName = (e) =>{
        setName(e.target.value);
    }

    const handleMobNum = (e) =>{
        setMobNum(e.target.value);
    }

    const handlePlate = (e) =>{
        setPlate(e.target.value);
    }

    // const handleDate = (e) => {
    //     setDateTime (e.target.value);
    // }
 
    const AddNewEmployee = () =>{
        let newBooking = {
            mobilenum:Number(mobilenum),
            plate:Number(plate),
            name:name,
            // dateTime : dateTime
        }
        dispatch(add(newBooking));
}
const classes = useStyles();
    return(
        <form className={classes.root} noValidate autoComplete="off">
                    <h1> Enter the details to confirm Booking </h1>
<div>
     <div className = "form-row">
            <div className="form-group">
                <label htmlFor="exampleInputEmail1"></label>
                <TextField required id="standard-required" label="Enter Name" id="employeeName"
                 value = {name} aria-describedby="emailHelp"
                 placeholder="Enter Name" onChange = {handleName}/> 
            </div>
            <div className="form-group">
                <label htmlFor="exampleInputPassword1"></label>
                <TextField required id="standard-required" label="Enter mobile number" id="employeeID" 
                value = {mobilenum}
                 placeholder="Enter mobile number" onChange = {handleMobNum}/>
            </div>
            <div className="form-check">
                <label htmlFor="exampleInputPassword1"></label>
                <TextField required id="standard-required" label="Enter Number Plate"
                 value = {plate}   
                 id="employeeSalary" placeholder="Enter Number Plate" onChange = {handlePlate}/>
            </div>
            <div> 
                    <TextField id="datetime-local"label="Pick the datae and time"type="datetime-local"
        defaultValue="2017-05-24T10:30"className={classes.textField}
        InputLabelProps={{
          shrink: true,
        }}
      />
            </div>
        </div>
        <Button variant="outline-primary"  onClick = {AddNewEmployee}>Submit </Button>{' '}
</div>
</form>
    )
}

export default Booking;