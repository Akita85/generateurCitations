/* Mes constantes */
const btnGenere = document.querySelector('.BoutonGenerer');
const btnArrêt = document.querySelector('.BoutonArrêt');
const citationsBlock = document.getElementById("citationsBlock");
const photoAuteur = document.getElementById("photo_Auteur");

/* Mes variables initiales avec les morceaux de citations placées dans des tableaux */
  /* Citations fractionnées d'Aristote */
let debutAristoteBis = [ "La colère est nécessaire ;", "Un livre est bon si l’auteur dit tout ce qu’il faut,", "Rien de plus cruel que de vouloir élever", "C'est de par leur caractère que les hommes sont ce qu’ils sont,", "L'ignorant affirme,", "Il faut se conduire avec ses amis", "Vouloir prouver des choses qui sont claires d’elles-mêmes,", "Il faut préférer ce qui est impossible", "C'est la marque d’un esprit cultivé", "Le philosophe", "Si l’invraisemblable arrive,", "C'est en pratiquant les actions justes que nous devenons justes,", "Les hommes, et il ne faut pas s’en étonner,", "Dans toute action, dans tout choix,", "Ce n’est pas parce qu’il a des mains", "Le rôle propre du poète n’est pas de dire ce qui est réellement arrivé,", "Or le prodigieux est agréable ;", "Il y a la même différence", "La politique", "Le bien pour l’homme", "En ce qui concerne les actions,", "L'homme", "Il est beau de ne pratiquer aucun métier,"];
let milieuAristoteBis = [ "on ne triomphe de rien sans elle, si elle ne remplit l’âme, si elle n’échauffe le coeur ;", "rien que ce qu’il faut,",  "l'homme à une perfection", "mais c’est de par leurs actions qu’ils sont heureux,", "le savant doute,", "comme on voudrait les voir", "c'est éclairer le jour", "mais vraisemblable", "qu'être capable de nourrir une pensée", "est celui qui possède la totalité du savoir", "c'est donc que ce qui est invraisemblable", "en pratiquant les actions modérées que nous devenons modérés,", "paraissent concevoir le bien et le bonheur", "le bien c’est la fin,", "que l’homme est le plus intelligent des êtres,", "mais de dire ce qui pourrait arriver selon la vraisemblance,", "j'en donne pour preuve que tous, lorsqu’ils font un récit, en rajoutent toujours,", "entre les savants et les ignorants", "est l’art de commander", "consiste dans une activité de l’âme", "qui raisonnent en général", "est un animal", "car un homme libre ne doit pas vivre"];
let finAristoteBis = ["elle doit donc nous servir, non comme chef, mais comme soldat.", "et comme il faut.", "dont il n’est pas capable.", "ou le contraire.", "le sage réfléchit.", "se conduire avec soi.", "avec une lampe.", "à ce qui est possible mais incroyable.", "sans la cautionner pour autant.", "dans la mesure du possible.", "est vraisemblable.", "et en pratiquant les actions courageuses que nous devenons courageux.", "d’après la vie qu’ils mènent.", "car c’est en vue de cette fin qu’on accomplit toujours le reste.", "mais c’est parce qu’il est le plus intelligent qu’il a des mains.", "ou selon la diversité.", "pour produire du plaisir.", "qu'entre les vivants et les morts.", "à des hommes libres.", "en accord avec la vertu.", "raisonnent dans le vide.", "raisonnable.", "pour servir autrui."];

  /* Citations fractionnées de Pierre Desproges */
let debutDesprogesBis = ["Les deux tiers des enfants du monde", "L'ennemi est bête :", "Quand un philosophe", "Au Paradis,", "Moi, j'ai pas de cancer,", "Le voisin", "Nous n'avons plus de grand homme,", "Le but de l'homme moderne sur cette terre est à l'évidence de s'agiter sans réfléchir dans tous les sens", "Il faut savoir, bande de décadents ramollis de téloche et de pâtés en croûte,", "L'héroïsme,", "Vous pouvez railler,", "Un gentleman,", "Les aspirations des pauvres", "L'intelligence, c'est comme le parachute,", "La démocratie est la pire des dictatures", "Le savoir-vivre est la somme des interdits qui jalonnent la vie d'un être civilisé,", "Je sais que je suis paranoïaque,", "L'ennemi se déguise parfois en géranium, mais on ne peut s'y tromper,", "Observons un grec ancien :", "Le rire n'est jamais gratuit :", "La caractéristique vestimentaire du con", "Le Président de la République", "Je préfère vivre en harmonie avec ma dignité, pour employer un grand mot,"];
let milieuDesprogesBis = ["meurent de faim,", "il croit que c'est nous l'ennemi", "me répond,", "on est assis à la droite de Dieu : c'est normal,", "j'en n'aurai jamais,", "est un animal nuisible", "mais des petits qui grenouillent et sautillent de droite et de gauche avec une sérénité", "afin de pouvoir dire fièrement à l'heure de sa mort :", "que les Grecs sont à l'origine du pire des maux dont crève aujourd'hui le monde civilisé :", "c'est encore la meilleure façon de devenir célèbre", "mais n'oubliez jamais qu'un jour ou l'autre,", "c'est quelqu'un qui sait jouer de la cornemuse", "ne sont pas éloignées", "quand on en a pas,", "parce qu'elle est la dictature exercée", "c'est à dire coincé entre les règles", "mais ce n'est pas parce que je suis paranoïaque", "car tandis que le géranium est à nos fenêtres,", "il est enveloppé dans un drap,", "l'homme donne à pleurer", "consiste en un besoin irrésistible", "est gardien de la Constitution","et refuser le confort du compromis"];
let finDesprogesBis = ["alors même que le troisième tiers crève de son excès de cholestérol.", "alors que c'est lui !", "je ne comprends plus ma question.", "c'est la place du mort.", "je suis contre.", "assez proche de l'homme.", "dans l'incompétence qui force le respect.", "je n'ai pas perdu mon temps.", "la démocratie.", "quand on n'a pas de talent.", "c'est celui qui raille qui l'a dans le train.", "et qui n'en joue pas.", "de la réalité des riches.", "on s'écrase.", "par le plus grand nombre sur la minorité.", "du savoir-naître et celles du savoir-mourir.", "qu'ils ne sont pas tous après moi.", "l'ennemi est à nos portes.", "il tient un parchemin et il apporte au monde la civilisation.", "mais prête à rire.", "de s'habiller comme tout le monde.", "et pendant qu'il fait ça, il n'est pas au bistrot.", "même pour l'argent, même pour la gloire."];

/* Fonction permettant de renvoyer les morceaux de citations aléatoirement depuis les tableaux ci-dessus */
function valeurAléatoireTableau(tableau)
{
  let valeurAléatoire = Math.floor(Math.random()*tableau.length);
  return tableau[valeurAléatoire];
}

/* Fonction qui permettra de changer la photo de l'auteur des citations aléatoires*/
function changerImage(img, src)
{
   let image = new Image(); // on crée l'objet
   image.onload = function() // événement : une fois le chargement terminé
   {
      img.src = image.src;
   }
   image.src = src; // on modifie l'adresse de l'objet "image", ce qui lance le chargement
}

/* Fonction permettant de gérer les citations en fonction des choix utilisateur */
function gérerCitations()

{	/* Événement "change" avec une fonction anonyme pour récupérer l'auteur choisi par l'utilisateur */
	sélectionnerAuteur.addEventListener("change", function() 
	{ 
		let sélectionnerAuteur = document.getElementById("sélectionnerAuteur");
	});

	/* On récupère le nombre choisi de citations à générer */
	let inputs = document.querySelectorAll('input[type=radio]:checked'),
	inputsLength = inputs.length;
	for (let index = 0; index < inputsLength; index++) 
	{
		let nombreCitations = inputs[index].value;
		arrêtCitations(); //Permet de vider le bloc de citations avant de générer de nouvelles citations
		créationCitation(nombreCitations);
	}
};

/* Fonction permettant de créer les blocs de citations en fonction du nombre de citations choisis et de les y introduire */
function créationCitation (nombreCitations) 
{ 
	for (let index = 0; index < nombreCitations; index++) 
	{
		//Création d'un élément HTML du type <blockquote> et <p>
		let block = document.createElement("blockquote"), //Elément indiquant que le texte contenu dans l'élément est une citation longue  
		paragraph = document.createElement("p");
		
		//On ajoute un attribut "id" à notre paragraphe
		paragraph.id = "citationsBlock" + index;

		//Pour insérer chacune de nos citations dans nos blocks puis dans nos paragraphes, nous utilisons la méthode appendChild()
		citationsBlock.appendChild(block); 
		block.appendChild(paragraph);

		/* On a récupéré la valeur du choix de l'auteur précédemment, en fonction de ce choix (condition = true), on demande que soit généré :
		- la citation aléatoire correspondante
		- Ainsi que la photo correspondant à l'auteur sélectionné */
		if (sélectionnerAuteur.selectedIndex === 0)
		{ 
			document.getElementById(paragraph.id).innerHTML = valeurAléatoireTableau(debutAristoteBis) + " " + valeurAléatoireTableau(milieuAristoteBis) + " " + valeurAléatoireTableau(finAristoteBis);
			changerImage(photoAuteur, "img/Aristote.png");
		} else if (sélectionnerAuteur.selectedIndex === 1) 
		{
			document.getElementById(paragraph.id).innerHTML = valeurAléatoireTableau(debutDesprogesBis) + " " + valeurAléatoireTableau(milieuDesprogesBis) + " " + valeurAléatoireTableau(finDesprogesBis);
			changerImage(photoAuteur, "img/Desproges.png");
		}
	}
};

/* Gestionnaire d'évènement au clic "Générer" */
btnGenere.addEventListener('click', gérerCitations);

/* Fonction permettant de supprimer les blocs de citations générer et de relancer l'application */
function arrêtCitations () 
{ 
	let toutesLesCitations = document.querySelectorAll("#citationsBlock blockquote")
	let nombreDeCitations = toutesLesCitations.length;
	console.log(nombreDeCitations);
	for (let index = 0 ; index < nombreDeCitations ; index++) 
	{
	/*Pour retirer un élément HTML d’une page en JavaScript, nous allons utiliser la méthode removeChild().
	Cette méthode va supprimer un élément HTML enfant ciblé relativement à son parent */
		citationsBlock.removeChild(toutesLesCitations[index]);
	// nous changeons de nouveau la photo pour remettre l'initiale	
		changerImage(photoAuteur, "img/Aristote et PDesproges.png");	
	}
};

/* Gestionnaire d'évènement au clic "Arrêter" */
btnArrêt.addEventListener('click', arrêtCitations);