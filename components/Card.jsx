import { styled } from "@material-ui/styles";

const Card = (props) => {
  return (
    <CardContainer>
      <CardLeft style={{ background: `${props.color}` }}>
        <img src={props.icon} alt="Icon" />
      </CardLeft>
      <CardRight>
        <p style={{ fontSize: "18px" }}>{props.title}</p>
        <h4 style={{ fontSize: "24px", color: `${props.numberColor}` }}>
          {props.number}
        </h4>
      </CardRight>
    </CardContainer>
  );
};

export default Card;

const CardContainer = styled("div")({
  width: "calc(100% / 4 - 20px)",
  height: "100px",
  backgroundColor: "#fff",
  borderRadius: "10px",
  marginRight: "10px",
  display: "flex",
  "&:nth-of-type(4)": {
    marginRight: 0,
  },
  alignItems: "center",
});

const CardRight = styled("div")({
  marginLeft: "15px",
});

const CardLeft = styled("div")({
  padding: "20px 5px",
  marginLeft: "55px",
  borderRadius: "20px",
});
