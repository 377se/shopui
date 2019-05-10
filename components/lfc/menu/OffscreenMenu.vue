<template>
  <div id="offscreen-menu" uk-offcanvas>
    <div class="uk-offcanvas-bar">
      <button class="uk-offcanvas-close" type="button" uk-close></button>
      <br />
      Nästa match ska komma här då webapi finns.
      
      <div class="uk-divider-icon"></div>
      <ul class="uk-nav uk-nav-default">
        <li class="logged-out"><a href="#" data-target="#loginModal" data-toggle="modal">Logga in</a></li>
        <li class="logged-out"><a href="/medlem/sa-blir-du-medlem">Bli medlem</a></li>
        <li class="logged-in"><a href="#" class="btn-log-out">Logga ut</a></li>
        <li class="logged-in"><a href="/mina-sidor">Mina sidor</a> </li>
        <li><a href="https://www.samdodds.com/sv-se/">Till klubbshopen</a></li>
      </ul>
      
      <div class="uk-divider-icon"></div>
      
      <div>
        <ul class="uk-nav-default uk-nav-parent-icon" uk-nav>
          <li class="uk-parent">
            <a href="javascript:void(0);">Nyheter</a>
            <ul class="uk-nav-sub">
              <li><a href="/nyheter">Senaste nyheterna</a></li>
              <li><a href="/nyheter/arkiv">Arkiv</a></li>
              <li><a href="/nyheter/mest-kommenterade">Mest kommenterade</a></li>
              <li><a href="/diverse/rss">Rss</a></li>
            </ul>
          </li>
            <li class="uk-parent">
            <a href="javascript:void(0);">Matcher &amp; Resultat</a>
            <ul class="uk-nav-sub">
              <li class="uk-nav-header">Matcher</li>
              <li>
                FixtureList will come here (webapi)
              </li>
              <li>
                  <a href="/laget/spelschema">Till spelschemat</a>
              </li>
              <li class="uk-nav-divider"></li>
              <li class="uk-nav-header">Resultat</li>
              <li>
                Resultlist (webapi)
              </li>
              <li class="uk-nav-divider"></li>
              <li class="uk-nav-header">Tabell</li>
              <li>
                <table class="uk-table uk-table-small uk-text-small uk-table-divider">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Lag</th>
                      <th>M</th>
                      <th>P</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr><td>League table (webapi</td></tr>  
                  </tbody>
                </table> 
              </li>
              <li>
                <a href="/laget/tabell">Visa hela tabellen</a>
              </li>
            </ul>
          </li>
          <li class="uk-parent">
            <a href="javascript:void(0);">Laget</a>
            <ul class="uk-nav-sub">
              <li class="uk-nav-header">A-laget</li>
              <li><a href="/laget/spelartrupp">Spelartrupp</a></li>
              <li><a href="/laget/spelschema">Spelschema</a></li>
              <li><a href="/laget/skytteliga">Skytteliga</a></li>
              <li><a href="/laget/tabell">Tabell</a></li>
              <li><a href="/laget/melwood">Melwood</a></li>
              <li><a href="/laget/arets-spelare">Årets spelare</a></li>
              <li><a href="/transfers">Transfers</a></li>
              <li class="uk-nav-divider"></li>
              <li class="uk-nav-header">Titlar</li>
              <li><a href="/titlar/ligamasterskap">Ligamästerskap</a></li>
              <li><a href="/titlar/champions-league">Champions League</a></li>
              <li><a href="/titlar/charity-shield">Charity Shield</a></li>
              <li><a href="/titlar/cupvinnarcupen">Cupvinnarcupen</a></li>
              <li><a href="/titlar/europa-league">Europa League</a></li>
              <li><a href="/titlar/fa-cupen">FA-cupen</a></li>
              <li><a href="/titlar/ligacupen">Ligacupen</a></li>
              <li><a href="/titlar/uefa-supercup">World Cup &amp; Supercup</a></li>
              <li class="uk-nav-divider"></li>
              <li class="uk-nav-header">This is Anfield</li>
              <li><a href="/this-is-anfield/the-academy">Akademin</a></li>
              <li><a href="/this-is-anfield/klubbinformation">Klubbinformation</a></li>
              <li><a href="/this-is-anfield/kontakta-liverpool">Kontakta Liverpool</a></li>
              <li><a href="/this-is-anfield/masterskap-och-meriter">Mästerskap &amp; meriter</a></li>
              <li><a href="/this-is-anfield/rekord">Rekord</a></li>
              <li><a href="http://www.liverpoolfc.com/history/records/appearances" target="_blank">Läs mer om alla fantastiska rekord och utmärkelser</a></li>
            </ul>   
          </li>
          <li class="uk-parent">
            <a href="javascript:void(0);">Historia</a>
            <ul class="uk-nav-sub">
              <li class="uk-nav-header">Historik</li>
              <li><a href="/historik/boot-room">Boot Room</a></li>
              <li><a href="/historik/heysel">Heysel</a></li>
              <li><a href="/historik/hillsborough">Hillsborough</a></li>
              <li><a href="/historik/paisley-gateway">Paisley Gateway</a></li>
              <li><a href="/historik/shankly-gates">Shankly Gates</a></li>
              <li><a href="/historik/the-kop">The Kop</a></li>
              <li><a href="/historik/youll-never-walk-alone">You'll never walk alone</a></li>
              <li class="uk-nav-divider"></li>
              <li class="uk-nav-header">Spelare &amp; Managers</li>
              <li><a href="/tidigare-spelare">Tidigare spelare</a></li>
              <li><a href="/managers">Managers</a></li>
              <li><a href="/historik/kaptener">Kaptener</a></li>
              <li class="uk-nav-divider"></li>
              <li class="uk-nav-header">Om Liverpool FC</li>
              <li><a href="/historik/sa-borjade-det">Så började det</a></li>
              <li><a href="/historik/det-glada-20-talet">Det glada 20-talet</a></li>
              <li><a href="/historik/shanklys-revolution">Shanklys revolution</a></li>
              <li><a href="/historik/paisleys-dominans">Paisleys dominans</a></li>
              <li><a href="/historik/upp-och-nedgang">Upp &amp; nedgång</a></li>
              <li><a href="/historik/make-us-dream">Make us dream</a></li>
            </ul>
          </li>
          <li class="uk-parent">
            <a href="javascript:void(0);">Resor</a>
            <ul class="uk-nav-dub">
              <li class="uk-nav-header">Biljetter &amp; Resor</li>
              <li><a href="/resor/boka-resepaket-till-liverpool">Boka resepaket till Liverpool</a></li>
              <li><a href="/resor/kop-biljett-pa-egen-hand">Köp biljett på egen hand</a></li>
              <li><a href="/resor/anfield-tour">Anfield Tour</a></li>
              <li class="uk-nav-divider"></li>
              <li class="uk-nav-header">Staden Liverpool</li>
              <li><a href="/resor/att-resa-till-liverpool">Att resa till Liverpool</a></li>
              <li><a href="/resor/annat-att-se">Annat att se</a></li>
              <li><a href="/resor/staden-liverpool">Staden Liverpool</a></li>
              <li><a href="/resor/scousers">Scousers</a></li>
              <li><a href="/resor/stadsbild">Stadsbild</a></li>
              <li><a href="/resor/the-beatles">The Beatles</a></li>
              <li><a href="/resor/the-liverbird">The Liverbird</a></li>
              <li class="uk-nav-divider"></li>
              <li class="uk-nav-header">Resetips</li>
              <li><a href="/resor/hotell">Hotell</a></li>
              <li><a href="/resor/pubar">Pubar</a></li>
              <li><a href="/resor/nattliv">Nattliv</a></li>
              <li><a href="/resor/restauranger">Restauranger</a></li>
              <li><a href="/resor/shopping">Shopping</a></li>
              <li><a href="https://files.lfc.nu/docs/snabbguide.pdf" target="_blank">Snabbguide till Liverpool</a></li>
            </ul>
          </li>
          <li class="uk-parent">
              <a href="javascript:void(0);">Galleri</a>
            <ul class="uk-nav-sub">
              <li class="uk-nav-header">Smått &amp; Gott</li>
              <li><a href="/sanger/ynwa">Sånger</a></li>
              <li><a href="/diverse/trojor-genom-aren">Tröjor genom åren</a></li>
              <li class="uk-nav-divider"></li>
              <li class="uk-nav-header">Supporterbilder</li>
              <li><a href="/galleri/tatueringar">Tatueringar</a></li>
              <li><a href="/galleri/unga-fans">Unga fans</a></li>
              <li><a href="/galleri/skicka-in-din-egen-bild">Skicka in din egen bild</a></li>
              <li class="uk-nav-divider"></li>
              <li class="uk-nav-header">Årets spelare</li>
              <li><a href="/laget/arets-spelare/">Se vilka som blivit framröstade</a></li>
            </ul>
          </li>
          <li class="uk-parent">
            <a href="javascript:void(0);">Medlem</a>
            <ul class="uk-nav-sub"> 
              <li class="uk-nav-header">Bli en av oss</li>
              <li><a href="https://www.samdodds.com/sv-se/c/0/61">Hur gör jag för att bli medlem?</a></li>
              <li><a href="https://www.samdodds.com/sv-se/c/0/61">Hur förlänger jag mitt medlemsskap?</a></li>
              <li><a href="/medlem/medlemsformaner">Medlemsförmåner</a></li>
              <li><a href="/manadens-medlem">Månadens medlem</a></li>
              <li class="uk-nav-divider"></li>
              <li class="uk-nav-header">Medlemspaket 2018/19</li>
              <li><a href="/medlem/vad-innehaller-medlemspaketet">Vad innehåller medlemspaketet?</a></li>
              <li class="uk-nav-divider"></li>
              <li class="uk-nav-header">Klubbshopen Sam Dodds</li>
              <li><a href="/diverse/sam-dodds">Information om klubbshopen</a></li>
              <li><a href="/diverse/sammycoins">Vad är Sammycoins?</a></li>
            </ul>
          </li>
          <li class="uk-parent">
            <a href="javascript:void(0);">Om LFC.nu</a>
            <ul class="uk-nav-sub"> 
              <li class="uk-nav-header">Vi som jobbar med sajten</li>
              <li><a href="/styrelsen">Styrelsen</a></li>
              <li><a href="/medarbetare">Medarbetare</a></li>
              <li><a href="/samarbetspartners">Samarbetspartners</a></li>
              <li><a href="/vanliga-fragor">Vanliga frågor</a></li>
              <li class="uk-nav-divider"></li>
              <li class="uk-nav-header">Socialt</li>
              <li><a href="/korrespondenter-och-facebookgrupper">Korrespondenter &amp; Facebookgrupper</a></li>
              <li><a href="https://www.facebook.com/LFC.NU" target="_blank">Facebook</a></li>
              <li><a href="https://twitter.com/liverpoolfcswe/" target="_blank">Twitter</a></li>
              <li><a href="/socialt/ovrig-media">Övrig media</a></li>
              <li class="uk-nav-divider"></li>
              <li class="uk-nav-header">Övrig media</li>
              <li><a href="https://soundcloud.com/lfc-podden" target="_blank">LFC-podden - You'll Never Talk Alone</a></li>
              <li><a href="http://www.st.nu/poolaren-pelle-lever-sin-drom" target="_blank">Poolaren Pelle lever sin dröm</a></li>
              <li><a href="http://www.lfc.nu/images/media/trollhattan.jpg" target="_blank">Trollhättan nästa för Gerrard</a></li>
              <li><a href="https://www.youtube.com/watch?v=UwhWOROYx1U&feature=player_embedded" target="_blank">TV-inslag från supporterträff</a></li>
              <li class="uk-nav-divider"></li>
              <li class="uk-nav-header">LFC Sweden</li>
              <li><a href="/lfcnu/sweden-supporters">Om LFC Supporters Club Sweden</a></li>
              <li><a href="/cookies">Cookies</a></li>
              <li><a href="/integritetspolicy">Integritetspolicy</a></li>
            </ul>
          </li>
          <li><a href="/forum">Forum</a></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {}
};
</script>

<style lang="scss">
@import "~scss/vars";

.menu {
  background-color: $global-primary-background !important;
  width: 240px;
  height: 100%;
}
</style>
