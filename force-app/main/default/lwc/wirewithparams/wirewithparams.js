import { LightningElement ,wire,track} from 'lwc';
import filteraccount from '@salesforce/apex/accountlwc.getAccounts';
export default class Wirewithparams extends LightningElement {
    @track selectedtype='';
    @wire(filteraccount,{type:'$selectedtype'})
   filteredaccount

   get typeoptions(){
         return [
              {label:'Customer-Channel',value:'Customer-Channel'},
              {label:'Customer-Direct',value:'Customer-Direct'}
         ]
    }
    handleChange(event){
        this.selectedtype=event.detail.value;
    }
    
}