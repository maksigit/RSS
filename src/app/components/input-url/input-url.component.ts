import {Component, OnInit, ViewChild} from '@angular/core';
import {ServService} from '../../myService/serv.service';
import {ChartComponent} from '../chart/chart.component';

@Component({
    selector: 'app-input-url',
    templateUrl: './input-url.component.html',
    styleUrls: ['./input-url.component.scss']
})


export class InputUrlComponent implements OnInit {

    @ViewChild(ChartComponent) child: ChartComponent;

    inputValue = '';
    arrInputValue = [];
    content;
    parseContent;
    parser = new DOMParser();
    items;
    arrAlphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    objAlphabet = {
        A: 0,
        B: 0,
        C: 0,
        D: 0,
        E: 0,
        F: 0,
        G: 0,
        H: 0,
        I: 0,
        J: 0,
        K: 0,
        L: 0,
        M: 0,
        N: 0,
        O: 0,
        P: 0,
        Q: 0,
        R: 0,
        S: 0,
        T: 0,
        U: 0,
        V: 0,
        W: 0,
        X: 0,
        Y: 0,
        Z: 0
    };

    numbers = [];

    constructor(private api: ServService) {
    }

    ngOnInit() {
    }

    listenInput(e) {
        this.inputValue = e.target.value ? e.target.value : null;
    }

    sendInputUrl() {
        this.arrInputValue.push(this.inputValue);
    }

    getLetters(letters) {
        this.numbers =[];
        this.objAlphabet = {A: 0,B: 0,C: 0,D: 0,E: 0,F: 0,G: 0,H: 0,I: 0,J: 0,K: 0,L: 0, M: 0,N: 0,O: 0,P: 0,Q: 0,R: 0,S: 0,T: 0,U: 0,V: 0,W: 0,X: 0,Y: 0,Z: 0};

        for (let i = 0; i < letters.length; i++) {
            for(let j = 0; j < this.arrAlphabet.length; j++) {
                if(letters[i] === this.arrAlphabet[j]) {
                    this.objAlphabet[letters[i]] += 1;
                }
            }
        }
        for (var key in this.objAlphabet) {
            this.numbers.push(this.objAlphabet[key])
        }

        this.child.changeData();
    }

    getData(url) {
        var inputLink = document.getElementById('input-link');
        this.api.getFromUrl(url).subscribe((data) => {
                this.content = data ? data : '';
                this.parseContent = this.parser.parseFromString(this.content, "text/xml");
                this.items = this.parseContent.getElementsByTagName('item');
                this.getLetters(this.content);
            }
        );
    }
}
