public with sharing class Refreshcontactcontroller {


    @AuraEnabled(cacheable=true)
    public static List<Contact> getcontactlist() {
         List<Contact> cont = [SELECT Id, FirstName,LastName,Email FROM Contact LIMIT 5];
            return cont;
     }
}