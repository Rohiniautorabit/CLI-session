import { LightningElement ,api} from 'lwc';

export default class Googleactioninlwc extends LightningElement {
    @api recordId;

    @api invoke(){

    console.log(`Google Action invoked for record ID: ${this.recordId}`);
    window.open("https://www.google.com/", "_blank");
    }
}