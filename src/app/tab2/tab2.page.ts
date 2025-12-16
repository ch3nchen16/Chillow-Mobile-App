import { Component } from '@angular/core';
import { IonContent, IonList, IonItem, IonLabel, IonText } from '@ionic/angular/standalone';
import { CommonModule} from '@angular/common';
// import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { House } from '../service/house/house'; //imports house service
import { Identity } from '../service/identity/identity'; //import identity service for 

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  imports: [IonContent, IonList, IonItem, IonLabel, IonText, CommonModule]
})
export class Tab2Page {

  viewings: any[] = []; //internal viewings array

  constructor(private houseService: House, private identity: Identity) {}

  async ionViewWillEnter() {
    
    await this.displayViewings(); //calls displayViewings 
  }

  async displayViewings() {
    const user = this.identity.getCurrentUser(); //gets the currently logged in user from identity service
    if (!user) {         //if there is no user
      this.viewings = []; //viewings set to empty array - no viewings
      return;
    }

    await this.houseService.getAllViewings(); //if there is a user, load all viewing documents from firestore to the internal viewings array

    this.viewings = this.houseService.getViewingsByUserId(user.uid); //in house.ts :
    // getViewingsByUserId(userId: string) {
   //   return this.viewings.filter((viewing: any) => viewing.userId === userId);
    // }
    //filters the houseService.viewings array to only use the current user's booking

   }
}
