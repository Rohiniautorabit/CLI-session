public with sharing class contactcontroller {
    
    @AuraEnabled(cacheable=true)
    public static List<Contact> getContacts() {
        // Query to fetch all contacts
        return [SELECT Id, Name,Title, Email FROM Contact LIMIT 10];

    }
}