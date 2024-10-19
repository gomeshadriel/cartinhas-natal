
import {
  Button,
  ButtonGroup,
  TextField,
  
}from "@mui/material";
import Link from "next/link";
import RedeemIcon from '@mui/icons-material/Redeem';
import {
  Button,
  ButtonGroup,
  TextField,
} from "@mui/material";
import Link from "next/link";
import RedeemIcon from '@mui/icons-material/Redeem';

function Pedido() {
  const styles = {
      
    pagina :{
      backgroundImage: 'url(img/BackgroundVerde.png)',
      height:'100vh',
      display:'flex',
      gap:'10vh',
    },

    form: {
      height: '90vh',
      width:'75vh',
      marginLeft:'10%',
      display:'flex',
      flexDirection: 'column',
      gap: '1%',
      background:'red',
      padding:'2% 3%',
      
    },
    texto :{
      margin: '3% 0%',
      background:'white',
      witdh:'10vh',
    },
    
    imagem: {
      width:'30%',
      height:'70%',
    },

    main:{
      display: 'flex',
      justifyContent: 'space-around', 
      alignItems: 'center',
      gap: '20vh',
      margin: '20px',
      
    },

    buttonVoltar:{
      position:'absolute',
      bottom:'10vh',
      background:'red',
      height:'7vh',
    },

    buttonPedido: {
      background:'#E4BA46',
      witdh:'auto',
      height:'7vh',
      display: 'block',
      margin:'2% 0%',
     
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
      textAlign: 'left',
    },

    
  
};
    return (
        <>
          
          <div style={styles.pagina}> 
                  {/* O HTML vai dentro desta <div></div> */}
            
            <section style={styles.main}>
            <form style={styles.form} action="processa_upload.php" method="post" encType="multipart/form-data">
                <div style={styles.titulo}>
                  <RedeemIcon/>
                  <h1 style={styles.tituloH1}>Faça um pedido.</h1>
                </div>
              
                <div>
                <TextField style={styles.texto} fullWidth label="Nome da criança" id="fullWidth" /> 
                  
                </div>
                <div >
                <TextField style={styles.texto} fullWidth label="Turma" id="fullWidth" /> 
                 
                </div>
                <div >
                  <TextField style={styles.texto} fullWidth label="INEP da escola" id="fullWidth" /> 
                  
                </div>
                <div >
                    <TextField style={styles.texto} fullWidth label="O que você gostaria de ganhar de natal ?" id="fullWidth" 
                    multiline rows={4}  rowsMax={10}  variant="outlined" /> 
                 
                </div>
                <div >
                  <label for="file">Faça um upload da cartinha<i class="fas fa-cloud-upload-alt"></i></label>
                  <input 
                    type="file" name="input_file" placeholder="Select a file..."/>
                </div>
              
                  <Link href="" passHref><Button style={styles.buttonPedido} variant="contained" fullWidth >Fazer um pedido</Button></Link>
 
            </form>
            
            <img style={styles.imagem} src="./img/papai.png" alt="imagem do papai noel" className="papai-noel"/>

            <Link  href="/" passHref> <Button style={styles.buttonVoltar} variant="contained">Voltar</Button></Link>
            </section>
          </div>
          

function Pedido() {
 

  return (
    <>
     
    </>
  );
}
<div style={styles.pagina}>
        <section style={styles.main}>
          <form style={styles.form} action="processa_upload.php" method="post" encType="multipart/form-data">
            {/* ... other form fields */}
            <div>
              <label htmlFor="file">Faça um upload da cartinha<i class="fas fa-cloud-upload-alt"></i></label>
              <input
                type="file"
                name="input_file"
                placeholder="Select a file..."
                onChange={handleFileUpload} // Add this onChange handler
              />
            </div>
            {/* ... other form fields */}
          </form>
          {/* ... other elements */}
        </section>
      </div>

function handleFileUpload(event) {
  const file = event.target.files[0];

  // Process the selected file here
  if (file) {
    // You can perform actions like:
    // - Validate the file type and size
    // - Upload the file to a server using a library like Axios
    // - Display a preview of the image
    // - Implement error handling

    console.log('Selected file:', file);
  }
}

export default Pedido;
        </>
    );
  }

  export default Pedido;