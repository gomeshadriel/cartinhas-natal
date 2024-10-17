// Apadrinhamento.jsx
import React, { useEffect, useState } from 'react';
import CardCrianca from './CardCrianca';
import Link from 'next/link';
import { Button } from '@mui/material';

const Apadrinhamento = () => {
  const [criancas, setCriancas] = useState([]);

  // Função que simula a chamada a um endpoint e retorna dados mockados
  useEffect(() => {
    const fetchCriancas = async () => {
      // Simulando um delay para a chamada do "endpoint"
      setTimeout(() => {
        const mockData = [
          {
            name: 'João Pedro',
            school: 'Escola Estadual Girassol',
            wish: 'Meu sonho é ter uma bicicleta.',
            image: 'https://blog-leiturinha-novo.s3.us-east-1.amazonaws.com/production/uploads/2021/04/iStock-187185569-1.jpg',
          },
          {
            name: 'Ana Maria',
            school: 'Escola Estadual Girassol',
            wish: 'Sempre quis um de kit aquarela.',
            image: 'https://arteref.com/wp-content/uploads/2017/01/900X700.jpg',
          },
          {
            name: 'Isabella Costa',
            school: 'Escola Estadual Girassol',
            wish: 'Eu queria um livro de histórias.',
            image: 'https://unicardio.com.br/wp-content/uploads/2020/12/4-cuidados-com-o-coracao-das-criancas.png',
          },
          {
            name: 'Miguel Oliveira',
            school: 'Escola Estadual Girassol',
            wish: 'Meu sonho é ter um patinete.',
            image: 'https://saudefortaleza.com.br/wp-content/uploads/2020/08/Sa%C3%BAde-Ocular-scaled.jpg',
          },
          {
            name: 'Rafaela Lima',
            school: 'Escola Estadual Girassol',
            wish: 'Eu queria um sabre de luz.',
            image: 'https://centrodecatarata.com.br/wp-content/uploads/2023/04/visao_infantil__centro_de_catarata_madureia_blog.jpg',
          },
          {
            name: 'Enzo Valentino',
            school: 'Escola Estadual Girassol',
            wish: 'Eu queria uma bicicleta',
            image: 'https://www.marinha.mil.br/saudenaval/sites/www.marinha.mil.br.saudenaval/files/volta_as_aulas_redes.jpg',
          },
        ];
        setCriancas(mockData);
      }, 1000); // Delay de 1 segundo para simular a chamada à API
    };

    fetchCriancas();
  }, []);

  const styles = {
    pageContainer: {
      textAlign: 'center',
      padding: '20px',
      backgroundColor: '#f5f5dc',
      color: '#000000',
      alignSelf: 'stretch',
    },
    header: {
      display: 'flex',
      flexDirection: 'row',
      display: 'flex',
      alignSelf: 'stretch',
      justifyContent: 'center',
      gap: '24px',
    },
    cardsContainer: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
      gap: '24px',
      minWidth: '1000px',
      margin: '0vh 40vh'
    },
    viewAllButton: {
      backgroundColor: '#388e3c',
      border: 'none',
      padding: '12px 24px',
      borderRadius: '5px',
      color: 'white',
      marginTop: '20px',
      cursor: 'pointer',
    },
    viewAllButtonHover: {
      backgroundColor: '#2e7d32',
    },
  };

  return (
    <div style={styles.pageContainer}>
      <div style={styles.header}>
        <h1>Realize um sonho!</h1>
        <Link href="/" passHref>
          <Button>Voltar</Button>
        </Link> 
      </div>
      <div style={styles.cardsContainer}>
        {criancas.length > 0 ? (
          criancas.map((crianca, index) => (
            <CardCrianca
              key={index}
              name={crianca.name}
              school={crianca.school}
              wish={crianca.wish}
              image={crianca.image}
            />
          ))
        ) : (
          <p>Carregando dados...</p>
        )}
      </div>
      <button style={styles.viewAllButton}>Ver todos os desejos</button>
    </div>
  );
};

export default Apadrinhamento;
