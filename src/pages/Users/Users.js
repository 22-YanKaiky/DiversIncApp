import axios from "axios";
import { useEffect, useState } from "react";
import NavBar from "../../components/navbar/NavBar";
import api from "../../services/usersAPI";

export default function Users() {
  const [data, setData] = useState([]);

  async function index() {
    const response = await axios.get(api)

    setData(response.data);
  }

  useEffect(() => {
    index()
  }, [data])

  return (
    <>
      <NavBar />

      <div style={{ display: 'flex' }}>
        {data.map((u) => {
          return (
            <div style={{ background: 'gray', width: '40%' }}>
              <p>{u.name}</p>
              <p>{u.email}</p>
              <p>{u.age}</p>
              <p>{u.genre}</p>
              <p>{u.bithday}</p>
              <p>{u.cpf}</p>
            </div>
          )
        })}</div>
    </>
  )
}