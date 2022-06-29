/*eslint-disable*/  //워닝메시지 뜨지 않도록.

import './App.css';
import React, {useState} from "react";
import {Modal} from "./Modal";
import {Post} from "./Post";
import {Profile} from "./Profile";


function App() {

	const logo = "ReactBlog";

    let [posts, setPosts] = useState([{id: 1, title: "여자 코트 추천", date: "2022. 6. 24", like: 0},
	    {id: 2, title: "강남 맛집 모음", date: "2022. 6. 25", like: 0},
	    {id: 3, title: "파이썬 블로그", date: "2022. 7. 8", like: 0},
    ])

	let [modal, setModal] = useState(-1);
    let [postId, setPostId] = useState(posts.reduce((prevId, currentPost) => (prevId < currentPost.id) ? currentPost.id : prevId, 0));
    let [inputTitle, setInputTitle] = useState("");
    // let [inputDate, setInputDate] = useState("");

    const increaseLikeCount = (id) => {
    	let newPosts = [...posts].map(post => (post.id === id ? {...post, like: ++post.like} : post ));
	    setPosts(() => newPosts);

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
    	const newTitle = posts[0].title === "남자 코트 추천" ? "여자 코트 추천" : "남자 코트 추천";
	    let newPosts = [...posts].map((post, index) => (index === 0? {...post, title: newTitle} : post))
	    setPosts(() => newPosts);
    }

    const deletePost = (id) => {
    	let newPost = [...posts].filter( post => post.id !== id );
    	setPosts(() => newPost);
    }
    
    const savePost = () => {
    	if (inputTitle === "") {
    		alert("제목을 입력해 주세요");
    		return;
	    }
    	const newId = postId + 1;
    	setPosts([...posts, {id: newId, title: inputTitle, date: new Date().toLocaleDateString(), like: 0}]);
    	setPostId(newId);
    }


	return (
		<div className="App">
			<div className="black-nav">
				<h4>{logo}</h4>
			</div>

			<button onClick={sortTitle}>
				가나다순정렬
			</button>
			{posts.map((post, index) => (
				<Post post={post} order={index} handleLikeClick={increaseLikeCount}
			          handleTitleClick={showModal} deletePost={deletePost} key={post.id}/>
			))}
			<div>
				<input type="text" placeholder="title" onChange={(e) => { setInputTitle(e.target.value) }}/>
				{/*<input type="date" onChange={(e) => { setInputDate(e.target.value) }} />*/}
				<button onClick={savePost}>글 작성</button>
			</div>
			{ modal === -1
				? null
				: <Modal title={posts[modal].title} date={posts[modal].date} changeTitle={changeTitle}/>}

			<Profile/>
		</div>
	);
}

export default App;
