import { Component, Inject } from '@angular/core';
import { MatDialogRef,MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import {MatButtonModule, MatFabButton} from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { Task } from '../task/task';
import { MatIconModule } from '@angular/material/icon';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-task-dialog',
  standalone: true,
  imports: [MatInputModule,FormsModule,MatDialogModule,MatButtonModule,MatIconModule,MatFabButton,NgIf],
  templateUrl: './task-dialog.component.html',
  styleUrl: './task-dialog.component.css'
})
export class TaskDialogComponent {
  private backupTask: Partial<Task> = { ...this.data.task };

  constructor(
    public dialogRef:MatDialogRef<TaskDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data:TaskDialogData
  ){ }


  cancel(): void {
    this.data.task.title = this.backupTask.title;
    this.data.task.description = this.backupTask.description;
    this.dialogRef.close(this.data);
  }
}

export interface TaskDialogData {
  task: Partial<Task>;
  enableDelete: boolean;
}

export interface TaskDialogResult {
  task: Task;
  delete?: boolean;
}