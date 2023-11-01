import React, { useState, useEffect} from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  useNavigate
} from "react-router-dom";


import PostDetail from "./PostDetail.js"
import Post from "./Post.js";
import Main from "./Main.js"

export default function App() {
  return (
<><Routes>
        <Route path={`/`} element={<Main/>}></Route>
        <Route path={`/post/:id`} element={<PostDetail/>}>
        </Route>
        <Route path={`/post`} element={<Post/>}>
        </Route>
      </Routes></>
      
  );
}
