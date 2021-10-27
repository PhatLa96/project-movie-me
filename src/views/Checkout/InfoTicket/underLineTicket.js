
const underLineTicket = {
    position: "relative",
    '&:after': {
        content: "''",
        position: "absolute",
        bottom: "0",
        left: "50%",
        width: "100%",
        transform: "translateX(-50%)",
        borderBottom: "1px dashed #e9e9e9;",
    }
}

export { underLineTicket }