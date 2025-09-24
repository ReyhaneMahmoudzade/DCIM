import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';

export default function DataGridDemo() {
  const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
      field: 'title',
      headerName: 'Title',
      width: 150,
      editable: true,
    },
    {
      field: 'code',
      headerName: 'Unique Code',
      width: 150,
      editable: true,
    },
    {
      field: 'desc',
      headerName: 'Description',
      width: 150,
      editable: true,
    },
  ];

  const [datacenter, setDatacenter] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://dcim-bb92a-default-rtdb.firebaseio.com/datacenter.json');
      const data = await response.json();

      const formattedData = Object.entries(data).map(([key, value], index) => ({
        id: index + 1,
        title: value.title || '',
        code: value.code || '',
        desc: value.desc || '',
      }));

      setDatacenter(formattedData);
    };

    fetchData();
  }, []);

  return (
    <Box sx={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={datacenter}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
      />
    </Box>
  );
}