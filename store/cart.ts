import { create } from 'zustand'

const cartStore = create((set) => ({
  list: [],
  total: 0,

  add: (item: any) => set((state: { list: any, total: number }) => ({ 
    list: [...state.list, item],
    total: state.total + (item.price * item.quantity ?? 1),
  })),


  remove: (index: number) => set((state: { list: any, total: number }) => ({
    // recalculate total
    total: state.total - (state.list[index].price * state.list[index].quantity ?? 1),
    list:  state.list.filter((_: any, i: number) => i !== index),
  })),

}))

  


export default cartStore