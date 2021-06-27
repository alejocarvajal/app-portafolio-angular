import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {PostDetailComponent} from "./post-detail/post-detail.component";
import {HomeComponent} from "./home/home.component";

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'post/:variable',
    component: PostDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
