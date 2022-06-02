import { useNavigate } from "react-router-dom";
import { useState } from 'react'

export default function Post(props) {
	const navigate = useNavigate();
	const [edit, setEdit] = useState(false);
	const [value, setValue] = useState();

	const removePost = () => {
	   fetch(`${process.env.REACT_APP_SERVER}/${props.id}`, {
		   method: 'DELETE' }).
	   then( () => {
       	navigate('/');
       })
	 };

	const clickPost = () => {
		navigate(`posts/${props.id}`);
	}

	const editPost = () => {
		setEdit(true)
		{window.location.href == 'http://localhost:3000/' && navigate(`posts/${props.id}`)};
	}

	const handleChange = (event) => {
		const text  = event.target.value;
		setValue(text)
	}

	const handleCancel = () => {
		setEdit(false)
		navigate('/');
		navigate(`/posts/${props.id}`)
	}

	const savePost = (event) => {
	   setEdit(false)
	   event.preventDefault();
	   fetch(process.env.REACT_APP_SERVER, {
		   method: 'POST',
		   headers: { 'Content-Type': 'application/json' },
		   body: JSON.stringify({id: props.id, content: `${value}`}),
	 	}).then( () => {
        	navigate('/');
      	});
	}


	return (
		<>
			<div className="menu_bar">
				{!edit && <div className="edit_post" onClick={editPost}>✎</div>}
				{!edit && window.location.href != 'http://localhost:3000/' && <div className="remove_post" onClick={removePost}>✖</div>}
			</div>

			{edit && <><input type="text" className="input_post" placeholder={props.text} onChange={handleChange}/>
		   	<button className="button_post cancel_button" onClick={handleCancel}>Отменить</button>
		   	<button className="button_post" onClick={savePost}>Сохранить</button></>}

			{!edit && <p className="paragraph_post" onClick={clickPost}>{props.text}</p>}
		</>
	)
} 