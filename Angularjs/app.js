
(function(){
    var app = angular.module('store', []); 
    
    app.controller('StoreController', function(){
        this.product = gem;
        
        });
    
    var gem = [
        {
            name: 'Dodecahedron',
            price: 2.95,
            description: '...',
            canPurchase:true,
            soldOut:false
        },
        {
            name: 'Pentagonal gem',
            price: 5.95,
            description: '...',
            canPurchase:true,
            soldOut:false
        },             

    ];
    
})();


