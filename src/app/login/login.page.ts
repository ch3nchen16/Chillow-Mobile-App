import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonIcon, IonItem, IonInput, IonButton} from '@ionic/angular/standalone';
import { RouterModule, Router } from '@angular/router';
import { Identity } from '../service/identity/identity'; //import identity service for authentication
import { ToastController } from '@ionic/angular'; //for form validation



@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [IonContent, CommonModule, FormsModule, IonIcon, IonItem, IonInput, IonButton, RouterModule]
})
export class LoginPage implements OnInit {

  
  email: string = '';
  password: string = '';
  
  //private property
  constructor(private identity: Identity, private router: Router, private toastController: ToastController) {}

  ngOnInit() {
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

  async onLogin() {
  try {
    await this.identity.login(this.email, this.password); //if login successful
    this.showToast('You are logged in', 'success'); //success message


    //clear inputs
    this.email = '';
    this.password = '';
    this.router.navigateByUrl('/tabs/tab1');
   
  } catch (error: any) {
      switch (error.code) {
        case 'auth/invalid-email':  // ensures user uses a valid email
        this.showToast('Please enter a valid email address.', 'danger');
        break;

        default:
          this.showToast('Login unsuccessful.', 'danger');
      }
    
  }
}


}
