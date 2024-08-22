import { Global } from "@emotion/react";
import cursor from "./assets/normal.cur";
import hoverCursor from "./assets/hover.cur";

const GlobalStyles = () => (
    <Global
        styles={`
            body {
                cursor: url(${cursor}), auto;
                overflow-x: hidden;
            }
            a, button {
                cursor: url(${hoverCursor}), pointer;
            }
        `}
    />
);

export default GlobalStyles;