import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import Button from '@mui/material/Button';

export default function Datacenter() {
  const [datacenter, setDatacenter] = useState([]);
  const [firebaseKeys, setFirebaseKeys] = useState({}); // نگهداری کلیدهای واقعی Firebase

  const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    { field: 'title', headerName: 'Title', width: 150, editable: true },
    { field: 'code', headerName: 'Unique Code', width: 150, editable: true },
    { field: 'desc', headerName: 'Description', width: 150, editable: true },
    {
      field: 'actions',
      headerName: 'Actions',
      width: 120,
      renderCell: (params) => (
        <Button
          variant="outlined"
          color="error"
          onClick={() => handleDelete(params.row.id)}
        >
          Delete
        </Button>
      ),
    },
  ];

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://dcim-bb92a-default-rtdb.firebaseio.com/datacenter.json');
      const data = await response.json();

      const formattedData = Object.entries(data).map(([key, value], index) => {
        return {
          id: index + 1,
          firebaseKey: key,
          title: value.title || '',
          code: value.code || '',
          desc: value.desc || '',
        };
      });

      // ساخت map از id به firebaseKey
      const keyMap = {};
      formattedData.forEach((item) => {
        keyMap[item.id] = item.firebaseKey;
      });

      setFirebaseKeys(keyMap);
      setDatacenter(formattedData);
    };

    fetchData();
  }, []);

  const handleDelete = async (id) => {
    const key = firebaseKeys[id];
    if (!key) return;

    await fetch(`https://dcim-bb92a-default-rtdb.firebaseio.com/datacenter/${key}.json`, {
      method: 'DELETE',
    });

    setDatacenter((prev) => prev.filter((row) => row.id !== id));
  };

  const handleRowUpdate = async (newRow) => {
    const key = firebaseKeys[newRow.id];
    if (!key) return newRow;

    const updatedData = {
      title: newRow.title,
      code: newRow.code,
      desc: newRow.desc,
    };

    await fetch(`https://dcim-bb92a-default-rtdb.firebaseio.com/datacenter/${key}.json`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedData),
    });

    setDatacenter((prev) =>
      prev.map((row) => (row.id === newRow.id ? newRow : row))
    );

    return newRow;
  };

  return (
    <Box sx={{ height: 500, width: '100%' }}>
      <DataGrid
        rows={datacenter}
        columns={columns}
        processRowUpdate={handleRowUpdate}
        experimentalFeatures={{ newEditingApi: true }}
        pageSizeOptions={[5]}
        disableRowSelectionOnClick
      />
    </Box>
  );
}