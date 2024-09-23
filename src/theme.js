import { extendTheme } from "@chakra-ui/react";
import cursor from "./assets/normal.cur";
import hoverCursor from "./assets/hover.cur";

const fonts = {
    heading: "Poppins, sans-serif",
    body: "Poppins, sans-serif",
};

const theme = extendTheme({
    fonts,
    styles: {
        global: {
            body: {
                cursor: `url(${cursor}), auto`, // Custom cursor for the body
            },
            a: {
                cursor: `url(${hoverCursor}), pointer`, // Custom cursor for links
            },
            button: {
                cursor: `url(${hoverCursor}), pointer`, // Custom cursor for buttons
            },
            "::selection": {
                backgroundColor: "#a881b4",
                color: "white",
            },
        }
    }
});

export default theme;