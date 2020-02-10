import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import Logo from "../components/FullLogo/Logo";
import NavMenu from "../components/NavMenu/NavMenu";
import Footer from "../components/Footer/Footer";
import NavBar from "../components/NavBar/NavBar";
import GownHeader from "../components/GownHeader/GownHeader";
import CollectionList from "../components/CollectionList/CollectionList";
import Layout from "../global/Layout";

import imageFile1 from "../assets/images/Fall-2020-1.png";
import imageFile2 from "../assets/images/Fall-2020-2.png";
import imageFile3 from "../assets/images/Spring-2020-1.jpeg";
import imageFile4 from "../assets/images/Spring-2020-2.jpeg";
import imageFile5 from "../assets/images/Trending-Now-1.jpeg";
import imageFile6 from "../assets/images/Trending-Now-2.jpeg";
import imageFile7 from "../assets/images/Classics-1.jpeg";
import imageFile8 from "../assets/images/Classics-2.jpeg";

const cardData = [
  {
    image: imageFile1,
    mobileLabel: "LUCA",
    desktopLabel: "Luca",
    index: 0
  },
  {
    image: imageFile2,
    mobileLabel: "VIDA",
    desktopLabel: "Vida",
    index: 1
  },
  {
    image: imageFile3,
    mobileLabel: "ALWAYS",
    desktopLabel: "Always",
    index: 2
  },
  {
    image: imageFile4,
    mobileLabel: "BELIZE",
    desktopLabel: "Belize",
    index: 3
  },
  {
    image: imageFile5,
    mobileLabel: "ALICE",
    desktopLabel: "Alice",
    index: 4
  },
  {
    image: imageFile6,
    mobileLabel: "EVELYN",
    desktopLabel: "Evelyn",
    index: 5
  },
  {
    image: imageFile7,
    mobileLabel: "AINSLEY",
    desktopLabel: "Ainsley",
    index: 6
  },
  {
    image: imageFile8,
    mobileLabel: "ANNIE",
    desktopLabel: "Annie",
    index: 7
  }
];

const collectionTitle = [
  "Fall 2020 Collection",
  "Spring 2020 Collection",
  "Trending Now",
  "Classics"
];

const SearchMenu = styled.div`
  display: flex;
  justify-content: space-between;
  width: 60%;
  margin-left: 20%;
  margin-right: 20%;
  display: none;
  @media (min-width: ${props => props.theme.breakpoints.tablet}) {
    display: inline-flex;
    font-family: ${props => props.theme.fontStyles.h3Styles.fontStyle};
    font-weight: ${props => props.theme.fontStyles.h5Styles.fontWeight};
    background-color: ${props => props.theme.colors.backgroundGray};
  }
`;

const SearchMenuItems = styled.p`
`

const SearchMenuContainer = styled.div`
@media (min-width: ${props => props.theme.breakpoints.tablet}) {
    width: 100%;
    border-top: 24px solid #E5E5E5;
    border-bottom: 2px solid #E5E5E5;
    background-color: ${props => props.theme.colors.backgroundGray};
  }
`;

const LogoContainer = styled.div`
display: none;
@media (min-width: ${props => props.theme.breakpoints.tablet}) {
  background-color: ${props => props.theme.colors.primaryPink};
  display: block;
  height: 221px;
  padding-top: 80px;
}
`

const CollectionsContainer = styled.div`
  margin-bottom: 20px;
  border-top: 2px solid #E5E5E5;
  background-color: ${props => props.theme.colors.backgroundGray};
  @media (min-width: ${props => props.theme.breakpoints.tablet}) {
    border-bottom: 28px solid #E5E5E5;
    }
`;


const CollectionTitle = styled.p`
font-family: ${props => props.theme.fontStyles.h3Styles.fontStyle};
  font-weight: 800;
  font-weight: 18px;
  padding-left: 10%;
  border-top: 8px solid #FAE5DC;
  background-color: ${props => props.theme.colors.primaryPink};
  @media (min-width: ${props => props.theme.breakpoints.tablet}) {
    margin-top: 20px;
    background-color: white;
    margin-left: 6.5%;
    font-weight: 22px;
    background-color: ${props => props.theme.colors.backgroundGray}
  }
`;

const GownsPage = () => (
  <Layout>
    <NavBar/>
    <LogoContainer>
    <Logo notag />
    </LogoContainer>
    <GownHeader/> 
    <NavMenu />
    <SearchMenuContainer>
    <SearchMenu>
      <SearchMenuItems>Search by Category</SearchMenuItems>
      <SearchMenuItems>Search by Silhouette</SearchMenuItems>
      <SearchMenuItems>Search by Details</SearchMenuItems>
      <SearchMenuItems>View Collection</SearchMenuItems>
    </SearchMenu>
    </SearchMenuContainer>
    <CollectionsContainer>
      <CollectionTitle>{collectionTitle[0]}</CollectionTitle>
      <CollectionList slideData={cardData} title="Classics"></CollectionList>
      <CollectionTitle>{collectionTitle[1]}</CollectionTitle>
      <CollectionList slideData={cardData} title="Classics"></CollectionList>
      <CollectionTitle>{collectionTitle[2]}</CollectionTitle>
      <CollectionList slideData={cardData} title="Classics"></CollectionList>
      <CollectionTitle>{collectionTitle[3]}</CollectionTitle>
      <CollectionList slideData={cardData} title="Classics"></CollectionList>
    </CollectionsContainer>
    <Footer />
  </Layout>
);

export default GownsPage;
