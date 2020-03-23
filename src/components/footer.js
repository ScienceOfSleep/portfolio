import React from "react";
import {css} from  "@emotion/core"

const Footer = () => (
    <footer
        css={css`
              height: 50px;
              background-color: var(--title-bg-color);
              color: var(--light-font);
            `}
    >
        <p
            css={css`
                  text-align: center;
                  padding-top: .5rem;
                  color: #ffffff;
                `}
        >
            {new Date().getFullYear()} by Josh Steele
        </p>
    </footer>
)

export default Footer