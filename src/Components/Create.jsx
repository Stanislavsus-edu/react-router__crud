import React, {useState} from 'react';
import Posts from './Posts.jsx';
import { Link, Routes, Route, useNavigate } from "react-router-dom";

export default function Create() {
	const [value, setValue] = useState();
	const navigate = useNavigate();

	const handleChange = (event) => {
		const text  = event.target.value;
		setValue(text)
	}

	const onclick = (event) => {
	   event.preventDefault();
	   fetch(process.env.REACT_APP_SERVER, {
		   method: 'POST',
		   headers: { 'Content-Type': 'application/json' },
		   body: JSON.stringify({id: 0, content: `${value}`}),
	 	}).then( () => {
        	navigate('/');
      	});
	}

	return (
	 	<>
		    <input type="text" className="input_post" onChange={handleChange}/>
		    <button className="button_post" onClick={onclick}>Опубликовать</button>

			<nav className="menu">
				<Link to="/">Все посты</Link>
			</nav>
		    <Routes>
		       <Route path="/posts" element={<Posts />}/>
		    </Routes>
		</>
		)
}