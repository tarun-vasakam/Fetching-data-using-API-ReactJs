import React,{useState,useEffect} from "react";
function Apidemo()
{
    const [users,setUsers]=useState([]);
    const [loading,setLoading]=useState(true);
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data => {
        setUsers(data);
        setLoading(false);
        })
        .catch(error =>{
        console.error("If it is not working",error);
        setLoading(false);
        });
    },[]);
    if(loading){
        return <p>LOADING...</p>;
    }
    return(
        <div>
        <h1>Fetched data</h1>
        <ul>
            {users.map(user =>(
            <li key={user.id}>{user.name}</li>
            ))}
        </ul>
        </div>
    );
}
export default Apidemo
