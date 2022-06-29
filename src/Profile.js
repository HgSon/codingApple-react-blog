import React, {Component} from "react";

export class Profile extends Component {
	constructor() {
		super();
		this.state = { name: "kim", age: 20};
		this.changeName = this.changeName.bind(this);
	}

	changeName() {
		this.setState({name: "Park"});
	}

	changeAge = () => {
		this.setState((state) => state.age > 19 ? {age: state.age - 1} : {age: state.age + 1} )
	}

	render() {
		return (
			<div>
				<h3>프로필입니다.</h3>
				<p>이름은 {this.state.name} 입니다.</p>
				<p>나이는 {this.state.age}세 입니다.</p>
				<button onClick={this.changeName}>이름 변경</button>
				<button onClick={this.changeAge}>나이 변경</button>
			</div>
		)
	}
}