var SELECTION_OWNER_ID = "#list";
var CHOICE_TYPE = "<li>";
var CHOICE_COUNT = 7;

for(var i=0;i<CHOICE_COUNT;i++)
{
  $(CHOICE_TYPE).attr("id", i).text("Selection " + (i+1)).appendTo($(SELECTION_OWNER_ID));
}


var header = document.getElementById("click");
var list = document.getElementById("list");
var onClick = function() {
  console.log("Clicked!");
  $("<li>").html("Zostałem kliknięty <strong>(jQuery)</strong>!").css("margin","10px").appendTo("ol");
};
header.addEventListener("click", onClick);

