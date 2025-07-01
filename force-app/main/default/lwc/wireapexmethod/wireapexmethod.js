import { LightningElement ,wire } from 'lwc';
import getAccounts from '@salesforce/apex/accountlwc.getAccounts';
export default class Wireapexmethod extends LightningElement {
    accountlist=[];
    @wire(getAccounts)
    accountlwccheck

    // to manipulate the existing data we can use the below methods
    @wire(getAccounts)
    accountlwccheck1({data,error}){
        
        if(data){
            console.log('data',data);
            this.accountlist=data.map(item=>{
             let newtype= item.Type === 'Customer - Channel' ? 'Channel' :
             item.Type === 'Customer - Direct' ? 'Direct' : '------';
            return {...item,newtype};
            })
        }
        else if(error){
            console.log('error',error);
        }
    }

}