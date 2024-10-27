console.log("your index.js file is loaded correctly!");

$("#bookcases").on('click', function() {
    console.log("you clicked on #bookcases");
} );

$("#bookcases").on('click', function() {
    $(this).slideUp();
});