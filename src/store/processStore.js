import { create } from "zustand";

let nextProcessId = 1;

export const useProcessStore = create((set) => ({
  processes: [],

  openProcess: (processName) => {
    const id = nextProcessId++;
    set((state) => {
      const maxZIndex = Math.max(
        ...state.processes.map((process) => process.zIndex || 0),
        0
      );
      const newProcess = {
        id,
        name: processName,
        isMaximized: false,
        isMinimized: false,
        zIndex: maxZIndex + 1,
      };
      return {
        processes: [...state.processes, newProcess],
      };
    });
  },

  closeProcess: (id) => {
    set((state) => ({
      processes: state.processes.filter((process) => process.id !== id),
    }));
  },

  maximizeProcess: (id) => {
    set((state) => {
      const maxZIndex = Math.max(
        ...state.processes.map((process) => process.zIndex)
      );
      return {
        processes: state.processes.map((process) =>
          process.id === id
            ? { ...process, isMaximized: true, zIndex: maxZIndex + 1 }
            : process
        ),
      };
    });
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
    set((state) => {
      const maxZIndex = Math.max(
        ...state.processes.map((process) => process.zIndex)
      );
      return {
        processes: state.processes.map((process) =>
          process.id === id
            ? { ...process, isMinimized: false, zIndex: maxZIndex + 1 }
            : process
        ),
      };
    });
  },

  focusProcess: (id) => {
    set((state) => {
      const targetProcess = state.processes.find(
        (process) => process.id === id
      );

      const maxZIndex = Math.max(
        ...state.processes.map((process) => process.zIndex)
      );

      if (targetProcess.zIndex === maxZIndex) return state;

      return {
        processes: state.processes.map((process) => {
          if (process.id === id) {
            return { ...process, zIndex: maxZIndex + 1 };
          }
          return process;
        }),
      };
    });
  },
}));
