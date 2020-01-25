import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
	root: {
		fontWeight: 400,
		fontFamily: "'Berkshire Swash', cursive",
        
		color: '#125688',
		fontSize: '5rem',
	},
});

export default function Types() {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<Typography fontStyle="italic" variant="h1" component="h2" gutterBottom>
				Reactgram
			</Typography>
		</div>
	);
}
