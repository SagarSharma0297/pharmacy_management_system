import Topbar from "../Topbar/Topbar";
import './Products.css';
import Table from '../Table/Table';
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
  ];



const Products = () => {
 
    const [medForVis,setMedForVis]=useState('none');
    let productData = JSON.parse(window.localStorage.getItem('productData'))
    if(productData == null){
        productData = [{"id":0,"name":"null","brand":"null","price":"null","stock":"null","discount":"null"}];
    }
    const [dataForDisplay,setDataForDisplay] = useState(productData);
    
    return ( 
        <>
            <Topbar/>
            <div className="outer-wrapper">
                <div className="product-header"><h1>All Medicines</h1><button onClick={()=>{
                    setMedForVis("block")
                }}>Add Medicine</button></div>
                <div className="inner-wrapper">
                    <Table rows={dataForDisplay} cols={cols}></Table>
                </div>
            </div>
            <div className="medicineForm" style={{display:medForVis}} >
                <form onSubmit={(e)=>{
                    e.preventDefault();
                    var data = {
                        "id": new Date().getTime(),
                        "name":e.target.name.value,
                        "brand":e.target.brand.value,
                        "price":e.target.price.value,
                        "stock":e.target.stock.value,
                        "discount":e.target.discount.value,
                    }
                    let productData = window.localStorage.getItem('productData')
                    if(productData === null){
                        productData = []
                        productData.push(data)
                        window.localStorage.setItem('productData',JSON.stringify(productData))
                    }
                    else{
                        productData = JSON.parse(window.localStorage.getItem('productData'))
                        productData.push(data)
                        window.localStorage.setItem('productData',JSON.stringify(productData))
                    }
                    setMedForVis("none");
                    setDataForDisplay(productData)
                    
                }}>
                    <input type="text" name="name" required placeholder="Name"></input>
                    <input type="text" name="brand" required placeholder="Brand"></input>
                    <input type="text" name="price" required placeholder="Price"></input>
                    <input type="text" name="stock" required placeholder="stock"></input>
                    <input type="text" name="discount" required placeholder="Discount"></input>
                    <input  id="sub" type="submit" value="Save"></input>
                </form>
            </div>

        </>
    );
}

export default Products;