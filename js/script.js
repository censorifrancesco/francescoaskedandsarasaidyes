import javascript;

function visualizza(id) {
  if ($(this).next().is(":visible")) {
    $(this).next().hide('slow');
  } else {
    $(id).hide('slow');
    $(this).next().show('slow');
  }
});
