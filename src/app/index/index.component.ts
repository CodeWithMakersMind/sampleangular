import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { ApitestService } from '../apitest.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrl: './index.component.css',
})
export class IndexComponent {
  coursesData: any;

  constructor(private service: ApitestService) {}

  customOptions: OwlOptions = {
    loop: true,
    autoplay: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    navSpeed: 700,
    navText: ['', ''],
    margin: 20,
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 2,
      },
      740: {
        items: 4,
      },
      940: {
        items: 4,
      },
    },
    nav: true,
  };

  courses() {
    this.service.getCourses().subscribe((result: any) => {
      this.coursesData = result?.data;
      // console.log('courses ====>', this.coursesData);
    });
  }

  ngOnInit(): void {
    this.courses();
  }
}
