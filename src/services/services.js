export class MyArrays {
  allServices = [
    {
      id: '1',
      name: 'fotografavimas',
      shortDesc: 'labas',
      provider: 'Saulius',
      price: 10,
      currency: 'EUR',
      hourly: true,
      orderCount: 10,
    },
    {
      id: '2',
      name: 'marketingo akcija',
      shortDesc: 'jusu reklama',
      provider: 'Petras',
      price: 100,
      currency: 'EUR',
      hourly: false,
      orderCount: 9,
    },
    {
      id: '3',
      name: 'filmavimas',
      shortDesc: 'viena karta kaime',
      provider: 'Antanas',
      price: 15,
      currency: 'EUR',
      hourly: true,
      orderCount: 15,
    },
    {
      id: '4',
      name: 'Vestuves',
      shortDesc: 'Tavo svente',
      provider: 'Stasys',
      price: 150,
      currency: 'EUR',
      hourly: false,
      orderCount: 0,
    },
  ];
  favoriteServicesList = [
    {
      id: '1',
      name: 'fotografavimas',
      shortDesc: 'labas',
      provider: 'Saulius',
      price: 10,
      currency: 'EUR',
      hourly: true,
      date: '2022-10-15',
    },
    {
      id: '2',
      name: 'marketingo akcija',
      shortDesc: 'jusu reklama',
      provider: 'Petras',
      price: 100,
      currency: 'EUR',
      hourly: false,
      date: '2021-10-25',
    },
    {
      id: '3',
      name: 'filmavimas',
      shortDesc: 'viena karta kaime',
      provider: 'Antanas',
      price: 15,
      currency: 'EUR',
      hourly: true,
      date: '2022-11-15',
    },
  ];

  orderedServicesList = [
    {
      id: '1',
      name: 'fotografavimas',
      shortDesc: 'labas',
      provider: 'Saulius',
      price: 10,
      currency: 'EUR',
      hourly: true,
      date: '2022-10-15',
    },
    {
      id: '2',
      name: 'marketingo akcija',
      shortDesc: 'jusu reklama',
      provider: 'Petras',
      price: 100,
      currency: 'EUR',
      hourly: false,
      date: '2021-10-25',
    },
    {
      id: '3',
      name: 'filmavimas',
      shortDesc: 'viena karta kaime',
      provider: 'Antanas',
      price: 15,
      currency: 'EUR',
      hourly: true,
      date: '2022-11-15',
    },
  ];

  myServiceList = [
    {
      id: '2',
      name: 'marketingo akcija',
      shortDesc: 'jusu reklama',
      provider: 'Petras',
      price: 100,
      currency: 'EUR',
      hourly: false,
      date: '2021-10-25',
    },
  ];
  //   sortServicesByMostOrders(array) {
  //     array.sort((a, b) => {
  //       return b.orderCount - a.orderCount;
  //     });
  //   }
}
