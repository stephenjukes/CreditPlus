const purchaseOptions = [
  {
    imageSrc: 'images/pcp.png',
    name: 'Personal Contract Purchase',
    abbreviatedName: 'PCP',
    summary: 'Lower monthly payments. Optional purchase fee at the end. No ownership until the final purchase payment.',
    bullets: ['1st', '2nd', '3rd', '4th']
  },
  {
    imageSrc: 'images/hp.png',
    name: 'Hire Purchase',
    abbreviatedName: 'HP',
    summary: 'Fixed monthly payments. Fixed interest rate, and all interest spread evenly across the finance period. No annual mileage limits.',
    bullets: ['1st', '2nd', '3rd', '4th']
  },
  {
    imageSrc: 'images/lp.png',
    name: 'Lease Purchase',
    abbreviatedName: 'LP',
    summary: 'Available for all credit profiles. Fixed monthly payments. Can defer up to 31% of payment to the end of the agreement.',
    bullets: ['1st', '2nd', '3rd', '4th']
  }
];

const template = document.getElementById('purchase-option-template');
const purchaseOptionsSection = document.getElementById('purchase-options');

purchaseOptions.forEach(option => {
  const templateClone = template.content.cloneNode(true);
  templateClone.querySelector('h3').innerHTML = option.name;
  templateClone.querySelector('p').innerHTML = option.summary;
  templateClone.querySelector('img').src = option.imageSrc;

  const bulletsSection = templateClone.querySelector('ul');

  option.bullets.forEach(bullet => {
    const item = document.createElement("LI");
    item.innerHTML = `${bullet} unique point about ${option.abbreviatedName} here`;

    bulletsSection.appendChild(item);
  });
  
  purchaseOptionsSection.appendChild(templateClone);
});