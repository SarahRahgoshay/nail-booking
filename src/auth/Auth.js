import { mockUser } from "../mockData/mockData";

export const getCurrentUser = () => {
    if (!mockUser.isAuthenticated) {
        return null
    }
    return mockUser.user;
}

export const isAuthenticated = () => {
    return mockUser.isAuthenticated;
};