import SearchIcon from "@material-ui/icons/Search";
import { Avatar } from "@material-ui/core";
import { styled } from "@material-ui/styles";

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderLeftContainer>
        <div>
          <MenuIcon src="/icons/menuIcon.png" alt="" />
        </div>
        <SearchContainer>
          <CustomSearchIcon />
          <Input type="text" placeholder="Search" />
        </SearchContainer>
      </HeaderLeftContainer>
      <HeaderRightContainer>
        <div>
          <CrossIcon src="/icons/Arrow-Cross.png" />
        </div>
        <div>
          <BellIcon src="/icons/Bell.png" />
        </div>
        <div>
          <CustomAvatar src="/icons/avatar.png" />
        </div>
      </HeaderRightContainer>
    </HeaderContainer>
  );
};

export default Header;

export const HeaderContainer = styled("div")({
  height: "20px",
  display: "flex",
  marginTop: "25px",
  justifyContent: "space-between",
});

const HeaderLeftContainer = styled("div")({
  display: "flex",
  alignItems: "center",
});

const MenuIcon = styled("img")({
  marginLeft: "25px",
  marginTop: "25px",
  marginRight: "50px",
  cursor: "pointer",
});

const SearchContainer = styled("div")({
  marginTop: "20px",
  marginLeft: "10px",
  backgroundColor: "#ffffff !important",
  padding: "15px",
  borderRadius: "30px",
  display: "flex",
  alignItems: "center",
});

const Input = styled("input")({
  border: "none",
  width: "500px",
  outline: "none",
});

const CustomSearchIcon = styled(SearchIcon)({});

const HeaderRightContainer = styled("div")({
  display: "flex",
  alignItems: "center",
});

const CrossIcon = styled("img")({
  marginRight: "10px",
  cursor: "pointer",
});

const BellIcon = styled("img")({
  marginRight: "10px",
  cursor: "pointer",
});

const CustomAvatar = styled(Avatar)({
  width: "80px !important",
  height: "80px !important",
  borderRadius: "50%",
  marginTop: "20px",
});
