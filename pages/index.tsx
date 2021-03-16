import Head from 'next/head'
import styled from 'styled-components';
import Wrapper from '../components/Wrapper';
import Board from '../components/Board';


const MyComponent = styled.div`
  color: ${({ theme }) => theme.colors.darkOrange};
`;

const Header = styled.h1`
  text-align: center;
`

export default function Home() {
  return (
    <div>
      <Head>
        <title>Misael's Checkers</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Wrapper>
        <MyComponent>
          <Header>Welcome to Misael's Checkers</Header>
          <Board/>
        </MyComponent>
      </Wrapper>
    </div>
  )
}
