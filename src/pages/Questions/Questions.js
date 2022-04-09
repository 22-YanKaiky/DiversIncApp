import axios from "axios";
import { useEffect, useState } from "react";
import NavBar from "../../components/navbar/NavBar";
import api from "../../services/questionsAPI";

export default function Questions() {
  const [data, setData] = useState([]);

  async function index() {
    const response = await axios.get(api)

    setData(response.data);
  }

  useEffect(() => {
    index()
  }, [])

  return (
    <>
      <NavBar />

      <div style={{ display: 'flex' }}>
        {data.map((u) => {
          return (
            <div style={{ background: 'gray', width: '40%' }}>{u.question}</div>
          )
        })}
      </div>
    </>
  )
}