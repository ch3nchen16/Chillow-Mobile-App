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
  private viewings: any[] = []; //internal viewings array
  
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


  getHouseById(id: string) {
    return this.houses.find((house: any) => house.id == id);
  }

  //async method allows the program to do other work while waiting for something, for addPost it is waiting for Firestore to respond. It takes 
  //the parameter houseData and the actual form data you pass in is the argument. 
  //async is suitable for this method because it calls to firestore over the network which can be slow. without async the app would freeze while
  //waiting for firestore.
  async addPost(houseData: any) { //houseData is an object that has the fields for this house collected from the form. 
    try {
      const docRef = await addDoc(collection(this.db, 'house'), houseData); 
      //addDoc = firestore function that adds a new document to a collection. 
      //collection(this.db, 'house') = points to house collection in the database
      console.log('Document written with ID: ', docRef.id); //docRef.id = the id that Firestore generated for the new document
      return { success: true, id: docRef.id };
    } catch (e) { // catch block is for if something try fails, e is the error object describing what went wrong
      console.error('Error adding document: ', e);
      return { success: false, error: e };  
    }
  }

  
  async bookViewing(bookingData: any) {
    try{
      const docRef = await addDoc(collection(this.db, 'viewings'), bookingData);
      return { success: true, id: docRef.id };
    }catch (error) {
      return { success: false, error };
    }
  }

  async getAllViewings() {
    this.viewings = [];                
    const querySnapshot = await getDocs(collection(this.db, 'viewings'));
    querySnapshot.forEach((doc) => {
      const viewingData: any = doc.data();
      viewingData.id = doc.id;         
      this.viewings.push(viewingData);
    });
    return this.viewings;
  }

  getViewingsByUserId(userId: string) {
    return this.viewings.filter((viewing: any) => viewing.userId === userId); //searches and filters the viewings array to display the viewings for only that user
                                                                              //for each viewing it checks if the viewing user id matches the currently logged in user's id
  }



  
}
