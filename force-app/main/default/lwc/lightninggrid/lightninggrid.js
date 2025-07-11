import { LightningElement, wire } from 'lwc';
import getAccounts from '@salesforce/apex/accountcontact.getAccounts';
export default class Lightninggrid extends LightningElement {
griddata=[];
@wire(getAccounts)
accounts({data,error}){
    if(data){
        console.log("tree grid "+ JSON.stringify(data));
        this.formartgriddata(data);
     }
     if(error){
         console.error('error', error);
     }
}
// feildname - is actual feild name on object, type is text or number , label is name displayed on UI

gridColumns=[
    {
    label: 'Name',
    fieldName: 'Name',
    type: 'text'
}, 
{
label:'Phone',
fieldName:'Phone',
type:'text'
},
{
label:'Account Website',
fieldName:'Website',
type:'url',
typeAttributes:{
    target:'_blank'
}
}
]

dummyData = [
    {
        Name: 'Salesforce',
        Email: 'Salesforce@gmail.com',
        Website: 'salesforcetroop.com'
    },
    {
        Name: 'Troop',
        Email: 'troop@gmail.com',
        Website: 'salesforcetroop.com'
    }
]



formartgriddata(result) {
    this.griddata = result.map((item) => {
        const { Contacts, ...accounts } = item; // Adjust based on the actual structure
        console.log("contact for data grid: ", JSON.stringify(Contacts));
        console.log("accounts for data grid: ", JSON.stringify(accounts));
        const updatedContact = (Contacts || []).map((cont)=>{
            return {...cont, "_children":this.dummyData}
        })
        return { ...accounts, "_children": updatedContact };
    });
    console.log("grid data: ", JSON.stringify(this.griddata));
}


}