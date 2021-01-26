import styled from 'styled-components';

const Widget = styled.div`
  margin-top:24px;
  margin-bottom:24px;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  background-color: ${({ theme }) =>
    // console.log(theme); //mostra as info do theme no console
    theme.colors.mainBg
};
  border-radius:4px;
  overflow:hidden;

  h1, h2, h3{
    font-size:16px;
    font-weight:700;
    line-height:1;
    margin-bottom:0;
  }
  p{
    font-size:14px;
    font-weight:400;
    line-height:1;
  }
`;

Widget.Header = styled.header`
  display:flex;
  justify-content:flex-start;
  align-items:center;
  padding: 18px 32px;
  background-color:${({ theme }) => theme.colors.secondary};
  color: black;
  *{
    margin:0;
  }
`;

Widget.Content = styled.header`
  padding:24px 32px 32px 32px;
  & > *::first-child{
    margin-top:0;
  }
  & > *::last-child{
    margin-bottom:0;
  }
  ul{
    list-style:none;
    padding:0;
  }
  input{
    padding:10px;
    margin:0 auto;
    display:block;
    outline:none;
    border-radius:4px;
  }
  button{
    background-color:${({ theme }) => theme.colors.secondary};
    padding:15px 25px;
    margin:0 auto;
    margin-top:20px;
    border-radius:4px;
    display:block;
  }
`;

export default Widget;
