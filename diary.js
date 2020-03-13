 jQuery(document).ready(function ()
 {
  
        $('#manth-title').click(function() 
        { 
          $(`#day-title`).slideUp();
        },
        {
          $(`#day-title`).slideDown();
        });
  });


