import { create } from "zustand";
interface BearState {
    volume: number;
    setVolume: (movementX: number) => void;
}
export const useBearStore = create<BearState>()((set) => ({
    volume: 30,
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
