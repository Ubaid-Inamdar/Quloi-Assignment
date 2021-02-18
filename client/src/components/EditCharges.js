import React from 'react'
import { Edit, SimpleForm, TextInput, NumberInput, minLength } from 'react-admin'

const EditCharges = (props) => {
  return (
    <Edit title='Edit Charges' {...props}>
      <SimpleForm>
      <TextInput source='description' />
        <TextInput source='name' />
        <TextInput source='price' />
        <TextInput source='unit' />
        <TextInput source='tax' />
        <NumberInput source='exchangeRate' />
        <TextInput source='finalPayement' />

      </SimpleForm>
    </Edit>
  )
}

export default EditCharges


