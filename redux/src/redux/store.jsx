import { configureStore } from '@reduxjs/toolkit'
import counterSliceReducer from './counterSlice';
// ProductSlice
// BlogSlice
import userListSliceReducer from './userListSlice';
import postListSliceReducer from './postListSlice'

export const store = configureStore({  // Tüm başvurular store'a yapılıyor. Bu sebepten "counter" key ile counterReducer'a erişebiliyoruz.
    reducer: {
        counter: counterSliceReducer,  // App.jsx içerisinden store'a "counter" key ile ulaştık ve bu key counterReducer'ı işaret ediyor.
        // product: productSlice,  counter componentini ilgilendiren işlemler için counterSlice kullanıldığı gibi product, blog vb. componentleri ilgilendiren işlemler için başka reducer'lara da erişebiliriz. 
        // blog: blogSlice
        userList: userListSliceReducer,
        postList: postListSliceReducer
    },
})