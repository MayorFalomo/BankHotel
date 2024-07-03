import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface RoomState {
    roomType?: string,
    numberOfRooms?: string,
    roomService?: string,
    roomDescription?: string,
    roomNumber?: string
}

interface userState {
    id?: string;
    name?: string;
    email?: string;
    photo?: string;
    password?: string,
    checkIn?: string;
    checkOut?: string;
    amount?: string;
    paymentStatus?: string;
    paymentMethod?: string;
    roomDetails?: RoomState[]
}



const initialState: userState = {
    id: "",
    name: "",
    email: "",
    photo: "",
    password: "",
    checkIn: "",
    checkOut: "",
    amount: "",
    paymentStatus: "",
    paymentMethod: "",
    roomDetails: [
        {
            roomType: "",
            numberOfRooms: "",
            roomService: "",
            roomDescription: "",
            roomNumber: "",
        },
    ]
}

export const userSlice = createSlice({
    name: "user",
    initialState: {
        value: initialState,
    },
    reducers: {
        getUserId: (state, action: PayloadAction<string>) => {
            state.value.id = action.payload;
        },
        getName: (state, action:PayloadAction<string>) => {
           state.value.name = action.payload
        },
        getEmail: (state, action: PayloadAction<string>) => {
            state.value.email = action.payload
        },
        getPassword: (state, action: PayloadAction<string>) => {
            state.value.password = action.payload
        },
        getPhoto: (state, action: PayloadAction<string>) => {
            state.value.photo = action.payload
        },
        getCheckIn: (state, action: PayloadAction<string>) => { 
            state.value.checkIn = action.payload
        },
        getCheckOut: (state, action: PayloadAction<string>) => { 
            state.value.checkOut = action.payload
        },
        getAmount: (state, action: PayloadAction<string>) => { 
            state.value.amount = action.payload
        },
        getPaymentStatus: (state, action: PayloadAction<string>) => { 
            state.value.paymentStatus = action.payload
        },
        getPaymentMethod: (state, action: PayloadAction<string>) => { 
            state.value.paymentMethod = action.payload
        },
        setRoomDetails: (state, action: PayloadAction<RoomState>) => { 
            state.value.roomDetails = [action.payload]
        }
    },
});

export const {getUserId, getName, getEmail, getPassword, getPhoto, getCheckIn, getCheckOut, getAmount, getPaymentStatus, getPaymentMethod, setRoomDetails } = userSlice.actions;

export default userSlice.reducer;