public with sharing class simplemerge {
    public static void simplemerge(String emailid,String accid){ 

        // get the list of contacts
        List<Contact> duplicatecontact=[SELECT Id,Email,AccountId FROM Contact WHERE Email=:emailid AND AccountId=:accid];

        // check if its gerater thn 0
           if(duplicatecontact.size()<0){
               System.debug('No duplicate contacts found');
               return;
           }else {
            Contact master=duplicatecontact[0];
            Integer count=1;
            while(count<duplicatecontact.size()){
                List<Contact> batch=new List<Contact>();
                if(count<duplicatecontact.size()){
                    batch.add(duplicatecontact[count]);
                }
                if(count+1<duplicatecontact.size()){
                    batch.add(duplicatecontact[count+1]);
                }
                Database.MergeResult[] results=Database.merge(master,batch,false);
                for(Database.MergeResult result:results){
                    if(result.isSuccess()){
                         System.debug('Merged contact Id: '+result.getId());
                         System.debug('original contact Ids: '+result.getMergedRecordIds());

                    }else{
                        for(Database.Error error:result.getErrors()){
                            System.debug('Error merging contacts: '+error.getMessage());
                        }
                    }
                }
                count+=2;
            }
           }
    


    }
}