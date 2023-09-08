import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#000',
      padding: 16
    },
    textContainer: {
      color: '#fff',
      fontSize: 24,
      fontWeight: 'bold',
      marginTop: 48,
    },
    textContainerSmall: {
      color: '#6b6b6b',
      fontSize: 14,
    },
    input: {
        flex: 1,
        height: 56,
        backgroundColor: '#1f1e25',
        color: '#fff',
        borderRadius: 5,
        padding: 8,
        marginRight: 8
    },
    buttonText: {
        fontSize: 24,
        color: '#fff'
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 56,
        height: 56,
        borderRadius: 5,
        backgroundColor: '#31CF67'
    },
    form: {
        width: '100%',
        flexDirection: 'row',
        marginTop: 32,
        marginBottom: 40
    },
    listEmptyText: {
        color: '#fff',
        fontSize: 16,
        textAlign: 'center'
    }
  });