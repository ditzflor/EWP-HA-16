$("#albumliste").DataTable( {
    "ajax" : "alben.json",
	"pageLength": 5,
	"order": [[ 1, "desc" ]]

	
} );

$("#specialTooltip").tooltipster({
	content: $('#specialTooltipContent').detach(),
	
    
});