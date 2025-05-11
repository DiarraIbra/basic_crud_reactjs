import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const CreateClient = () => {
  const [client, setClient] = useState({ nom: "", adresse: "", tel: "" });
  const navigate = useNavigate();

  const handleCreate = async () => {
    await axios.post("http://localhost:3001/clients", client); //ajout client
    navigate("/clients", { replace: true }); //après l'ajout retour à la liste
  };

  return (
    <div className="container d-flex justify-content-center align-items-center">
      <div className="col-md-16 col-xxl-6 mt-5">
        <form className="p-4 border rounded shadow-sm bg-white">
          <h1 className="mb-4 text-center">Créer un nouveau client</h1>
          <div className="mb-3">
            <label htmlFor="nom" className="form-label">
              Nom du client :
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
              Adresse :
            </label>
            <input
              type="text"
              id="adresse"
              className="form-control"
              value={client.adresse}
              onChange={(e) =>
                setClient({ ...client, adresse: e.target.value })
              }
            />
          </div>
          <div className="mb-3">
            <label htmlFor="tel" className="form-label">
              Téléphone :
            </label>
            <input
              type="text"
              id="tel"
              className="form-control"
              value={client.tel}
              onChange={(e) => setClient({ ...client, tel: e.target.value })}
            />
          </div>
          <div className="text-center">
            <button
              type="button"
              className="btn btn-success px-4"
              onClick={handleCreate}
            >
              Créer
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateClient;
