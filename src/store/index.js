import { create } from "zustand"

const useStore = create((set) => ({
  scroll: true,
  setScroll: (scroll) => set({ scroll }),
  direction: "vertical",
  setDirection: (direction) => set({ direction }),
  isFlip: false,
  setIsFlip: (isFlip) => set({ isFlip }),
  width: window.innerWidth,
  setWidth: (width) => set({ width }),
  isOpen: false,
  toggle: (isOpen) => set({ isOpen })
}))

export default useStore;