import { NavLink } from 'react-router-dom';
import classes from './Topbar.module.css';
import { useHistory } from "react-router-dom";
const Topbar = (props) => {
    const history = useHistory(); 
    const loginrole = window.localStorage.getItem('userType');
    return ( <>
        <div className={classes.topbarWrapper}>
            <div className={classes.topbarLeft}>
                <img width='100px' src='https://i.pinimg.com/originals/32/b9/fd/32b9fdeb745a61f5d6dae01bb6e71515.png'></img>
            </div>
            {loginrole=="storemanager"?<div className={classes.topbarMid}>
               
               <NavLink className={classes.menuItem} to='/products' activeClassName={classes.activeNav}> Products</NavLink>
               <NavLink className={classes.menuItem} to='/orders' activeClassName={classes.activeNav}> Orders</NavLink>
               <NavLink className={classes.menuItem} to='/users' activeClassName={classes.activeNav}> Users</NavLink>
           </div>:<div className={classes.topbarMid}><NavLink className={classes.menuItem} to='/orders' activeClassName={classes.activeNav}> Orders</NavLink></div>}
            <div className={classes.topbarRight}>
                <button onClick={()=>{
                    history.push('/')
                }}>Sign Out</button>
            </div>
        </div>
    </> );
}
 
export default Topbar;