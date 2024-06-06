import React, {ChangeEvent} from 'react';
import './index.css';
import {ListItemProps} from './type.ts'

export default function Item(props: {
    List: ListItemProps[];
    setList: React.Dispatch<React.SetStateAction<ListItemProps[]>>;
}) {
    const {List, setList} = props;

    // 改值
    const handleChange = (index: number, event: ChangeEvent<HTMLInputElement>) => {
        const newValues = [...List];
        newValues[index].name = event.target.value;
        setList(newValues);
    };

    // 编辑
    const handleEdit = (id: number) => {
        const newItems = List.map((item) => {
            if (item.id === id) {
                item.isEdit = !item.isEdit;
            }
            return item;
        });
        console.log(newItems);
        setList(newItems);
    };

    // 删除
    const handleDelete = (id: number) => {
        const newItems = List.filter((item) => item.id !== id);
        console.log(newItems);
        setList(newItems);
    };

    return (
        <>
            {List.map((item) => {
                return (
                    <div className='box3' key={item.id}>
                        {item.isEdit ? (
                            <input
                                value={item.name}
                                onChange={(event) => handleChange(List.indexOf(item), event)}
                            />
                        ) : (
                            <div>{item.name}</div>
                        )}
                        <div className='btn-group'>
                            <button onClick={() => handleDelete(item.id)}>删除</button>
                            <button onClick={() => handleEdit(item.id)}>编辑</button>
                        </div>
                    </div>
                );
            })}
        </>
    );
}
