import create from "zustand";

interface progressDataInfo {
  data: String[];
  setData: (select: String[]) => void;
}

export const useStore = create<progressDataInfo>((set) => ({
  data: [],
  setData: (select) => {
    set((state) => ({ ...state, data: select }));
  },
}));