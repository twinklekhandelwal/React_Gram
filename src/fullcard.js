import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Cards from './card';
import images from './image';

 

import Button from '@material-ui/core/Button';

import Card from '@material-ui/core/Card';

import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';

import Typography from '@material-ui/core/Typography';
//  import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
const useStyles = makeStyles(theme => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
	},
	root: {
		display: 'grid',
		// width: '100%',
		// height: '100%',
		gridTemplateColumns: '22.5% 22.5% 22.5%',
		justifyContent: 'center',
		// paddingTop:20,
		padding: '80px',
	},
	card: {
		maxWidth: 445,
		// height:800,
		display: 'grid',
		margin: '10px',
		// padding: theme.spacing(2)
	},
	button: {
		// padding:20
		width: 150,
		marginTop: 20,
	},
	text: {
		justifyContent: 'left',
	},
	media: {
		height: 250,
		// maxHeight: 0,
		paddingTop: '56.25%', // 16:9
	},
	buttons: {
		width: 150,
		marginLeft: 10,
		marginTop: 20,
	},
	
}));

export default function TransitionsModal() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
	const handleChange = (data) => {
		console.log(data.likes)
		data.likes = data.likes + 1
		// this.setState({ icon:0});
	};
  return (
    

    <div>
    <Button variant="outlined" className={classes.buttons} onClick={handleOpen}>
								<FavoriteIcon />
							</Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >

        <div className={classes.root}>
				{images.map(data => (
					<Card className={classes.card}>
						<CardMedia className={classes.media} image={data.display_src} />
						<CardContent>
							<Typography className={classes.text} variant="body2" color="textSecondary" component="p">
								{data.caption}
								
								
							</Typography>
							<Button
								variant="outlined"
								className={classes.button}
								onClick={() => handleChange(data)}>
								<FavoriteIcon />
								{data.likes}
							</Button>
							<Button variant="outlined" className={classes.buttons}>
								<FavoriteIcon />
							</Button>
              <div className={classes.form}>
							<form className="comment-from">
                    <input type="text"  placeholder="author"/>
                    <input type="text"  placeholder="comment"/>
                    
                </form>
                </div>
								<Cards/> 
						</CardContent>
					</Card>
					
				))}
			</div>
      </Modal>
      </div>
  );

  
}
			
// export default makeStyles (styles)(FullCards);