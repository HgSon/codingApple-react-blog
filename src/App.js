/*eslint-disable*/  //워닝메시지 뜨지 않도록.

import './App.css';
import React, {useState} from "react";


function App() {

	const logo = "ReactBlog";

    let [posts, setPosts] = useState([{id: 1, title: "여자 코트 추천", date: "6월 24일", like: 0},
	    {id: 2, title: "강남 맛집 모음", date: "6월 25일", like: 0},
	    {id: 3, title: "파이썬 블로그", date: "7월 8일", like: 0},
    ])

    const increaseLikeCount = (id) => {
    	let newPosts = [...posts].map(post => (post.id === id ? {...post, like: ++post.like} : post ));
	    setPosts(newPosts);

    }

    const sortTitle = () => {
    	let newPosts = [...posts].sort((a, b) => {
    		if (a.title > b.title) {
    			return 1;
		    }

    		if (a.title < b.title) {
    			return -1;
		    }
    		return 0;
	    })
    	setPosts(newPosts)

    }

    const changeTitle = () => {
	    let newPosts = [...posts].map((post, index) => (index === 0? {...post, title: "남자 코트 추천"} : post))
	    setPosts(newPosts);
    }


	return (
		<div className="App">
			<div className="black-nav">
				<h4>{logo}</h4>
			</div>

			<button onClick={changeTitle}>
				글수정
			</button>
			<button onClick={sortTitle}>
				가나다순정렬
			</button>
			{posts.map((post) => (<Post post={post} handleClick={increaseLikeCount} key={post.id}/>

			))}
			<Modal />
		</div>
	);
}

function Post(props) {
	return (
		<div className="list">
			<h4>
				{props.post.title}
				<span onClick={() => props.handleClick(props.post.id)}>👍</span>
				{props.post.like}
			</h4>
			<p>{props.post.date} 발행</p>
		</div>
	)
}

function Modal() {
	return (

		<div className="modal">
			<h4>제목</h4>
			<p>날짜</p>
			<p>상세내용</p>
		</div>
	)
}

export default App;
