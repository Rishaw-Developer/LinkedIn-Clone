import { Avatar } from "@material-ui/core";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import React from "react";
import "./PostList.css";

function PostList() {
  return (
    <div className="postlist">
      <div className="posthead">
        <div className="postUser">
          <Avatar style={{ fontSize: "large" }} />
          <span className="userDetail">
            <h6>Elon Musk</h6>
            <p style={{ fontSize: "11px", color: "rgb(0, 0, 0, 0.55)" }}>
              CEO of SpaceX, Tesla.
              <br /> elon@1526.gmail.com <br /> 14-05-21
            </p>
          </span>
        </div>
        <div>
          <MoreHorizIcon />
        </div>
      </div>

      <div className="postData">
        <span>This is the test 🚀</span>
        <img src="./images/MyPic1.png" alt="" />
      </div>

      <div className="postActions">
        <div className="postlikes">
          <img
            src="https://static-exp1.licdn.com/sc/h/d310t2g24pvdy4pt1jkedo4yb"
            alt=""
          />
          <img src="https://static-exp1.licdn.com/sc/h/7fx9nkd7mx8avdpqm5hqcbi97" alt="" />
          <span>500 . 15.4k comments</span>
        </div>
        <hr />
        <div className="postbuttons">
            <button>
                <img src="./images/like-icon.svg" alt="" />
            </button>

            <button>
                <img src="./images/comment-icon.svg" alt="" />
                <span>Comment</span>
            </button>
        </div>
      </div>
    </div>
  );
}

export default PostList;
