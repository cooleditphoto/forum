import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function PostDetail() {
    const { id } = useParams();
    const [postDetail, setPostDetail] = useState({});
    const [postReply, setPostReply] = useState('');
    const [replyList, setReplyList] = useState([]);

    useEffect(() => {
        getPostDetail(id);
        getReplyList();
    }, [id]);

    const handleTextAreaInput = event => {
        setPostReply(event.target.value);
    }

    const handleSubmit = () => {
        console.log(postReply);
    }

    const getPostDetail = (id) => {
        setPostDetail({ "name": "posttest1", "content": "content" });
    }

    const getReplyList = () => {
        setReplyList([{ "content": "reply1" }, { "content": "reply2" }])
    }

    return (
        <div>
            {postDetail.name}
            <p>
                {postDetail.content}
            </p>
            <div>
                {replyList.map(reply =>
                    <div>
                        {reply.content}
                    </div>)}
            </div>
            <div>
                <textarea value={postReply} onChange={handleTextAreaInput}>
                </textarea>
                
                <button onClick={handleSubmit}>submit</button>
            </div>
        </div>
    )


}