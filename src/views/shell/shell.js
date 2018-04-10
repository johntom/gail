import 'jquery';
import 'bootstrap';
import 'kendo.all.min';
import { ApplicationService } from '../../services/application-service';
import { AuthorizeStep } from '../../services/authorize-step';

export class Shell {
  static inject = [ApplicationService];

  constructor(appService) {
    this.appService = appService;
  }

  configureRouter(config, router) {
    config.title = 'Gail Parenteau Clientbase';
    config.addPipelineStep('authorize', AuthorizeStep);
    config.map([
      { route: '', redirect: 'home' },
      { route: 'home', name: 'home', moduleId: '../home/home', nav: true, title: 'Home' },
      { route: 'client/:id', name: 'client-search-results', moduleId: '../client/search-results', title: 'Search Results' },
      { route: 'client/data/:id', name: 'client-data-form', moduleId: '../client/data-form', title: 'Data Form' },
      { route: 'client', name: 'client', moduleId: '../client/client', nav: true, title: 'Client' },
      { route: 'client/dataadd', name: 'client-data-add-form', moduleId: '../client/data-add-form', title: 'Data Add Form' },
     
     
      // { route: 'contact', name: 'contact', moduleId: '../contact/contact', nav: true, title: 'Contact' },
      // { route: 'contact/:id', name: 'contact-search-results', moduleId: '../contact/search-results', title: 'Search Results' },
      // { route: 'contact/data/:id', name: 'contact-data-form', moduleId: '../contact/data-form', title: 'Data Form' },
      // { route: 'catalog', name: 'catalog', moduleId: '../catalog/catalog', nav: true, title: 'Catalog' },
      // { route: 'catalog/:id', name: 'catalog-search-results', moduleId: '../catalog/search-results', title: 'Search Results' },
      // { route: 'catalog/data/:id', name: 'catalog-data-form', moduleId: '../catalog/data-form', title: 'Data Form' },
    ]);

    this.router = router;
  }

  selectTab(tab) {
    this.appService.tabs.forEach(t => t.isSelected = false);
    tab.isSelected = true;
    return true;
  }
  closeTab(tab, index) {
    let wasSelected = tab.isSelected;
    tab.isSelected = false;
    this.appService.tabs.splice(index, 1);
    if (wasSelected && this.appService.tabs.length > 0) {
      let newIndex = (index > 0) ? index - 1 : 0;
      let newTab = this.appService.tabs[newIndex];
      newTab.isSelected = true;
      this.router.navigate(newTab.href);
    }
  }

}
