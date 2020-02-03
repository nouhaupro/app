import React from 'react';
import GlobalStyle from './styles/globalStyle.style';
// import Dashboard from './Dashboard';
import Avaliacoes from './Avaliacoes';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <GlobalStyle />
        <Avaliacoes />
      </div>
    );
  }
}
