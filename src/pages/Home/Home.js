import axios from "axios";
import { useEffect, useState } from "react";
import api from "../../services/config/api_url";

const Home = async () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function index() {
      const response = await axios.get(api);

      setData(response.data)
    }

    index();
  }, [data])

  return <div>{data}</div>
}

export default Home;
