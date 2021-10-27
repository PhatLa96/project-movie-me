import { createTheme } from '@mui/material/styles';

// Định nghĩa các tham số cố định 
export const DOMAIN = "https://movienew.cybersoft.edu.vn/";
export const TOKEN = "accessToken";
export const USER = "USER";
export const FAKE_AVATAR = "https://i.pravatar.cc/300?u=1";
export const GROUPID = "GP09";
export const COMMENTAPI = "https://6092b87185ff5100172137f4.mockapi.io/"
export const TOKEN_BY_CLASS = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCAwOSIsIkhldEhhblN0cmluZyI6IjI0LzA1LzIwMjIiLCJIZXRIYW5UaW1lIjoiMTY1MzM1MDQwMDAwMCIsIm5iZiI6MTYxNjM0NjAwMCwiZXhwIjoxNjUzNDk4MDAwfQ.oeU8_AGwNUr93k3mqzWRv2iya3TnZarCQqdHKvpXVmM"

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