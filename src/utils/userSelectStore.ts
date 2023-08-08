import { create } from 'zustand';

type State = {
  partner: any[],
  startPlace: any,
  endPlace: any,
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
  setMapX: (value: string) => void;
  setMapY: (value: string) => void;
  setTime: (data: any) => void;
};

const useUserSelect = create<State & Actions>((set) => ({
  partner: [],
  startPlace: {
    latitude: '37.566535',
    longitude: '126.9779692',
    address: '서울특별시',
    category_name: "관광코스",
    title: '출발점',
  },
  endPlace: {
    latitude: '33.2540646255023',
    longitude: '126.559563464566911',
    address: '제주도 서귀포시',
    category_name: "관광코스",
    title: '도착점',
  },
  startDate: null,
  endDate: null,
  time: [{
    "hour": 0,
    "min": 480
  },
  {
    "hour": 0,
    "min": 480
  },{
    "hour": 0,
    "min": 480
  }],
  mapX: '',
  mapY: '',
  setPartner: (value) => set({ partner: value }),
  setStartPlace: (value) => set({ startPlace: value }),
  setEndPlace: (value) => set({ endPlace: value }),
  setStartDate: (value) => set({ startDate: value }),
  setEndDate: (value) => set({ endDate: value }),
  setMapX: (value) => set({ mapX: value }),
  setMapY: (value) => set({ mapY: value }),
  setTime: (data: any) => {
    set((state: any) => ({
      time: [...state.selectedPlace, data],
    }));
  },
}));

export default useUserSelect;
