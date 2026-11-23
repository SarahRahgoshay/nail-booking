import { toGregorian } from "jalaali-js";

export const toFaDigits = (value) => {
    return String(value).replace(/\d/g, (digit) => "۰۱۲۳۴۵۶۷۸۹"[digit])
}

export const formatPrice = (value) =>
    value != null ? `${value.toLocaleString("fa-IR")} تومان` : "-";

const MONTHS = [
    "فروردین", "اردیبهشت", "خرداد", "تیر", "مرداد", "شهریور",
    "مهر", "آبان", "آذر", "دی", "بهمن", "اسفند",
];

export const getDateParts = (date) => {
    const [year , month , day] = date.split("/").map(Number);
    return {
        day: toFaDigits(day),
        monthName: MONTHS[month - 1],
        year: toFaDigits(year)
    }
}

export const getDateUntil = (date) => {
    const [jy , jm , jd] = date.split("/").map(Number);
    const { gy, gm, gd } = toGregorian(jy , jm , jd);

    const today = new Date();
    
    return Math.round(
        (Date.UTC(gy, gm - 1, gd) -
            Date.UTC(today.getFullYear(), today.getMonth(), today.getDate())
        ) / 86400000
    );
}