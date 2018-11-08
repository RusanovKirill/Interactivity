import {Component, OnInit, ViewChild} from '@angular/core';
import {MatSort, MatTableDataSource} from '@angular/material';
import {TableServiceService} from './table-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  @ViewChild(MatSort) sort: MatSort;
  dataSource;
  displayedColumns = ["colorName","hexValue"];
  constructor( private TableServiceService: TableServiceService ) {}

  ngOnInit(data){
    this.TableServiceService.getUser().subscribe(res => {
      if(!res.colorsArray){
        return;
      }
      this.dataSource = new MatTableDataSource(res.colorsArray);
      this.dataSource.sort = this.sort
    });
  }
}
