import logo from './logo.svg';
import './App.css';
import React, {useState} from "react";


function App() {

  const logo = "ReactBlog";

  let [titles, setTitle] = useState(["여자 코트 추천", "역삼 맛집 모음", "파이썬 블로그"]);
  let [dates, setDate] = useState(["6월 24일", "6월 25일", "7월 8일"])


  return (
    <div className="App">
      <div className="black-nav">
          <h4>{ logo }</h4>
      </div>
        {titles.map((title, index) => (
            <div className="list">
                <h4>{ title }</h4>
                <p>{dates[index]} 발행</p>
            </div>
        ))}
    </div>
  );
}

export default App;
