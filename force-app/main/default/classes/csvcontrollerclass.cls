public with sharing class csvcontrollerclass {
   @AuraEnabled(cacheable=true)
   public static List<Account> getAccounts(){
    return [SELECT Id,  Name, Phone, AnnualRevenue, Industry from Account 
            LIMIT 10];
   }
}