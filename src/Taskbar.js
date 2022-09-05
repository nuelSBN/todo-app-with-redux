import React from 'react';
import { Link } from 'react-router-dom';
import { FaPlus } from 'react-icons/fa';
import { useSelector } from 'react-redux';

export default function Taskbar() {
  const allTask = useSelector((state) => state.tasks);

  return (
    <div className="top_container">
      <h3 className="title">Task {allTask.length}</h3>
      <div className="addIcon">
        <Link to="/">
          <FaPlus />
        </Link>
      </div>
    </div>
  );
}
