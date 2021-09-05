import {AfterViewInit, Component, OnInit} from '@angular/core';
import {Chart, registerables} from 'chart.js';
import {Vote} from '../vote';
import {VoteServiceService} from '../vote-service.service';
import ChartDataLabels from 'chartjs-plugin-datalabels';


Chart.register(...registerables);
Chart.register(ChartDataLabels);
Chart.defaults.set('plugins.datalabels', {
  color: 'black',
  anchor: 'center',
});


@Component({
  selector: 'app-chart-demo',
  templateUrl: './chart-demo.component.html',
  styleUrls: ['./chart-demo.component.css']
})
export class ChartDemoComponent implements OnInit, AfterViewInit {
  canvas: any;
  ctx: any;
  labelList = [];
  dataList = [];
  data1: [{x: 10, y: 20}, {x: 15, y: null}, {x: 20, y: 10}];
  constructor(private voteService: VoteServiceService) {
  }

  ngOnInit(): void {
    this.voteService.findAll().subscribe(value => {
      for (const vote of value) {
        this.labelList.push(vote.name);
        this.dataList.push(vote.vote);
      }
    }, error => console.log('loi: ' + error), () => this.initChart());
  }

  ngAfterViewInit(): void {
  }

  initChart(): void {
    // this.canvas = document.getElementById('myChart');
    // this.ctx = this.canvas.getContext('2d');
    // console.log(this.ctx);
    // @ts-ignore
    const myChart = new Chart('myChart', {
      plugins: [ChartDataLabels],
        type: 'bar',
        data: {
          labels: this.labelList,
          datasets: [
          //   {
          //   label: 'vote cute man',
          //   data: [5200, 2310, 6400, 4436],
          //   backgroundColor: '#00008B'
          //   // borderColor: 'rgb(54, 162, 235)'
          // },
            {
            label: 'votes',
            // data: [{x: 10, y: 20}, {x: 15, y: null}, {x: 20, y: 10}],
            data: this.dataList,
            backgroundColor: [
              '#FA43AE',
              '#BADE43',
              '#FFB74D',
              '#56F5C5'
            ],
            borderWidth: 1
          }]
        },
      options: {
          plugins: {
            title: {
              display: true,
              text: 'Vote the best goal chart',
              position: 'bottom',
              color: '#434ADE'
            }
          }
        }
      })
    ;
  }
}
