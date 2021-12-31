import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MemoryComponent} from "./memory/memory.component";

const routes: Routes = [
  {path: '', component: MemoryComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
