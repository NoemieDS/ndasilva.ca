  /* Script pour empêcher le défilement de la page lorsque l'on est dans le menu
  ==================================================================================== */

  //Récupérer la case à cocher et la balise <body>
  let laCase = document.querySelector("#cc-menu-burger");
  let leBody = document.querySelector("body");
 


  /* On empêche l'overflow-X au démarrage (conflit si mis en CSS)*/
  leBody.style.overflowX = "hidden";

  /* Écouteur sur l'évènement click */
  laCase.addEventListener("click", gererLeDefilement);

  /*
  function gererLeDefilement(event) {
      if (laCase.checked == true) {
          leBody.style.overflow = "hidden";
      } else {
          leBody.style.overflowY = "scroll";
          leBody.style.overflowX = "hidden";
      }
  }*/

  /* Ne fonctionne pas bien - mon menu souffre d'overflow. Je préfère pour le moment le 
  saut visuel de la barre de défilement */


  function gererLeDefilement(event) {
      if (laCase.checked == true) {
          leBody.style.overflow = "fixed";

      } else {
          leBody.style.overflowY = "static";
          leBody.style.overflowX = "hidden";
      }
  }


  /* Script contrôlant l'état de la case à cocher, pour fermer le menu quand on clique sur un lien 
  ==================================================================================================== */

  /*Récupérer les liens du menu*/
  let lesLiens = document.querySelectorAll(".menu a");

  /*Mettre un gestionnaire d'événement sur chaque bouton avec un boucle for of*/
  for (let unLien of lesLiens) {
      unLien.addEventListener("click", controlerBoutonBurger);
  }

  function controlerBoutonBurger() {
      //Gérer l'état de la case à cocher
      laCase.checked = false;

      //Remettre la barre de défilement sur le body
      leBody.style.overflowY = "scroll";
      leBody.style.overflowX = "hidden";

  }
/*
     Script pour rendre le footer visible sur la page des nouvelles
      // ==================================================================================================== 
    
       let leFooter = document.querySelector(".liens-externes");
      let sectionNouvelles = document.querySelector("#nouvelles");
      let couleurEffet = document.querySelector(".couleur");
      let leMenu = document.querySelector(".menu");
      let menuNom = document.querySelector(".barre-menu-nom");

      console.log(sectionNouvelles, leFooter, couleurEffet, leMenu, menuNom);

      if (sectionNouvelles == true) {
        laCase.checked = true;
          leFooter.style.opacity = "1";
          couleurEffet.style.opacity = "0";
          couleurEffet.style.opacity = "0";
          leMenu.style.opacity = "0";
          menuNom.style.opacity = "0";
  }
*/
  /* Script pour faire apparaitre et disparaitre des boites de textes lors du défilement de la page 
   ==================================================================================================== */

  /*Gestionnaire d'événement scroll sur la fenêtre*/
  window.addEventListener("scroll", faireApparaitre);


  /*/////Code adapté de: ///////
          https://alvarotrigo.com/blog/css-animations-scroll/ */

  function faireApparaitre() {
      let lesSectionsAfaireApparaitre = document.querySelectorAll(".apparition");
      //On attribue les classes quand la hauteur de la section atteint 90% de celle de la fenêtre
      let hauteurVisible = window.innerHeight * 0.90;

      for (let uneSection of lesSectionsAfaireApparaitre) {

          let hautDeLaSection = uneSection.getBoundingClientRect().top;

          if (hautDeLaSection < hauteurVisible) {
              uneSection.classList.add("active");
          } else {
              uneSection.classList.remove("active");
          }
      }
  }