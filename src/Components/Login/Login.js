
import classess from './Login.module.css';

const Login = (props) => {
    const loginFormSubmit = (e) => {
        e.preventDefault();
        var data = { "username":e.target.username.value,
                    "password":e.target.password.value,
                }
       if((data.username === "test-admin")&&(data.password === "test-admin")){
           window.alert('Login Successful !!!')
           window.localStorage.setItem('userType','storemanager')
           props.history.push('/products')
       }else if((data.username === "test-sales")&&(data.password === "test-sales")){
        window.alert('Login Successful !!!')
        window.localStorage.setItem('userType','salesexecutive')
        props.history.push('/orders')

       }else{
        window.alert("Please Enter Valid Credential !!!")
       }
    }
    return (
        <>
            <div className={classess.formWrapper}>
            <form onSubmit={loginFormSubmit}>
                <div className={classess.formInnerWrapper}>
                    <img alt='login-icon' src='https://www.pngitem.com/pimgs/m/390-3900455_transparent-team-icon-png-blue-team-icon-png.png' width="100px"></img>

                    <h1>Pharmacy Management System</h1>
                    <input type="text" name="username" placeholder="username"></input>
                    <input type="password" name="password" placeholder="password"></input>
                    <input id={classess.submitButton} type="submit" value="Log In"></input>                                 
                </div>
                </form>   
            </div>
        </>
     );
}
 
export default Login;