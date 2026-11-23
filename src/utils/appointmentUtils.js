const toSortKey = ({date , time}) => {
    const [year , month , day] = date.split("/").map(Number);
    const [hour , minute] = time.split(":").map(Number);

    return(((year * 100 + month)* 100 + day) * 100 + hour) * 100 + minute;
}

const oldestFirst = (a , b) => toSortKey(a) - toSortKey(b);
const newestFirst = (a , b) => toSortKey(b) - toSortKey(a);

export const sortAppointments = (appointments , activeTab) => {
    if (activeTab === "upcoming"){
        return [...appointments].sort(oldestFirst)
    }

    if (activeTab === "history"){
        return [...appointments].sort(newestFirst);
    }

    const upcoming  = appointments.filter(a => a.status === "confirmed").sort(oldestFirst);
    const rest = appointments.filter(a => a.status !== "confirmed").sort(newestFirst);

    return [...upcoming , ...rest]
}