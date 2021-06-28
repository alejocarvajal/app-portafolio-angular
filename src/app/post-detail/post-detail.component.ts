import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {RestService} from "../rest.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit {
  public respuesta: any;
  public comentarios:any = [];
  public form: FormGroup;

  constructor(private route: ActivatedRoute, private RestService: RestService, private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      text: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((paramMap: any) => {
      const {params} = paramMap;
      this.cargarData(params.variable);
    });
    this.form = this.formBuilder.group({
      textAreaComentario: ['']
    });
  }

  cargarData(id: string) {
    this.RestService.get(`http://localhost:3000/posts/${id}`)
      .subscribe(respuesta => {
        this.respuesta = respuesta
      })
  }

  cargarComentarios(){
    this.RestService.get(`http://localhost:3000/comments`)
      .subscribe(respuesta => {
        this.comentarios = respuesta;
      } )
  }

  public enviarData() {
    this.RestService.post(`http://localhost:3000/comments`,
      {text: this.form.value.textAreaComentario}
    )
      .subscribe(respuesta => {
        console.log('comentario enviado');
        this.form.reset();
        this.cargarComentarios();
      })
  }

}
