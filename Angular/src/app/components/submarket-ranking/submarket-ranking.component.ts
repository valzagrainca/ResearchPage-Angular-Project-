import { Component, Input, OnInit } from '@angular/core';
import { SortPipe } from 'src/app/pipes/sort.pipe';
import { SubmarketService } from 'src/app/services/submarket.service';

@Component({
  selector: 'app-submarket-ranking',
  templateUrl: './submarket-ranking.component.html',
  styleUrls: ['./submarket-ranking.component.css'],
  providers:[SubmarketService]
})
export class SubmarketRankingComponent implements OnInit{
  submarketrankings:{metric:string,name:string,price:string,percentage:string}[]=[];
  sortedRankingData:any;

  constructor(private submarketservice:SubmarketService, private sortPipe: SortPipe){};

  ngOnInit(): void {
    this.submarketrankings=this.submarketservice.submarketrankings;
    this.sortedRankingData = this.sortPipe.transform(this.submarketrankings, "asc", "price");
  }

  @Input() 
  isdarkmodechecked: string= 'notchecked';

  @Input() 
  selectedMatrix:any;
}
