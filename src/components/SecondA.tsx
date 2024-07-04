import { useState, useEffect } from "react";
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import Box from '@mui/material/Box';

interface Post {
  userId: number,
  id: number,
  title: string,
  body: string
}

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'userId', headerName: 'User ID', width: 90 },
  { field: 'title', headerName: 'Title', width: 150 },
  { field: 'body', headerName: 'Body', width: 250 },
];

function SecondA() {
  const [data, setData] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'GET'
      });
      const result = await response.json();
      setData(result);
      setLoading(false);
    }

    fetchData();
  }, []);

  return (
    <Box
      display="flex"
      justifyContent="center"
      height="100vh"
    >
      <Box sx={{ height: 400, width: '650px' }}>
      <DataGrid
        rows={data}
        columns={columns}
        loading={loading}
        getRowId={(row) => row.id}
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
    </Box>
  );
}

export default SecondA;