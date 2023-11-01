import React, { useState, useEffect} from "react";
import {
  useNavigate
} from "react-router-dom";


export default function App() {
  const navigate = useNavigate();
  const [postList, setPostList] = useState([]);


  useEffect(() => {
    getPostList();
  }, []);

  const postNewJobNavigation = () => {
    navigate("/post");
  }

  const showPostDetail = (id) =>{
    navigate(`/post/${id}`);
  }

  const getPostList= ()=>{
    setPostList([{"id":"1","name":"testpost1"},
    {"id":"2","name":"testpost2"}]);
  }
  return (
       
<div>      
      <button onClick={postNewJobNavigation}>post a new one!</button>
      <div>      
        {postList.map(post => <div><li onClick={()=>showPostDetail(post.id)}>{post.name}</li></div>)}

      </div>
    </div>    
  );
}