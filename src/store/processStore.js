import { create } from "zustand";

let nextProcessId = 1;

export const useProcessStore = create((set) => ({
  processes: [],

  openProcess: (processName) => {
    const id = nextProcessId++;
    const newProcess = {
      id,
      name: processName,
      isMaximized: false,
      isMinimized: false,
    };
    set((state) => ({
      processes: [...state.processes, newProcess],
    }));
  },

  closeProcess: (id) => {
    set((state) => ({
      processes: state.processes.filter((process) => process.id !== id),
    }));
  },

  maximizeProcess: (id) => {
    set((state) => ({
      processes: state.processes.map((process) =>
        process.id === id ? { ...process, isMaximized: true } : process
      ),
    }));
  },

  unmaximizeProcess: (id) => {
    set((state) => ({
      processes: state.processes.map((process) =>
        process.id === id ? { ...process, isMaximized: false } : process
      ),
    }));
  },

  minimizeProcess: (id) => {
    set((state) => ({
      processes: state.processes.map((process) =>
        process.id === id ? { ...process, isMinimized: true } : process
      ),
    }));
  },

  restoreProcess: (id) => {
    set((state) => ({
      processes: state.processes.map((process) =>
        process.id === id ? { ...process, isMinimized: false } : process
      ),
    }));
  },
}));
