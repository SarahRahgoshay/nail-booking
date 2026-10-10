export const initialBookingState = {
    service: null,
    dateTime: {
        date: null,
        time: null,
    },

    payment: {
        status: "pending",
        error: null
    }
}

export const bookingReducer = (state, action) => {
    switch (action.type) {
        case "SET_SERVICE":
            const newService = action.payload;
            const serviceChanged = state.service?.id !== newService.id;

            if (!serviceChanged) return state;
            return {
                ...state,
                service: newService,
                dateTime: {
                    date: null,
                    time: null,
                },
                payment: {
                    status: "pending",
                    error: null
                }
            }

        case "SET_DATETIME":
            return {
                ...state,
                dateTime: {
                    date: action.payload,
                    time: null
                }
            }

        case "SET_TIME":
            return {
                ...state,
                dateTime: {
                    ...state.dateTime,
                    time: action.payload
                }
            }
        case "SET_PAYMENT_STATUS":
            return {
                ...state,
                payment: {
                    ...state.payment,
                    status: action.payload,
                    error: null
                }
            }
        case "SET_PAYMENT_ERROR":
            return {
                ...state,
                payment: {
                    ...state.payment,
                    status: "failed",
                    error: action.payload
                }
            }
        case "RESET_BOOKING":
            return initialBookingState;

        default:
            return state;
    }
}