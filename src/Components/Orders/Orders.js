import Topbar from '../Topbar/Topbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Products/Products.css';
import { useState } from "react";

const Orders = () => {

    const handleEdit = (e) => {
        let ordersData = JSON.parse(window.localStorage.getItem('ordersData'))
        for (let i = 0; i < ordersData.length; i++) {
            if (ordersData[i].id == e.target.value) {
                setEditObject({

                        "id": ordersData[i].id,
                        "orderid":ordersData[i].orderid,
                        "customerName": ordersData[i].customerName,
                        "contact": ordersData[i].contact,
                        "productName": ordersData[i].productName,
                        "quantity": ordersData[i].quantity,         
                    
                })
            }
        }
        seteditForVis('block')
    }

    const [editObject,setEditObject] = useState({});
    const [medForVis,setMedForVis]=useState('none');
    const [editForVis, seteditForVis] = useState('none');
    let ordersData = JSON.parse(window.localStorage.getItem('ordersData'))
    if(ordersData == null){
        ordersData = [{"id":0,"orderid":"null","customerName":"null","contact":"null","productName":"null","quantity":"null"}];
    }
    const [dataForDisplay,setDataForDisplay] = useState(ordersData);


    const handleDelete = (e) => {
        let ordersData = JSON.parse(window.localStorage.getItem('ordersData'))
        console.log(ordersData)
        console.log(e.target.value)
        for (let i = 0; i < ordersData.length; i++) {
            if (ordersData[i].id == e.target.value) {
                ordersData.splice(i, 1)
            }
        }
        window.localStorage.setItem('ordersData', JSON.stringify(ordersData));
        setDataForDisplay(ordersData);
    }

    const handleOnchange = (e) => {
        setEditObject({
            "id":editObject.id,
            [e.target.name]:e.target.value,
        })
    }

    return ( 
        <>
            <Topbar/>
            <div className="outer-wrapper">
                <div className="product-header"><h1>All Orders</h1><button onClick={()=>{
                    setMedForVis("block")
                }}>Create Order</button></div>
               
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


            <table className="table">
                <thead className="thead-dark">
                    <tr>
                        <th scope="col">OrderID</th>
                        <th scope="col">Customer Name</th>
                        <th scope="col">Contact</th>
                        <th scope="col">Product Name</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {dataForDisplay.map((item, key) => {
                        return (<tr key={key}>
                            <td scope="row">{item.orderid}</td>
                            <td>{item.customerName}</td>
                            <td>{item.contact}</td>
                            <td>{item.productName}</td>
                            <td>{item.quantity}</td>
                            <td><button value={item.id} onClick={handleEdit}>Edit</button><button value={item.id} onClick={handleDelete}>Delete</button></td>
                        </tr>)
                    })}

                </tbody>
            </table>


            <div className="medicineForm" style={{ display:editForVis}} >
                <form onSubmit={(e) => {
                    e.preventDefault();

                    let ordersData = JSON.parse(window.localStorage.getItem('ordersData'))
                    for (let i = 0; i < ordersData.length; i++) {
                        if (ordersData[i].id == editObject.id) {
                            
                            ordersData[i].customerName = e.target.customerName.value
                            ordersData[i].contact = e.target.contact.value
                            ordersData[i].productName = e.target.product.value
                            ordersData[i].quantity = e.target.quantity.value
                        }
        }
         window.localStorage.setItem('ordersData', JSON.stringify(ordersData));
        setDataForDisplay(ordersData);

                    seteditForVis('none');
                }}>
                    <input type="text" name="customerName" value={editObject.customerName} onChange={handleOnchange} required placeholder="Customer Name"></input>
                    <input type="text" name="contact" value={editObject.contact} onChange={handleOnchange} required placeholder="Contact"></input>
                    <input type="text" name="product" value={editObject.productName} onChange={handleOnchange} required placeholder="Product"></input>
                    <input type="text" name="quantity" value={editObject.quantity} onChange={handleOnchange} required placeholder="quantity"></input>
                   
                    <input id="sub" type="submit" value="Save"></input>
                </form>
            </div>
        </>
     );
}
 
export default Orders;