import { LightningElement } from 'lwc';
import { loadStyle } from 'lightning/platformResourceLoader';
import input from '@salesforce/resourceUrl/input'
export default class Lwcwithinputicons extends LightningElement {
       showpassword = false;
    connectedCallback() {
        loadStyle(this, input)
            .then(() => {
                console.log('CSS loaded successfully');
            })
            .catch(error => {
                console.error('Error loading CSS:', error);
            });
    }
    get passwordIcon() {
        return this.showpassword ? 'utility:hide' : 'utility:preview';
    }
    get passwordType(){
        return this.showpassword ? 'text' : 'password'; 

        }
    passwordHandler(){
        this.showpassword = !this.showpassword; 
    }
}