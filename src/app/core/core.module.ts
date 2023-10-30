import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DataService } from './data.service';
import { SorterService } from './sorter.service';

@NgModule({
  //httpclientmodule use for all services which can use on dataservice and sorterservice as provider
  imports: [HttpClientModule],
  providers: [DataService, SorterService],
})
export class CoreModule {}
