import { css, SimpleInterpolation } from "styled-components";

export const mobile = (props: SimpleInterpolation) => {
  return css`
    @media only screen and (max-width: 380px) {
      ${props}
    }
  `;
};

