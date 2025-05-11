import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const UpdateClient = () => {
  const { id } = useParams(); // récupération id du client à modifier
  const [client, setClient] = useState({ nom: "", adresse: "", tel: "" });
  const navigate = useNavigate();

  useEffect(() => {
    const fetchClient = async () => {
      const response = await axios.get(`http://localhost:3001/clients/${id}`);
      setClient(response.data); // récupération infos du client à modifier
    };

    fetchClient();
  }, [id]);

  const handleUpdate = async (e) => {
    e.preventDefault(); // pour éviter le rechargement de la page
    await axios.put(`http://localhost:3001/clients/${id}`, client);
    navigate("/clients", { replace: true }); // retour à la liste
  };

  return (
    <div className="container mt-5">
      <h1 className="mb-4">Mettre à jour le client</h1>
      <form onSubmit={handleUpdate}>
        <div className="mb-3">
          <label htmlFor="nom" className="form-label">
            Nom du client:
          </label>
          <input
            type="text"
            id="nom"
            className="form-control"
            value={client.nom}
            onChange={(e) => setClient({ ...client, nom: e.target.value })}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="adresse" className="form-label">
            Adresse:
          </label>
          <input
            type="text"
            id="adresse"
            className="form-control"
            value={client.adresse}
            onChange={(e) =>
              setClient({
                ...client,
                adresse: e.target.value,
              })
            }
          />
        </div>
        <div className="mb-3">
          <label htmlFor="tel" className="form-label">
            Téléphone:
          </label>
          <input
            type="text"
            id="tel"
            className="form-control"
            value={client.tel}
            onChange={(e) => setClient({ ...client, tel: e.target.value })}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Mettre à jour
        </button>
      </form>
    </div>
  );
};

export default UpdateClient;
