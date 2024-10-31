import {
  Button,
  ButtonGroup,
  Checkbox,
  InputLabel,
  FormControl,
  FilledInput,
}from "@mui/material";
import Link from "next/link";
import RedeemIcon from '@mui/icons-material/Redeem';
import React from 'react';
import UploadButton from "./upload";
import Contato from "./Contato";
import SignInSide from "./pastateste/SignInSide";



function Login() {
  const styles = {
      
    pagina :{
      backgroundImage: 'url(img/BackgroundVermelho.png)',
      height:'100vh',
      display:'flex',
      gap:'10vh',
    },

    main:{
      display: 'flex',
      justifyContent: 'space-around', 
      alignItems: 'center',
      gap: '20vh',
      margin: '20px',
    },

    titulo: {
      display:'flex',
      flexDirection:'column',
      alignItems:'center',
    },

    tituloH1: {
      fontFamily: 'Poppins',
      fontSize: '36px',
      fontWeight: '800',
      lineHeight: '54px',
    },  

    Logo:{
      display:"flex", 
      gap:"2vh",
    },

    buttonPerson: {
      background: "#007209",
      width:'25vh',
      height: '6vh',
      textTransform: "none",
      border:"none",
    },

    form: {
      height: '85vh',
      width:'65vh',
      marginLeft:'10%',
      display:'flex',
      flexDirection: 'column',
      gap: "2vh",
      background: "green",
      padding:'2% 3%',
    },

    texto :{
      background:'white',
      height: "7vh",
      fontSize: "small",
    },

    termos:{
      display: "flex",
      alignItems: "center",
    },

    div:{
      display: "flex",
      flexDirection:'column',
      height: "100%",
      justifyContent: "space-between",
      gap: "5%",
    },

    buttonRegistrar: {
      background:'#E4BA46',
      witdh:'auto',
      height:'6vh',
      display: 'block',
      textTransform: "none",
    },

    imagem: {
      width:'30%',
      height:'70%',
    },

    buttonVoltar:{
      position:'absolute',
      bottom:'10vh',
      background: "#007209",
      height:'7vh',
      textTransform: "none",
    },
  };


  return (
      <>
      <div style={styles.pagina}> 
                  {/* O HTML vai dentro desta <div></div> */}    
          <section style={styles.main}>
              <div style={styles.form}>
                  <div style={styles.titulo}>
                      <h1 style={styles.tituloH1}>Login</h1>
                  </div>

                  <ButtonGroup style={styles.Logo} variant="text" aria-label="Basic button group">
                      <Link href="" passHref><Button style={styles.buttonPerson} variant="contained">Escola</Button></Link>
                      <Link href="" passHref><Button style={styles.buttonPerson} variant="contained">Padrinho</Button></Link>
                  </ButtonGroup>

                  <form style={styles.div}  action="processa_upload.php" method="post" encType="multipart/form-data">

                          <FormControl variant="filled">
                              <InputLabel htmlFor="component-filled">Login</InputLabel>
                              <FilledInput style={styles.texto} id="component-filled"/>
                          </FormControl>
                          <FormControl variant="filled">
                              <InputLabel htmlFor="component-filled">Senha</InputLabel>
                              <FilledInput style={styles.texto} id="component-filled"/>
                          </FormControl>
                  </form>

                  <div style={styles.termos}>
                      <Checkbox  defaultChecked color="white" />
                      <p>Confirmar Senha</p>
                  </div>
                  
                  <Link href="" passHref><Button style={styles.buttonRegistrar} variant="contained" fullWidth >Conectar</Button></Link>
              </div>
              
              <img style={styles.imagem} src="./img/papai.png" alt="imagem do papai noel" className="papai-noel"/>

              <Link  href="/" passHref> <Button style={styles.buttonVoltar} variant="contained">Voltar</Button></Link>

          </section>
      </div>
        <Contato/>
        </>
        
    );
  }

  export default Login;