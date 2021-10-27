import { createTheme } from '@mui/material/styles';

// Định nghĩa các tham số cố định 
export const DOMAIN = "http://movieapi.cyberlearn.vn";
export const TOKEN = "accessToken";
export const USER = "USER";
export const FAKE_AVATAR = "https://i.pravatar.cc/300?u=1";
export const GROUPID = "GP09";
export const COMMENTAPI = "https://6092b87185ff5100172137f4.mockapi.io/"

export const theme = createTheme({
    breakpoints: {
        values: {
            xs: 0,
            sm: 678,
            md: 736,
            lg: 768,
            xl: 992,
        },
    },
});