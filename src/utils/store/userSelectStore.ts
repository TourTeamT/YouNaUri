import { create } from 'zustand';

type State = {
  partner: any[],
  startPlace: string,
  endPlace: string,
  startDate: Date | null,
  endDate: Date | null,
  mapX: any
  mapY: any
  time: any[]
};

type Actions = {
  setPartner: (value: any[]) => void;
  setStartPlace: (value: string) => void;
  setEndPlace: (value: string) => void; 
  setStartDate: (value: Date | null) => void;
  setEndDate: (value: Date | null) => void;
  setTime: (value: any[]) => void;
  setMapX: (value: string) => void;
  setMapY: (value: string) => void;
};

const useUserSelect = create<State & Actions>((set) => ({
  partner: [],
  startPlace: '',
  endPlace: '',
  startDate: null,
  endDate: null,
  time: [],
  mapX: '',
  mapY: '',
  setPartner: (value) => set({ partner: value }),
  setStartPlace: (value) => set({ startPlace: value }),
  setEndPlace: (value) => set({ endPlace: value }),
  setStartDate: (value) => set({ startDate: value }),
  setEndDate: (value) => set({ endDate: value }),
  setTime: (value) => set({ time: value }),
  setMapX: (value) => set({ mapX: value }),
  setMapY: (value) => set({ mapY: value }),
}));

export default useUserSelect;
