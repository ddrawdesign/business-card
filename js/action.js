const customers = [];

customers["eliton"]={
        "name":"Eliton Camargo",
        "description": "Desenvolvedor de sites",
        "backgroundSite":"#ececec",
        "colorFontSite":"green",
        "backgroundButton":"green",
        "colorFontButton":"white",
        "links":[
            {"name":"Site oficial","url":"https://drawbe.com.br/","animation":"animation1"},
            {"name":"Facebook","url":"https://www.facebook.com/eliton.camargodeoliveira","animation":"animation2"},
            {"name":"linkedin","url":"https://www.linkedin.com/in/eliton-camargo-270a37b3/","animation":"animation3"},
            {"name":"WhatsApp","url":"https://api.whatsapp.com/send?phone=5515998541194","animation":"animation4"}
        ]
    };
    
customers["drawbe"]={
        "name":"Drawb<span>e&#174;</span>",
        "description": "DESIGN DE MARCAS | POR BEATRIZ MONTEIRO",
        "backgroundSite":"white",
        "colorFontSite":"#7f7f7f",
        "backgroundButton":"#ff9076",
        "colorFontButton":"white",
        "links":[
            {"name":"WHATSAPP","url":"https://api.whatsapp.com/send?phone=5515998541194","animation":"animation2"},
            {"name":"SITE OFICIAL","url":"https://drawbe.com.br/","animation":"animation3"},
            {"name":"INSTAGRAM","url":"https://www.instagram.com/drawbedesign/","animation":"animation4"},
            {"name":"FACEBOOK","url":"https://www.facebook.com/drawbedesign","animation":"animation5"},
        ]
    };

const url = $(location);
const urlCustomers = url.attr('pathname').toString().replaceAll('/', '');
const customer = customers[urlCustomers];

$('title').html(customer['name'].replaceAll('<span>', '').replaceAll('</span>', ''));
$('#company-name').html(customer['name']);
$('#company-description').text(customer.description);
$('body').css("background-color", customer.backgroundSite);
$('body').css("color", customer.colorFontSite);
$('#img-cover').attr("src",url.attr('origin') +'/'+urlCustomers+'/capa.png');
$('#img-social-networks').attr("src",url.attr('origin') +'/'+urlCustomers+'/icones-redes-sociais.png');

customer.links.forEach(link => {
	let button = `<a class="${link.animation}" href="${link.url}" target="_blank" rel="noopener noreferrer" style="background-color: ${customer.backgroundButton}; color: ${customer.colorFontButton};">            
					${link.name}
				</a>`;
	$('#button-links').append(button);
});

