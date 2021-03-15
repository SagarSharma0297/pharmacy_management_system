import Topbar from "../Topbar/Topbar";
import './Products.css';
import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

const Products = () => {

    const handleEdit = (e) => {
        let productData = JSON.parse(window.localStorage.getItem('productData'))
        for (let i = 0; i < productData.length; i++) {
            if (productData[i].id == e.target.value) {
                setEditObject({

                        "id": productData[i].id,
                        "name": productData[i].name,
                        "brand": productData[i].brand,
                        "price": productData[i].price,
                        "stock": productData[i].stock,
                        "discount": productData[i].discount,
                    
                })
            }
        }
        seteditForVis('block')
    }
    
    const [editObject,setEditObject] = useState({});
    const [medForVis,setMedForVis]=useState('none');
    const [editForVis, seteditForVis] = useState('none');
    let productData = JSON.parse(window.localStorage.getItem('productData'))
    if(productData == null){
        productData = [{"id":0,"name":"null","brand":"null","price":"null","stock":"null","discount":"null"}];
    }
    const [dataForDisplay,setDataForDisplay] = useState(productData);

    const handleDelete = (e) => {
        let productData = JSON.parse(window.localStorage.getItem('productData'))
        console.log(productData)
        console.log(e.target.value)
        for (let i = 0; i < productData.length; i++) {
            if (productData[i].id == e.target.value) {
                productData.splice(i, 1)
            }
        }
        window.localStorage.setItem('productData', JSON.stringify(productData));
        setDataForDisplay(productData);
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
                <div className="product-header"><h1>All Medicines</h1><button onClick={()=>{
                    setMedForVis("block")
                }}>Add Medicine</button></div>
               
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


            <table className="table">
                <thead className="thead-dark">
                    <tr>
                        <th scope="col">Medicine Name</th>
                        <th scope="col">Medicine Brand</th>
                        <th scope="col">Price</th>
                        <th scope="col">Stock</th>
                        <th scope="col">Discount</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {dataForDisplay.map((item, key) => {
                        return (<tr key={key}>
                            <td scope="row">{item.name}</td>
                            <td>{item.brand}</td>
                            <td>{item.price}</td>
                            <td>{item.stock}</td>
                            <td>{item.discount}</td>
                            <td><button value={item.id} onClick={handleEdit}>Edit</button><button value={item.id} onClick={handleDelete}>Delete</button></td>
                        </tr>)
                    })}

                </tbody>
            </table>


            <div className="medicineForm" style={{ display:editForVis}} >
                <form onSubmit={(e) => {
                    e.preventDefault();

                    let productData = JSON.parse(window.localStorage.getItem('productData'))
                    for (let i = 0; i < productData.length; i++) {
                        if (productData[i].id == editObject.id) {
                            productData[i].name = e.target.name.value
                            productData[i].brand = e.target.brand.value
                            productData[i].price = e.target.price.value
                            productData[i].stock = e.target.stock.value
                            productData[i].discount = e.target.discount.value
                        }
        }
         window.localStorage.setItem('productData', JSON.stringify(productData));
        setDataForDisplay(productData);

        
                    seteditForVis('none');
                }}>
                    <input type="text" name="name" value={editObject.name} onChange={handleOnchange} required placeholder="Name "></input>
                    <input type="text" name="brand" value={editObject.brand} onChange={handleOnchange} required placeholder="Brand"></input>
                    <input type="text" name="price" value={editObject.price} onChange={handleOnchange} required placeholder="Price"></input>
                    <input type="text" name="stock" value={editObject.stock} onChange={handleOnchange} required placeholder="Stock"></input>
                    <input type="text" name="discount" value={editObject.discount} onChange={handleOnchange} required placeholder="Discount"></input>
                    <input id="sub" type="submit" value="Save"></input>
                </form>
            </div>
                              
        </>
    );
}

export default Products;