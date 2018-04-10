import {EventAggregator} from 'aurelia-event-aggregator';
import {inject} from 'aurelia-framework';

@inject(EventAggregator)

export class App {
  
  constructor(eventAggregator){
    this.eventAggregator = eventAggregator;
  }
  
  bind(){
    this.eventAggregator.subscribe('book-added', _ => {
      this.notification = "Added new book";
      setTimeout(_ => this.notification = "", 1000);
    });
  }
  
  unbind(){
    this.eventAggregator.dispose();
  }
  
}
