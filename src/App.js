/* eslint-disable */
import React, {useState} from 'react';
import './App.css';
function App() {

  let [글제목, 글제목변경] = useState(['남자코트 추천', '강남 우동맛집', '파이썬독학']);
  let [따봉, 따봉변경] = useState(0);
  let [modal, modal변경] = useState(false);
  let [누른제목, 누른제목변경] = useState(0);

  let [입력값, 입력값변경] = useState('');

  function modalChange() {
    let mode = modal === false ? true : false
    modal변경(mode);
  }
  return (
    <div className="App">
      <div className="black-nav">
          <div>개발 Blog</div>
      </div>

    { 
        
        글제목.map(function(a, i) {
        return(
        <div className='list' key={i}>
          console.log("발생");
          <h1 onClick={ ()=> {누른제목변경(i)}}>{a}</h1>
          <p>2월 19일 발행</p>
          <hr></hr>
        </div>
        )
      })

    }
    

    <div className='publish'>
      <input onChange={(e)=>{입력값변경(e.target.value)}}/>
      <button onClick={()=> {
        var array = [...글제목];
        array.unshift(입력값);
        글제목변경(array);
      }}>저장</button>
    </div>
    
    <Profile/>
    <button onClick={modalChange}>열고닫기</button>

       {
         modal === true ? <Modal 글제목={글제목} 누른제목={누른제목} /> : null
       }

    </div>
  );
}

function Modal(props) {
  
  return(
    <div className="modal">
      <h2> {props.글제목[props.누른제목]} </h2>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  );
}

class Profile extends React.Component {
  constructor() {
    super();
    this.state = {name: 'Kim', age : 30}
  }

  changeName() {
     this.setState({name: 'Park'}) 
  }
  render() {
    return (
      <div>
        <h3>프로필입니다.</h3>
        <p>저는 {this.state.name}입니다.</p>
        <button onClick={ this.changeName.bind(this)}>버튼</button>
      </div>
    )
  }
}
export default App;
