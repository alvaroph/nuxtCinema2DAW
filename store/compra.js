import { defineStore } from 'pinia'

export const useCompraStore = defineStore('compra', {
    state: () => ({ sesion: {}, ocupacion: [] , seleccion:[] }),
    
  })