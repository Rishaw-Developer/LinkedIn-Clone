import styled from "styled-components";

export const Container = styled.div`
  grid-area: main;
`;

export const PostSections = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0px 0px 8px;

  background: white;

  position: relative;

  overflow: hidden;

  border: 1px solid rgb(0, 0, 0, 0.15);
  border-radius: 10px
`;

export const PostByUser = styled.div`
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  padding: 8px 16px 0px;
  border: 0;
  outline: none;
  font-size: 100%;
  vertical-align: baseline;
  background: transparent;
  color: rgb(149, 139, 123);
  & > button {
    margin: 4px 0px;
    flex-grow: 1;
    border-radius: 35px;
    padding-left: 16px;
    border: 1px solid rgba(0, 0, 0, 0.15);
    background-color: white;
    text-align: left;
    display: flex;
    align-items: center;
    font-weight: 600;
    outline: none;
    color: rgba(0, 0, 0, 0.6);
    font-size: 14px;
    line-height: 1.5;
    min-height: 48px;
    cursor: pointer;
    background: transparent;
  }
`;

export const Avatar = styled.div`
  background-image: url("https://static-exp1.licdn.com/sc/h/1b4vl1r54ijmrmcyxzoidwmxs");
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  width: 48px;
  height: 48px;
  margin-right: 8px;
`;

export const PostButtons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  & > button:hover{
    background: lightgray;
  }
`

export const PostsView = styled.div``