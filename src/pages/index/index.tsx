import {useState} from "react";
import "./index.css";
import Action from './components/action/index.tsx'
import ListItem from "./components/listItem/index.tsx";

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

    return (
        <div className='box1'>
            <Action List={List} setList={setList}/>
            <ListItem List={List} setList={setList}/>
        </div>
    );
}
