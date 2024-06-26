import './index.css';
import React from 'react';
import { ListItemProps } from './type.ts';

export default function action(props: {
  List: ListItemProps[];
  setList: React.Dispatch<React.SetStateAction<ListItemProps[]>>;
}) {
  const { List, setList } = props;
  
  // 添加
  const handleAdd = () => {
    const newItem = {
      name: '',
      isEdit: false,
      id: Math.random(),
    };
    setList([...List, newItem]);
  };

  return (
    <div className='box2'>
      <button onClick={handleAdd}>添加</button>
    </div>
  );
}
