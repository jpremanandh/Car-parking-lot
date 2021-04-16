 import { createSlice } from '@reduxjs/toolkit'

 export const bookingSlice = createSlice({
   name: 'booking',
   initialState: {
       booking:[
         {
             name: 'praveen',
             plate: 333,
             mobilenum : 22222,
            //  Date : new Date()
         }
       ],
     value:0  },
 
   reducers: {
     add: (state,action) => {
     //   console.log(state.value);
     //   console.log(state);
       console.log(action.payload);
       state.booking = [...state.booking,action.payload];
     //   state.employees = [...employees,{
     //     employee_name : "praveen",
     //     id: 4,
     //     employee_Salary : 20000
     //   }, ]
       console.log('test');
     },
   }
 })
 
 export const {add} = bookingSlice.actions
 export const selectBooking = state => state.booking.booking;
 export default bookingSlice.reducer