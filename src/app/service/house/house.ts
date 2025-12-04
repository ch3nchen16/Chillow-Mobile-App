import { Injectable } from '@angular/core'; //decorator 

@Injectable({
  providedIn: 'root',
})
export class House {
  //holds the data for the houses

  //array of houses containing multiple objects
  private houses = [
    {
      //id object
    id: 1, 
      content: [{ url: 'assets/house1.png', type: 'image' },
        { url: 'assets/house1layout.jpg', type: 'image' },
        { url: 'assets/house1hallway.jpg', type: 'image' },
        { url: 'assets/house1livingroom.jpg', type: 'image' },
        { url: 'assets/house1fireplace.jpg', type: 'image' },
        { url: 'assets/house1dining.jpg', type: 'image' },
        { url: 'assets/house1bedroom1.jpg', type: 'image' },
        { url: 'assets/house1bedroom2.jpg', type: 'image' },
        { url: 'assets/house1 kitchen.jpg', type: 'image' },
        { url: 'assets/house1bathroom.jpg', type: 'image' }
      ],

      //decription object
      description: { 
        price: 425000,
        beds: 2, 
        bathrooms: 1, 
        area: 83,

        //interior features array
        interior: [
          "Heating: Natural Gas",
          "Cooling: Wall Unit(s), Gas",
          "Basement: Finished",
          "Appliances: Dishwasher, Microwave, Refrigerator, Washer/Dryer, Gas Oven"
        ],

        //property features array
        property: [
          "Parking: Garage, on Street",
          "South-facing garden",
        ],

        //transport facilities array
        transport: [
          "5 min walk to bus stop",
          "Close to M2 motorway"
        ],

        //what's special? bio
        special: 
          "Experience a remarkable community of homes that blend timeless charm with contemporary style. Spanning up to four stories, each residence is designed with care to embody the vibrancy of city life while providing a peaceful sanctuary to return to."

       },

       //address object
      address: 'Cloghertown, Clonavy, Garristown, Co. Meath, A42 VY18'
    },
    {
      id: 2,
      content: [{ url: 'assets/house2.png', type: 'image' },
        { url: 'assets/house1layout.jpg', type: 'image' },
        { url: 'assets/house1hallway.jpg', type: 'image' },
        { url: 'assets/house1livingroom.jpg', type: 'image' },
        { url: 'assets/house1fireplace.jpg', type: 'image' },
        { url: 'assets/house1dining.jpg', type: 'image' },
        { url: 'assets/house1bedroom1.jpg', type: 'image' },
        { url: 'assets/house1bedroom2.jpg', type: 'image' },
        { url: 'assets/house1 kitchen.jpg', type: 'image' },
        { url: 'assets/house1bathroom.jpg', type: 'image' }
      ],
      description: { price: 525000, 
        beds: 3, 
        bathrooms: 3, 
        area: 87, 
        interior: [
          "Heating: Natural Gas",
          "Cooling: Wall Unit(s), Gas",
          "Basement: Finished",
          "Appliances: Dishwasher, Microwave, Refrigerator, Washer/Dryer, Gas Oven"
        ],
        property: [
          "Parking: Garage, on Street",
          "South-facing garden",
        ],
        transport: [
          "5 min walk to bus stop",
          "Close to M2 motorway"
        ],
        special: [
          "Experience a remarkable community of homes that blend timeless charm with contemporary style. Spanning up to four stories, each residence is designed with care to embody the vibrancy of city life while providing a peaceful sanctuary to return to."
        ]
      },
      address: 'Emsworth, Malahide Road, Kinsealy, County Dublin, D17 EF98'
    },
    {
      id: 3,
      content: [{ url: 'assets/house3.png', type: 'image' },
        { url: 'assets/house1layout.jpg', type: 'image' },
        { url: 'assets/house1hallway.jpg', type: 'image' },
        { url: 'assets/house1livingroom.jpg', type: 'image' },
        { url: 'assets/house1fireplace.jpg', type: 'image' },
        { url: 'assets/house1dining.jpg', type: 'image' },
        { url: 'assets/house1bedroom1.jpg', type: 'image' },
        { url: 'assets/house1bedroom2.jpg', type: 'image' },
        { url: 'assets/house1 kitchen.jpg', type: 'image' },
        { url: 'assets/house1bathroom.jpg', type: 'image' }
      ],
      description: { 
        price: 9250000, 
        beds: 8, 
        bathrooms: 8, 
        area: 661,
        interior: [
          "Heating: Natural Gas",
          "Cooling: Wall Unit(s), Gas",
          "Basement: Finished",
          "Appliances: Dishwasher, Microwave, Refrigerator, Washer/Dryer, Gas Oven"
        ],
        property: [
          "Parking: Garage, on Street",
          "South-facing garden",
        ],
        transport: [
          "5 min walk to bus stop",
          "Close to M2 motorway"
        ],
        special: [
          "Experience a remarkable community of homes that blend timeless charm with contemporary style. Spanning up to four stories, each residence is designed with care to embody the vibrancy of city life while providing a peaceful sanctuary to return to."
        ]
       },
      address: 'Emsworth, Malahide Road, Kinsealy, County Dublin, D17 EF98'
    },
    {
      id: 4,
      content: [{ url: 'assets/house4.png', type: 'image' },
        { url: 'assets/house1layout.jpg', type: 'image' },
        { url: 'assets/house1hallway.jpg', type: 'image' },
        { url: 'assets/house1livingroom.jpg', type: 'image' },
        { url: 'assets/house1fireplace.jpg', type: 'image' },
        { url: 'assets/house1dining.jpg', type: 'image' },
        { url: 'assets/house1bedroom1.jpg', type: 'image' },
        { url: 'assets/house1bedroom2.jpg', type: 'image' },
        { url: 'assets/house1 kitchen.jpg', type: 'image' },
        { url: 'assets/house1bathroom.jpg', type: 'image' }
      ],
      description: { 
        price: 695000, 
        beds: 3, 
        bathrooms: 1, 
        area: 118, 
        interior: [
          "Heating: Natural Gas",
          "Cooling: Wall Unit(s), Gas",
          "Basement: Finished",
          "Appliances: Dishwasher, Microwave, Refrigerator, Washer/Dryer, Gas Oven"
        ],
        property: [
          "Parking: Garage, on Street",
          "South-facing garden",
        ],
        transport: [
          "5 min walk to bus stop",
          "Close to M2 motorway"
        ],
        special: [
          "Experience a remarkable community of homes that blend timeless charm with contemporary style. Spanning up to four stories, each residence is designed with care to embody the vibrancy of city life while providing a peaceful sanctuary to return to."
        ]
      },
      address: '60 Barton Road West, Rathfarnham, Rathfarnham, Dublin 14, D14YY19'
    },
    {
      id: 5,
      content: [{ url: 'assets/house5.png', type: 'image' },
        { url: 'assets/house1layout.jpg', type: 'image' },
        { url: 'assets/house1hallway.jpg', type: 'image' },
        { url: 'assets/house1livingroom.jpg', type: 'image' },
        { url: 'assets/house1fireplace.jpg', type: 'image' },
        { url: 'assets/house1dining.jpg', type: 'image' },
        { url: 'assets/house1bedroom1.jpg', type: 'image' },
        { url: 'assets/house1bedroom2.jpg', type: 'image' },
        { url: 'assets/house1 kitchen.jpg', type: 'image' },
        { url: 'assets/house1bathroom.jpg', type: 'image' }
      ],
      description: { 
        price: 875000, 
        beds: 4, 
        bathrooms: 3, 
        area: 158,
        interior: [
          "Heating: Natural Gas",
          "Cooling: Wall Unit(s), Gas",
          "Basement: Finished",
          "Appliances: Dishwasher, Microwave, Refrigerator, Washer/Dryer, Gas Oven"
        ],
        property: [
          "Parking: Garage, on Street",
          "South-facing garden",
        ],
        transport: [
          "5 min walk to bus stop",
          "Close to M2 motorway"
        ],
        special: [
          "Experience a remarkable community of homes that blend timeless charm with contemporary style. Spanning up to four stories, each residence is designed with care to embody the vibrancy of city life while providing a peaceful sanctuary to return to."
        ]
      },
      address: '22 Mountain View Park, Greystones, Co. Wicklow, A63AX82'
    },
    {
      id: 6,
      content: [{ url: 'assets/house6.png', type: 'image' },
        { url: 'assets/house1layout.jpg', type: 'image' },
        { url: 'assets/house1hallway.jpg', type: 'image' },
        { url: 'assets/house1livingroom.jpg', type: 'image' },
        { url: 'assets/house1fireplace.jpg', type: 'image' },
        { url: 'assets/house1dining.jpg', type: 'image' },
        { url: 'assets/house1bedroom1.jpg', type: 'image' },
        { url: 'assets/house1bedroom2.jpg', type: 'image' },
        { url: 'assets/house1 kitchen.jpg', type: 'image' },
        { url: 'assets/house1bathroom.jpg', type: 'image' }
      ],
      description: { 
        price: 475000, 
        beds: 4, 
        bathrooms: 3, 
        area: 121, 
        interior: [
          "Heating: Natural Gas",
          "Cooling: Wall Unit(s), Gas",
          "Basement: Finished",
          "Appliances: Dishwasher, Microwave, Refrigerator, Washer/Dryer, Gas Oven"
        ],
        property: [
          "Parking: Garage, on Street",
          "South-facing garden",
        ],
        transport: [
          "5 min walk to bus stop",
          "Close to M2 motorway"
        ],
        special: [
          "Experience a remarkable community of homes that blend timeless charm with contemporary style. Spanning up to four stories, each residence is designed with care to embody the vibrancy of city life while providing a peaceful sanctuary to return to."
        ]
      },
      address: '47 Cairnsfort, Golf Links Road, Castletroy, Limerick, Castletroy, Co. Limerick, V94Y2NE'
    },
    {
      id: 7,
      content: [{ url: 'assets/house7.png', type: 'image' },
        { url: 'assets/house1layout.jpg', type: 'image' },
        { url: 'assets/house1hallway.jpg', type: 'image' },
        { url: 'assets/house1livingroom.jpg', type: 'image' },
        { url: 'assets/house1fireplace.jpg', type: 'image' },
        { url: 'assets/house1dining.jpg', type: 'image' },
        { url: 'assets/house1bedroom1.jpg', type: 'image' },
        { url: 'assets/house1bedroom2.jpg', type: 'image' },
        { url: 'assets/house1 kitchen.jpg', type: 'image' },
        { url: 'assets/house1bathroom.jpg', type: 'image' }
      ],
      description: { 
        price: 345000, 
        beds: 4, 
        bathrooms: 4, 
        area: 141, 
        interior: [
          "Heating: Natural Gas",
          "Cooling: Wall Unit(s), Gas",
          "Basement: Finished",
          "Appliances: Dishwasher, Microwave, Refrigerator, Washer/Dryer, Gas Oven"
        ],
        property: [
          "Parking: Garage, on Street",
          "South-facing garden",
        ],
        transport: [
          "5 min walk to bus stop",
          "Close to M2 motorway"
        ],
        special: [
          "Experience a remarkable community of homes that blend timeless charm with contemporary style. Spanning up to four stories, each residence is designed with care to embody the vibrancy of city life while providing a peaceful sanctuary to return to."
        ]
      },
      address: '2 Elm Drive, Oldcastle Road, Ballyjamesduff, Co. Cavan, A82Y542'
    },
    {
      id: 8,
      content: [{ url: 'assets/house8.png', type: 'image' },
        { url: 'assets/house1layout.jpg', type: 'image' },
        { url: 'assets/house1hallway.jpg', type: 'image' },
        { url: 'assets/house1livingroom.jpg', type: 'image' },
        { url: 'assets/house1fireplace.jpg', type: 'image' },
        { url: 'assets/house1dining.jpg', type: 'image' },
        { url: 'assets/house1bedroom1.jpg', type: 'image' },
        { url: 'assets/house1bedroom2.jpg', type: 'image' },
        { url: 'assets/house1 kitchen.jpg', type: 'image' },
        { url: 'assets/house1bathroom.jpg', type: 'image' }
      ],
      description: { 
        price: 650000, 
        beds: 3, 
        bathrooms: 4, 
        area: 118, 
        interior: [
          "Heating: Natural Gas",
          "Cooling: Wall Unit(s), Gas",
          "Basement: Finished",
          "Appliances: Dishwasher, Microwave, Refrigerator, Washer/Dryer, Gas Oven"
        ],
        property: [
          "Parking: Garage, on Street",
          "South-facing garden",
        ],
        transport: [
          "5 min walk to bus stop",
          "Close to M2 motorway"
        ],
        special: [
          "Experience a remarkable community of homes that blend timeless charm with contemporary style. Spanning up to four stories, each residence is designed with care to embody the vibrancy of city life while providing a peaceful sanctuary to return to."
        ]
      },
      address: '28 Brandon Square, Waterville, Blanchardstown, Dublin 15, D15X297'
    },
    {
      id: 9,
      content: [{ url: 'assets/house9.png', type: 'image' },
        { url: 'assets/house1layout.jpg', type: 'image' },
        { url: 'assets/house1hallway.jpg', type: 'image' },
        { url: 'assets/house1livingroom.jpg', type: 'image' },
        { url: 'assets/house1fireplace.jpg', type: 'image' },
        { url: 'assets/house1dining.jpg', type: 'image' },
        { url: 'assets/house1bedroom1.jpg', type: 'image' },
        { url: 'assets/house1bedroom2.jpg', type: 'image' },
        { url: 'assets/house1 kitchen.jpg', type: 'image' },
        { url: 'assets/house1bathroom.jpg', type: 'image' }
      ],
      description: { 
        price: 430000, 
        beds: 3, 
        bathrooms: 3, 
        area: 106, 
        interior: [
          "Heating: Natural Gas",
          "Cooling: Wall Unit(s), Gas",
          "Basement: Finished",
          "Appliances: Dishwasher, Microwave, Refrigerator, Washer/Dryer, Gas Oven"
        ],
        property: [
          "Parking: Garage, on Street",
          "South-facing garden",
        ],
        transport: [
          "5 min walk to bus stop",
          "Close to M2 motorway"
        ],
        special: [
          "Experience a remarkable community of homes that blend timeless charm with contemporary style. Spanning up to four stories, each residence is designed with care to embody the vibrancy of city life while providing a peaceful sanctuary to return to."
        ]
      },
      address: '148 Evanwood, Golf Links Road, Castletroy, Co. Limerick, V94PC5R'
    },
    {
      id: 10,
      content: [{ url: 'assets/house10.png', type: 'image' },
        { url: 'assets/house1layout.jpg', type: 'image' },
        { url: 'assets/house1hallway.jpg', type: 'image' },
        { url: 'assets/house1livingroom.jpg', type: 'image' },
        { url: 'assets/house1fireplace.jpg', type: 'image' },
        { url: 'assets/house1dining.jpg', type: 'image' },
        { url: 'assets/house1bedroom1.jpg', type: 'image' },
        { url: 'assets/house1bedroom2.jpg', type: 'image' },
        { url: 'assets/house1 kitchen.jpg', type: 'image' },
        { url: 'assets/house1bathroom.jpg', type: 'image' }
      ],
      description: { 
        price: 550000, 
        beds: 5, 
        bathrooms: 3, 
        area: 155, 
        interior: [
          "Heating: Natural Gas",
          "Cooling: Wall Unit(s), Gas",
          "Basement: Finished",
          "Appliances: Dishwasher, Microwave, Refrigerator, Washer/Dryer, Gas Oven"
        ],
        property: [
          "Parking: Garage, on Street",
          "South-facing garden",
        ],
        transport: [
          "5 min walk to bus stop",
          "Close to M2 motorway"
        ],
        special: [
          "Experience a remarkable community of homes that blend timeless charm with contemporary style. Spanning up to four stories, each residence is designed with care to embody the vibrancy of city life while providing a peaceful sanctuary to return to."
        ]
      },
      address: 'Shielbaggan, Ramsgrange, Co. Wexford, Y34 YP44'
    },
  ];

  // Return all properties
  getHouses() {
    return this.houses;
  }

  // Return a single property by ID
  getHouseById(id: number) {
    return this.houses.find(h => h.id === id);
  }
  
}
