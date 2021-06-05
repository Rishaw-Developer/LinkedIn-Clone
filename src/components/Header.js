import React from "react";
import {
  Container,
  Logo,
  Content,
  Search,
  SearchIcon,
  Nav,
  NavListWrap,
  NavList,
  SignOut,
  User,
  Work,
  Tryfor
} from "./ComponentsHeader";

function Home() {
  return (
    <Container>
      <Content>
        <Logo>
          <a href="/home">
            <img src="/images/logo.svg" alt="" />
          </a>
        </Logo>
        <Search>
          <div>
            <input type="text" placeholder="Search" />
          </div>
          <SearchIcon>
            <img src="/images/search-icon.svg" alt="" />
          </SearchIcon>
        </Search>
        <Nav>
          <NavListWrap>
            <NavList className="active">
              <a>
                <img src="/images/nav-home.svg" alt="" />
                <span>Home</span>
              </a>
            </NavList>

            <NavList>
              <a>
                <img src="/images/nav-network.svg" alt="" />
                <span>My Network</span>
              </a>
            </NavList>

            <NavList>
              <a>
                <img src="/images/nav-jobs.svg" alt="" />
                <span>Jobs</span>
              </a>
            </NavList>

            <NavList>
              <a>
                <img src="/images/nav-messaging.svg" alt="" />
                <span>Messaging</span>
              </a>
            </NavList>

            <NavList>
              <a>
                <img src="/images/nav-notifications.svg" alt="" />
                <span>Notifications</span>
              </a>
            </NavList>

            <User>
              <a>
                <img src="/images/user.svg" alt="" />
                <span>Me<img src="/images/down-icon.svg" alt="" /></span>
                
              </a>

              <SignOut>
                <a href="/">Sign Out</a>
              </SignOut>
            </User>

            <Work>
              <a>
                <img src="/images/nav-work.svg" alt="" />
                <span>
                  Work
                  <img src="/images/down-icon.svg" alt="" />
                </span>
              </a>
            </Work>

            <div
              style={{
                textDecoration: "none",
                display: "flex",
                alignItems: "center",
              }}
            >
              <Tryfor>
                Try Premium Free for 1 Month
              </Tryfor>
            </div>
          </NavListWrap>
        </Nav>
      </Content>
    </Container>
  );
}

export default Home;
