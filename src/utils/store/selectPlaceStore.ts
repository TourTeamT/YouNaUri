import { create } from 'zustand';

interface State {
  selectedPlace: any[]
}

interface Action {
  setAddSelectedPlace: (data: any) => void;
  setRemoveSelectedPlace: (id: number) => void;
}

const useSelectedPlace = create<State & Action>((set) => ({
  selectedPlace: [],
  setAddSelectedPlace: (data: any) => {
    set((state: any) => ({
      selectedPlace: [...state.selectedPlace, data],
    }));
  },  
  setRemoveSelectedPlace: (index: any) => {
    set((state: any) => ({
      selectedPlace: state.selectedPlace.filter((_: any, i: any) => i !== index),
    }));
  },
}));

export default useSelectedPlace;
