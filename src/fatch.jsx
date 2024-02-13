import { useEffect, useState } from "react";
import UsersData from "./Friend";
import Friend from "./Friend";

export default function Users(){
    const [friends, setFriends] = useState([]);
    useEffect(() =>{
        fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(json => setFriends(json))
    }, [])
    return(
        <div>
            <h3>Users:{friends.length}</h3>
            {
                friends.map(friend => <Friend friend={friend}></Friend>)
            }
        </div>
    )
}