import { Container } from "@material-ui/core";
import styled from "styled-components";

export const Wrapper = styled(Container)`
  width: 100%;
  height: wrap-content;
  display: block;
  text-align: center;
  padding-left: 0;
  padding-right: 0;

  div.image-container {
    width: 9.5rem;
    height: 9.5rem;
    display: inline-flex;
    line-height: normal;
    margin-top: 4rem;
    position: relative;
    
    .MuiBox-root {
      width: 100%;
      height: 100%;
      align-items: center;
      background-color: white;
      box-shadow: rgba(51, 255, 0, 0.25) 0 0.8rem 5rem;
      border-radius: 1.8rem;
      display: flex;
      justify-content: center;
      z-index: 1;

      img {
        width: 7.8rem;
        width: 7.8rem;
      }
    }

    .ripple {
      animation-delay: -1500ms;
    }

    .ripple:nth-of-type(1) {
      animation-delay: -1250ms;
    }

    .ripple:nth-of-type(2) {
      ${'' /* animation-delay: -2000ms; */}
      animation-delay: -1000ms;
    }  
  }
`;

export const RippleAnimView = styled.div`
  width: 100%;
  height: 100%;
  animation: ripple 2s linear infinite;
  background-color: transparent;
  border: 0.1rem solid #33FF00;
  border-radius: 1.8rem;
  position: absolute;
  z-index: 0;

  @keyframes ripple {
      0% {
        transform: scale(0);
        opacity: 1;
      }

      75% {
        transform: scale(1);
        opacity: 1;
      }

      100% {
        transform: scale(1.7);
        opacity: 0;
      }
    }  
`;