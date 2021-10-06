import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import AtalaPrism from "../../assets/images/atala-prism-logo.svg";
// import { useSelector } from "react-redux";

const SidebarRight = ({ ...props }) => {
  // const auth = useSelector((state) => state.authReducer);
  const options = {
    title: {
      text: "ADA/USD - Last month",
    },
    series: [
      {
        name: "Monthly",
        data: [1, 2, 3, 2.3, 2.75, 2.54, 2.41, 3.05, 2.05, 1.7],
      },
    ],
  };
  return (
    <div className="flex-col my-10 mx-4 p-4 w-full hidden xl:block overflow-y-hidden rounded-lg bg-darkblue-900 text-darkblue-400">
      <div className="h-1/2 px-4">
        <span className="font-bold border-darkblue-400 mb-2">
          Most Upvoted - Last 24hrs
        </span>
        <HighchartsReact
          highcharts={Highcharts}
          options={options}
          immutable
          constructorType="chart"
          containerProps="bg-darkblue-300 rounded-lg"
        />
      </div>
      <div className="flex h-1/2 px-4">
        <div className="text-center">
          Coming soon...
          <img src={AtalaPrism} alt="Atala PRISM" />
        </div>
      </div>
    </div>
  );
};

export default SidebarRight;
