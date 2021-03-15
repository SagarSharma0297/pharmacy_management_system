import * as React from 'react';
import { DataGrid } from '@material-ui/data-grid';

/* const columns = [
  { field: 'name', headerName: 'Medicine Name', width: 200 },
  { field: 'brand', headerName: 'Medicine Brand', width: 200 },
  {
    field: 'price',
    headerName: 'Price',
    type: 'number',
    width: 150,
  },
  {
    field: 'stock',
    headerName: 'Stock',
    type: 'number',
    width: 150,
  },
  {
    field: 'discount',
    headerName: 'Discount',
    type: 'number',
    width: 150,
  },
]; */

/* const rows = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
  { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
  { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
  { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
]; */

export default function DataTable(props) {
  return (
    <div style={{ height: 500}}>
      <DataGrid rows={props.rows} columns={props.cols} checkboxSelection/>
    </div>
  );
}
