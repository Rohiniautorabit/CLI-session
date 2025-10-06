public with sharing class insertdml {
    public static void insertdmlstatement(String accname, String phone) {

        try{
            Account acc=new Account();
        acc.Name=accname;
        acc.Phone=phone;
        insert acc;
        
        }catch(DmlException e){
            System.debug('Exeception: ' +e.getMessage());

        }

    }
    public static void insertviadatabasecollection(List<Account> acclist){
        try{
          
              Database.SaveResult[] res=Database.insert(acclist,false);
              for(Integer i=0;i<res.size();i++){
                if(res[i].isSuccess()){
                    System.debug('Account inserted with id: ' +res[i].getId());
                }else{
                    for(Database.Error err:res[i].getErrors()){
                        System.debug('Error inserting account: ' +err.getMessage());
                    }
                }
              }
          
          
        }catch(DmlException e){
            System.debug('Exeception: ' +e.getMessage());

        }
    }
}