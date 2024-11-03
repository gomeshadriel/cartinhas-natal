import {
  Button,
  ButtonGroup,
  Checkbox,
  InputLabel,
  FormControl,
  FilledInput,
} from "@mui/material";
import Link from "next/link";
import React, { useState } from "react";
import Contato from "./Contato";

function Cadastro() {
  const styles = {
    pagina: {
      backgroundImage: "url(img/BackgroundVermelho.png)",
      height: "100vh",
      display: "flex",
      gap: "10vh",
    },

    main: {
      display: "flex",
      justifyContent: "space-around",
      alignItems: "center",
      gap: "20vh",
      margin: "20px",
    },

    titulo: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },

    tituloH1: {
      fontFamily: "Poppins",
      fontSize: "36px",
      fontWeight: "800",
      lineHeight: "54px",
    },

    Logo: {
      display: "flex",
    },

    buttonPerson: (isActive) => ({
      background: isActive ? "#0B7E14" : "#007209",
      fontSize: "20px",
      fontWeight: 600,
      fontFamily: "poppins",
      width: "100%",
      height: "6vh",
      textTransform: "none",
      border: "none",
      color: "#fff",
      cursor: isActive ? "default" : "pointer",
    }),

    form: {
      height: "85vh",
      width: "65vh",
      marginLeft: "10%",
      display: "flex",
      flexDirection: "column",
      gap: "2vh",
      background: "#007209",
      padding: "2% 3%",
    },

    texto: {
      background: "white",
      height: "7vh",
      fontSize: "small",
    },

    termos: {
      display: "flex",
      alignItems: "center",
    },

    div: {
      display: "flex",
      flexDirection: "column",
      height: "100%",
      justifyContent: "space-between",
      gap: "5%",
    },

    buttonRegistrar: {
      background: "#E4BA46",
      width: "100%",
      height: "6vh",
      display: "block",
      textTransform: "none",
      fontSize: "20px",
      fontWeight: 600,
      fontFamily: "Poppins",
    },

    imagem: {
      width: "30%",
      height: "70%",
    },

    buttonVoltar: {
      position: "absolute",
      bottom: "10vh",
      background: "#007209",
      height: "7vh",
      textTransform: "none",
    },
    opcaoCadastro: {
      gap: "8px",
      display: "flex",
      flexDirection: "column",
    },
  };

  const [tipoCadastro, setTipoCadastro] = useState("padrinho");

  const selecionarPadrinho = () => setTipoCadastro("padrinho");
  const selecionarEscola = () => setTipoCadastro("escola");

  return (
    <>
      <div style={styles.pagina}>
        <section style={styles.main}>
          <div style={styles.form}>
            <div style={styles.titulo}>
              <h1 style={styles.tituloH1}>Cadastre-se</h1>
            </div>
            <div style={styles.opcaoCadastro}>
              <h5>Fazer cadastro como:</h5>
              <ButtonGroup style={styles.Logo} variant="text">
                <Button
                  onClick={selecionarEscola}
                  disabled={tipoCadastro === "escola"}
                  style={styles.buttonPerson(tipoCadastro === "escola")}
                >
                  Escola
                </Button>
                <Button
                  onClick={selecionarPadrinho}
                  disabled={tipoCadastro === "padrinho"}
                  style={styles.buttonPerson(tipoCadastro === "padrinho")}
                >
                  Padrinho
                </Button>
              </ButtonGroup>
            </div>

            {tipoCadastro === "padrinho" ? (
              <div>
                <form
                  style={styles.div}
                  action="processa_upload.php"
                  method="post"
                  encType="multipart/form-data"
                >
                  <FormControl variant="filled">
                    <InputLabel htmlFor="component-filled">Nome</InputLabel>
                    <FilledInput style={styles.texto} id="component-filled" />
                  </FormControl>
                  <FormControl variant="filled">
                    <InputLabel htmlFor="component-filled">CPF</InputLabel>
                    <FilledInput style={styles.texto} id="component-filled" />
                  </FormControl>
                  <FormControl variant="filled">
                    <InputLabel htmlFor="component-filled">Email</InputLabel>
                    <FilledInput style={styles.texto} id="component-filled" />
                  </FormControl>
                  <FormControl variant="filled">
                    <InputLabel htmlFor="component-filled">Senha</InputLabel>
                    <FilledInput style={styles.texto} id="component-filled" />
                  </FormControl>
                  <FormControl variant="filled">
                    <InputLabel htmlFor="component-filled">
                      Confirme a senha
                    </InputLabel>
                    <FilledInput style={styles.texto} id="component-filled" />
                  </FormControl>
                </form>

                <div style={styles.termos}>
                  <Checkbox defaultChecked />
                  <p>Aceito os termos de utilização</p>
                </div>

                <Button
                  style={styles.buttonRegistrar}
                  variant="contained"
                  fullWidth
                >
                  Registrar
                </Button>
              </div>
            ) : (
              <div>
                <form
                  style={styles.div}
                  action="processa_upload.php"
                  method="post"
                  encType="multipart/form-data"
                >
                  <FormControl variant="filled">
                    <InputLabel htmlFor="component-filled">
                      Nome da Escola
                    </InputLabel>
                    <FilledInput style={styles.texto} id="component-filled" />
                  </FormControl>
                  <FormControl variant="filled">
                    <InputLabel htmlFor="component-filled">INEP</InputLabel>
                    <FilledInput style={styles.texto} id="component-filled" />
                  </FormControl>
                  <FormControl variant="filled">
                    <InputLabel htmlFor="component-filled">Email</InputLabel>
                    <FilledInput style={styles.texto} id="component-filled" />
                  </FormControl>
                  <FormControl variant="filled">
                    <InputLabel htmlFor="component-filled">Senha</InputLabel>
                    <FilledInput style={styles.texto} id="component-filled" />
                  </FormControl>
                  <FormControl variant="filled">
                    <InputLabel htmlFor="component-filled">
                      Confirme a senha
                    </InputLabel>
                    <FilledInput style={styles.texto} id="component-filled" />
                  </FormControl>
                </form>

                <div style={styles.termos}>
                  <Checkbox defaultChecked />
                  <p>Aceito os termos de utilização</p>
                </div>

                <Button
                  style={styles.buttonRegistrar}
                  variant="contained"
                  fullWidth
                >
                  Registrar
                </Button>
              </div>
            )}
          </div>

          <img
            style={styles.imagem}
            src="./img/papai.png"
            alt="imagem do papai noel"
            className="papai-noel"
          />

          <Link href="/" passHref>
            <Button style={styles.buttonVoltar} variant="contained">
              Voltar
            </Button>
          </Link>
        </section>
      </div>
      <Contato />
    </>
  );
}

export default Cadastro;
