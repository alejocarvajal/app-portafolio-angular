import {Component, OnInit} from '@angular/core';
import {DomSanitizer} from "@angular/platform-browser";
import {RestService} from '../rest.service';

@Component({
  selector: 'app-upload-page',
  templateUrl: './upload-page.component.html',
  styleUrls: ['./upload-page.component.css']
})
export class UploadPageComponent implements OnInit {
  public archivos: any;
  public previsualizacion: string
  public files: any = []
  public loading: boolean;

  constructor(private sanitizer: DomSanitizer, private rest: RestService) {
    this.archivos = [];
    this.previsualizacion = "";
    this.loading = false;
  }

  ngOnInit(): void {
  }

  capturarFile(event: any): any {
    const ArchivoCapturado = event.target.files[0];
    this.blobFile(ArchivoCapturado).then((imagen: any) => {
      this.previsualizacion = imagen.base;
    })
  }

  subirArchivo = () => {
    try {
      this.loading = true;
      const formularioDatos = new FormData();
      this.archivos.forEach((archivo:any) => {
        formularioDatos.append('files', archivo)
      });
      this.rest.post(`http://localhost:3000/files`, formularioDatos)
        .subscribe(res => {
          this.loading = false;
          console.log('Carga exitosa');


        });
    } catch (e) {
      this.loading = false;
      console.log('ERROR', e);
    }
  }

  blobFile = async ($event: any) => new Promise((resolve, reject) => {
    try {
      const unsafeImg = window.URL.createObjectURL($event);
      const image = this.sanitizer.bypassSecurityTrustUrl(unsafeImg);
      const reader = new FileReader();
      reader.readAsDataURL($event);
      reader.onload = () => {
        resolve({
          blob: $event,
          image,
          base: reader.result
        });
      };
      reader.onerror = error => {
        resolve({
          blob: $event,
          image,
          base: null
        });
      };
      return;

    } catch (e) {
      return null;
    }
  })

}
