import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getAllPosts } from '../redux/postListSlice'
import Post from '../components/post';

const Posts = () => {
    const { posts } = useSelector((store) => store.postList)
    console.log(posts);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllPosts());
    }, [])
    return (
      <div>
        {posts && posts.map((post) => (
          <Post key={post.id} post={post}/>
        ))}
      </div>
    )
}

export default Posts;
