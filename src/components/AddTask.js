import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { addTask } from '../redux/taskSlice';

export default function AddTask() {
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [user, setUser] = useState('');

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      addTask({
        title,
        date,
        time,
        user,
      })
    );
    navigate('/allTask');
  };

  return (
    <form className="addTask" onSubmit={handleSubmit}>
      <div className="input_container">
        <label>Task Description</label>
        <input
          type="text"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className="input_row">
        <div className="input_item">
          <label>date</label>
          <input
            type="date"
            required
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
        <div className="input_item">
          <label>time</label>
          <input
            type="time"
            required
            value={time}
            onChange={(e) => setTime(e.target.value)}
          />
        </div>
      </div>
      <div className="input_container">
        <label>Assign User</label>
        <input
          type="text"
          required
          value={user}
          onChange={(e) => setUser(e.target.value)}
        />
      </div>
      <div className="submit_btn">
        <button>add task</button>
      </div>
    </form>
  );
}
