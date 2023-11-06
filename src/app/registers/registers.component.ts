import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EmployeeResponse } from './employee-response.interface';


@Component({
  selector: 'app-registers',
  templateUrl: './registers.component.html',
  styleUrls: ['./registers.component.css']
})

export class RegistersComponent implements OnInit {
  filters: any = {};
  registers: any;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.loadRegisters();
  }

  loadRegisters() {
    this.http
      .get('http://127.0.0.1:8000/api/v1/employees', { params: this.filters })
      .subscribe((data: any) => {
        this.registers = data.data;
      });
  }

  onFilterChange() {
    this.loadRegisters();
  }
}
