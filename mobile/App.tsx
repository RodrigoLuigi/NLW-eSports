import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

interface ButtonProps {
  title: string;
}

function Button(props: ButtonProps){
  return(
    <TouchableOpacity style={styles.btn}>
      <Text>
        {props.title}
      </Text>
    </TouchableOpacity>
  );
}

export default function App() {
  return (
    <View style={styles.container}>

      <Button title="Send 1" />
      <Button title="Send 1" />
      <Button title="Send 1" />
      <Button title="Send 1" />

      <Text style={styles.title}>Hello React Native!</Text>
      <StatusBar style="auto"/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: 'red',
  },
  btn: {
    marginBottom: 3,
    borderRadius: 4,
    backgroundColor: '#3d3d3d',
  }
});
