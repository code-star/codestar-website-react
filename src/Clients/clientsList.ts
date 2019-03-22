export const clientsList = [
  {
    name: 'ING',
    logo: `/images/clients/ing.png`,
    color: '#ee6f33',
  },
  {
    name: 'Port of Rotterdam',
    logo: `/images/clients/port_of_rotterdam.svg`,
    featured: true,
    background: `/images/clients/harbor.jpg`,
  },
  {
    name: 'SKG',
    logo: `/images/clients/skg.svg`,
    color: '#9D1535',
  },
  {
    name: 'Rabobank',
    logo: `/images/clients/rabobank-2.svg`,
    color: '#001090',
  },
  {
    name: 'Gracenote',
    logo: `/images/clients/gracenote.svg`,
    featured: true,
    background: `/images/clients/winter_olympics.jpg`,
  },
  {
    name: '42 Education',
    logo: `/images/clients/42_education.png`,
    color: '#222',
  },
];

export const clientsListSmallOrder = [0, 2, 1, 4, 3, 5].map(
  i => clientsList[i]
);
