import { LightningElement } from 'lwc';
import chartJs from '@salesforce/resourceUrl/chartJs';
import { loadScript } from 'lightning/platformResourceLoader';
export default class Chartinlwc extends LightningElement {
    ischartinitialized;
renderedCallback() {
    if (this.ischartinitialized) {
        return;
    }

loadScript(this, chartJs + '/chartJs/Chart.js')
    .then(() => {
        console.log('Chart.js library loaded successfully');
        this.ischartinitialized = true; 
    })
    .catch(error => {
        console.error('Error loading Chart.js library:', error);
    });
}
}