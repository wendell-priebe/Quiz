import React from 'react';
import styled from 'styled-components';
// import Head from 'next/head'
import {useRouter} from 'next/router';

import db from '../db.json';
import Widget from '../src/components/Widget';
import QuizLogo from '../src/components/QuizLogo';
import QuizBackground from '../src/components/QuizBackground';
import Footer from '../src/components/Footer';
import GitHubCorner from '../src/components/GitHubCorner';
import Head from '../src/components/Head';
import Input from '../src/components/Input'
import Button from '../src/components/Button';

const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.secondary};
`;
// const BackgroundImage = styled.div`
//   background-image: url(${db.bg});
//   flex:1;
//   background-size: cover;
//   background-position: center;
// `;

export const QuizContainer = styled.div`
  width:100%;
  max-width:350px;
  padding-top:45px;
  margin:auto 10%auto;
  @media screen and (max-width:500px){
    margin: auto;
    padding:15px;
  }
`;

export default function Home() {
  const router = useRouter();
  const [name , setName] = React.useState('');

  return (
    <>
      <Head />
      <QuizBackground backgroundImage={db.bg}>
        <QuizContainer>
          {/* <QuizLogo /> */}
          <Widget>
            <Widget.Header>
              <h1>{db.title}</h1>
            </Widget.Header>
            <Widget.Content>
              <form onSubmit={function(infosDoEvento){
                infosDoEvento.preventDefault();
                router.push(`/quiz?name=${name}`);
                console.log("Fazendo uma submisao");

                //router manda pra proxima pagina;
              }}>
              <Input 
                name="nomeDoUsuario"
                placeholder="Diz ai seu nome" 
                onChange={(infosDoEvento)=>{setName(infosDoEvento.target.value)}}
                value={name}
              />
              <Button type="submit" disabled={name.length === 0}>
                Jogador {name}
              </Button>
              </form>
            </Widget.Content>
          </Widget>
          <Widget>
            <Widget.Content>
              <h1>Quizes da Galera</h1>

              <p>lorem ipsum dolor sit amet...</p>
            </Widget.Content>
          </Widget>
          <Footer />
        </QuizContainer>
        <GitHubCorner projectUrl="https://github.com/wendell-priebe" />
      </QuizBackground>
    </>
  );
}



// parei no video 3 9:51min
