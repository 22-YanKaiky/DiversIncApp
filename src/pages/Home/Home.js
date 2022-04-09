/* eslint-disable jsx-a11y/alt-text */
import axios from "axios";
import { useEffect, useState } from "react";
import NavBar from "../../components/navbar/NavBar";
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
    <div style={{ display: 'flex' }}>
      <NavBar />

      Imagem DashBoard Aquiiiiii
    </div>
  )
}
