import React, { useEffect, useState, useReducer } from "react";
import { InfinitySpin } from 'react-loader-spinner'
import Toast from "./Component/Toast";
import 'react-toastify/dist/ReactToastify.css';
import './App.css'


const initState = {
  toast: { type: '', message: '' },
  title: '',
  postId: 1,
  isLoading: true
}

const initAction = {
  GET_POST_SUCCESS: 'get-post-success',
  GET_POST_REQUEST: 'get-post-request'
}
function reducer(state, action) {
  switch (action.type) {
    case initAction.GET_POST_SUCCESS:

      return {
        ...state,
        title: action.title,
        toast: { type: 'success', message: action.message },
        isLoading: false
      }

    case initAction.GET_POST_REQUEST:

      return {
        ...state,
        postId: action.postId,
        isLoading: true
      }

    default: return state;

  }
}

export default function App() {

  const [{ postId, title, isLoading, toast }, dispatch] = useReducer(reducer, initState)

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
      .then(response => response.json())
      .then(post => {

        dispatch(
          {
            type: initAction.GET_POST_SUCCESS,
            title: post.title,
            message: `"${post.title}" loaded`
          })
      })

  }, [postId])

  function handleChange(e) {
    dispatch({
      type: initAction.GET_POST_REQUEST,
      postId: e.target.value,

    })
  }

  return (
    <>
      <input value={postId} onChange={handleChange} type="number"></input>

      {isLoading ?
        <InfinitySpin
          width='200'
          color="#4fa94d"
        /> :
        <h1>{title}</h1>
      }

      <Toast message={toast.message} />
    </>
  );
}

