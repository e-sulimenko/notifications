// const timingFunction = 'cubic-bezier(0, 1.04, 0, 0.98)';

const animationTimingsOut = {
  duration: 750,
  fill: 'forwards',
};

const animationStepsOut = [
  { transform: 'translate3d(0, 0, 0)', opacity: 1 },
  { transform: 'translate3d(20px, 0, 0)', offset: 0.2 },
  { transform: 'translate3d(-1510px, 0, 0)', maxHeight: 0, offset: 0.6 },
  { transform: 'translate3d(-3000px, 0, 0)', opacity: 0, maxHeight: 0 },
];

export default (el) => el.animate(animationStepsOut, animationTimingsOut);
