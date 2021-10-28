import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { CommentsService } from '../../services/comments.service';
import { CommentsInterface } from 'src/app/models/comments.model';

@Component({
  selector: 'app-edit-comment',
  templateUrl: './edit-comment.component.html',
  styleUrls: ['./edit-comment.component.css']
})
export class EditCommentComponent implements OnInit {

  constructor(private route: ActivatedRoute, private dataService: CommentsService, private router: Router) { }

  dataEntry: CommentsInterface;
  id: number;

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.fetchEntry();
  }

  fetchEntry() {
    this.dataService.getComment(this.id).subscribe((res: any) => {
      this.dataEntry = res;
      console.log(this.dataEntry);
    })

  }

  onSubmit() {
    console.log(this.dataEntry);


    this.dataService.editComment(this.dataEntry)
      .subscribe(response => {
        console.log(response);
        this.router.navigate(['/my-account'])
      }), err => {
        console.log(err);
      }
    this.router.navigate(['/my-account'])
  }



}
