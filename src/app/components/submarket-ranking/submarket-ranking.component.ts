import { Component, Input, OnInit } from '@angular/core';
import { SubmarketService } from 'src/app/services/submarket.service';

@Component({
  selector: 'app-submarket-ranking',
  templateUrl: './submarket-ranking.component.html',
  styleUrls: ['./submarket-ranking.component.css'],
  providers:[SubmarketService]
})
export class SubmarketRankingComponent implements OnInit{
  submarketrankings:{metric:string,name:string,price:string,percentage:string}[]=[];
  constructor(private submarketservice:SubmarketService){}
  ngOnInit(): void {
    this.submarketrankings=this.submarketservice.submarketrankings;
    // .sort(function (a, b) {
    //   a[price]>b[price];
    // });;
  }

  @Input() 
  isdarkmodechecked: string= 'notchecked';

  @Input() 
  selectedMatrix:any;


  //this.submarketrankings.filter(this.selectedMatrix);
}
