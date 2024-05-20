import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity, Linking } from 'react-native';

export default function Index() {

  const handleStockPress = () => {
    Linking.openURL('https://www.paodeacucar.com/campanhas/2020/05/como-comprar/index.html');
  };

  const handleExpensePress = () => {
    Linking.openURL('https://www.paodeacucar.com/meu-desconto');
  };

  const handleShoppingListPress = () => {
    Linking.openURL('https://www.paodeacucar.com/cartoes');
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Image 
          source={require('../../assets/logo.png')} 
          style={styles.logo} 
        />
        <View style={styles.headerTextContainer}>
          <Text style={styles.headerText}>Pão de Açúcar</Text>
          <Text style={styles.subHeaderText}>Rede de supermercados</Text>
        </View>
      </View>

      {/* Gerenciar Estoque */}
      <View style={styles.manageStock}>
        <View style={styles.stockTextContainer}>
          <Text style={styles.manageStockTitle}>Gerenciar</Text>
          <Text style={styles.manageStockSubtitle}>Estoque</Text>
          <TouchableOpacity style={styles.button} onPress={handleStockPress}>
            <Text style={styles.buttonText}>Acessar</Text>
          </TouchableOpacity>
        </View>
        <Image 
          source={require('../../assets/estoque.png')} // Adicione o caminho correto para sua imagem de estoque
          style={styles.stockImage} 
        />
      </View>

      {/* Estatísticas */}
      <View style={styles.statistics}>
        <View style={styles.statItem}>
          <Image 
            source={require('../../assets/lojas.png')} // Adicione o caminho correto para sua imagem de lojas
            style={styles.statImage} 
          />
          <Text style={styles.statNumber}>2100</Text>
          <Text style={styles.statText}>Lojas</Text>
        </View>
        <View style={styles.statItem}>
          <Image 
            source={require('../../assets/clientes.png')} // Adicione o caminho correto para sua imagem de clientes
            style={styles.statImage} 
          />
          <Text style={styles.statNumber}>11mi</Text>
          <Text style={styles.statText}>Clientes</Text>
        </View>
        <View style={styles.statItem}>
          <Image 
            source={require('../../assets/funcionarios.png')} // Adicione o caminho correto para sua imagem de funcionários
            style={styles.statImage} 
          />
          <Text style={styles.statNumber}>130.000</Text>
          <Text style={styles.statText}>Funcionários</Text>
        </View>
      </View>

      {/* Funcionalidades */}
      <View style={styles.features}>
        <TouchableOpacity style={styles.featureItem} onPress={handleExpensePress}>
          <Image 
            source={require('../../assets/controle_gastos.png')} // Adicione o caminho correto para sua imagem de controle de gastos
            style={styles.featureImage} 
          />
          <Text style={styles.featureText}>Acessar descontos</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.featureItem} onPress={handleShoppingListPress}>
          <Image 
            source={require('../../assets/lista_compras.png')} // Adicione o caminho correto para sua imagem de lista de compras
            style={styles.featureImage} 
          />
          <Text style={styles.featureText}>Faça seu cartão</Text>
        </TouchableOpacity>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
    paddingTop: 40,
  },
  
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  logo: {
    width: 80,
    height: 50,
  },
  headerTextContainer: {
    flex: 1,
    marginLeft: 10,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
  },
  subHeaderText: {
    fontSize: 16,
    color: '#008000',
    fontWeight: 'bold',
  },
  manageStock: {
    flexDirection: 'row',
    backgroundColor: '#8DC63F',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
    marginBottom: 20,
  },
  stockTextContainer: {
    flex: 1,
  },
  manageStockTitle: {
    color: '#fff',
    fontSize: 18,
    marginBottom: 5,
  },
  manageStockSubtitle: {
    color: '#fff',
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#fff',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 10,
    width: 120,
    borderRadius: 10,
  },
  buttonText: {
    color: '#000',
    fontWeight: 'bold',
  },
  stockImage: {
    width: 140,
    height: 130,
  },
  statistics: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  statItem: {
    alignItems: 'center',
    backgroundColor: '#3BBD96',
    borderRadius: 10,
    padding: 10,
    width: 100,
  },
  statImage: {
    width: 20,
    height: 20,
    marginBottom: 5,
  },
  statNumber: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
  },
  statText: {
    fontSize: 13,
    color: '#fff',
    textAlign: 'center',
  },
  features: {
    flexDirection: 'column',
  },
  featureItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginBottom: 10,
  },
  featureImage: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  featureText: {
    fontSize: 16,
  },
});
