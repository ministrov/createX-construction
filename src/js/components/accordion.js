import GraphAccordion from '../vendor/graph-accordion';

if (document.querySelector('.we-offer')) {
  const accordion1 = new GraphAccordion('.accordion-1', {
    speed: 400,
  });

  const accordion2 = new GraphAccordion('.accordion-2', {
    speed: 400
  });
}
