
import { FC } from 'react'
import { IUser } from './IUser';
import { changeCurrent } from '../../redux/users';
import styles from './User.module.css';
import { useDispatch } from 'react-redux';

interface IUserProps {
    user: IUser
}

export const User: FC<IUserProps> = ({ user }) => {
    const dispatch = useDispatch()

    return (
        <li
            className={styles.user}
            onClick={() => {
                dispatch(changeCurrent(user.id))
            }}
        >
            <img
                className={styles.avatar}
                src={user?.avatar}
                alt="avatar"
            />
            <span
                className={styles.text}
            >
                {user.name}
            </span>
        </li>
    )
}