import Post from './Post.jsx';
import {Component, useState} from 'react';
import { Link } from "react-router-dom";

export default class Posts extends Component {
	state = { posts: [] };

	componentDidMount() {
		this.props ? this.getData(this.props.postId) : this.getData()
    }

    getData = (id = null) => {
		fetch(`${process.env.REACT_APP_SERVER}/`)
			.then(response => response.json())
			.then(result => {
	        	this.setState(
	        		id ? {posts: [result.find((i) => i.id == Number(id))]} : {posts: result}
	        	);
	    	});
    }

    render(){
    	return (
			<>	
		    	{this.state.posts.map(elem => <Post  text={elem.content} id={elem.id} key={elem.id} />)}
		    	{window.location.href != 'http://localhost:3000/' && 
		    	<nav className="menu">
					<Link to="/">Все посты</Link>
				</nav>}
		    </>
	    )
    }
}