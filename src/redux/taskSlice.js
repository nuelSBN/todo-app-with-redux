import { createSlice } from '@reduxjs/toolkit/';

const taskSlice = createSlice({
  name: 'tasks',
  initialState: [],
  reducers: {
    addTask: (state, action) => {
      const newTask = {
        id: Date.now(),
        title: action.payload.title,
        date: action.payload.date,
        time: action.payload.time,
        user: action.payload.user,
        completed: action.payload.completed,
      };
      state.push(newTask);
    },

    // checkTask: (state, action) => {
    //   const index = state.findIndex((task) => task.id === action.payload.id);
    //   state[index].completed = action.payload.completed;
    // },

    deleteTask: (state, action) => {
      return state.filter((task) => task.id !== action.payload.id);
    },

    editTask: (state, action) => {
      state.map((task) => {
        if (task.id === action.payload.id) {
          task.title = action.payload.title;
        }
      });
    },
  },
});

export const { addTask, deleteTask, editTask } = taskSlice.actions;

export default taskSlice.reducer;
