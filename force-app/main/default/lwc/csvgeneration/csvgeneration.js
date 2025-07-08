import { LightningElement, wire } from 'lwc';
import getAccounts from '@salesforce/apex/csvcontrollerclass.getAccounts';
import exportcsvfile from 'c/csvgenerationutils';
export default class csvgeneration extends LightningElement {
       accountdata
    //    below will be the header of the csv file
    accountHeaders={
        Id:"Record Id",
        Name:"Name",
        AnnualRevenue:"Annual Revenue",
        Industry:"Industry",
        Phone:"Phone"
    }
    
    //    fetching the accounts from apex class using wire service and assigning to account data 
    @wire(getAccounts)
    accounthandler({ data, error }) {
        if (data) {
            
            this.accountdata=data;
            console.log('Data received:',this.accountdata);
            console.log( 'Data accountHeaders:', this.accountHeaders);
        } 
         if (error) {
            console.error('Error fetching accounts:', error);
        }
    }
    
    // passing the header and account data to the csv file

    csvgenerator(){
        console.log('Generating CSV...');
        console.log('Header:',this.accountHeaders);
        console.log('Account Data:', this.accountdata);
        
        exportcsvfile( this.accountHeaders,this.accountdata, "AccountData");
        console.log('complee CSV...');
    }
}