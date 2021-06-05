import React, { useState } from "react";
import {
  Container,
  FollowCard,
  Title,
  FeedList,
  Avatar,
  Recommendation,
  BannerCard,
} from "./ComponentsRightComp";
import AddIcon from "@material-ui/icons/Add";

function RightComp() {
  const [FeedLists, setFeed] = useState([
    {
      id: 0,
      name: "#Rishaw",
    },
    {
      id: 1,
      name: "#Coding",
    },
  ]);

  return (
    <div>
      <Container>
        <FollowCard>
          <Title>
            <h2>Add to your feed</h2>
            <img src="/images/feed-icon.svg" alt="" />
          </Title>

          <FeedList>
            {FeedLists.map((users) => (
                <li key={users.id}>
                <a>
                  <Avatar />
                </a>
                <div>
                  <span>{users.name}</span>
                  <button><AddIcon />Follow</button>
                </div>
              </li>
            ))}
          </FeedList>

          

          <Recommendation>
            View all recommendations
            <img src="/images/right-icon.svg" alt="" />
          </Recommendation>
        </FollowCard>
        <BannerCard>
          <img
            src="https://static-exp1.licdn.com/scds/common/u/images/promo/ads/li_evergreen_jobs_ad_300x250_v1.jpg"
            alt=""
          />
        </BannerCard>
      </Container>
    </div>
  );
}

export default RightComp;
