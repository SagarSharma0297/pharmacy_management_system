import Topbar from '../Topbar/Topbar';
import Table from '../Table/Table';
import '../Products/Products.css';
import { useEffect, useState } from "react";
const rows = [
    
    { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
    { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
    { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
    { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
    { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
    { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
    { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
    { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
    { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
  ];

  const cols = [
    { field: 'orderid', headerName: 'Order ID', type:'number', width: 200 },
    { field: 'customerName', headerName: 'Customer Name', width: 200 },
    {
      field: 'contact',
      headerName: 'Customer Contact',
      type: 'number',
      width: 200,
    },
    {
      field: 'productName',
      headerName: 'Product name',
      type: 'number',
      width: 150,
    },
    {
      field: 'quantity',
      headerName: 'Quantity',
      type: 'number',
      width: 150,
    },
  ];

const Orders = () => {
    const [medForVis,setMedForVis]=useState('none');
    let ordersData = JSON.parse(window.localStorage.getItem('ordersData'))
    if(ordersData == null){
        ordersData = [{"id":0,"orderid":"null","customerName":"null","contact":"null","productName":"null","quantity":"null"}];
    }
    const [dataForDisplay,setDataForDisplay] = useState(ordersData);
    return ( 
        <>
            <Topbar/>
            <div className="outer-wrapper">
                <div className="product-header"><h1>All Orders</h1><button onClick={()=>{
                    setMedForVis("block")
                }}>Create Order</button></div>
                <div className="inner-wrapper">
                    <Table rows={dataForDisplay} cols={cols}></Table>
                </div>
            </div>

            <div className="medicineForm" style={{display:medForVis}} >
                <form onSubmit={(e)=>{
                    e.preventDefault();
                    var data = {
                        "id":new Date().getTime(),
                        "orderid": new Date().getTime(),
                        "customerName":e.target.customerName.value,
                        "contact":e.target.contact.value,
                        "productName":e.target.product.value,
                        "quantity":e.target.quantity.value,
                        
                    }
                    let ordersData = window.localStorage.getItem('ordersData')
                    if(ordersData === null){
                        ordersData = []
                        ordersData.push(data)
                        window.localStorage.setItem('ordersData',JSON.stringify(ordersData))
                    }
                    else{
                        ordersData = JSON.parse(window.localStorage.getItem('ordersData'))
                        ordersData.push(data)
                        window.localStorage.setItem('ordersData',JSON.stringify(ordersData))
                    }
                    setMedForVis("none");
                    setDataForDisplay(ordersData)
                    
                }}>
                    <input type="text" name="customerName" required placeholder="Customer Name"></input>
                    <input type="text" name="contact" required placeholder="Contact Number"></input>
                    <input type="text" name="product" required placeholder="Product Name"></input>
                    <input type="text" name="quantity" required placeholder="Quantity"></input>
                    <input  id="sub" type="submit" value="Save"></input>
                </form>
            </div>
        </>
     );
}
 
export default Orders;