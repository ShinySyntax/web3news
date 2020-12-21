import { useSelector } from "react-redux";

const Home = ({ history }) => {
  const auth = useSelector((state) => state.authReducer);

  return (
    <div className="">
      <h1>HOMEPAGE {(auth.isLoggedIn) ? `FOR, ${auth.user.userName}` : null}</h1>
    </div>
  );
}

export default Home;