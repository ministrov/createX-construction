const circle = document.querySelectorAll('.progress');

const progressAnimation = () => {
  let percentageProgress = Math.floor(scrollTop / (siteHeight - windowHeight) * 100);

  let radius = circle.getAttribute('r');
  let circleLength = 2 * Math.PI * radius;
  circle.setAttribute('stroke-dasharray', circleLength);
  circle.setAttribute('stroke-dashoffset', circleLength - circleLength * percentageProgress / 100);
};

progressAnimation();
