import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Image 
         source={require('../../assets/logo.png')} 
         style={{ width: 200, height: 200 }} // Defina o tamanho da imagem conforme necessário
      />
      <Text>Pau de açucar</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
