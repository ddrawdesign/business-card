let url = $(location);
let urlCustomer = url.attr('pathname').toString().replaceAll('/', '');
url = url.attr('origin') +'/'+urlCustomer;

$('title').html(customer['name'].replaceAll('<span>', '').replaceAll('</span>', ''));
$('#company-name').html(customer['name']);
$('#company-description').append(customer.description);
$('body').css("color", customer.colorFontSite);
$('#img-cover').attr("src",url+'/capa.png');
$('#img-social-networks').attr("src",url+'/icones-redes-sociais.png');
$('head').append(`<style>
    .card-background{
        background-image: url("${url}/linhas.png");
    }
    .card-background::before{
        background-color: ${customer.backgroundSite};            
    }
</style>`);

customer.links.forEach(link => {
    let button = `<a class="${link.animation}" href="${link.url}" target="_blank" rel="noopener noreferrer" style="background-color: ${customer.backgroundButton}; color: ${customer.colorFontButton};">            
                    ${link.name}
                </a>`;
    $('#button-links').append(button);
});