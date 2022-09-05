import React from 'react';
import { FaEdit, FaTrashAlt } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { deleteTask, editTask } from '../redux/taskSlice';

export default function SingleTask({ id, title, time, date, user }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleEdit = () => {
    console.log('edit button clicked');
    dispatch(editTask({ id }));
    console.log(id);
    navigate('/');
  };

  const handleDelete = () => {
    dispatch(deleteTask({ id: id }));
  };

  return (
    <li className="singleTask" key={id}>
      <div className="singleTask_left">
        <h1 className="taskTitle">{title}</h1>
        <div className="details">
          <span className="taskDate">{date}</span>
          <span className="taskTime">{time}</span>
          <span className="taskUser">{user}</span>
        </div>
      </div>
      <div className="singleTask_right">
        <span>
          <FaEdit onClick={handleEdit} />
        </span>
        <span>
          <FaTrashAlt onClick={handleDelete} />
        </span>
      </div>
    </li>
  );
}
