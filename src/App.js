/*eslint-disable*/  //워닝메시지 뜨지 않도록.

import './App.css';
import React, {useState} from "react";


function App() {

	const logo = "ReactBlog";

	let [titles, setTitle] = useState(["여자 코트 추천", "역삼 맛집 모음", "파이썬 블로그"]);
	let [dates, setDate] = useState(["6월 24일", "6월 25일", "7월 8일"]);
    let [likes, setLikes] = useState([0, 0, 0]);

    const handleClick = (index) => {
    	let newLikes = [...likes];
    	newLikes[index]++;
    	setLikes(newLikes)

    }


	return (
		<div className="App">
			<div className="black-nav">
				<h4>{logo}</h4>
			</div>

			<button onClick={() => setTitle([...titles].map((title, index) => index === 0? "남자 코트 추천" : title))}>글수정</button>
			{titles.map((title, index) => (
				<div className="list" key={title}>
					<h4>{title} <span onClick={() => handleClick(index)}>👍</span> {likes[index]} </h4>
					<p>{dates[index]} 발행</p>
				</div>
			))}
		</div>
	);
}

export default App;
