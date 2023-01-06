import axios from 'axios';

import type { IPost } from '../interfaces';

const getPosts = async (): Promise<Array<IPost>> => {
	const { data } = await axios.get<Array<IPost>>(
		'https://jsonplaceholder.typicode.com/posts'
	);

	return data;
};

export default getPosts;
