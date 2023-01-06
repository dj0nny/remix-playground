import type { IPost } from '../interfaces';

interface IProps {
	post: IPost;
}

const PostItem = ({ post }: IProps) => {
	return (
		<div className="border border-black p-5">
			<h1 className="text-xl font-semibold">{post.title}</h1>
		</div>
	);
};

export default PostItem;
