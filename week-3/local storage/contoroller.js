const wisdom = wisdomSaver();
const renderWisdom = renderer();

wisdom.initWisdoms();
renderWisdom(wisdom.getWisdoms());

$('#post').on('click',function(){ 
    wisdom.addWisdom($("#input").val());
    $("#input").val('');
    renderWisdom(wisdom.getWisdoms());
})

$('#clear-all').on('click',function(){ 
    wisdom.clearWisdom();
    renderWisdom(wisdom.getWisdoms());
})

$('body').on('click','.delete',function(){ 
    wisdom.deleteSingleWisdom(($(this).closest('li').data().id).toString());
    renderWisdom(wisdom.getWisdoms());
})