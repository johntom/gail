import {inject,NewInstance} from 'aurelia-framework';
import {EventAggregator} from 'aurelia-event-aggregator';
import {BooksApi} from 'books-api';
import {BootstrapFormRenderer} from 'bootstrap-form-renderer';
import {ValidationRules, ValidationController} from 'aurelia-validation';

@inject(EventAggregator, BooksApi, NewInstance.of(ValidationController))
export class BookForm{
  
  constructor(eventAggregator, bookApi, controller){
    this.title = "";
    this.eventAggregator = eventAggregator;
  
    this.bookApi = bookApi;
    this.controller = controller;
    this.controller.addRenderer(new BootstrapFormRenderer());
    
    this.configureValidationRules();
    this.createEventListeners();
  }
  
  configureValidationRules(){
      ValidationRules.customRule(
      'positiveInteger',
      (value, obj) => value === null || value === undefined 
        || (Number.isInteger(value) || value >= 0),
      `Books can only be read 0 or more times.` 
      );
      
      ValidationRules
        .ensure('title').required()
        .ensure('timesRead')
        .required()
        .satisfiesRule('positiveInteger').
        on(this);
  }
  
  addBook(){
    this.controller.validate().then(result => {
      if(result.valid) this.eventAggregator.publish('book-added');  
      
    });
  }
  
  bind(){
    this.bookApi.getGenres().then(genres => {
      this.genres = genres;
    });
  }
  
  createEventListeners(){
    this.genreSelectedListener =  e => {
      if(e && e.detail){
        this.genre = e.detail.value;  
      }
    };
    this.ratingChangedListener =  e => this.rating = e.rating;
  }
  
  attached(){
      this.selectGenreElement.addEventListener("change", this.genreSelectedListener );
      this.selectGenreElement.addEventListener("change", this.ratingChangedListener );
  }
  
  detached(){
      this.ratingElement.removeEventListener('change', this.ratingChangedListener);
      this.selectGenreElement.removeEventListener('change', this.genreSelectedListener);
  }
  
}

