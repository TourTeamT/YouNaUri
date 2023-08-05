import { create } from 'zustand';

type State = {
  partner: any[],
  startPlace: string,
  endPlace: string,
  startDate: Date | string,
  endDate: Date | string,
  time: any[]
};

type Actions = {
  setPartner: (value: any[]) => void;
  setStartPlace: (value: string) => void;
  setEndPlace: (value: string) => void; 
  setStartDate: (value: Date | string) => void;
  setEndDate: (value: Date | string) => void;
  setTime: (value: any[]) => void;
};

const useUserSelect = create<State & Actions>((set) => ({
  partner: [],
  startPlace: '',
  endPlace: '',
  startDate: '',
  endDate: '',
  time: [],
  setPartner: (value) => set({ partner: value }),
  setStartPlace: (value) => set({ startPlace: value }),
  setEndPlace: (value) => set({ endPlace: value }),
  setStartDate: (value) => set({ startDate: value }),
  setEndDate: (value) => set({ endDate: value }),
  setTime: (value) => set({ time: value }),
}));

export default useUserSelect;
