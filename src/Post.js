import React, { useState} from "react";

export default function Post() {
    const [postContent, setPostContent] = useState('');

    const handleTextAreaInput = event =>{
        setPostContent(event.target.value);
    }

    const handleSubmit = ()=>{
        console.log(postContent);
    }
    return (
        <div>
            <textarea value = {postContent} onChange={handleTextAreaInput}>
            </textarea>
             
            <button onClick={handleSubmit}>submit</button>
        </div>
    );
}