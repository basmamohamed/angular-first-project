import { Component, OnInit } from '@angular/core';
import { BlogService } from '../services/blog.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent  {
  blogs;
  constructor( private blogServices : BlogService) {
    blogServices.getBlogs().subscribe((res)=>{
this.blogs=res
console.log (res);

    }
    )
   }

  

}
