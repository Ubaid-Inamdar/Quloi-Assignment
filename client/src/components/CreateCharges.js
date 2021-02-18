import React from 'react'
import { Create, SimpleForm, TextInput, NumberInput } from 'react-admin'

const CreateCharges = (props) => {
  return (
    <Create title='Create a charge' {...props}>
      <SimpleForm>
        <TextInput source='description' />
        <TextInput source='name' />
        <TextInput source='price' />
        <TextInput source='unit' />
        <TextInput source='tax' />
        <NumberInput source='exchangeRate' />
        <TextInput source='finalPayement' />

      </SimpleForm>
    </Create>
  )
}

export default CreateCharges
