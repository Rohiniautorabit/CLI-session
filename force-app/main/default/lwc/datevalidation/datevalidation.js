import { LightningElement } from 'lwc';

export default class Datevalidation extends LightningElement {
    startDate
    endDate
    error
    dateHandler(event) {
     const {name,value} = event.target;
          this[name] = value;
        //   this.startda=value - here declared varaible startDate is sames as on elightning-input
       
    }
    submitHandler(){
     if( this.validatedate(this.startDate, this.endDate)){
        console.log("valid date")
     }else{
         this.error = 'Start date must be less than end date';
     }

    }
    validatedate(startDate, endDate) {
        return new Date(startDate).getTime() < new Date(endDate).getTime();
    }
}