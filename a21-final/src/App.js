import "./App.css";
import { useState } from "react";

function App() {
  const [clients, setClients] = useState([]);

  const fetchClients = async () => {
    const res = await fetch("http://localhost:8080/getAll/clients")
    const resp = await res.json()
    setClients(resp)
  }

  const fetchMen = async () => {
    const res = await fetch("http://localhost:8080/getAll/men")
    const resp = await res.json()
    setClients(resp)
  }

  const fetchClientsFromOntario = async () => {
    const res = await fetch("http://localhost:8080/getAll/clients/from/ontario")
    const resp = await res.json()
    setClients(resp)
  }

  return (
    <div className="App">
      <button onClick={fetchClients} >Fetch tout les clients</button>
      <button onClick={fetchMen}>Fetch tout hommes</button>
      <button onClick={fetchClientsFromOntario}>Fetch tout les ontariens</button>
      <table>
        <tr>
          <th>ID</th>
          <th>Prénom</th>
          <th>Nom</th>
          <th>Genre</th>
          <th>Date de naissance</th>
        </tr>
        {clients.length !== 0 ? (
          clients.map((client) => (
            <tr>
              <td>{client.id}</td>
              <td>{client.firstName}</td>
              <td>{client.lastName}</td>
              <td>{client.gender}</td>
              <td>{client.birthDate}</td>
            </tr>
          ))
        ) : (
          <tr style={{ textAlign: "center" }}>
            <td colSpan="5">Pas de clients</td>
          </tr>
        )}
      </table>
    </div>
  );
}

export default App;
