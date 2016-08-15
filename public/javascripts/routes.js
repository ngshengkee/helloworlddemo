
app.config([
	'$stateProvider',
	'$urlRouterProvider',
	'$locationProvider',
	'$urlMatcherFactoryProvider',
	function($stateProvider, $urlRouterProvider, $locationProvider,$urlMatcherFactoryProvider){

	// Now set up the states
	$stateProvider
	.state('home', {
		url: "/home",
		templateUrl: "views/home.html",
		controller: "HomeCtrl"
	})
	.state('profile', {
		url: "/profile",
		templateUrl: "views/profile.html",
		controller: "ProfileCtrl"
 	})	    
	.state('product', {
		url: "/product",
		templateUrl: "views/product.html",
		controller: "ProductCtrl",
	})
	.state('news-and-event', {
		url: "/news-and-event",
		templateUrl: "views/news-and-event.html",
		controller: "NewsEventCtrl"
	})
	.state('awards',{
		url: "/awards",
		templateUrl: "views/awards.html",
		controller: "AwardsCtrl"
	})
	.state('contact',{
		url: "/contact",
		templateUrl: "views/contact.html",
		controller: "ContactCtrl"
	})

	// $urlMatcherFactoryProvider.strictMode(false)

	$urlRouterProvider.otherwise("/home");

	// $locationProvider.html5Mode({
		// enabled: true,
		// requireBase: false
	// });

	$locationProvider.hashPrefix('!');

}]);

