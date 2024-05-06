import { createSlice } from '@reduxjs/toolkit'

const initialState = {  // useState(0) olarak tanımlanmış gibi düşünebiliriz.
    value: 0,
}

export const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {  // fonksiyonlar reducers içerisinde tutulur.
        increment: (state => {state.value = state.value + 1}),  // const [increment, setIncrement] = useState(0)
        decrement: (state => {state.value = state.value - 1})   // const [decrement, setDecrement] = useState(0)
    }   // Buradaki state, initialState içerisindeki value'yu gösterir.                                                        // const
})

export const { increment, decrement } = counterSlice.actions  // Bu fonksiyonlara dışarıdan erişebilmek için
export default counterSlice.reducer