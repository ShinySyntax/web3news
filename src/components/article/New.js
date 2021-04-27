import { React, useState } from "react";
import { useDispatch, useSelector } from "react-redux"

import { post } from '../../store/actions/article'

const Article = (props, history) => {
	const auth = useSelector(state => state.authReducer);
	const [title, setTitle] = useState('');
	const [url, setUrl] = useState('');
	const [description, setDescription] = useState('');
	const dispatch = useDispatch();

	const onSubmit = (e) => {
		e.preventDefault();
		dispatch(post({ userID: auth.user.id, title, url, description }))
			.then((data) => {
				console.log(data);
			})
			.catch((err) => console.error(err.message));
	}

	return (
		<div className="p-8">
			<label htmlFor="article-title" className="text-darkblue-400">Article Title</label>
			<input
				placeholder="Title"
				id="article-title"
				type="text"
				className="border-2 rounded px-3 py-2 w-full focus:outline-none focus:border-blue-400 focus:shadow"
				value={title}
				onChange={(e) => setTitle(e.target.value)}
			/>
			<label htmlFor="article-url" className="text-darkblue-400">Article URL</label>
			<input
				id="article-url"
				type="text"
				className="border-2 rounded px-3 py-2 w-full focus:outline-none focus:border-blue-400 focus:shadow"
				placeholder="URL"
				value={url}
				onChange={(e) => setUrl(e.target.value)}
			/>
			<label htmlFor="article-description" className="text-darkblue-400">Article Description</label>
			<textarea className="border-2 rounded px-3 py-2 w-full focus:outline-none focus:border-blue-400 focus:shadow"
				placeholder="Enter description about the article"
				value={description}
				onChange={(e) => setDescription(e.target.value)}
			></textarea>
			<div className="flex justify-end font-bold">
				<button className="text-darkblue-800 p-2 m-1 rounded bg-darkblue-300 hover:bg-darkblue-600 hover:text-darkblue-300" onClick={onSubmit}>Submit Article</button>
			</div>
		</div>
	);

}

export default Article;

