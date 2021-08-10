import Header, { HeaderContainer } from "../components/Header";
import Card from "./Card";

const Dashboard = () => {
  return (
    <>
      <div style={{ width: "85%" }}>
        <Header />
        <div
          style={{
            marginLeft: "50px",
            marginTop: "80px",
            width: "100%",
            display: "flex",
          }}
        >
          {fakeData.map((data) => (
            <Card
              icon={data.icon}
              title={data.title}
              number={data.number}
              color={data.color}
              numberColor={data.numberColor}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Dashboard;

const fakeData = [
  {
    icon: "/icons/card-1.png",
    title: "New Leds",
    number: "205",
    color: "#F1F3F4",
    numberColor: "#663399",
  },
  {
    icon: "/icons/card-2.png",
    title: "Sales",
    number: "$4021",
    color: "#83B0FA",
    numberColor: "#3981F7",
  },
  {
    icon: "/icons/card-3.png",
    title: "Orders",
    number: "80",
    color: "#BCDDB3",
    numberColor: "#71B860",
  },
  {
    icon: "/icons/card-4.png",
    title: "Expense",
    number: "$1200",
    color: "#FFF6E0",
    numberColor: "#FFCD3C",
  },
];
