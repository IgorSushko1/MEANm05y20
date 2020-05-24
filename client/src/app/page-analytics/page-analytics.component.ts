import { Component, ViewChild, ElementRef, AfterViewInit, OnDestroy } from '@angular/core';
import { AnalyticsService } from '../shared/layout/services/analytics.service';
import { AnalyticsPage } from '../shared/interfaces';
import { Subscription } from 'rxjs';
import { Chart } from 'chart.js';


@Component({
  selector: 'app-page-analytics',
  templateUrl: './page-analytics.component.html',
  styleUrls: ['./page-analytics.component.scss']
})
export class PageAnalyticsComponent implements AfterViewInit, OnDestroy {

  @ViewChild('gain') gainRef: ElementRef
  @ViewChild('order') orderRef: ElementRef

  aSub: Subscription

  average: number
  pending = true

  constructor(
    private service: AnalyticsService
  ) { }

  ngAfterViewInit() {
    const gainConfig: any = {
      label: 'Выручка',
      color: 'rgb(255, 99, 132)'
    }

    const orderConfig: any = {
      label: 'Заказы',
      color: 'rgb(54, 162, 235)'
    }

    this.aSub = this.service.getAnalytics().subscribe(
      (data: AnalyticsPage) => {
        this.pending = false
        this.average = data.average

        gainConfig.labels = data.chart.map(item => item.label)
        gainConfig.data = data.chart.map(item => item.gain)

        orderConfig.labels = data.chart.map(item => item.label)
        orderConfig.data = data.chart.map(item => item.order)

        // ***** temp *****
        // gainConfig.labels.push('27.05.2020')
        // gainConfig.data.push(1500)

        // orderConfig.labels.push('27.05.2020')
        // orderConfig.data.push(8)
        // ***** temp *****


        const gainCtx = this.gainRef.nativeElement.getContext('2d')
        const orderCtx = this.orderRef.nativeElement.getContext('2d')

        gainCtx.canvas.height = '300px'
        orderCtx.canvas.height = '300px'


        new Chart(gainCtx, createChartConfig(gainConfig))
        new Chart(orderCtx, createChartConfig(orderConfig))

      }
    )
  }

  ngOnDestroy() {
    if (this.aSub) {
      this.aSub.unsubscribe()
    }
  }
}

function createChartConfig({ labels, data, label, color }) {
  return {
    type: 'line',
    options: {
      responsive: true
    },
    data: {
      labels,
      datasets: [
        {
          label, data,
          borderColor: color,
          steppedLine: false,
          fill: false
        }
      ]
    }
  }
}