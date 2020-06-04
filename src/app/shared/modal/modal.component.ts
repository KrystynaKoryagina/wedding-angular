import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { User } from '../interfaces/interfaces';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  @Output() onClose: EventEmitter<any> = new EventEmitter<void>();

  form: FormGroup;
  isSubmitted: boolean = false;
  emailPlaceholder: string = 'Enter your email...';
  passwordPlaceholder: string = 'Enter your password...';

  constructor(
    public authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.form = new FormGroup({
      email: new FormControl('', [
        Validators.required, 
        Validators.email
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(6) 
      ])
    });
  }

  submit() {
    this.isSubmitted = true;

    const user: User = {
      email: this.form.value.email,
      password: this.form.value.password
    }

    this.authService.login(user)
      .subscribe(() => {
        this.form.reset();
        this.isSubmitted = false;

        this.router.navigate(['/admin']);
      },
      () => {
        this.isSubmitted = false;
      });
  }

  closeModal():void {
    this.onClose.emit();
  }
}
