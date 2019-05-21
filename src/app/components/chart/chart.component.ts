import {Component, Input, OnInit} from '@angular/core';


@Component({
    selector: 'app-chart',
    templateUrl: './chart.component.html',
    styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit {

    @Input() dataChart: any;

    data: any;
    changedData;

    constructor() {

        this.data = {
            labels: ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'],
            datasets: [
                {
                    data: this.dataChart,
                    backgroundColor: [
                        "#FF6384",
                        "#36A2EB",
                        "#FFCE56",
                        "#ADFF2F",
                        "#98FB98",
                        "#3CB371",
                        "#3CB371",
                        "#6B8E23",
                        "#20B2AA",
                        "#4682B4",
                        "#1E90FF",
                        "#2F4F4F",
                        "#BDB76B",
                        "#BC8F8F",
                        "#FFDEAD",
                        "#808080",
                        "#778899",
                        "#AFEEEE",
                        "#000080",
                        "#0000FF",
                        "#191970",
                        "#483D8B",
                        "#6A5ACD",
                        "#0000FF",
                        "#8B008B",
                        "#CD5C5C",
                        "#F08080",
                    ],
                    hoverBackgroundColor: [
                        "#FF6384",
                        "#36A2EB",
                        "#FFCE56"
                    ]
                }]
        };
    }

    ngOnInit() {
    }

    changeData() {
        this.changedData = {
            labels: ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'],
            datasets: [
                {
                    data: this.dataChart,
                    backgroundColor: [
                        "#FF6384",
                        "#36A2EB",
                        "#FFCE56",
                        "#ADFF2F",
                        "#98FB98",
                        "#3CB371",
                        "#3CB371",
                        "#6B8E23",
                        "#20B2AA",
                        "#4682B4",
                        "#1E90FF",
                        "#2F4F4F",
                        "#BDB76B",
                        "#BC8F8F",
                        "#FFDEAD",
                        "#808080",
                        "#778899",
                        "#AFEEEE",
                        "#000080",
                        "#0000FF",
                        "#191970",
                        "#483D8B",
                        "#6A5ACD",
                        "#0000FF",
                        "#8B008B",
                        "#CD5C5C",
                        "#F08080",
                    ],
                    hoverBackgroundColor: [
                        "#FF6384",
                        "#36A2EB",
                        "#FFCE56"
                    ]
                }]
        };
        this.data = Object.assign({}, this.changedData);
    }
}
