import { Component } from '@angular/core';
import { IonContent, IonItem, IonInput, IonTextarea, IonButton, ToastController} from '@ionic/angular/standalone';
// import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { House } from '../service/house/house';
import { CommonModule } from '@angular/common';
import { NgForm, FormsModule } from '@angular/forms';
@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
  imports: [IonContent, IonItem, IonInput, IonTextarea, IonButton, CommonModule, FormsModule],
})
export class Tab3Page {

  //properties that belong to Tab3Page
  //each time Angular navigates to Tab3Page a new instance is made, it has its own values for address, price, etc..
  address = ''; //for [(ngModel)]="address"
  price: number | null = null; // these connect to the form in Tab3Page.html 
  area: number | null = null; // [(ngModel)] allows for two-way binding = 1. .ts -> .html for ex. if you set this.address = "18 Oak street" 
  beds: number | null = null;    // in the code, it updates input value 2. .html -> .ts for ex. when user enters form input, it updates this.address
  bathrooms: number | null = null;
  special = '';

  agent = { name: '', photo: '' };  

  content = '';       
  interior = '';       
  property = '';       
  transport = '';  

  constructor(private houseService: House, private toastCtrl: ToastController ) {}

  async onAddPost(form: NgForm) {
  if (form.invalid) {
    await this.showToast('Please fill in all required fields.', 'danger');
    return;
  }

    //this matches the properties to the existing fields in the house document
    const houseData = {
    
      address: this.address,
      agent: {
        name: this.agent.name,
        photo: this.agent.photo,
      },
      content: this.content
        .split('\n') //this splits the entered long string into an array. \n creates new line which is the separator
        .map(s => s.trim()) //removes any spaces in each line
        .filter(Boolean) //filters empty strings, uses only valid lines
        .map(url => ({ type: 'image', url })), //converts each string into an object (in firestore it is a map) with type: 'image' amd url: (string)
      description: {
        area: this.area,
        bathrooms: this.bathrooms,
        beds: this.beds,
        interior: this.interior
          .split('\n')
          .map(s => s.trim())
          .filter(Boolean),
      
      price: this.price,
      property: this.property
        .split('\n')
        .map(s => s.trim())
        .filter(Boolean),
      special: this.special,
      transport: this.transport
        .split('\n')
        .map(s => s.trim())
        .filter(Boolean),
      }
  };

  const result = await this.houseService.addPost(houseData);

  if (result.success) {
    await this.showToast('House added successfully!', 'success');
    this.clearForm();
    form.resetForm(); // resets Angular validation state
  } else {
    await this.showToast('Failed to add house. Please try again.', 'danger');
  }

}

  private clearForm() {
    this.address = '';
    this.price = null;
    this.area = null;
    this.beds = null;
    this.bathrooms = null;
    this.special = '';
    this.agent = { name: '', photo: '' };
    this.content = '';
    this.interior = '';
    this.property = '';
    this.transport = '';
  }
  
  private async showToast(message: string, color: 'success' | 'danger') {
    const toast = await this.toastCtrl.create({
      message,
      duration: 3000,
      color,
      position: 'top',
      buttons: [{ text: 'Dismiss', role: 'cancel' }],
    });
    await toast.present();
  }

}
