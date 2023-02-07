import { FC, useEffect } from 'react'
import classnames from 'classnames'
import { useSelector } from 'react-redux';
import { RootState, useStoreDispatch } from '../../redux/store';
import { User } from "../User"
import styles from './UserList.module.css';
import { getUsers } from '../../redux/users';

interface IUserListProps {
    className?: string;
}

export const UsersList: FC<IUserListProps> = ({className}) => {
    const dispatch = useStoreDispatch()
    const users = useSelector((state: RootState) => state.users.list)

    useEffect(() => {
        dispatch(getUsers())
    }, [dispatch]);

    return (
        <ul className={classnames(styles.userList, className)}>
            {users.map((user) => <User key={user.id} user={user} />)}
        </ul>
    )
}