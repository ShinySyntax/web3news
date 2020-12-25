import { useSelector } from "react-redux";
import ArticleList from "./article/ArticleList";

const Home = ({ history }) => {
  const auth = useSelector((state) => state.authReducer);

  return (
    <div className="container">
      <h1>Welcome, {(auth.isLoggedIn) ? `${auth.user.userName}` : 'Guest'}</h1>
      <ArticleList/>
    </div>
  );
}

export default Home;