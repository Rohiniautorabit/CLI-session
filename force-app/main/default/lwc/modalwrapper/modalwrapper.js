import { LightningElement } from 'lwc';

export default class Modalwrapper extends LightningElement {

    isopen=false;
    
    openModal() {
        this.isopen = true;
    }   
    closeHandler(){
           this.isopen = false;
    }
}