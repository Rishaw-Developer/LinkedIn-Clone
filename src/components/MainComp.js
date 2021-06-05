import React, { useState } from "react";
import {
  Avatar,
  Container,
  PostByUser,
  PostSections,
  PostButtons,
  PostsView
} from "./ComponentsMainComp";
import PostList from "./PostList";
import PostModel from "./PostModel";

function MainComp() {
  const [comments, setComments] = useState('')
  const [showModel, setShowModel] = useState("close")

  const handleClick = e => {
    e.preventDefault();
    if (e.target !== e.currentTarget){
      return;
    }

    switch(showModel){
      case "close":
        setShowModel('open');
        break;

      case 'open':
        setShowModel('close');
        break;

      default:
        setShowModel('close');
        break;
    }
  }

  return (
    <Container>
      <PostSections>
        <PostByUser>
          <Avatar />
          <button onClick={handleClick}><span>Start a post</span></button>
        </PostByUser>
        <PostButtons>
          <button style={ba}>
            <img src="./images/photo-icon.svg" alt="photo Logo"/>
            <span>Photo</span>
          </button>

          <button style={ba}>
            <img src="./images/video-icon.svg" alt="photo Logo"/>
            <span>video</span>
          </button>

          <button style={ba}>
            <img src="./images/event-icon.svg" alt="photo Logo"/>
            <span>Event</span>
          </button>

          <button style={ba}>
            <img src="./images/write-icon.svg" alt="photo Logo"/>
            <span>Write article</span>
          </button>
        </PostButtons>
      </PostSections>

      <PostModel showModel={showModel} handleClick={handleClick} comment={comments} setComment={setComments}/>
      
      <PostsView>
        <PostList />
      </PostsView>
    </Container>
  );
}

const ba = {
    color: 'gray',
    fontSize: '14px',
    lineHeight: '1.5',
    minHeight: '48px',
    cursor: 'pointer',
    background: 'transparent',
    border: 'none',
    display: 'flex',
    webkitBoxAlign: 'center',
    alignItems: 'center',
    fontWeight: '100'
}

export default MainComp;
