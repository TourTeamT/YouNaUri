// useProgressStore.js
import create from 'zustand';

type State = {
  partnerSelect: boolean;
  placeStep: boolean;
  placeSelect: boolean;
  planStep: boolean;
  planSelect: boolean;
  timeStep: boolean;
  timeSelect: boolean;
};

type Actions = {
  setPartnerSelect: (value: boolean) => void;
  setPlaceStep: (value: boolean) => void;
  setPlaceSelect: (value: boolean) => void;
  setPlanStep: (value: boolean) => void;
  setPlanSelect: (value: boolean) => void;
  setTimeStep: (value: boolean) => void;
  setTimeSelect: (value: boolean) => void;
};

const useProgressStore = create<State & Actions>((set) => ({
  partnerSelect: false,
  placeStep: false,
  placeSelect: false,
  planStep: false,
  planSelect: false,
  timeStep: false,
  timeSelect: false,

  // Setter functions for each value
  setPartnerSelect: (value) => set({ partnerSelect: value }),
  setPlaceStep: (value) => set({ placeStep: value }),
  setPlaceSelect: (value) => set({ placeSelect: value }),
  setPlanStep: (value) => set({ planStep: value }),
  setPlanSelect: (value) => set({ planSelect: value }),
  setTimeStep: (value) => set({ timeStep: value }),
  setTimeSelect: (value) => set({ timeSelect: value }),
}));

export default useProgressStore;
