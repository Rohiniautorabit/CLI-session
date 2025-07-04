public with sharing class pdfcontroller {
   
    @AuraEnabled
    public static Attachment generatePDF(Id recordId,String htmldata) {
        PageReference pdfPage = Page.renderaspdf;
        pdfPage.getParameters().put('pdftext', htmldata);
    
        if (recordId == null || String.isEmpty(htmldata)) {
            throw new AuraHandledException('Missing record ID or HTML content.');
        }
        Account acc=new Account(Id=recordId);
        Attachment objattach=new Attachment();
        objattach.ParentId=acc.Id;
        objattach.Name='Invoice.pdf';
        objattach.Body=pdfPage.getContentAsPDF();   
        objattach.IsPrivate=false;
        insert objattach;
        return objattach;
    }
}