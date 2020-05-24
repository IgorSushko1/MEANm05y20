import { Component, OnInit, ElementRef, OnDestroy, AfterViewInit, ViewChild } from '@angular/core';
import { AnalyticsService } from '../shared/layout/services/analytics.service';
import { Observable } from 'rxjs';
import { OverviewPage } from '../shared/interfaces';
import { MaterialInstance, MaterialService } from '../shared/classes/material.classes';

@Component({
  selector: 'app-page-overview',
  templateUrl: './page-overview.component.html',
  styleUrls: ['./page-overview.component.scss']
})
export class PageOverviewComponent implements OnInit, OnDestroy, AfterViewInit {

  @ViewChild('tapTarget') tapTargetRef: ElementRef
  tapTarget: MaterialInstance
  data$: Observable<OverviewPage>

  yesterday: Date = new Date()

  constructor(
    private service: AnalyticsService
  ) { }


  ngOnInit(): void {
    this.yesterday.setDate(this.yesterday.getDate() - 1)

    this.data$ = this.service.getOverview()

  }

  ngOnDestroy(): void {
    this.tapTarget.destroy()
  }
  ngAfterViewInit(): void {
    this.tapTarget = MaterialService.initTapTarget(this.tapTargetRef)
  }


  openInfo() {
    this.tapTarget.open()
  }
}
