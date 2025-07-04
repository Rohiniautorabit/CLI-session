public with sharing class PDFPAgeController {
    public string pdftext { get; set; }
    public PDFPAgeController() {
        // Initialize the pdftext variable with an empty string
        pdftext = String.escapeSingleQuotes(
            ApexPages.currentPage().getParameters().get('pdftext')
        );
    }
}