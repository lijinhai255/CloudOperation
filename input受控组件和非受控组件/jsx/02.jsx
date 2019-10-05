// 引入库
import React, { Component } from 'react';
import { render } from 'react-dom';
// 引入请求数据的模块
// 引入样式

// 定义confirm组件
function confirm(props){
    let P = new Promise(function(resolve, reject){
		//做一些异步操作
		setTimeout(function(){
            if(props === "确定删除吗"){
				resolve(true);
            }else{
                resolve(false)
            }
			}, 2000);
		});
    return P
}

// 定义
class App extends Component {

    async componentDidMount(){
        let res = await confirm("确定删除吗")
        console.log(res,12)
        if(res) {
            console.log("是")
        } else {
            console.log("否")
        }
    }
	render() {
		// 返回虚拟DOM
		return (
			<div>
			12
			</div>
		)
	}
}

// 渲染
render(<App></App>, app)