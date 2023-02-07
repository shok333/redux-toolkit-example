
import { FC } from 'react'
import classnames from 'classnames'
import { IPost } from '../Post/IPost';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import styles from './Post.module.css';

interface IPostProps {
    post: IPost
}

export const Post: FC<IPostProps> = ({ post }) => {
    const users = useSelector((state: RootState) => state.users.list)
    const currentUser = useSelector((state: RootState) => state.users.current)
    const user = users.find(({id}) => id === post.authorId)

    return (
        <li
            className={classnames(styles.post, {
                [styles.currentUsersPost]: post.authorId === currentUser.id
            })}
        >
            <img
                className={styles.image}
                src={user?.avatar}
                alt="author"
            />
            <span
                className={classnames(styles.text, {
                    [styles.currentUsersPostText]: post.authorId === currentUser.id
                })}
            >
                {post.text}
            </span>
        </li>
    );
}