import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EmployeeResponse } from './employee-response.interface';


@Component({
  selector: 'app-registers',
  templateUrl: './registers.component.html',
  styleUrls: ['./registers.component.css']
})

export class RegistersComponent implements OnInit {
  registers: any;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http
      .get<EmployeeResponse>('http://127.0.0.1:8000/api/v1/employees')
      .subscribe((response) => {
        this.registers = response.data;
      });
  }
}
