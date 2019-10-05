// 引入库
import React, { Component } from 'react';
import { render } from 'react-dom';
// 引入请求数据的模块
// 引入样式

// 定义换肤组件
class App extends Component {
	// 初始化状态
	constructor(props) {
		// 构造函数继承
		super(props);
		// 初始化
		this.state = {
			value:"网易云课堂最棒了"
		}
	}
	render() {
		let { value} = this.state
		// 返回虚拟DOM
		return (
			<div>
				<input  value={value} onChange={e=> this.setState({value:e.target.value})}/>受控组件<br/>
				<input defaultValue={value} ref="name" onChange={e=>this.refs.name.value = e.target.value}/>非受控组件
			</div>
		)
	}
}

// 渲染
render(<App></App>, app)