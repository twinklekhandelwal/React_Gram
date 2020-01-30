import React from 'react';
import { withStyles } from '@material-ui/core/styles';
// import { render } from '@testing-library/react';
// import images from './image';

// import Button from '@material-ui/core/Button';
// import { withStyles } from '@material-ui/core/styles';
// import clsx from 'clsx';
// import Card from '@material-ui/core/Card';
// import ThumbUpIcon from '@material-ui/icons/ThumbUp';
// import CardMedia from '@material-ui/core/CardMedia';
// import CardContent from '@material-ui/core/CardContent';
// import ThumbDownAltIcon from '@material-ui/icons/ThumbDownAlt';
// import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
// import Modal from '@material-ui/core/Modal';
// import TransitionsModal from './fullcard';

const styles = theme => ({
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
		width: 50,
		marginTop: 20,
	},
	com_button: {
		width: 150,
		marginTop: 20,
		marginLeft: 20,
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
		width: 50,
		marginLeft: 10,
		marginTop: 20,
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
function Input({ onKeyPress }) {
	return (
		<div>
			{/* <h2>Input</h2> */}
			<input type="text" onKeyPress={onKeyPress} />
			
		</div>
	);
}
class Inputs extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			authorname: '',
			comment: '',
		};
	}
	handlechange = e => {
		this.setState({ authorname: e.target.value });
	};
	Change = e => {
		this.setState({ comment: e.target.value });
	};
	Submit(e) {
		e.preventDefault();
	}
	handleKeyPress = e => {
		if (e.key === 'Enter') {
			this.setState({ comment: e.target.value });
		}
	};
	handleKeyPresses = e => {
		if (e.key === 'Enter') {
			this.setState({  authorname: e.target.value });
		}
	};

	render() {
		// const { classes } = this.props;
		return (
			<form onSubmit={this.Submit}>
				<Input
					type="text"
					name="name"
					value={this.state.authorname}
					onKeyPress={this.handleKeyPress}
					onChange={this.handlechange}
				/>
				{this.state.authorname}
				<Input
					type="text"
					name="name"
					value={this.state.comment}
					onKeyPress={this.handleKeyPresses}
					onChange={this.Change}
				/>
				{this.state.comment}
			</form>
		);
	}
}
export default withStyles(styles)(Inputs);
