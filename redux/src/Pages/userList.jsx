import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getAllUsers } from '../redux/userListSlice';
import User from '../components/user';

const UserList = () => {
    const { users } = useSelector((store) => store.userList)
    console.log(users);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllUsers())
    }, [])

    return (
        <div className='user-list'>
            {
                users && users.map((user) => (
                    <User key={user.id} user={user}/>
                ))
            }
        </div>
    )
}

export default UserList;
