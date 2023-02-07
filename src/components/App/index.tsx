import React from 'react';
import { PostsList } from '../PostsList';
import { UsersList } from '../UsersList';
import { AddPost } from '../AddPost';
import styles from './App.module.css';

function App() {
  return (
    <div className={styles.app}>
      <UsersList className={styles.usersList} />
      <div className={styles.rightColumn}>
        <PostsList className={styles.postsList} />
        <AddPost />
      </div>
    </div>
  );
}

export default App;
