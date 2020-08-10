import { dat } from './classes/dat';
import {DataService} from './services/data.service'
import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  private subscp = new Subscription();
  constructor(private dataService: DataService) { }
  name;
  biller = new Array<dat>();

  ngOnInit() {
    this.subscp.add(this.dataService.login()._subscribe);
    console.log("Entered");
  }

  ngOnDestroy(){
    this.subscp.unsubscribe();
    console.log("Not Entered");
  }

  check() {
    if (this.name >= 0){
      this.dataService
        .sendGetRequest(this.name)
        .subscribe(response=>{
          this.biller = response["bill"].map(item => {
            return new dat(
              item.name,
              item.email,
              item.pwd
            );
          });
    });
    }else {
      alert("Enter proper bill number");
    }
  }
}
