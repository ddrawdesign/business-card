let url = $(location);
let urlCustomer = url.attr('pathname').toString().replaceAll('/', '');
url = url.attr('origin') +'/'+urlCustomer;

$('title').html(customer['name'].replaceAll('<span>', '').replaceAll('</span>', ''));
$('#company-name').html(customer['name']);
$('#company-description').append(customer.description);
$('#img-cover').attr("src",url+'/capa.png');
$('#img-social-networks').attr("src",url+'/icones-redes-sociais.png');
$('head').append(`<style>
    body{
        color: ${customer.colorFontSite};
    }
    .card-background{
        background-image: url("${url}/linhas.png");
    }
    .card-background::before{
        background-color: ${customer.backgroundSite};            
    }
    #button-links a{
        background-color: ${customer.backgroundButton}; color: ${customer.colorFontButton};
    }
</style>`);
$('head').append(`<link rel="icon" type="image/png" href="${url}/icon.png" />`);

customer.links.forEach(link => {
    let button = `<a class="${link.animation}" href="${link.url}" target="_blank" rel="noopener noreferrer">            
                    ${link.name}
                </a>`;
    $('#button-links').append(button);
});