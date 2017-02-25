function togglePane(x) {
   //take care of active nav-tab
   $('.in-page-nav').removeClass('active');
   var tab="#nav-tab-"+x;
   $(tab).addClass('active');

   //take care of visible team explanation
   $('.tab-pane').removeClass('in active');
   var pane='#'+x;
   console.log(pane);
   $(pane).addClass('in active');
}