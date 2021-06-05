import React from "react";
import styled from "styled-components";
import CloseIcon from "@material-ui/icons/Close";
import AddIcon from "@material-ui/icons/Add";
import { Avatar } from "@material-ui/core";

function PostModel(props) {

    const reset = (e) => {
        props.setComment('')
        props.handleClick(e)
    }
  return (
    <>
    {props.showModel === 'open' && 
      <Container>
        <Content>
          <Header>
            <h2>Create a post</h2>
            <button onClick={reset}>
              <CloseIcon />
            </button>
          </Header>
          <hr />
          <SharedContent>
            <UserInfo>
              <Avatar className="UserAvatar" />
              <span>Name</span>
            </UserInfo>
          </SharedContent>
          <WriteComment>
            <textarea value={props.comment} onChange={e => {props.setComment(e.target.value)}}  placeholder="What do you want to talk about?"></textarea>
          </WriteComment>
          <ShareCreation>
            <AttachActions>
              <AssetButton>
                <AddIcon fontSize="large" style={{ color: "#0a66c2" }} />
              </AssetButton>

              <AssetButton>
                <img
                  fill="rgb(0, 0, 0, 0.5)"
                  src="./images/photo-icon.svg"
                  alt=""
                />
              </AssetButton>

              <AssetButton>
                <img src="./images/video-icon.svg" alt="" />
              </AssetButton>

              <UserComment>
                <button>
                  <img src="./images/post-comment.svg" />
                  <span>Anyone</span>
                </button>
              </UserComment>
            </AttachActions>
            <AttachActions>


            <PostButton disabled={!props.comment ? true: false}>Post</PostButton>


            </AttachActions>
          </ShareCreation>
        </Content>
      </Container>

  }
    </>
  );
}

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 9999;
  color: black;
  background-color: rgb(0, 0, 0, 0.5);
  animation: fadeIn 0.5s;
`;

const Content = styled.div`
  width: 100%;
  max-width: 552px;
  background-color: white;
  max-height: 90%;
  overflow: initial;
  border-radius: 5px;
  position: relative;
  display: flex;
  flex-direction: column;
  top: 32px;
  margin: 0 auto;
`;

const Header = styled.div`
  display: block;
  padding: 16px 20px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.15);
  font-size: 20px;
  line-height: 1.5;
  color: rgba(0, 0, 0, 0.6);
  font-weight: 400;
  display: flex;
  justify-content: space-between;
  align-items: center;
  button {
    height: 40px;
    width: 40px;
    min-width: auto;
    border-radius: 25px;
    outline: none;
    color: rgba(0, 0, 0, 0.15);
    border: none;
    cursor: pointer;
    background: transparent;
    svg {
      pointer-events: none;
    }
  }

  button:hover {
    background: rgb(0, 0, 0, 0.15);
  }
`;

const SharedContent = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  overflow-y: auto;
  vertical-align: baseline;
  background: transparent;
  padding: 8px 12px;
`;

const UserInfo = styled.div`
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  padding: 5px 24px 12px 24px;
  .UserAvatar {
    width: 48px;
    height: 48px;
    background-clip: content-box;
    border: 2px solid transparent;
    border-radius: 50%;
  }

  span {
    font-weight: 600;
    font-size: 16px;
    line-height: 1.5;
    margin-left: 5px;
  }
`;

const ShareCreation = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 12px 24px 12px 16px;
`;

const AttachActions = styled.div`
  display: flex;
  align-items: center;
  padding-right: 8px;
  $(AssetButton) {
    width: 50px;
  }
`;

const AssetButton = styled.button`
  display: flex;
  align-items: center;
  height: 50px;
  min-width: auto;
  color: rgba(0, 0, 0, 0.5);
  background: transparent;
  margin-right: 8px;
  border: none;
  border-radius: 50px;
  cursor: pointer;
`;

const UserComment = styled.div`
  display: flex;
  align-items: center;
  padding-right: 8px;
  $(AssetButton) {
    width: 40px;
  }

  button {
    border: none;
    background: transparent;
    margin-left: 10px;
    border-radius: 25px;
    color: rgb(0, 0, 0, 0.5);
    font-weight: bold;
    display: flex;
    align-items: center;
    padding: 8px 16px;

    span{
      margin-left: 5px;
    }
  }

  button:hover {
    border: none;
    background: rgb(0, 0, 0, 0.3);
    margin-left: 10px;
    border-radius: 25px;
    color: rgb(0, 0, 0, 0.5);
    font-weight: bold;
    display: flex;
    align-items: center;
  }

  border-left: 1px solid rgba(0, 0, 0, 0.5);
`;

const PostButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 25px;
  font-size: 15px;
  font-weight: 400;
  height: 30px;
  width: 60px;
  text-align: center;
  color: ${(props) => (props.disabled ? "":"#fff")};
  border: none;
  background: ${(props) => (props.disabled ? "rgb(0, 0, 0, 0.18)": "#0a66c2")};
  cursor: pointer;
  &:hover{
    background: ${(props) => (props.disabled ? "":"#065aaf")};
  }
`;

const WriteComment = styled.div`
  display: flex;
  align-items: center;
  padding: 12px 24px;
  border: 0;
  outline: none;
  font-size: 100%;
  vertical-align: baseline;
  background: transparent;
  textarea{
      outline: none;
      border: none;
      background: none;
    border: none;
    padding: 0;
    outline: none;
    width: 100%;
    min-height: 100px;
    resize: none;
  }
`

export default PostModel;
