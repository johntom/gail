import { inject } from 'aurelia-dependency-injection';
import { ApplicationService } from '../../services/application-service';
import { MyDataService } from "../../services/my-data-service";

@inject(ApplicationService, MyDataService)


export class Home {
  heading = "Welcome to the GP Home page!";
  constructor(appService, dataService) {
    this.appService = appService;
    this.dataService = dataService;
  }
  //   this.dataService.loadCodes(values[1]), resolve all lists
  activate() {
    // if (this.appService.LookupDataLoaded) {
    //   console.log('using data cache from home....')
    //   return Promise.resolve(true);
    // } else {
    //   return Promise.all([
    //     this.dataService.loadClients(),
    //   ]).then(values => {
    //     this.appService.orgsList = values[0];
    //     console.log(' this.appService.codesGenre', this.appService.orgsList)
    //   }).catch(error => {
    //     console.error("Error encountered while trying to get data.", error);
    //   });
    }
    


}