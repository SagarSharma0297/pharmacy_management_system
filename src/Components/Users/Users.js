import Topbar from "../Topbar/Topbar";
import '../Products/Products.css';
import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

const Users = () => {

    const handleEdit = (e) => {    
        let userData = JSON.parse(window.localStorage.getItem('userData'))
        for (let i = 0; i < userData.length; i++) {
            if (userData[i].id == e.target.value) {
                console.log(userData[i])
                setEditObject({

                        "id": userData[i].id,
                        "firstName": userData[i].firstName,
                        "lastName": userData[i].lastName,
                        "dob": userData[i].dob,
                        "gender": userData[i].gender,
                        "yop": userData[i].yop,
                    
                })
            }
        }
        seteditForVis('block')
    }
    const [editObject,setEditObject] = useState({});
    const [medForVis, setMedForVis] = useState('none');
    const [editForVis, seteditForVis] = useState('none');
    let userData = JSON.parse(window.localStorage.getItem('userData'))
    if (userData == null) {
        userData = [{ "id": 0, "firstName": "null", "lastName": "null", "dob": "null", "gender": "null", "yop": "null" }];
    }
    const [dataForDisplay, setDataForDisplay] = useState(userData);

    const handleDelete = (e) => {
        let userData = JSON.parse(window.localStorage.getItem('userData'))
        for (let i = 0; i < userData.length; i++) {
            if (userData[i].id == e.target.value) {
                userData.splice(i, 1)
            }
        }
        window.localStorage.setItem('userData', JSON.stringify(userData));
        setDataForDisplay(userData);
    }


    const handleOnchange = (e) => {
        setEditObject({
            "id":editObject.id,
            [e.target.name]:e.target.value,
        })
    }

    return (
        <>
            <Topbar></Topbar>
            <div className="outer-wrapper">
                <div className="product-header"><h1>All USERS</h1><button onClick={() => {
                    setMedForVis("block");
                }}>Add User</button></div>
            </div>

            <div className="medicineForm" style={{ display: medForVis }} >
                <form onSubmit={(e) => {
                    e.preventDefault();
                    var data = {
                        "id": new Date().getTime(),
                        "firstName": e.target.firstName.value,
                        "lastName": e.target.lastName.value,
                        "dob": e.target.dob.value,
                        "gender": e.target.gender.value,
                        "yop": e.target.experience.value,
                    }
                    let userData = window.localStorage.getItem('userData')
                    if (userData === null) {
                        userData = [];
                        userData.push(data)
                        window.localStorage.setItem('userData', JSON.stringify(userData))
                    }
                    else {
                        userData = JSON.parse(window.localStorage.getItem('userData'))
                        userData.push(data)
                        window.localStorage.setItem('userData', JSON.stringify(userData))
                    }
                    setMedForVis("none");
                    setDataForDisplay(userData);

                }}>
                    <input type="text" name="firstName" required placeholder="First Name"></input>
                    <input type="text" name="lastName" required placeholder="Last Name"></input>
                    <input type="text" name="dob"  required placeholder="Date Of Birth"></input>
                    <input type="text" name="gender"  required placeholder="Gender"></input>
                    <input type="text" name="experience"  required placeholder="Experience"></input>
                    <input id="sub" type="submit" value="Save"></input>
                </form>
            </div>


            <table className="table">
                <thead className="thead-dark">
                    <tr>
                        <th scope="col">First Name</th>
                        <th scope="col">Last Name</th>
                        <th scope="col">DOB</th>
                        <th scope="col">Gender</th>
                        <th scope="col">Experience</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {dataForDisplay.map((item, key) => {
                        return (<tr key={key}>
                            <td scope="row">{item.firstName}</td>
                            <td>{item.lastName}</td>
                            <td>{item.dob}</td>
                            <td>{item.gender}</td>
                            <td>{item.yop}</td>
                            <td><button value={item.id} onClick={handleEdit}>Edit</button><button value={item.id} onClick={handleDelete}>Delete</button></td>
                        </tr>)
                    })}

                </tbody>
            </table>





            <div className="medicineForm" style={{ display:editForVis}} >
                <form onSubmit={(e) => {
                    e.preventDefault();
                    let updatedData = {
                        "firstName": e.target.firstName.value,
                        "lastName": e.target.lastName.value,
                        "dob": e.target.dob.value,
                        "gender": e.target.gender.value,
                        "yop": e.target.experience.value,
                    }
                    console.log(updatedData)
                    console.log(editObject.id)

                    let userData = JSON.parse(window.localStorage.getItem('userData'))
                    for (let i = 0; i < userData.length; i++) {
                        if (userData[i].id == editObject.id) {
                            userData[i].firstName = e.target.firstName.value
                            userData[i].lastName = e.target.lastName.value
                            userData[i].dob = e.target.dob.value
                            userData[i].gender = e.target.gender.value
                            userData[i].yop = e.target.experience.value
                        }
        }
         window.localStorage.setItem('userData', JSON.stringify(userData));
        setDataForDisplay(userData);

                    seteditForVis('none');
                }}>
                    <input type="text" name="firstName" value={editObject.firstName} onChange={handleOnchange}   required placeholder="First Name"></input>
                    <input type="text" name="lastName" value={editObject.lastName} onChange={handleOnchange}  required placeholder="Last Name"></input>
                    <input type="text" name="dob" value={editObject.dob} onChange={handleOnchange} required placeholder="Date Of Birth"></input>
                    <input type="text" name="gender" value={editObject.gender} onChange={handleOnchange} required placeholder="Gender"></input>
                    <input type="text" name="experience" value={editObject.yop} onChange={handleOnchange} required placeholder="Experience"></input>
                    <input id="sub" type="submit" value="Save"></input>
                </form>
            </div>
        </>
    );
}

export default Users;