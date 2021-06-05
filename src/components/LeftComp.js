import React from "react";
import {
  Container,
  ArtCard,
  UserInfo,
  CardBackground,
  Widget,
  CommunityCard,
  Photo,
  Link,
  AddPhotoText,
  Item,
} from "./ComponentsLeftComp";

function LeftComp() {
  return (
    <Container>
      <ArtCard>
        <UserInfo>
          <CardBackground />
          <a>
            <Photo />
            <Link>Welcome, there!</Link>
          </a>
          <a>
            <AddPhotoText>Add a photo</AddPhotoText>
          </a>
        </UserInfo>
        <Widget>
          <a>
            <div>
              <span>Connections</span>
              <span>Grow your network</span>
            </div>
            <img src="/images/widget-icon.svg" alt="" />
          </a>
        </Widget>
        <Item>
          <span>
            <img src="/images/item-icon.svg" alt="" />
            My Items
          </span>
        </Item>
      </ArtCard>

      <CommunityCard>
        <a>
          <span>Groups</span>
        </a>
        <a>
          <span>
            Events
            <img src="/images/plus-icon.svg" alt="" />
          </span>
        </a>
        <a>
          <span>Follow Hashtags</span>
        </a>
        <a style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
          <span>Discover more</span>
        </a>
      </CommunityCard>
    </Container>
  );
}

export default LeftComp;
