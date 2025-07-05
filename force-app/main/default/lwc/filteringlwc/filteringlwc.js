import { LightningElement,wire } from 'lwc';
import getContacts from '@salesforce/apex/contactcontroller.getContacts';
export default class filteringlwc extends LightningElement {
    heading=["Id","Name","Title","Email"];
    fulldatatable=[];
    filteredtable=[];
    filterby="Name"
    timer;

    @wire(getContacts)
    contactHandler({data,error}) {
        if (data) {
        // When you log data directly, the browser console may display the object in a collapsible format, which can make it harder to see the full structure at a glance.
        // Using JSON.stringify(data) converts the object or array into a JSON string, making it easier to read and understand the structure. !-->

            console.log("contct data: "+JSON.stringify(data));
            this.fulldatatable = data;
            this.filteredtable = data;
        } else if (error) {
            console.error(error);
        }
    }
    get filteroption(){
        return [
            {label:"All", value:'All'},
            {label:"Id", value:'Id'},
            {label:'Name', value:'Name'},
            {label:'Title', value:'Title'},
            {label:'Email', value:'Email'}
        ]
}

    filterbyhandler(event){
        this.filterby = event.target.value;
    
    }
  
    filterhandler(event) {
        const value = event.target.value;
        window.clearTimeout(this.timer);
        if(value){
            this.timer=window.setTimeout(() => {
                this.filteredtable = this.fulldatatable.filter(row => {
                    if(this.filterby === 'All'){
                        return Object.keys(row).some((key) => {
                            return row[key] && row[key].toString().toLowerCase().includes(value.toLowerCase());
                        })
                       
                    } else {   
                        const val =row[this.filterby] ? row[this.filterby].toString().toLowerCase() : '';
                        return val.toLowerCase().includes(value);
                    } 

                }
                );
            },500);   
        }else{
            this.filteredtable = [...this.fulldatatable];
        }
        
    }
}