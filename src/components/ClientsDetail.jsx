import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const ClientDetails = () => {
  const { id } = useParams(); //récupération de l'id du client à modifier
  const [client, setClient] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const fetchClient = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/clients/${id}`);
        setClient(response.data);
      } catch (error) {
        console.error("Erreur de chargement :", error);
      }
    };

    fetchClient();
  }, [id]);

  const handleRetour = () => {
    navigate("/clients");
  };

  return (
    <div className="container mt-5 justify-content-center align-items-center">
      <div className="card">
        <div className="card-body">
          <h1 className="mb-4">Détails du client</h1>
          <p className="card-text">
            <strong>Nom du client:</strong> {client.nom}
          </p>
          <p className="card-text">
            <strong>Adresse:</strong> {client.adresse}
          </p>
          <p className="card-text">
            <strong>Téléphone:</strong> {client.tel}
          </p>
          <button onClick={handleRetour} className="btn btn-primary">
            Retour à la liste
          </button>
        </div>
      </div>
    </div>
  );
};

export default ClientDetails;
