import React from 'react';
import images from './image';
// import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
// import clsx from 'clsx';
import Card from '@material-ui/core/Card';
// import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';

import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
// import FavoriteIcon from '@material-ui/icons/Favorite';

const   styles = theme => ({
  root: {
    display: "grid",
    // width: '100%',
    // height: '100%',
    gridTemplateColumns: "22.5% 22.5% 22.5%",
    justifyContent: "center",
    // paddingTop:20,
    padding:'80px',
    
   
  },
    card: {
       maxWidth: 445,
      // height:800,
      display: 'grid',
      margin:'10px',
      // padding: theme.spacing(2)
  
    },
    
    media: {
      height:250,
      // maxHeight: 0,
      paddingTop: '56.25%', // 16:9
    },
    expand: {
      transform: 'rotate(0deg)',
      marginLeft: 'auto',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: 'rotate(180deg)',
    },
    avatar: {
      backgroundColor: red[500],
    },
  });
class Cards extends React.Component{
    
    constructor(props){
    super(props)
    this.state={
        icon:"none"
    }
    }
    render(){
      
      const {classes} = this.props;
        return(
          // <Container>
           <div p={1} className = {classes.root}>
            {images.map(data=>
              
              
              
                <Card className={classes.card} >
                  
                   <CardMedia
                    className={classes.media}
                    image={data.display_src}
                    
                  /> 
                  <CardContent>
                  
					
                    <Typography  variant="body2" color="textSecondary" component="p">
                    
                    {data.caption}
                    {data.likes}
                       </Typography>
                       <Button variant="outlined" ><FavoriteIcon/>{data.likes}
 
</Button>
                  
                  </CardContent>
                </Card>
                
               
                
            )}
            </div>
            // </Container>
            
        )
      
                    }
             
        }
        
export default withStyles(styles)(Cards);