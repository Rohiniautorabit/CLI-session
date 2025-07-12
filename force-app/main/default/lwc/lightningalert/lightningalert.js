import { LightningElement } from 'lwc';
import LightningAlert from 'lightning/alert'
export default class lightningalert extends LightningElement {
    async alertHandler(event){
        const {name}=event.target;
      await LightningAlert.open({

        message:"This is the alert message",
        // variant:"headerless",
        label:`I am ${name} Alert Header`,
        theme:name // success ->green, warning -> orange, error --> red, info -->grey
    
        })
       
        let x=4;
        let y=9;    
        this.add(x,y);
    }
       add(x,y){
        console.log("Sum is: ",x+y);
       }
}