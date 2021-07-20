import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
// import { useSelector } from "react-redux";

const SidebarRight = ({ ...props }) => {
  // const auth = useSelector((state) => state.authReducer);
  const options = {
    title: {
      text: "ADA",
    },
    series: [
      {
        data: [1, 2, 3],
      },
    ],
  };
  return (
    <div className="flex flex-col my-10 mr-8 p-4 w-full lg:inline-flex overflow-y-hidden rounded-lg bg-darkblue-900 text-darkblue-400">
      <div className="px-4">
        <span className="font-bold border-darkblue-400 mb-2">
          Most Upvoted - Last 24hrs
        </span>
        <HighchartsReact
          highcharts={Highcharts}
          options={options}
          immutable
          constructorType="chart"
          containerProps="bg-darkblue-300"
        />
        {/* <p className="font-normal">{auth.user.userName} - 66,456</p>
        <p className="font-normal">{auth.user.userName} - 66,456</p>
        <p className="font-normal">{auth.user.userName} - 66,456</p>
        <p className="font-normal">{auth.user.userName} - 66,456</p>
        <p className="font-normal">{auth.user.userName} - 66,456</p>
        <p className="font-normal">{auth.user.userName} - 66,456</p>
        <p className="font-normal">{auth.user.userName} - 66,456</p>
        <p className="font-normal">{auth.user.userName} - 66,456</p>
        <p className="font-normal">{auth.user.userName} - 66,456</p>
        <p className="font-normal">{auth.user.userName} - 66,456</p>
        <p className="font-normal">{auth.user.userName} - 66,456</p>
        <p className="font-normal">{auth.user.userName} - 66,456</p>
        <p className="font-normal">{auth.user.userName} - 66,456</p> */}
      </div>
    </div>
  );
};

export default SidebarRight;
