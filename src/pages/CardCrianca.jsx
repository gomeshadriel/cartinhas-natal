// CardCrianca.jsx
import React from "react";
import RedeemIcon from "@mui/icons-material/Redeem";
import { Button } from "@mui/material";

const CardCrianca = ({ name, school, wish, image }) => {
  const styles = {
    card: {
      display: "flex",
      flexDirection: "column",
      backgroundColor: "#fff",
      borderRadius: "10px",
      padding: "16px",
      boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
      textAlign: "center",
      maxWidth: "300px",
      margin: "10px",
      gap: "16px",
      fontFamily: "Poppins",
    },
    header: {
      display: "flex",
      flexDirection: "row",
      alignContent: "center",
      alignItens: "center",
      alignSelf: "stretch",
      gap: "16px",
    },
    Identity: {
      alignContent: "center",
      textAlign: "start",
      fontSize: "14px",
    },
    image: {
      width: "80px",
      height: "80px",
      borderRadius: "50%",
      objectFit: "cover",
    },
    button: {
      textTransform: "none",
      backgroundColor: "#a5d6a7",
      border: "none",
      padding: "10px 20px",
      borderRadius: "5px",
      color: "green",
      fontWeight: 600,
      cursor: "pointer",
      textAlign: "center",
      gap: "8px",
      fontSize: "14px",
      fontFamily: "Poppins",
    },
  };

  return (
    <div style={styles.card}>
      <div style={styles.header}>
        <img src={image} alt={`Avatar de ${name}`} style={styles.image} />
        <div style={styles.Identity}>
          <h3>{name}</h3>
          <p>{school}</p>
        </div>
      </div>
      <p>{wish}</p>
      <Button variant="contained" style={styles.button}>
        <i className="fas fa-gift"></i>
        <RedeemIcon /> Presentear <RedeemIcon />
      </Button>
    </div>
  );
};

export default CardCrianca;
