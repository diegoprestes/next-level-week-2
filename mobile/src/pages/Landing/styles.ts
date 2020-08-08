import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#8257E5',
    padding: 40,
  },
  banner: {
    width: '100%',
    resizeMode: 'contain',
  },
  title: {
    fontFamily: 'Poppins_400Regular',
    fontSize: 20,
    lineHeight: 30,
    color: '#FFF',
    marginTop: 80,
  },
  titleBold: {
    fontFamily: 'Poppins_600SemiBold',
  },
  buttonsContainer: {
    flexDirection: 'row',
    marginTop: 40,
    justifyContent: 'space-between',
  },
  button: {
    width: '48%',
    height: 150,
    borderRadius: 8,
    padding: 24,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  buttonPrimary: {
    backgroundColor: '#9871F5',
  },
  buttonSecondary: {
    backgroundColor: '#04D361',
  },
  buttonText: {
    fontFamily: 'Archivo_700Bold',
    fontSize: 20,
    color: '#FFF',
    textAlign: 'center',
  },
  totalConnections: {
    fontFamily: 'Poppins_400Regular',
    color: '#D4C2FF',
    fontSize: 12,
    lineHeight: 20,
    maxWidth: 140,
    marginTop: 40,
  }
});

export default styles;