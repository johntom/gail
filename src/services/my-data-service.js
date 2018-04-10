import { ApiService } from '../utils/servicesApi';
import { inject } from 'aurelia-dependency-injection';
import { ApplicationService } from './application-service';
@inject(ApiService, ApplicationService)
export class MyDataService {
  constructor(api, appService) {
    this.api = api;
    this.appService = appService;
  }
  personList = [
    {
      id: 0,
      firstName: "Rob",
      lastName: "Eisenberg",
      gender: "male",
      email: "rob@email.com",
      imgUrl: "assets/business-man.png",
      address: "",
      city: "Redmond",
      state: "washington",
      zip: "",
      orders: [
        {
          product: "Halo Wars",
          datePurchased: "09/14/2016",
          quantity: 1,
          unitPrice: 29.99
        },
        {
          product: "Minecraft",
          datePurchased: "09/01/2016",
          quantity: 1,
          unitPrice: 24.99
        }
      ]
    }
  ];
  genderList = [
    "male",
    "female"
  ];
  statusList = [
    { name: 'open', value: 1 },
    { name: 'closed', value: 2 },
    { name: 'reopened', value: 3 }

  ];
  stateList = [
    { name: 'Alabama', value: 'alabama' },
    { name: 'Alaska', value: 'alaska' },
    { name: 'America Samoa', value: 'america samoa' },
    { name: 'Arizona', value: 'arizona' },
    { name: 'Arkansas', value: 'arkansas' },
    { name: 'California', value: 'california' },
    { name: 'Colorado', value: 'colorado' },
    { name: 'Connecticut', value: 'connecticut' },
    { name: 'Delaware', value: 'delaware' },
    { name: 'District of Columbia', value: 'district of columbia' },
    { name: 'Federated States of Micronesia', value: 'federated states of micronesia' },
    { name: 'Florida', value: 'florida' },
    { name: 'Georgia', value: 'georgia' },
    { name: 'Guam', value: 'guam' },
    { name: 'Hawaii', value: 'Hawaii' },
    { name: 'Idaho', value: 'idaho' },
    { name: 'Illinois', value: 'illinois' },
    { name: 'Indiana', value: 'indiana' },
    { name: 'Iowa', value: 'iowa' },
    { name: 'Kansas', value: 'kansas' },
    { name: 'Kentucky', value: 'kentucky' },
    { name: 'Louisiana', value: 'louisiana' },
    { name: 'Maine', value: 'maine' },
    { name: 'Marshall Islands', value: 'marshall islands' },
    { name: 'Maryland', value: 'maryland' },
    { name: 'Massachusetts', value: 'massachusetts' },
    { name: 'Michigan', value: 'michigan' },
    { name: 'Minnesota', value: 'minnesota' },
    { name: 'Mississippi', value: 'mississippi' },
    { name: 'Missouri', value: 'missouri' },
    { name: 'Montana', value: 'montana' },
    { name: 'Nebraska', value: 'nebraska' },
    { name: 'Nevada', value: 'nevada' },
    { name: 'New Hampshire', value: 'new hampshire' },
    { name: 'New Jersey', value: 'new jersey' },
    { name: 'New Mexico', value: 'new mexico' },
    { name: 'New York', value: 'new york' },
    { name: 'North Carolina', value: 'north carolina' },
    { name: 'North Dakota', value: 'north dakota' },
    { name: 'Northern Mariana Islands', value: 'northern mariana islands' },
    { name: 'Ohio', value: 'ohio' },
    { name: 'Oklahoma', value: 'oklahoma' },
    { name: 'Oregon', value: 'oregon' },
    { name: 'Palau', value: 'palau' },
    { name: 'Pennsylvania', value: 'Pennsylvania' },
    { name: 'Puerto Rico', value: 'puerto rico' },
    { name: 'Rhode Island', value: 'rhode island' },
    { name: 'South Carolina', value: 'south carolina' },
    { name: 'South Dakota', value: 'south dakota' },
    { name: 'Tennesee', value: 'tennesee' },
    { name: 'Texas', value: 'texas' },
    { name: 'Utah', value: 'utah' },
    { name: 'Vermont', value: 'vermont' },
    { name: 'Virgin Islands', value: 'virgin islands' },
    { name: 'Virginia', value: 'virginia' },
    { name: 'Washington', value: 'washington' },
    { name: 'West Virginia', value: 'west virginia' },
    { name: 'Wisconsin', value: 'wisconsin' },
    { name: 'Wyoming', value: 'wyoming' },
    { name: 'Sweden', value: 'sweden' },
    { name: 'Poland', value: 'poland' },
    { name: 'Bangladesh', value: 'bangladesh' },
    { name: 'Bulgaria', value: 'bulgaria' },
    { name: 'Netherlands', value: 'netherlands' },
    { name: 'Amsterdam', value: 'amsterdam' },
    { name: 'Austria', value: 'austria' },
    { name: 'Wales', value: 'wales' },
    { name: 'Japan', value: 'japan' },
  ];


  loadGenders() {
    return new Promise((resolve, reject) => {
      resolve(this.genderList);
    });
  }
  loadStatus() {
    return new Promise((resolve, reject) => {
      resolve(this.statusList);
    });
  }
  loadStates() {
    return new Promise((resolve, reject) => {
      resolve(this.stateList);
    });
  }

  loadArtists() {
    return new Promise((resolve, reject) => {
      this.api.findArtists()
        .then((jsonRes) => {
          var artistList = jsonRes.data;
          console.log('artistist', artistList)

          resolve(artistList);
        });

    });
  }
  loadCodes() {
    return new Promise((resolve, reject) => {
      this.api.findCodes()
        .then((jsonRes) => {
          var codesList = jsonRes.data;
          console.log('codesList', codesList)

          resolve(codesList);
        });

    });
  }
  loadClients() {
    return new Promise((resolve, reject) => {
      this.api.loadClients()
        .then((jsonRes) => {
          var orgsList = jsonRes.data;
          console.log('orgsList', orgsList)

          resolve(orgsList);
        });

    });
  }
 

  camelCaseToProperCase(input) {
    return input.replace(/([A-Z])/g, ' $1')
      .replace(/^./, (str) => str.toUpperCase());
  }

}
