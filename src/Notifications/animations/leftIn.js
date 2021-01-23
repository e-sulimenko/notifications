const timingFunction = 'cubic-bezier(0.215, 0.610, 0.355, 1)';

const animationTimings = {
  duration: 750,
  fill: 'forwards',
};

const animationStepsIn = [
  {
    transform: 'translate3d(-3000px, 0, 0)',
    easing: timingFunction,
  },
  {
    transform: 'translate3d(25px, 0, 0)',
    opacity: 1,
    offset: 0.6,
    easing: timingFunction,
  },
  {
    transform: 'translate3d(-10px, 0, 0)',
    offset: 0.75,
    easing: timingFunction,
  },
  {
    transform: 'translate3d(5px, 0, 0)',
    offset: 0.9,
    easing: timingFunction,
  },
  {
    transform: 'none',
    opacity: 1,
  },
];

export default (el) => el.animate(animationStepsIn, animationTimings);
