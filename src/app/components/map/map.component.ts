import {Component, Input, AfterViewInit} from '@angular/core';

declare var google: any;

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})

export class MapComponent implements AfterViewInit {

  @Input()
  public lat: string;
  @Input()
  public lng: string;
  @Input()
  public address: string;
  @Input()
  public height: string;

  constructor() {
  }

  ngAfterViewInit() {
    this.renderMap();
  }

  public renderMap(): void {

    const latLng = { lat: parseFloat(this.lat), lng: parseFloat(this.lng) };
    const mapElm = document.getElementById('map');
    mapElm.style.height = this.height;

    const map = new google.maps.Map(mapElm, {
      center: latLng,
      scrollwheel: false,
      zoom: 17,
      styles: [
        {
          "stylers": [
            {
              "saturation": -100
            }
          ]
        },
        {
          "featureType": "water",
          "elementType": "geometry.fill",
          "stylers": [
            {
              "color": "#0099dd"
            }
          ]
        },
        {
          "elementType": "labels",
          "stylers": [
            {
              "visibility": "off"
            }
          ]
        },
        {
          "featureType": "poi.park",
          "elementType": "geometry.fill",
          "stylers": [
            {
              "color": "#aadd55"
            }
          ]
        },
        {
          "featureType": "road.highway",
          "elementType": "labels",
          "stylers": [
            {
              "visibility": "on"
            }
          ]
        },
        {
          "featureType": "road.arterial",
          "elementType": "labels.text",
          "stylers": [
            {
              "visibility": "on"
            }
          ]
        },
        {
          "featureType": "road.local",
          "elementType": "labels.text",
          "stylers": [
            {
              "visibility": "on"
            }
          ]
        },
        {}
      ]
    });

    const marker = new google.maps.Marker({
      position: latLng,
      map: map,
    });

  }

}
