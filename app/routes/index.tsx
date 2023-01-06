import { json } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import PostItem from '~/components/PostItem';
import getPosts from '~/models/posts.server';

export const loader = async () => {
	return json({
		posts: await getPosts(),
	});
};

const IndexRoute = () => {
	const { posts } = useLoaderData<typeof loader>();
	return (
		<section className="grid grid-cols-3 gap-3">
			{posts.map((post) => (
				<PostItem key={post.id} post={post} />
			))}
		</section>
	);
};

export default IndexRoute;
