import * as React from "react";
import { useState } from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Avatar from "./CompoConnect/Avatar";
import MenuProfil from "./CompoConnect/MenuProfil";
import BtnDeco from "./CompoConnect/BtnDeco";
import EmailInscrit from "./CompoConnect/EmailInscrit";
import NameInscrit from "./CompoConnect/NameInscrit";
import PwordInscrit from "./CompoConnect/PwordInscrit";
import BtnInscrit2 from "./CompoConnect/BtnInscrit2";
import RetourInscrit from "./CompoConnect/RetourInscrit";
import EmailConnect from "./CompoConnect/EmailConnect";
import PwordConnect from "./CompoConnect/PwordConnect";
import BtnConnect from "./CompoConnect/BtnConnect";
import BtnInscrit from "./CompoConnect/BtnInscrit";

export default function Connection() {
  const [connect, setConnect] = useState(false);
  const [inscrit, setInscrit] = useState(false);

  return (
    <div>
      {connect ? (
        <Compte setConnect={setConnect} />
      ) : (
        <Box sx={{ paddingTop: "65%" }}>
          {inscrit ? (
            <Inscription setConnect={setConnect} setInscrit={setInscrit} />
          ) : (
            <>
              <Typography sx={{ color: "primary.main", textAlign: "center" }}>
                Connecte toi ici !
              </Typography>
              <EmailConnect />
              <PwordConnect />
              <BtnConnect clic={setConnect} />
              <BtnInscrit clic={setInscrit} />
            </>
          )}
        </Box>
      )}
    </div>
  );
}

function Compte({ setConnect }) {
  return (
    <Box>
      <Avatar />
      <Typography
        sx={{
          fontSize: 30,
          paddingTop: 5,
          display: "flex",
          justifyContent: "center",
        }}
      >
        Goe le Frey
      </Typography>
      <MenuProfil />
      <BtnDeco setConnect={setConnect} />
    </Box>
  );
}

function Inscription({ setConnect, setInscrit }) {
  return (
    <Box sx={{ paddingTop: "25%" }}>
      <Typography sx={{ textAlign: "center" }}>Rejoignez-Nous !</Typography>
      <NameInscrit />
      <EmailInscrit />
      <PwordInscrit />
      <BtnInscrit2 clic={setConnect} />
      <RetourInscrit clicretour={setInscrit} />
    </Box>
  );
}

Compte.propTypes = {
  setConnect: PropTypes.node.isRequired,
};

Inscription.propTypes = {
  setConnect: PropTypes.node.isRequired,
  setInscrit: PropTypes.node.isRequired,
};
