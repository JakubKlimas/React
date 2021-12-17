import React from 'react';
import api from './apis/api';
import SearchBar from './SearchBar';
import ImagesList from './ImagesList';

class App extends React.Component {
	state = { images: [] };

	getPhotos = async (word) => {
		const responce = await api.get('/search/photos', {
			params: { query: word },
		});
		this.setState({ images: responce.data.results });
		console.log(this.state.images);
	};

	render() {
		return (
			<div className="ui container">
				<SearchBar getPhotos={this.getPhotos} />
				<ImagesList images={this.state.images} />
			</div>
		);
	}
}

export default App;
