import { Component, OnInit } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { IonContent, IonItem, IonInput, IonIcon, IonButton} from '@ionic/angular/standalone';
import { RouterModule, Router } from '@angular/router'; 
import { Identity } from '../service/identity/identity'; //import identity service for authentication
import { ToastController } from '@ionic/angular'; //for form validation

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
  standalone: true,
  imports: [IonContent, FormsModule, IonItem, IonInput, IonIcon, RouterModule, IonButton]
})
export class RegisterPage implements OnInit {


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
  async onRegister() {

    try{ 
      await this.identity.register(this.email, this.password); //if successful
      this.showToast('You have successfully registered', 'success'); //success message


      //clears inputs
      this.email = '';
      this.password = '';
      //is successsful navigates to tab1 aka home page
      this.router.navigateByUrl('/tabs/tab1');

      //for errors
  } catch (error: any) {
      switch (error.code) {
        case 'auth/invalid-email':  // ensures user uses a valid email
        this.showToast('Please enter a valid email address.', 'danger');
        break;
        
        case 'auth/email-already-in-use': //if account already exists with that email
          this.showToast('This account already exists. Try log in.', 'danger');
          break;
          //prevents weak passwords
        case 'auth/weak-password':
          //passwords must be more than 6 characters as Firebase allows
          this.showToast('Password must be at least 6 characters.', 'danger');
          break;
        default:
          this.showToast('Registration unsuccessful.', 'danger');
      }
    
    }
  }
}
