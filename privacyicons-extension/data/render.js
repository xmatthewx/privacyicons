$(function() {
  var source = $("#template-holder").html();
  var template = Handlebars.compile(source);
  var datarows = [
    {
      "data-type": "contact information", 
      "uses": {"service":"yes", "marketing": "opt-out", "profiling": "opt-out"}, 
      "shares": {"partners":"yes", "public": "opt-in"}
     },
     {
       "data-type": "cookies", 
       "uses": {"service":"yes", "marketing": "no", "profiling": "opt-out"}, 
       "shares": {"partners":"opt-out", "public": "no"}
      }
  ];    
  var context = {"datarows": datarows};
  var html = template(context);
  $('#chart').html(html);
});