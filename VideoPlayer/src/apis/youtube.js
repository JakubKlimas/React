import axios from 'axios';

const KEY = 'AIzaSyDtmJ_px-KMTTNBrmk5cBPvl886mpbNYsk';

export default axios.create({
	baseURL: 'https://www.googleapis.com/youtube/v3',
	params: {
		part: 'snippet',
		maxResults: 5,
		type: 'video',
		key: KEY,
	},
});
