import { createGlobalStyle } from 'styled-components'

export const GlobalAnimations = createGlobalStyle`

  .tracking-in-expand {
    animation: tracking-in-expand 0.7s cubic-bezier(0.215, 0.610, 0.355, 1.000) both;
  }
  @keyframes tracking-in-expand {
    0% {
      letter-spacing: -0.5em;
      opacity: 0;
    }
    40% {
      opacity: 0.6;
    }
    100% {
      opacity: 1;
    }
  }

  .slide-in-elliptic-top-fwd {
    animation: slide-in-elliptic-top-fwd 0.7s cubic-bezier(0.250, 0.460, 0.450, 0.940) both 0.7s;
  }
  @keyframes slide-in-elliptic-top-fwd {
    0% {
      transform: translateY(-600px) rotateX(-30deg) scale(0);
      transform-origin: 50% 100%;
      opacity: 0;
    }
    100% {
      transform: translateY(0) rotateX(0) scale(1);
      transform-origin: 50% 1400px;
      opacity: 1;
    }
  }

  .text-pop-up-top {
	  animation: text-pop-up-top 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
  }
  @keyframes text-pop-up-top {
    0% {
      transform: translateY(0);
      transform-origin: 50% 50%;
      text-shadow: none;
    }
    100% {
      transform: translateY(-30px);
      transform-origin: 50% 50%;
      text-shadow: 0 1px 0 #cccccc, 0 2px 0 #cccccc, 0 3px 0 #cccccc, 0 4px 0 #cccccc, 0 5px 0 #cccccc, 0 6px 0 #cccccc, 0 7px 0 #cccccc, 0 8px 0 #cccccc, 0 9px 0 #cccccc, 0 50px 30px rgba(0, 0, 0, 0.01);
    }
  }

  .fade-in {
	  animation: fade-in 1.2s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
  }
  @keyframes fade-in {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  .slide-in-blurred-top {
	  animation: slide-in-blurred-top 0.6s cubic-bezier(0.230, 1.000, 0.320, 1.000) both;
  }
  @keyframes slide-in-blurred-top {
    0% {
      transform: translateY(-1000px) scaleY(2.5) scaleX(0.2);
      transform-origin: 50% 0%;
      filter: blur(40px);
      opacity: 0;
    }
    100% {
      transform: translateY(0) scaleY(1) scaleX(1);
      transform-origin: 50% 50%;
      filter: blur(0);
      opacity: 1;
    }
  }
`