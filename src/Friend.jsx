import './friend.css'
export default function Friend({friend}){
    console.log(friend);
    const {name, email} = friend;
    return(
        <div className='box'>
            <h5>Id:{friend.id}</h5>
            <h5>Name:{name}</h5>
            <h4>Email:{email}</h4>
            <h3>UserName:{friend.username}</h3>
        </div>
    )
}