/*eslint-disable*/  //워닝메시지 뜨지 않도록.

import './App.css';
import React, {useState} from "react";


function App() {

	const logo = "ReactBlog";

    let [posts, setPosts] = useState([{id: 1, title: "여자 코트 추천", date: "6월 24일", like: 0},
	    {id: 2, title: "강남 맛집 모음", date: "6월 25일", like: 0},
	    {id: 3, title: "파이썬 블로그", date: "7월 8일", like: 0},
    ])

	let [modal, setModal] = useState(-1);

    const increaseLikeCount = (id) => {
    	let newPosts = [...posts].map(post => (post.id === id ? {...post, like: ++post.like} : post ));
	    setPosts(newPosts);

    }

    const showModal = (index) => {
	    //setModal((modal) => !modal)
	    //setState처럼 state 받는 리턴값있는 함수 사용가능한듯. 리턴한 값이 setModal에 적용될 값이 되는 것 같다. props도 마찬가지로 받을 수 있는지 확인하기.

	    setModal((modal) => modal === index ? -1 : index);
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
			{posts.map((post, index) => (
				<Post post={post} order={index} handleLikeClick={increaseLikeCount}
			          handleTitleClick={showModal} key={post.id}/>

			))}
			{ modal === -1 ? null  : <Modal title={posts[modal].title} date={posts[modal].date}/>}
		</div>
	);
}

function Post(props) {
	return (
		<div className="list">
			<h4>
				<span onClick={() => props.handleTitleClick(props.order)}>
				{props.post.title}
				</span>
				<span onClick={() => props.handleLikeClick(props.post.id)}>👍</span>
				{props.post.like}
			</h4>
			<p>{props.post.date} 발행</p>
		</div>
	)
}

function Modal(props) {
	return (
		<div className="modal">
			<h4>{props.title}</h4>
			<p>{props.date}</p>
			<p>상세내용</p>
		</div>
	)
}

export default App;
