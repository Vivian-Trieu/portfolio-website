import { Global } from "@emotion/react";
import cursor from "./assets/normal.cur";
import hoverCursor from "./assets/hover.cur";

const GlobalStyles = () => (
    <Global
        styles={{
            "html, body": {
                overflowX: "hidden",
                touchAction: "pan-x",
            },
            "@viewport": {
                width: "device-width",
                initialScale: 1,
                maximumScale: 1,
                userScalable: "no"
            },
            "a, button": {
                cursor: `url(${hoverCursor}), pointer`,
            }
        }}
    />
);

export default GlobalStyles;