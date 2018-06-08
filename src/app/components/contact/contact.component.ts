import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  @Input()
  public estateCode: string;
  public name: string;
  public subject: string;
  public message: string;
  public email: string;
  public phone: string;

  constructor() {
  }

  ngOnInit() {
    this.subject = 'Gostaria de saber mais informações sobre o imóvel de código ' + this.estateCode;
  }

  public sendMail(): void {
    console.log(this.name);
    console.log(this.subject);
    console.log(this.message);
    console.log(this.email);
    console.log(this.phone);
  }


}
