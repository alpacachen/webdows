import { create } from "zustand";
interface BearState {
    volume: number;
    date: Date;
    updateDate: () => void;
    setVolumeAbsolute: (value: number) => void;
    setVolume: (movementX: number) => void;
}
export const useBearStore = create<BearState>()((set) => ({
    date: new Date(),
    updateDate: () => {
        set({ date: new Date() });
    },
    volume: 30,
    setVolumeAbsolute: (value) => {
        set({ volume: value });
    },
    setVolume: (movementX) => {
        set((state) => {
            let newValue = state.volume + movementX;
            if (newValue < 0) {
                newValue = 0;
            }
            if (newValue > 100) {
                newValue = 100;
            }
            return {
                volume: newValue,
            };
        });
    },
}));


setInterval(() => {
    useBearStore.getState().updateDate()
}, 1000 * 10)