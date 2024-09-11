import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonService } from '../../services/common.service';

@Component({
  selector: 'app-item-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './item-form.component.html',
  styleUrl: './item-form.component.scss'
})
export class ItemFormComponent implements OnInit {
  itemForm: FormGroup;

  constructor(private fb: FormBuilder, private commonService: CommonService) {
    this.itemForm = this.fb.group({
      name: ['', Validators.required],
      releaseDate: ['', Validators.required],
      rating: [null, Validators.required],
    });
  }

  ngOnInit(): void {}

  addItem(): void {
    if (this.itemForm.valid) {
      this.commonService.addItem(this.itemForm.value).subscribe(response => {
        console.log('Item added:', response);
        this.itemForm.reset();
      });
    }
  }

  deleteItem(id: number): void {
    this.commonService.deleteItem(id).subscribe(response => {
      console.log('Item deleted:', response);
    });
  }
}