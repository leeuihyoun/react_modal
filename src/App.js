import logo from './logo.svg';
import './App.css';


import Modal from './components/modal-popup/modal';
import { useState } from 'react';
function App() {
  let[showModal,setShowModal] = useState(false);

  function modalClose(){
    //모달을 열기 위해선 setShowModal(true)

    setShowModal(false)
  }
  
  return (
    <div className="App">
     
      <button onClick={()=>{
        showModal == true ? setShowModal(false):setShowModal(true)
        
        
      }}>모달창 열기</button>
      
      {
      //&& : 앞에꺼가 틀리면(false,null,nan)뒤에꺼는 어차피 검사안함
      showModal == true ? <Modal id={'modal-1'} _footer={<div></div>} _header={<div><p>제목</p></div>} onClose={modalClose} _body={<div>모달창 바디</div>}/>: null}
    </div>
  );
}

export default App;
