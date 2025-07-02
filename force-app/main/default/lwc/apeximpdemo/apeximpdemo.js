import { LightningElement } from 'lwc';
import filteraccount from '@salesforce/apex/accountlwc.getAccounts';
export default class Apeximpdemo extends LightningElement {

    accountlist
    handleclick()
    {
        
        filteraccount()
            .then(result => {
                this.accountlist=result;
                console.log('Accounts:', result);
            })
            .catch(error => {
                console.error('Error fetching accounts:', error);
            });
    }
}