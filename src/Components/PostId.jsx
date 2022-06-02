import { useParams } from "react-router-dom";
import Posts from './Posts.jsx';

export default function PostId() {
	const postId  = useParams();
	return (
		<Posts postId={postId.postId}/> 
	)
}