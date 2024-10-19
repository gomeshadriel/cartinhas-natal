
import {
  Button,
  ButtonGroup,
  TextField,
  
}from "@mui/material";
import Link from "next/link";

function Pedido() {
  const styles = {
      
    pagina :{
      backgroundImage: 'url(img/BackgroundVerde.png)',
      height:'100vh',
      display:'flex',
      gap:'10vh',
    },

    form: {
      height: '80vh',
      width:'80vh',
      marginLeft:'10%',
      display:'flex',
      flexDirection: 'column',
      gap: '2%',
      background:'red',
      
    },
    texto :{
      margin: '3% 0%',
      background:'white',
    },
    
    imagem: {
      width:'30%',
      height:'70%',
    },

    main:{

    },
  
};
    return (
        <>
          
          <div style={styles.pagina}> 
                  {/* O HTML vai dentro desta <div></div> */}
            
            <section style={styles.main}>
            <form style={styles.form} action="processa_upload.php" method="post" encType="multipart/form-data">
              <h1>Faça um pedido.</h1>

              
                <div class="campo">
                <TextField style={styles.texto} fullWidth label="Nome da criança" id="fullWidth" /> 
                  
                </div>
                <div class="campo">
                <TextField style={styles.texto} fullWidth label="Turma" id="fullWidth" /> 
                 
                </div>
                <div class="campo">
                  <TextField style={styles.texto} fullWidth label="INEP da escola" id="fullWidth" /> 
                  
                </div>
                <div class="campo">
                    <TextField style={styles.texto} fullWidth label="O que você gostaria de ganhar de natal ?" id="fullWidth" 
                    multiline rows={4}  rowsMax={10}  variant="outlined" /> 
                 
                </div>
                <div class="campo">
                  <label for="file">Faça um upload da cartinha<i class="fas fa-cloud-upload-alt"></i></label>
                  <input 
                    type="file" name="input_file" placeholder="Select a file..."/>
                </div>
              
                   <Link href="" passHref><Button  variant="contained">Fazer um pedido</Button></Link>
 
            </form>
            
            <img style={styles.imagem} src="./img/papai.png" alt="imagem do papai noel" className="papai-noel"/>
            <Link href="/" passHref> <Button variant="contained">Voltar</Button></Link>
            </section>
          </div>
          
        </>
    );
  }

  export default Pedido;