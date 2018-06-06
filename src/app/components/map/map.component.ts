import { Component, OnInit, Input } from '@angular/core';

declare var google: any;

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})

export class MapComponent implements OnInit {

  @Input()
  public lat: string;
  @Input()
  public lng: string;
  @Input()
  public address: string;

  constructor() {
    console.log(this.lat);
    console.log(this.lng);
  }

  ngOnInit() {
    this.renderMap();
  }

  public renderMap(): void {

    const latLng = { lat: parseFloat(this.lat), lng: parseFloat(this.lng) };

    const map = new google.maps.Map(document.getElementById('map'), {
      center: latLng,
      scrollwheel: false,
      zoom: 17
    });

    const marker = new google.maps.Marker({
      position: latLng,
      map: map,
    });

  }

}
