import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const ClientList = () => {
  //En React, on utilise le hook useState pour stocker et mettre à jour les données qui changent au cours de la vie du composant.
  const [clients, setClients] = useState([]);

  //Récupération des données avec Axios: simplifie les requêtes HTTP et la gestion des réponses dans React
  const fetchData = async () => {
    const response = await axios.get("http://localhost:3001/clients");
    setClients(response.data); // Chargement des clients
  };

  useEffect(() => {
    fetchData();
  }, []); // Lance fetchData une seule fois lors du premier rendu

  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:3001/clients/${id}`);
    fetchData();
  };

  return (
    <div className="container mt-4 m-auto">
      <h1 className="text-center mb-4">Liste des clients</h1>
      <div className="text-center mb-3">
        <Link to="/clients/create" className="btn btn-success">
          Ajouter
        </Link>
      </div>

      <table className="table table-bordered table-hover text-center">
        <thead className="table-dark">
          <tr>
            <th>Nom</th>
            <th>Adresse</th>
            <th>Téléphone</th>
            <th>Opérations</th>
          </tr>
        </thead>
        <tbody>
          {clients.map((client) => (
            <tr key={client.id}>
              <td>
                <Link
                  to={`/clients/${client.id}`}
                  className="text-decoration-none"
                >
                  {client.nom}
                </Link>
              </td>
              <td>{client.adresse}</td>
              <td>{client.tel}</td>
              <td>
                <Link to={`/clients/${client.id}/update`}>
                  <button className="btn btn-warning btn-sm mx-1">
                    Modifier
                  </button>
                </Link>
                <button
                  className="btn btn-danger btn-sm mx-1"
                  onClick={() => {
                    if (
                      window.confirm(
                        "Êtes-vous sûr de vouloir supprimer ce client ? Cette action est irréversible."
                      )
                    ) {
                      handleDelete(client.id); // Si l'utilisateur confirme, supprimer
                    }
                  }}
                >
                  Supprimer
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ClientList;
