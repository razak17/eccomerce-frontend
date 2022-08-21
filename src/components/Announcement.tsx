import React from "react";
import styled from "styled-components";

const StyledAnnouncement = styled.div`
  height: 30px;
  background-color: teal;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 500;
`;

const Announcement: React.FC = () => {
  return <StyledAnnouncement>Super Deal! Free Shipping on Orders Over $49.99</StyledAnnouncement>;
};

export default Announcement;
