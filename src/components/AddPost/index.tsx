import { FC, useState } from 'react'
import classnames from 'classnames'
import { useDispatch, useSelector } from 'react-redux'
import styles from './AddPost.module.css';
import { RootState } from '../../redux/store';
import SendIcon from './assets/send.svg';
import { addPost } from '../../redux/posts';

interface IAddPostProps {
    className?: string;
}

export const AddPost: FC<IAddPostProps> = ({ className }) => {
    const [text, textChange] = useState<string>('');
    const dispatch = useDispatch()
    const currentUser = useSelector((state: RootState) => state.users.current)

    return (
        <div className={classnames(styles.addPost, className)}>
            <img
                className={styles.avatar}
                src={currentUser.avatar}
                alt="author"
            />
            <div className={styles.form}>
                <input
                    className={styles.input}
                    value={text}
                    onChange={({target}) => textChange(target.value)}
                />
                <button
                    className={styles.sendButton}
                    onClick={() => {
                        if (text) {
                            dispatch(addPost({
                                text,
                                authorId: currentUser.id,
                            }))
                            textChange('')
                        }
                    }}
                >
                    <img src={SendIcon} alt="SendIcon" />
                </button>
            </div>
        </div>
    )
}