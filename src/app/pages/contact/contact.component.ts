import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators ,ReactiveFormsModule} from '@angular/forms';
import { HeaderComponent } from '../../components/header/header.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  imports:[HeaderComponent,CommonModule,ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  contactForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', Validators.required],
      message: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.contactForm.valid) {
      console.log("Form Submitted:", this.contactForm.value);
      alert("Message sent successfully!");
      this.contactForm.reset();
    }
  }
}
