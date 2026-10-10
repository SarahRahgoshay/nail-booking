const success = () => ({
    isValid: true,
    error: null
})

const fail = (error) => ({
    isValid: false,
    error
})

const validateService = ({ service }) => {
    if (!service) {
        return fail("لطفا خدمت موردنظر را انتخاب کنید");
    }
    return success();
}

const validateDateTime = ({ dateTime }) => {
    if (!dateTime.date) {
        return fail("لطفا  تاریخ موردنظر خود را انتخاب کنید")
    }
    if (!dateTime.time) {
        return fail("لطفا ساعت موردنظر خود را انتخاب کنید")
    }
    return success();
}

const validatePayment = ({ payment }) => {
    if (payment.status !== 'success') {
        return fail("پرداخت شما موفقیت آمیز نبوده است ")
    }
    return success();
}

const validateConfirmation = ({ service, dateTime, payment }) => {
    if (!service || !dateTime || !payment) {
        return fail(" اطلاعات نوبت شما کامل نیست")
    }

    if (payment.status !== 'success') {
        return fail(" پرداخت نوبت شما موفقیت آمیز نبوده است ")
    }
    return success();
}

export const validateStep = (step, bookingState) => {
    switch (step) {
        case 'service':
            return validateService(bookingState);
        case 'dateTime':
            return validateDateTime(bookingState);
        case 'payment':
            return validatePayment(bookingState);
        case 'confirm':
            return validateConfirmation(bookingState);
        default:
            return fail('مرحله نامعتبر است.');
    }
}