import { useState } from 'react';
import './AddDatacenter.css'
import TextField from '@mui/material/TextField';


export default function AddDatacenter() {

  const [title, setTitle] = useState('')
  const [code, setCode] = useState('')
  const [desc, setDesc] = useState('')

  const registerHandler = event => {
    event.preventDefault()

    let datacenterInfo = {
      title,
      code,
      desc
    }

    fetch('https://dcim-bb92a-default-rtdb.firebaseio.com/datacenter.json', {
      method: 'POST',
      body: JSON.stringify(datacenterInfo)
    }).then(response => console.log(response))
  }



  return (
    <>
      <form onSubmit={registerHandler}>
        <h2>Add New Datacenter</h2>
        <br />
        <TextField id="Title" label="Title" variant="standard" value={title} onChange={(event) => setTitle(event.target.value)} />
        <br />
        <TextField id="Unique Code" label="Unique Code" variant="standard" value={code} 
        onChange={(event) => setCode(event.target.value)} />
        <br />
        <TextField id="Description" label="Description" variant="standard" value={desc} 
        onChange={(event) => setDesc(event.target.value)} />

        <button className="form-field" type="submit">
          Save
        </button>

      </form>


    </>


  )
}
