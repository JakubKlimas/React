import React from 'react';

class SearchBar extends React.Component {
	state = { myInput: '' };

	onFormSubmit = (e) => {
		e.preventDefault();
		this.props.getPhotos(this.state.myInput);
	};

	onInputChange = (e) => {
		this.setState({ myInput: e.target.value });
	};

	render() {
		return (
			<div className="search-bar ui icon segment">
				<form onSubmit={this.onFormSubmit}>
					<div className="field">
						<label>Images Search</label>
						<div>
							<input
								value={this.state.myInput}
								onChange={this.onInputChange}
								type="text"
								placeholder="Search.."
							/>
							<i class="search icon"></i>
						</div>
					</div>
				</form>
			</div>
		);
	}
}

export default SearchBar;
