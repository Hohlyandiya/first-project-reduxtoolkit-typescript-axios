import React, {useEffect, useState} from 'react';
import './App.css';
import { post } from './components/models/post';
import { useAppDispatch, useAppSelector } from './hooks/redux';
import {fetch} from './toolkit/PostsFeatching'

function App() {

  const dispatch = useAppDispatch()
  const {posts, loading, error} = useAppSelector(state => state.toolkitSlice)

  useEffect(() => {
    dispatch(fetch())
  }, [])

  console.log(posts)

  return (
    <div className="App">
      {loading && <h1>Идет загрузка</h1>}
      {error && <h1>{error}</h1>}
      {JSON.stringify(posts, null, 2)}
    </div>
  );
}

export default App;
