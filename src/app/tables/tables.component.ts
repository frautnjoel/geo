import { Component, OnInit } from '@angular/core';

declare interface TableData {
    headerRow: string[];
    dataRows: string[][];
}

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.css']
})
export class TablesComponent implements OnInit {
    public tableData1: TableData;
    

  constructor() { }

  ngOnInit() {
      this.tableData1 = {
          headerRow: [ 'ID', 'Name', 'Address', 'Phone', 'Location'],
          dataRows: [
              ['1', 'Dakota Rice', 'Address 1234', '223-489-1234', ''],
              ['2', 'Minerva Hooper', 'Address 2345', '223-434-2354', ''],
              ['3', 'Sage Rodriguez', 'Address 5467', '223-423-9867', ''],
              ['4', 'Philip Chaney', 'Address 345', '223-489-4876', ''],
              ['5', 'Doris Greene', 'Address 875', '223-456-7132', ''],
              ['6', 'Mason Porter', 'Address 1294', '223-429-4860', ''],
          ]
      };
    }

}
