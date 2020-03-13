jQuery(document).ready(function () {

 $(function()
        {
          $(`#day-title`).hide();
        });
        
        $(`#manth-title`).click(function()
        {
          $(`#day-title`).show();
        });
});

