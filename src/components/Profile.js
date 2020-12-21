import { useSelector } from "react-redux";

const UserProfile = ({ userName, history }) => {
  const auth = useSelector((state) => state.authReducer);

  return <h1>Hello, {auth.user.userName}</h1>;
}

export default UserProfile;