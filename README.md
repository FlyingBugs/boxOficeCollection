# boxOficeCollection
This is my first angular application



<!DOCTYPE html>
<html ng-app="bollywood">
   <title>Get To Know About Movies BoxOffice Collection</title>
   <head>
      <!-- customCSS/main-style.css  -->
      <link rel="stylesheet" type="text/css" href="customCSS/main-style.css">
      <link rel="stylesheet" type="text/css" href="Liberary/bootstrap-3.3.5-dist/css/bootstrap.min.css">
      <link rel="stylesheet" type="text/css" href="Liberary/bootstrap-3.3.5-dist/css/style.css">
      <script type="text/javascript" src="Liberary/js/angular.min.js"></script>
      <script type="text/javascript" src="customJs/movieList.js"></script>
      <!-- /home/eebee/Desktop/testAngular/customJs/app.js  -->
      <script type="text/javascript" src="customJs/app.js"></script>
      <script>
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-84110642-1', 'auto');
  ga('send', 'pageview');

</script>
   </head>
   <body background="images/www2.jpg" >
      <h1><b>Box Office Collections : </b></h1>
      </br>
      <div ng-controller="formController as formctrl">
         <input-form></input-form>
         <movie-list></movie-list>
      </div>
      <body>
</html>
