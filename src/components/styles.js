/* Presentational */
import { View, StyleSheet } from 'react-native';

// import styles from './styles';


const styles = StyleSheet.create({
  //for message
  composeText: {
    width: '80%',
    paddingHorizontal: 10,
    height: 40,
    backgroundColor: 'white',
    borderColor: '#979797',
    borderStyle: 'solid',
    borderWidth: 1,
  },
  compose: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    margin: 10
  }
});
export default styles;