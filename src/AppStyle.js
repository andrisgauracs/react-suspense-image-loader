import styled, { keyframes } from 'styled-components';

export const loaderAnimation = keyframes`
  0%,
  80%,
  100% {
    box-shadow: 0 2.5em 0 -1.3em;
  }
  40% {
    box-shadow: 0 2.5em 0 0;
  }
`;

export const logoSpin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const AppHeader = styled.header`
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`;

export const AppLogo = styled.img`
  animation: ${logoSpin} infinite 20s linear;
  height: 100px;
`;

export const Title = styled.h2`
  font-size:24px;
  margin-bottom:80px;
`;

export const Loader = styled.div`
  position:absolute;
  top:0;
  bottom:0;
  right:0;
  left:0;
  margin:auto;
  border-radius: 50%;
  width: 2.5em;
  height: 2.5em;
  animation-fill-mode: both;
  animation: ${loaderAnimation} 1.8s infinite ease-in-out;
  &:before,
  &:after {
    border-radius: 50%;
    width: 2.5em;
    height: 2.5em;
    animation-fill-mode: both;
    animation: ${loaderAnimation} 1.8s infinite ease-in-out;
  }
  color: #ffffff;
  font-size: 10px;
  margin: 80px auto;
  position: relative;
  text-indent: -9999em;
  -webkit-transform: translateZ(0);
  -ms-transform: translateZ(0);
  transform: translateZ(0);
  -webkit-animation-delay: -0.16s;
  animation-delay: -0.16s;
  &:before,
  &:after {
    content: '';
    position: absolute;
    top: 0;
  }
  &:before {
    left: -3.5em;
    -webkit-animation-delay: -0.32s;
    animation-delay: -0.32s;
  }
  &:after {
    left: 3.5em;
  }
`;
