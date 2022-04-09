import axios from "axios";
import { useEffect, useState } from "react";
import api from "../../services/config/api_url";

export default function Home() {
  const [data, setData] = useState([]);

  async function index() {
    const response = await axios.get(api)

    setData(response.data);
  }

  useEffect(() => {
    index()
  }, [data])

  return (
    <div>{data.message}</div>
  )
}
