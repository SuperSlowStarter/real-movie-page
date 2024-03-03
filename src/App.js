import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const [toDo, setToDo] = useState(""); //변수 toDo와 modifier 인 setToDo
  const [toDos, setToDos] = useState([]);
  const onChange = (event) => setToDo(event.target.value); //input에 값이 변했을 때 그 값을 받아서 toDo에 넣어줌
  const onSubmit = (event) => {
    event.preventDefault(); //이것이 없다면 button의 submit에 의 해 페이지가 새로고침 되어버린다.
    if (toDo === "") {
      //input에 아무것도 없다면 동작하지 않을 것
      return;
    }
    setToDos((currentArray) => [toDo, ...currentArray]);
    setToDo("");
  };
  console.log(toDos);
  return (
    <div>
      <h1>My To Dos ({toDos.length})</h1>
      <form onSubmit={onSubmit}>
        <input
          onChange={onChange}
          value={toDo}
          type="text"
          placeholder="Write your to do..."
        ></input>
        <button>Add To Do</button> {/*버튼이 form을 submit 함*/}
        <hr />
        <ul>
          {toDos.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </form>
    </div>
  );
}

export default App;
