import { Component, OnInit } from '@angular/core';

import { ContactAuthService } from '../services/contact-auth.service';
import { ContactAcessService } from '../services/contact-acess.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { Compte } from '../Compte';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.page.html',
  styleUrls: ['./inscription.page.scss'],
})
export class InscriptionPage implements OnInit {

  private inscriptionForm: FormGroup;
  private compte: Compte;

  constructor(private fireauth: ContactAuthService, private firestore: ContactAcessService, private formBuilder: FormBuilder, private navCtrl: NavController) {
    this.inscriptionForm = this.formBuilder.group({
      email: [''],
      password: [''],
      tel: [''],
      nom: [''],
      prenom: [''],
    })
  }

  ngOnInit() {
  }

  signUp() {
    this.fireauth.signUp(this.inscriptionForm.value)
      .then(res => {
        console.log(res);
        this.firestore.newCompte((this.inscriptionForm.value))
        this.navCtrl.navigateForward('/authentification');
      }, err => {
        console.log(err);
      })
  }

}
