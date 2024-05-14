import { useState } from "react";
import "./index.css";
import ListItem from "../../components/listItem/index.tsx";

export default function Index() {
  const [List, setList] = useState([
    {
      name: "张三",
      isEdit: false,
      id: 1,
    },
    {
      name: "李四",
      isEdit: false,
      id: 2,
    },
    {
      name: "王五",
      isEdit: false,
      id: 3,
    },
  ]);
  // 添加
  const handleAdd = () => {
    const newItem = {
      name: "",
      isEdit: false,
      id: Math.random(),
    };
    setList([...List, newItem]);
  };
  return (
    <>
      <div className='box1'>
        <div className='box2'>
          <button onClick={handleAdd}>添加</button>
        </div>
        <ListItem List={List} setList={setList} />
      </div>
    </>
  );
}
