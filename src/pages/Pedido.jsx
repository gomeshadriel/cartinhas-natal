function Pedido() {
    return (
        <>
          <Head>
            <title>Create Next App</title>
            <meta name="description" content="Generated by create next app" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.ico" />
          </Head>
          <div> 
                  {/* O HTML vai dentro desta <div></div> */}
            <h1>Faça um pedido.</h1>
    
            <form action="processa_upload.php" method="post" encType="multipart/form-data">
              
              <fieldset class="grupo">
                <div class="campo">
                  <label for="crianca">Nome da criança</label>
                  <input type="crianca" id="name" name="name" placeholder=" Digite o nome da criança..."/>
                </div>
                <div class="campo">
                  <label for="turma">Turma</label>
                  <input type="turma" id="name" name="name" placeholder="Digite a turma..."/>
                </div>
                <div class="campo">
                  <label for="escola">INEP da escola</label>
                  <input type="escola" id="name" name="name" placeholder="Digite a inep da escola..."/>
                </div>
                <div class="campo">
                  <label for="desejoDeNatal">O que você gostaria de ganhar no natal ?</label>
                  <input type="desejoDeNatal" id="name" name="name" placeholder="O que você quer ganhar de natal ?"/>
                </div>
                <div class="campo">
                  <label for="file">Faça um upload da cartinha<i class="fas fa-cloud-upload-alt"></i></label>
                  <input 
                    type="file" name="input_file" placeholder="Select a file..."/>
                </div>
                <button class="button" align="reight">Voltar</button>
              </fieldset>
            </form>
          
            
          </div>
        </>
    );
  }

  export default Pedido;