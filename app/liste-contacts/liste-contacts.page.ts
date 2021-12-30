import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MenuController, NavController } from '@ionic/angular';
import { ContactAuthService } from '../services/contact-auth.service';

@Component({
  selector: 'app-liste-contacts',
  templateUrl: './liste-contacts.page.html',
  styleUrls: ['./liste-contacts.page.scss'],
})
export class ListeContactsPage implements OnInit {

  constructor(private fireauth: ContactAuthService, private formBuilder: FormBuilder, private navCtrl: NavController, private menuCtrl: MenuController) {
    this.menuCtrl.enable(true)
  }

  ngOnInit() {
  }

}
