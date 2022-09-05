import React from 'react';
import { useSelector } from 'react-redux';

import SingleTask from './SingleTask';

export default function ViewALLTask() {
  const tasks = useSelector((state) => state.tasks);

  return (
    <ul className="allTask">
      <div className="allTask_row">
        {tasks.map((task) => (
          <SingleTask
            id={task.id}
            title={task.title}
            date={task.date}
            time={task.time}
            user={task.user}
            key={task.id}
          />
        ))}
      </div>
    </ul>
  );
}
