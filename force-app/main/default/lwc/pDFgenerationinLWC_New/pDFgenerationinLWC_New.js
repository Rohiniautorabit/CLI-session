import { LightningElement ,api} from 'lwc';
import generatePDF from '@salesforce/apex/pdfcontroller.generatePDF';
export default class pDFgenerationinLWC extends LightningElement {

    // Data which will be used to generate PDF
    @api recordId;
    imageUrl = 'https://www.sparksuite.com/images/logo.png'
    invoiceData={
        invoiceNo:'123',
        invoiceCreated:'January 1, 2019',
        invoiceDue:'January 10, 2020',
        companyName:'Sparksuite, Inc.',
        address1:'12345 Sunny Road',
        address2:' Sunnyville, CA 12345'
    }
    clientData={
        client:'Acme Corp',
        username:'John Doe',
        email:'john@example.com'
    }
    services=[
        {name:'Consultant fee', amount:1000.00},
        {name:'Website design', amount:300.00},
        {name:'Hosting (3 months)', amount:75.00}
    ]

    get totalAmount() {
        return this.services.reduce((total, service) => total + service.amount, 0).toFixed(2);
    }
    pdfHandler() {  
        let content=this.template.querySelector('.container');
        console.log(content.outerHTML);
        console.log(this.recordId);
        generatePDF({recordId:this.recordId, htmldata: content.outerHTML}).then(result => {
            console.log(result);    
            window.open(`/servlet/servlet.FileDownload?file=${result.Id}`, '_blank');
         
        }).catch(error => {
            console.error('Error generating PDF:', error);  

        });
    }
}