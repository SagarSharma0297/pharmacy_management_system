import Topbar from "../Topbar/Topbar";
import Table from '../Table/Table';
import '../Products/Products.css';
import { useState } from "react";
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
    { field: 'firstName', headerName: 'First Name', width: 200 },
    { field: 'lastName', headerName: 'Last Name', width: 200 },
    {
      field: 'dob',
      headerName: 'Date of Birth',
      type: 'number',
      width: 150,
    },
    {
      field: 'gender',
      headerName: 'Gender',
      type: 'number',
      width: 150,
    },
    {
      field: 'yop',
      headerName: 'Experience',
      type: 'number',
      width: 150,
    },
  ];
const Users = () => {
    const [medForVis,setMedForVis]=useState('none');
    let userData = JSON.parse(window.localStorage.getItem('userData'))
    if(userData == null){
        userData = [{"id":0,"firstName":"null","lastName":"null","dob":"null","gender":"null","yop":"null"}];
    }
    const [dataForDisplay,setDataForDisplay] = useState(userData);
    return (
        <>  
        <Topbar></Topbar>
        <div className="outer-wrapper">
                <div className="product-header"><h1>All USERS</h1><button onClick={()=>{
                    setMedForVis("block");
                }}>Add User</button></div>
                <div className="inner-wrapper">
                    <Table rows={dataForDisplay} cols={cols}></Table>
                </div>
            </div>

            <div className="medicineForm" style={{display:medForVis}} >
                <form onSubmit={(e)=>{
                    e.preventDefault();
                    var data = {
                        "id": new Date().getTime(),
                        "firstName":e.target.firstName.value,
                        "lastName":e.target.lastName.value,
                        "dob":e.target.dob.value,
                        "gender":e.target.gender.value,
                        "yop":e.target.experience.value,
                    }
                    let userData = window.localStorage.getItem('userData')
                    if(userData === null){
                        userData = [];
                        userData.push(data)
                        window.localStorage.setItem('userData',JSON.stringify(userData))
                    }
                    else{
                        userData = JSON.parse(window.localStorage.getItem('userData'))
                        userData.push(data)
                        window.localStorage.setItem('userData',JSON.stringify(userData))
                    }
                    setMedForVis("none");
                    setDataForDisplay(userData);
                    
                }}>
                    <input type="text" name="firstName" required placeholder="First Name"></input>
                    <input type="text" name="lastName" required placeholder="Last Name"></input>
                    <input type="text" name="dob" required placeholder="Date Of Birth"></input>
                    <input type="text" name="gender" required placeholder="Gender"></input>
                    <input type="text" name="experience" required placeholder="Experience"></input>
                    <input  id="sub" type="submit" value="Save"></input>
                </form>
            </div>

        </>
      );
}
 
export default Users;