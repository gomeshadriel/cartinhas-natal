import Head from 'next/head';
import Image from 'next/image';
import arvoreImage from '../public/arvore-natal-sobrenos.jpeg'; // Verifique se o caminho está correto

function Sobre() {
    return (
        <>
            <Head>
                <title>Projeto Noel</title>
                <meta name="description" content="Sobre o projeto" />
                <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap" rel="stylesheet" />
                <style jsx>{`
                    body {
                        font-family: 'Poppins', sans-serif;
                        margin: 0;
                        padding: 20px;
                        background-color: #f8f8f8;
                    }
                    h1 {
                        text-align: center;
                        font-weight: 600;
                        color: #333;
                    }
                    h2 {
                        text-align: center;
                        font-weight: 600;
                        color: #0070f3;
                    }
                    p {
                        text-align: center;
                        font-size: 18px;
                        color: #555;
                        max-width: 600px;
                        margin: 20px auto;
                    }
                    .container {
                        text-align: center;
                        padding: 20px;
                    }
                `}</style>
            </Head>
            <div className="container">
                <h1>Projeto Noel</h1>
                <h2>Sobre</h2>
                <Image src={arvoreImage} alt="Árvore de Natal" width={400} height={400} />
                <p>
                    O Projeto Noel nasceu do desejo de proporcionar um Natal mais feliz para crianças em
                    situação de vulnerabilidade. Nossa missão é conectar escolas e padrinhos dispostos a
                    realizar os sonhos das crianças por meio da doação de presentes.
                </p>
                <p>
                    Junte-se a nós nesta causa e faça a diferença na vida de uma criança neste Natal!
                </p>
                <p>Boas Festas!</p>
            </div>
        </>
    );
}

export default Sobre;