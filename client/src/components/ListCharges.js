import React,{useState} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

import {
  List,
  Datagrid,
  TextField,
  NumberField,
  EditButton,
  DeleteButton,
} from 'react-admin'

const ListCharges = (props) => {
const[disabled,setDisabled] = useState(true);


  const handleSelect = (e) => {
    console.log("clicked");
    
    disabled ? setDisabled(false) : setDisabled(true);
  
   }
  
  return (
    <div>
      <br/>
  {disabled ? (
   <Button variant="contained" color="primary" href="#contained-buttons" disabled>
        Group
      </Button >
      ) :
      (
        <Button variant="contained" color="primary">
      Group
          </Button>
      ) }
      &nbsp;&nbsp;&nbsp;
      <Button variant="contained" color="primary" href="#contained-buttons" disabled>
        Ungroup
      </Button> 
    <List {...props} >
      <Datagrid onClick = {handleSelect}>
      <TextField source='id' />
      <TextField source='description' />
        <TextField source='name' />
        <NumberField source='price' />
        <TextField source='unit' />
        <TextField source='tax' />
        <NumberField source='exchangeRate' />
        <TextField source='finalPayement' />
        <EditButton basePath='/manageCharge' />
        <DeleteButton basePath='/manageCharge' />
      </Datagrid>
    </List>
    </div>
  )
}

export default ListCharges
