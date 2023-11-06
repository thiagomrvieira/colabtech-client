import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RegisterDetailsService } from '../services/register-details.service';
import { RegisterDetailsModel } from '../interfaces/register-details.model';

@Component({
  selector: 'app-register-details',
  templateUrl: './register-details.component.html',
  styleUrls: ['./register-details.component.css']
})
export class RegisterDetailsComponent implements OnInit {
  registerDetails!: RegisterDetailsModel;

  constructor(
    private registerDetailsService: RegisterDetailsService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      if (params && params['id']) {
        this.registerDetailsService.getRegisterDetails(params['id']).subscribe((data: any) => {
          this.registerDetails = data.data as RegisterDetailsModel;
        });
      }
    });
    
  }
  goBack(): void {
    this.router.navigate(['/registros']); // Redireciona de volta para a lista de registros
  }

  validateRegistration() {
    if (this.registerDetails && this.registerDetails.id) {
      this.registerDetailsService
        .updateRegister(this.registerDetails.id)
        .subscribe((response: any) => {
          if (response.validated) {
            this.registerDetails.validated = true;
          } else {
            // Handle validation error
          }
        });
    }
  }
}
