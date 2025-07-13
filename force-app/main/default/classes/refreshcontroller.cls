public with sharing class refreshcontroller {
    @AuraEnabled
    public static List<Account> getAccountRating(Id accountId) {
        return [SELECT Id, Rating from Account where Id = :accountId];
    }
}