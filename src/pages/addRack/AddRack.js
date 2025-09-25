import { useState } from 'react';
import './AddRack.css'
import { TextField, Button, Paper, Typography, Stack, Box } from '@mui/material';




export default function AddRack() {

  const [title, setTitle] = useState('')
  const [code, setCode] = useState('')
  const [parent, setParent] = useState('')
  const [desc, setDesc] = useState('')

  const registerHandler = event => {
    event.preventDefault()

    let rackInfo = {
      title,
      code,
      parent,
      desc
    }

    fetch('https://dcim-bb92a-default-rtdb.firebaseio.com/rack.json', {
      method: 'POST',
      body: JSON.stringify(rackInfo)
    }).then(response => console.log(response))
  }



  return (
    <>

      <Paper elevation={3} sx={{ padding: 4, width:'100%',  maxWidth: 700, margin: 'auto', mt: 5 }}>
        <form onSubmit={registerHandler}>
          <Typography variant="h5" gutterBottom>
            Add New Rack
          </Typography>

          <Stack spacing={3}>
            <TextField
              id="Title"
              label="Title"
              variant="outlined"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              fullWidth
            />

            <TextField
              id="Unique Code"
              label="Unique Code"
              variant="outlined"
              value={code}
              onChange={(e) => setCode(e.target.value)}
              fullWidth
            />

            <TextField
              id="parent"
              label="Parent"
              variant="outlined"
              value={parent}
              onChange={(e) => setParent(e.target.value)}
              fullWidth
            />

            <TextField
              id="Description"
              label="Description"
              variant="outlined"
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
              fullWidth
              multiline
              rows={4}
            />

            <Box textAlign="right">
              <Button variant="contained" size="medium" type="submit">
                Save
              </Button>
            </Box>
          </Stack>
        </form>
      </Paper>


    </>


  )
}
