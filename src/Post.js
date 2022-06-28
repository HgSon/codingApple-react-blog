import React from "react";

export function Post(props) {
	return (
		<div className="list">
			<h4>
				<span onClick={() => props.handleTitleClick(props.order)}>
				{props.post.title}
				</span>
				<span onClick={() => props.handleLikeClick(props.post.id)}>👍</span>
				{props.post.like}
				<button onClick={() => props.deletePost(props.post.id)}>삭제</button>
			</h4>
			<p>{props.post.date} 발행</p>
		</div>
	)
}