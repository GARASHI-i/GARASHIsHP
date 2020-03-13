 jQuery(document).ready(function ()
        {
  
        $('#manth-title').click(function() { 
          $(`#day-title`).slideUp();
        });
        
        $(`#manth-title`).click(function()
        {
          $(`#day-title`).slideDown();
        });
  });


