import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const GlobalStyle = createGlobalStyle`
${reset}
*{
    box-sizing:border-box;
    margin:0;
    padding:0;
    font-family:'Arial', sans-serif;
}
`;
