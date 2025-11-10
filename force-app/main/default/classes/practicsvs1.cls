public with sharing class practicsvs1 {
    public Job__c jobstatus {get;set;}
    public Boolean display {get;set;}
    public practicsvs1(ApexPages.StandardController std) {
        std.addFields(new List<String>{'JobStatus__c', 'Interviewed_by__c'});
        this.jobstatus=(Job__c) std.getRecord();
        this.display = false;
    }
//  for conditional display of field
    public void conditionaldisplay(){
        // to get the feild valu dynamically
        String interviewlabel='';
        
        if (jobstatus == null) return;
        Schema.DescribeFieldResult fieldresult=Job__c.JobStatus__c.getDescribe();
        List<Schema.PicklistEntry> picklistvalues=fieldresult.getPicklistValues();
        System.debug(interviewlabel);
        for(Schema.picklistEntry entry:picklistvalues){
            if(entry.getLabel().equalsIgnoreCase('Interviewed')){
                interviewlabel=entry.getValue();
                System.debug(interviewlabel);
                break;
            }
        }
        // if(jobstatus!=null && jobstatus.JobStatus__c!=null &&jobstatus.JobStatus__c.equalsIgnoreCase(interviewlabel)){
        
        System.debug(interviewlabel);
        // we have check conditional display now
        if(jobstatus != null && 
        jobstatus.JobStatus__c != null && 
        jobstatus.JobStatus__c.equalsIgnoreCase(interviewlabel)){
            display=true;
        }else{
            display=false;
            // to makethis field null when other than interviewed
            jobstatus.Interviewed_by__c=null;
        }

    }

// save the record
    public PageReference saverecord(){


        try {
            // we need to check if interview field is filled and display is true
            if(display && String.isBlank(jobstatus.Interviewed_by__c)){
                ApexPages.addMessage(new ApexPages.Message(ApexPages.Severity.ERROR,'Please fill the Interviewed By field.'));
                return null;
            }
            update jobstatus ;
            ApexPages.addMessage(new ApexPages.Message(ApexPages.Severity.CONFIRM,'Record updated successfully.'));
            
        }Catch(DMLException e){
        
            ApexPages.addMessages(e);
            
        }
        // since same page is to be displayed
        return null;
    }
}