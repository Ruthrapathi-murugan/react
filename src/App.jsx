import "./App.css";
import Card from "./Card";
import "/node_modules/bootstrap/dist/css/bootstrap.css";
function App() {
  let data = [
    {
      planName: "FREE",
      price: 0,
      features: [
        {
          name: "single users",
          enabled: true,
        },
        {
          name: "50GB storage",
          enabled: true,
        },
        {
          name: "unlimited public projects",
          enabled: true,
        },
        {
          name: "community access",
          enabled: true,
        },
        {
          name: "unlimited private projects",
          enabled: false,
        },
        {
          name: "Dedicated phone support",
          enabled: false,
        },
        {
          name: "Free subdomain",
          enabled: false,
        },
        {
          name: "Monthly status reports",
          enabled: false,
        },
      ],
    },
    {
      planName: "PLUS",
      price: 9,
      features: [
        {
          name: "5 users",
          enabled: true,
        },
        {
          name: "50GB storage",
          enabled: true,
        },
        {
          name: "unlimited public projects",
          enabled: true,
        },
        {
          name: "community access",
          enabled: true,
        },
        {
          name: "unlimited private projects",
          enabled: true,
        },
        {
          name: "Dedicated phone support",
          enabled: true,
        },
        {
          name: "Free subdomain",
          enabled: true,
        },
        {
          name: "Monthly status reports",
          enabled: false,
        },
      ],
      buttonFocus: false,
    },
    {
      planName: "PRO",
      price: 49,
      features: [
        {
          name: "unlimited users",
          enabled: true,
        },
        {
          name: "50GB storage",
          enabled: true,
        },
        {
          name: "unlimited public projects",
          enabled: true,
        },
        {
          name: "community access",
          enabled: true,
        },
        {
          name: "unlimited private projects",
          enabled: true,
        },
        {
          name: "Dedicated phone support",
          enabled: true,
        },
        {
          name: "Free subdomain",
          enabled: true,
        },
        {
          name: "Monthly status reports",
          enabled: true,
        },
      ],
      buttonFocus: true,
    },
  ];
  return (
    <div className="container">
      <div className="row">
        {data.map((item, index) => {
          return <Card item={item} key={index} />;
        })}
      </div>
    </div>
  );
}

export default App;
