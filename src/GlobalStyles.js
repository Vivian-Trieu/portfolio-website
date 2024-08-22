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
            "a, button": {
                cursor: `url(${hoverCursor}), pointer`,
            }
        }}
    />
);

export default GlobalStyles;