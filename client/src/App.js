import React from 'react'
import { Admin, Resource } from 'react-admin'
import restProvider from 'ra-data-simple-rest'
import ListCharges from './components/ListCharges'
import CreateCharges from './components/CreateCharges'
import EditCharges from './components/EditCharges'


function App() {
  return (
    <div>
   
    
    <Admin dataProvider={restProvider('http://localhost:3000')}>
      <Resource
        name='manageCharge'
        list={ListCharges}
        create={CreateCharges}
        edit={EditCharges}
      />
     
    </Admin>
    </div>
  )
}

export default App
