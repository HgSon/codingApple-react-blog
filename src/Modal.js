import React from "react";


export function Modal(props) {
	return (
		<div className="modal">
			<h4>{props.title}</h4>
			<p>{props.date}</p>
			<p>상세내용</p>
			<button onClick={props.changeTitle}>
				글수정
			</button>
		</div>
	)
}