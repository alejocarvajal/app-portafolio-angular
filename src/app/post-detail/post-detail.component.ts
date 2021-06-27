import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {RestService} from "../rest.service";

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit {
  public respuesta:any;

  constructor(private route:ActivatedRoute, private RestService:RestService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe( (paramMap:any) => {
      const {params} = paramMap;
      this.cargarData(params.variable);
    })
  }

  cargarData(id:string) {
    this.RestService.get(`ttps://jsonplaceholder.typicode.com/posts/${id}`)
      .subscribe(respuesta => {
        this.respuesta = respuesta
      })
  }

}
