import { Component, OnInit } from '@angular/core';
import { House } from '../service/house/house'; //imports house service
import { NgForm, FormsModule } from '@angular/forms';
import { IonContent, IonItem, IonIcon, IonDatetime, IonButton, IonInput, ToastController, IonFab, IonFabButton } from '@ionic/angular/standalone';
import { RouterModule } from '@angular/router';
import { Identity } from '../service/identity/identity';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.page.html',
  styleUrls: ['./booking.page.scss'],
  standalone: true,
  imports: [IonContent, FormsModule, RouterModule, IonIcon, IonItem, IonDatetime, IonButton, IonInput, CommonModule, IonFab, IonFabButton]
})
export class BookingPage implements OnInit {

  houseId: string = '';
  houseAddress: string = '';
  fullname: string = '';
  email: string = '';
  phone: string = '';
  selectedDate: string = '';
  userId: string = '';
  


  constructor(private identity: Identity, private houseService: House, private toastController: ToastController) { }

  ngOnInit() {

    const state = history.state as any; //[state]="{houseId: house.id, houseAddress: house.address}" in booking.html
    // [state] passes the house id and address during navigation, it is stores in history.state
    this.houseId = state?.houseId || '';
    // looks inside history.state for a houseId and houseAddress property. If it is there, it uses that value and if not then it is null
    this.houseAddress = state?.houseAddress || '';

    const user = this.identity.getCurrentUser();
    if (user) {
      this.email = user.email ?? '';
      this.userId = user.uid;
    }
  }

  async onBook(form: NgForm) {
    if (form.invalid) {
      await this.showToast('Please fill in all required fields.', 'danger');
      return;
    }

    const bookingData = {
      houseAddress: this.houseAddress,  
      fullname: this.fullname,
      email: this.email,
      phone: this.phone,
      viewingDate: this.selectedDate,
      userId: this.userId,
      createdAt: new Date()
    };

    const result = await this.houseService.bookViewing(bookingData);

    if (result.success) {
      await this.showToast('Viewing booked successfully!', 'success');
      this.fullname = '';
      this.phone = '';
      this.selectedDate = '';
    } else {
      await this.showToast('Failed to save booking. Please try again.', 'danger');
    }
  }

  async showToast(message: string, color: 'success' | 'danger') {
    const toast = await this.toastController.create({
      message,
      duration: 3000, //3 secs
      color,
      position: 'top',
      buttons: [
      {
        text: 'Dismiss', //adds a dismiss button
        role: 'cancel',
      }
    ]
    });
    await toast.present();
  }


}
