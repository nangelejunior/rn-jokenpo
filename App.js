/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';

import Topo from './src/components/topo';
import Icone from './src/components/icone';

const Escolha = { PEDRA: 'pedra', PAPEL: 'papel', TESOURA: 'tesoura' };

export default class App extends Component<{}> {
  constructor(props) {
    super(props);
    
    this.state = { escolhaUsuario: '', escolhaComputador: '', resultado: '' };
  }

  jokenpo(escolhaUsuario) {
    const numeroAleatorio = Math.floor(Math.random() * 3);

    let escolhaComputador = '';

    switch (numeroAleatorio) {
      case 0:
      escolhaComputador = Escolha.PEDRA;
      break;
      case 1:
      escolhaComputador = Escolha.PAPEL;
      break;
      case 2:
      escolhaComputador = Escolha.TESOURA;
      break;
      default:
      escolhaComputador = '';
    }

    let resultado = '';

    const msgEmpate = 'Empate';
    const msgGanhou = 'Você ganhou';
    const msgPerdeu = 'Você perdeu';

    if (escolhaComputador === Escolha.PEDRA) {
      if (escolhaUsuario === Escolha.PEDRA) {
        resultado = msgEmpate;
      }

      if (escolhaUsuario === Escolha.PAPEL) {
        resultado = msgGanhou;
      }

      if (escolhaUsuario === Escolha.TESOURA) {
        resultado = msgPerdeu;
      }
    }

    if (escolhaComputador === Escolha.PAPEL) {
      if (escolhaUsuario === Escolha.PAPEL) {
        resultado = msgEmpate;
      }

      if (escolhaUsuario === Escolha.TESOURA) {
        resultado = msgGanhou;
      }

      if (escolhaUsuario === Escolha.PEDRA) {
        resultado = msgPerdeu;
      }
    }

    if (escolhaComputador === Escolha.TESOURA) {
      if (escolhaUsuario === Escolha.TESOURA) {
        resultado = msgEmpate;
      }

      if (escolhaUsuario === Escolha.PEDRA) {
        resultado = msgGanhou;
      }

      if (escolhaUsuario === Escolha.PAPEL) {
        resultado = msgPerdeu;
      }
    }

    this.setState({ escolhaUsuario, escolhaComputador, resultado });
  }

  render() {
    return (
      <View>
        <Topo />

        <View style={styles.painelAcoes}>
          <View style={styles.btnEscolha}>
            <Button title='pedra' onPress={() => { this.jokenpo(Escolha.PEDRA); }} />
          </View>

          <View style={styles.btnEscolha}>
            <Button title='papel' onPress={() => { this.jokenpo(Escolha.PAPEL); }} />
          </View>

          <View style={styles.btnEscolha}>
            <Button title='tesoura' onPress={() => { this.jokenpo(Escolha.TESOURA); }} />
          </View>
        </View>

        <View style={styles.palco}>
          <Text style={styles.txtResultado}>{this.state.resultado}</Text>
          <Icone escolha={this.state.escolhaComputador} jogador='Computador' />
          <Icone escolha={this.state.escolhaUsuario} jogador='Usuário' />
        </View>        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  btnEscolha: {
    width: 90
  },
  painelAcoes: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10
  },
  palco: {
    alignItems: 'center',
    marginTop: 10
  },
  txtResultado: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'red',
    height: 60
  },
});
