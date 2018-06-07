import {Component, OnInit} from '@angular/core';
import {BlogService} from './blog.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title: string;
  description: string;
  total: number;
  posts: any[];

  constructor(private blogService: BlogService) {}

  ngOnInit() {

    this.blogService.getJSON().subscribe((data: any) => {
      this.title = data.tumblelog.title;
      this.description = data.tumblelog.description;
      this.total = data.posts_total;
      this.posts = data.posts;
    });

  }


}

