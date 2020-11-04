import React from 'react';

class SearchBar extends React.Component {

	state = { term: '' };

	onFormSubmit = event => {
		event.preventDefault();
		this.props.onSubmit(this.state.term);
	}

	render() {
		return (
			<div className="ui segment">
				<form className="ui form" onSubmit={this.onFormSubmit}>
					<div className="field">
						<label>Enter Location</label>
						<input 
							type="text" 
							placeholder="Enter Location" 
							onChange={(e) => this.setState({term: e.target.value})}
							value={this.state.term}
						/>
					</div>
				</form>
			</div>
		);
	}
}

export default SearchBar;