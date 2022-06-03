import { Component, OnInit } from '@angular/core';
import { ServiceConsult } from 'src/app/models/service.model';
import { ServiceService } from 'src/app/services/service.service';

@Component({
  selector: 'app-hour-worked',
  templateUrl: './hour-worked.component.html',
  styleUrls: ['./hour-worked.component.css'],
})
export class HourWorkedComponent implements OnInit {
  displayedColumns: string[] = [
    'id',
    'resultado',
  ];

  dataSource: ServiceConsult[] = [];

  constructor(private readonly serviceService: ServiceService) {}

  ngOnInit(): void {}

  getServiceConsult(data: any) {
    console.log(data);
    
    this.dataSource = [...data];

  }
  eliminar() {
    this.serviceService.delete().subscribe((data: ServiceConsult) => {window.location.reload(); });
  }
}
