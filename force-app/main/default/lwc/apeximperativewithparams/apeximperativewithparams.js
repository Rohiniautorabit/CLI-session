import { LightningElement } from 'lwc';
import searchaccount from '@salesforce/apex/accountlwc.getAccounts';
export default class Apeximperativewithparams extends LightningElement {

    searchkey="";
    account;
    timer
    searchhandler(event){
        this.searchkey=event.target.value;
        window.clearTimeout(this.timer);
        this.timer=window.setTimeout(() => {
            this.callApex();
        }, 1000);
    }
    callApex(){
        searchaccount({searchkey: this.searchkey})
            .then(result => {       
                console.log(result);
                this.account=result;
                })
                
            .catch(error => {
                console.error(error);
                });
    }
            
}