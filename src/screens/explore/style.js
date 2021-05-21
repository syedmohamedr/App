import { StyleSheet } from 'react-native'

const Styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      },
      header: {
        fontSize: 25,
        textAlign: 'center',
        marginBottom: 16,
      },
      footerHeading: {
        fontSize: 18,
        textAlign: 'center',
        color: 'grey',
      },
      footerText: {
        fontSize: 16,
        textAlign: 'center',
        color: 'grey',
      },
      buttonStyle: {
        alignItems: 'stretch',
        backgroundColor: '#fff',
        padding: 20,
        width:"100%",
        marginTop: 1,
        borderBottomColor:"red"
      },
          
      separator: {
    
       
        borderBottomWidth: StyleSheet.hairlineWidth,
      },
})


export default Styles