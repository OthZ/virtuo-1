'use strict';

//list of cars
//useful for ALL 5 steps
//could be an array of objects that you fetched from api or database
const cars = [{
  'id': 'a9c1b91b-5e3d-4cec-a3cb-ef7eebb4892e',
  'name': 'fiat-500-x',
  'pricePerDay': 36,
  'pricePerKm': 0.10
}, {
  'id': '697a943f-89f5-4a81-914d-ecefaa7784ed',
  'name': 'mercedes-class-a',
  'pricePerDay': 44,
  'pricePerKm': 0.30
}, {
  'id': '4afcc3a2-bbf4-44e8-b739-0179a6cd8b7d',
  'name': 'bmw-x1',
  'pricePerDay': 52,
  'pricePerKm': 0.45
}];

//list of current rentals
//useful for ALL steps
//the time is hour
//The `price` is updated from step 1 and 2
//The `commission` is updated from step 3
//The `options` is useful for step 4
const rentals = [{
  'id': 'a9c1b91b-5e3d-4cec-a3cb-ef7eebb4892e',
  'driver': {
    'firstName': 'Roman',
    'lastName': 'Frayssinet'
  },
  'carId': 'a9c1b91b-5e3d-4cec-a3cb-ef7eebb4892e',
  'pickupDate': '2020-01-02',
  'returnDate': '2020-01-02',
  'distance': 100,
  'options': {
    'deductibleReduction': false
  },
  'price': 0,
  'commission': {
    'insurance': 0,
    'treasury': 0,
    'virtuo': 0
  }
}, {
  'id': 'bc16add4-9b1d-416c-b6e8-2d5103cade80',
  'driver': {
    'firstName': 'Redouane',
    'lastName': 'Bougheraba'
  },
  'carId': '697a943f-89f5-4a81-914d-ecefaa7784ed',
  'pickupDate': '2020-01-05',
  'returnDate': '2020-01-09',
  'distance': 300,
  'options': {
    'deductibleReduction': true
  },
  'price': 0,
  'commission': {
    'insurance': 0,
    'treasury': 0,
    'virtuo': 0
  }
}, {
  'id': '8c1789c0-8e6a-48e3-8ee5-a6d4da682f2a',
  'driver': {
    'firstName': 'Fadily',
    'lastName': 'Camara'
  },
  'carId': '4afcc3a2-bbf4-44e8-b739-0179a6cd8b7d',
  'pickupDate': '2019-12-01',
  'returnDate': '2019-12-15',
  'distance': 100,
  'options': {
    'deductibleReduction': true
  },
  'price': 0,
  'commission': {
    'insurance': 0,
    'treasury': 0,
    'virtuo': 0
  }
}];

//list of actors for payment
//useful from step 5
const actors = [{
  'rentalId': '893a04a3-e447-41fe-beec-9a6bfff6fdb4',
  'payment': [{
    'who': 'driver',
    'type': 'debit',
    'amount': 0
  }, {
    'who': 'partner',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'insurance',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'treasury',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'virtuo',
    'type': 'credit',
    'amount': 0
  }]
}, {
  'rentalId': 'bc16add4-9b1d-416c-b6e8-2d5103cade80',
  'payment': [{
    'who': 'driver',
    'type': 'debit',
    'amount': 0
  }, {
    'who': 'partner',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'insurance',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'treasury',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'virtuo',
    'type': 'credit',
    'amount': 0
  }]
}, {
  'rentalId': '8c1789c0-8e6a-48e3-8ee5-a6d4da682f2a',
  'payment': [{
    'who': 'driver',
    'type': 'debit',
    'amount': 0
  }, {
    'who': 'partner',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'insurance',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'treasury',
    'type': 'credit',
    'amount': 0
  }, {
    'who': 'virtuo',
    'type': 'credit',
    'amount': 0
  }]
}];

console.log(cars);
console.log(rentals);
console.log(actors);


//Part 1
var rentdays = [];
for(let index=0;index<3;index++)
{
  rentdays[index]=(1+(new Date(rentals[index].returnDate).getDate()-new Date(rentals[index].pickupDate).getDate()))
}
var timecomp = [];
for(let index=0;index<3;index++)
{
  timecomp[index]=rentdays[index]*(cars[index].pricePerDay);
}
var dist = [];
for(let index=0;index<3;index++)
{
  dist[index]=(rentals[index].distance)*(cars[index].pricePerKm);
}
var rentPrice=[]
for(let index=0;index<3;index++)
{
  rentPrice[index]=timecomp[index]+dist[index];
}
console.log(rentPrice);

//Part 2
var rentPrice2 =[];
for(let index=0;index<3;index++)
{
  if(rentdays[index]<=1)
  {
    rentPrice2[index]=rentPrice[index];
  }
  else if(rentdays[index]>1 && rentdays[index]<=4)
  {
    rentPrice2[index]=rentPrice[index]*0.9;
  }
  else if(rentdays[index]>4 && rentdays[index]<10)
  {
    rentPrice2[index]=rentPrice[index]*0.7;
  }
  else if(rentdays[index]>10)
  {
    rentPrice2[index]=rentPrice[index]*0.5;
  }
}
console.log(rentPrice2);

//Part 3
var Commissiontab=[]
for(let index=0;index<3;index++)
{
  Commissiontab[index]=rentPrice2[index]*0.3;
}
var Insurancetab=[]
for(let index=0;index<3;index++)
{
  Insurancetab[index]=Commissiontab[index]/2;
}
var Treasurytab=[]
for(let index=0;index<3;index++)
{
  Treasurytab[index]=rentdays[index];
}
var Virtuotab=[]
for(let index=0;index<3;index++)
{
  Virtuotab[index]=Commissiontab[index] - Insurancetab[index] - Treasurytab[index];
}
for(let index=0;index<3;index++)
{
  rentals[index].commission.insurance=Insurancetab[index];
  rentals[index].commission.treasury=Treasurytab[index];
  rentals[index].commission.virtuo=Virtuotab[index];
}
for(let index=0;index<3;index++)
{
  console.log(rentals[index].commission);
}

//Part 4
for(let index=0;index<3;index++)
{
  if(rentals[index].options.deductibleReduction)
  {
    rentals[index].price= rentPrice2[index]+ 4*rentdays[index];
  }
  else
  {
    rentals[index].price= rentPrice2[index]
  }
}
for(let index=0;index<3;index++)
{
  console.log(rentals[index].price);
}

//Part 5
for(let index=0;index<3;index++)
{
  if(actors[index].who="driver")
  {
    actors[index].payment.amount=rentals[index].price;
  }
  else if(actors[index].who="partner")
  {
    actors[index].payment.amount=rentPrice2[index]-Commissiontab[index];
  }
  else if(actors[index].who="insurance")
  {
    actors[index].payment.amount=Insurancetab[index];
  }
  else if(actors[index].who="treasury")
  {
    actors[index].payment.amount=Treasurytab[index];
  }
  else if(actors[index].who="virtuo")
  {
    actors[index].payment.amount=Virtuotab[index];
  }
}
for(let index=0;index<3;index++)
{
  console.log(actors[index].amount);
}

