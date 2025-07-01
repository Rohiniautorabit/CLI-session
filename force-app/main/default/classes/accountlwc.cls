public with sharing class accountlwc {
    

      @AuraEnabled(cacheable=true)
       public static List<Account> getAccounts() {
            List<Account> accounts = [SELECT Id, Name,Type,Rating FROM Account LIMIT 5];
            return accounts;
        }
        @AuraEnabled(cacheable=true)
        public static List<Account> filteraccount(string type) {
             List<Account> accounts = [SELECT Id, Name,Type,Rating FROM Account where Type=:type LIMIT 10];
             return accounts;
         }
    
}