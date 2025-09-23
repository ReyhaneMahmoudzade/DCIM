import './AddDatacenter.css'
import TextField from '@mui/material/TextField';


export default function AddDatacenter() {
  return (
    <>
      <form action="">
        <h2 style={{ display: 'block' }}>Add New Datacenter</h2>
        <br />
        <TextField id="standard-basic" label="Title" variant="standard" />
        <br />
        <TextField id="standard-basic" label="Unique Code" variant="standard" />
        <br />
        <TextField id="standard-basic" label="Description" variant="standard" />

      </form>


    </>


  )
}
