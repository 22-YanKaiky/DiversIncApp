import axios from "axios";
import api from "../../services/usersAPI";

const Users = async () => {
  const response = await axios.get(api)

  return response;
}

export default Users;
