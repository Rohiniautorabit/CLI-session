import { LightningElement,wire } from 'lwc';
import { getRelatedListInfo } from 'lightning/uiRelatedListApi';
export default class Relatedlistinfodemo extends LightningElement {

    relatedListData

    @wire(getRelatedListInfo, {
       parentObjectApiName:'Account',  // This is an API name of a parent object that you want to get related list for
        relatedListId: 'Contacts' // Api name of related list object
        // recordTypeId:'' //optional
    })getdata({data,error}){
        if(data){
            this.relatedListData = data.displayColumns;
            console.log('relatedListDatainfo',JSON.stringify(data));
        }else if(error){
            console.error('error',error);
        }
    }

}