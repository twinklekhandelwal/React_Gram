import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import { makeStyles } from '@material-ui/core/styles';
import Input from './input'
import Comment from "./comment"
// import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
const useStyles = makeStyles({
  card: {
		// width: 975,
		height:300,
		marginTop:520
  },
  button:
  {
    marginTop:'10px'
  }
  
});
export default function AlertDialog() {
	const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

console.log(Comment)
  return (
    <div>
      <Button variant="outlined" className={classes.button} color="primary" onClick={handleClickOpen}>
        Open alert dialog
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
				className={classes.card} >
         <DialogTitle id="alert-dialog-title">{"Comment"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
          {/* <div>
         {Comment.map(comment=>(comment))}
         </div> */}
            <Input/>
          </DialogContentText>
        </DialogContent>
        
			
      </Dialog>
    </div>
  );
}