import { Injectable } from '@angular/core'; //decorator 
import { collection, where, getDocs, addDoc } from "firebase/firestore"; 
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root',
})




export class House {
  //holds the data for the houses
  //Initialize Firebase
  private app = initializeApp(environment.firebaseConfig);
  private db = getFirestore(this.app);

  //array of houses containing multiple objects
  private houses: any[] = [];
  /*= [ 
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

      address: "Cloghertown, Clonavy, Garristown, Co. Meath, A42 VY18",
      agent: { name: "William Horan", photo: "assets/william.png" },
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
      description: { 
        price: 525000, 
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
        special: 
          "Experience a remarkable community of homes that blend timeless charm with contemporary style. Spanning up to four stories, each residence is designed with care to embody the vibrancy of city life while providing a peaceful sanctuary to return to."
        
      },
      address: "Emsworth, Malahide Road, Kinsealy, County Dublin, D17 EF98",
      agent: { name: "Idris Fisher", photo: "assets/idris.png" },
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
        special: 
          "Experience a remarkable community of homes that blend timeless charm with contemporary style. Spanning up to four stories, each residence is designed with care to embody the vibrancy of city life while providing a peaceful sanctuary to return to."
       },
      address: "Emsworth, Malahide Road, Kinsealy, County Dublin, D17 EF98",
      agent: { name: "Cillian Elba", photo: "assets/cillian.png" },
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
        bathrooms: 2, 
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
        special: 
          "Experience a remarkable community of homes that blend timeless charm with contemporary style. Spanning up to four stories, each residence is designed with care to embody the vibrancy of city life while providing a peaceful sanctuary to return to."
        
      },
      address: "60 Barton Road West, Rathfarnham, Rathfarnham, Dublin 14, D14YY19",
      agent: { name: "Chris O'brien", photo: "assets/chris.png" },
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
        special: 
          "Experience a remarkable community of homes that blend timeless charm with contemporary style. Spanning up to four stories, each residence is designed with care to embody the vibrancy of city life while providing a peaceful sanctuary to return to."
        
      },
      address: "22 Mountain View Park, Greystones, Co. Wicklow, A63AX82",
      agent: { name: "George Griffin", photo: "assets/george.png" },
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
        special: 
          "Experience a remarkable community of homes that blend timeless charm with contemporary style. Spanning up to four stories, each residence is designed with care to embody the vibrancy of city life while providing a peaceful sanctuary to return to."
        
      },
      address: "47 Cairnsfort, Golf Links Road, Castletroy, Limerick, Castletroy, Co. Limerick, V94Y2NE",
      agent: { name: "Peter Parker", photo: "assets/peter.png" },
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
        special: 
          "Experience a remarkable community of homes that blend timeless charm with contemporary style. Spanning up to four stories, each residence is designed with care to embody the vibrancy of city life while providing a peaceful sanctuary to return to."
        
      },
      address: "2 Elm Drive, Oldcastle Road, Ballyjamesduff, Co. Cavan, A82Y542",
      agent: { name: "Finbar Dunne", photo: "assets/finbar.png" },
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
        special: 
          "Experience a remarkable community of homes that blend timeless charm with contemporary style. Spanning up to four stories, each residence is designed with care to embody the vibrancy of city life while providing a peaceful sanctuary to return to."
        
      },
      address: "28 Brandon Square, Waterville, Blanchardstown, Dublin 15, D15X297",
      agent: { name: "Bryan Ronan", photo: "assets/bryan.png" },
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
        special: 
          "Experience a remarkable community of homes that blend timeless charm with contemporary style. Spanning up to four stories, each residence is designed with care to embody the vibrancy of city life while providing a peaceful sanctuary to return to."
        
      },
      address: "148 Evanwood, Golf Links Road, Castletroy, Co. Limerick, V94PC5R",
      agent: { name: "Ellis Johnson", photo: "assets/ellis.png" },
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
        special: 
          "Experience a remarkable community of homes that blend timeless charm with contemporary style. Spanning up to four stories, each residence is designed with care to embody the vibrancy of city life while providing a peaceful sanctuary to return to."
        
      },
      address: "Shielbaggan, Ramsgrange, Co. Wexford, Y34 YP44",
      agent: { name: "Cara Reilly", photo: "assets/cara.png" },
    }, 
  ];*/

  // Return all properties
  // getHouses() {
  //   return this.houses;
  // }
  
  async getHouses(){
    this.houses = [];
      let _this = this;
      const querySnapshot = await getDocs(collection(this.db, "house"));
      querySnapshot.forEach((doc) => {
      let houseData: any = doc.data();
      houseData.id = doc.id;
      _this.houses.push(houseData);
    });
    return this.houses;
    
    
  }


  // Return a single property by ID
  // getHouseById(id: number) {
  //   return this.houses.find(h => h.id === id);
  // }

  getHouseById(id: string) {
    return this.houses.find((house: any) => house.id == id);
  }

  // async addHouseAd() {
  //   try {
  //     const docRef = await addDoc(collection(this.db, "house"), {
  //       userInfo: {
  //         name: "New User",
  //         profileImage: "assets/img/user3.jpg",
  //         location: "Unknown"
  //       },
  //       media: [
  //         {type: "image", src: "assets/img/post3.jpg"},
  //       ]
  //     });

  //     console.log("Document written with ID: ", docRef.id);
  //   } catch (e) {
  //     console.error("Error adding document: ", e);
  //  }

  async bookViewing(bookingData: any) {
    try{
      const docRef = await addDoc(collection(this.db, 'viewings'), bookingData);
      console.log('Viewing saved with ID:', docRef.id);
      return { success: true, id: docRef.id };
    }catch (error) {
      console.error('Error saving viewing:', error);
      return { success: false, error };
    }
  }


  
}
