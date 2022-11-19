import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    root: {
      display:'flex',
      justifyContent:'center',
     alignItems:'center',
      marginTop:30,
      marginLeft:200,
      width:'1100px',
      backgroundColor:"yellowgreen"
      
      
    

    },
    subdiv:{
            
            borderRadius:12,
             padding:20,
             marginTop:40,
             background:'#e8d1c5',
             height:'95%',
             width:'300'
             
             

             

    },
    heading:{

        fontWeight:'bold',
        fontSize: 24,
        letterSpacing:1,
        textAlign:'center'

}
  });
  export {useStyles};