import { Component, OnInit, ViewChild, ElementRef, OnDestroy, AfterViewInit } from '@angular/core';
import { MaterialInstance, MaterialService } from '../shared/classes/material.classes';

@Component({
  selector: 'app-page-history',
  templateUrl: './page-history.component.html',
  styleUrls: ['./page-history.component.scss']
})
export class PageHistoryComponent implements OnInit, OnDestroy, AfterViewInit {

  @ViewChild('tooltip') tooltipRef: ElementRef
  tooltip: MaterialInstance
  isFilterVisible = false

  constructor() { }

  ngOnInit(): void {
  }

  ngOnDestroy() {
    this.tooltip.destroy()
  }

  ngAfterViewInit() {
    this.tooltip = MaterialService.initTooltip(this.tooltipRef)
  }

}
