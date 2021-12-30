export class Contact {
    nom: string;
    prenom: string;
    email: string;
    city: string;
    tel: string;
    adresse: string;
    service: string;


    constructor(nom: string, prenom: string, email: string, city: string, tel: string, adresse: string, service: string) {
        this.nom = nom;
        this.prenom = prenom;
        this.email = email;
        this.city = city;
        this.tel = tel;
        this.adresse = adresse;
        this.service = service;
    }
}