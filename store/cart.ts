import { create } from 'zustand'

const cartStore = create((set) => ({
  list: [],
  total: 0,

  add: (item: any) => set((state: { list: any, total: number }) => ({ 
    list: [...state.list, item],
    total: state.total + item.price
  })),
}))

export default cartStore