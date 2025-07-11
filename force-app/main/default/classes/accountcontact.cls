public with sharing class accountcontact {
    @AuraEnabled(cacheable=true)
    public static List<Account> getAccounts() {
        
        return [SELECT Id, Name, Phone,Website,
        (SELECT Id, Name, Phone,Email FROM Contacts) FROM Account LIMIT 5];

    
    }

    
    
}