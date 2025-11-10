public class jobchangecontroller {
    public Job__c jobstatus {get;set;}
    public Boolean showfeld {get;set;}
    public jobchangecontroller(ApexPages.StandardController std) {
        std.addFields(new List<String>{'JobStatus__c', 'Interviewed_by__c'});
       this.jobstatus=(Job__c) std.getRecord();
        
    }
    
public void fetchCurrentStatus(){
    System.debug('JobStatus__c: ' + jobstatus.JobStatus__c);
  
    if(jobstatus.JobStatus__c == 'Interviewed'){
        showfeld = true;
    } else {
        showfeld = false;
    }
    System.debug('showfeld: ' + showfeld);
}
    public void saverecord(){
        update jobstatus ;
    }
}