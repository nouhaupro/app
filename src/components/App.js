import React from 'react';
import GlobalStyle from './styles/globalStyle.style';
// import Dashboard from './Dashboard';
import Avaliacao from './Avaliacao';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <GlobalStyle />
        <Avaliacao />
      </div>
    );
  }
}
