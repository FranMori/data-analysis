<template>
  <div id="UTT">
    <button @click="switchToNunuls()">Nunuls</button>
    <button @click="switchToAmazing()">Amazing</button>
    <button @click="switchToGalactix()">Galactix</button>
    <button @click="switchToPpm()">PPM</button>

    <div v-if="mode === 'nunuls'">
      <h1>Nunuls</h1>
      <h3>
        Top => <a href="https://euw.op.gg/summoner/userName=Aigle"> Aigle</a>
      </h3>
      <div>
        <h4>Infos</h4>
        <ul>
          <li>Pas de games au top depuis la présaison</li>
          <li>OTP Quinn S11</li>
          <li>Bon Snowball (+12% par rapport aux autres joueurs master)</li>
        </ul>
        <ul>
          Win-rate Quinn :
          <li class="win">75% Kennen</li>
          <li class="win">70% Mundo</li>
          <li class="win">66.7% Jayce</li>
          <li class="win">63.6% Aatrox</li>
          <li class="win">60% Sion, Jax, Renekton et Yone</li>
          <li class="win">57.1% Camille</li>
          <li class="lose">45.5% Fiora</li>
          <li class="lose">43.8% Gnar</li>
          <li class="lose">40% TK</li>
          <li class="lose">37.5% Ornn</li>
          <li class="lose">28.6% Kayle</li>
          <li class="lose">11.1% SHen</li>
        </ul>
      </div>
    </div>
    <div v-if="mode === 'amazing'">
      <h1>Amazing</h1>
      <a href="https://www.twitch.tv/videos/1203637833">
        <img class="draft" src="../assets/Draft1Amazing.png" alt="draft" />
        <p>Draft du 12/11/2021 patch 11.22</p>
      </a>
      <a href="https://www.twitch.tv/videos/1203571420">
        <img class="draft" src="../assets/Draft2Amazing.png" alt="draft" />
        <p>Draft du 12/11/2021 patch 11.22</p>
        <h1>Strongside bot les deux sides</h1>
      </a>
      <ul class="borderBottom">
        Potentiels flex
        <li>Viego (Jungle + Mid)</li>
        <li>Lucian (Mid + ADC)</li>
      </ul>

      <h3>
        Top =>
        <a href="https://euw.op.gg/summoner/userName=AMZA+NeuroSama"
          >NeuroSama</a
        >
      </h3>
      <div>
        <h4>Infos</h4>
        <ul>
          <li>Pas de game en pré-saison</li>
          <li>Gros joueur de Kled mais pas OTP</li>
          <li>Bon Snowball (+10% par rapport aux autres joueurs master)</li>
        </ul>
      </div>
      <div class="winrate">
        <ul>
          Win rate de Kled :
          <li class="win">77.8% Renek (9 games)</li>
          <li class="win">58.3% Darius (13 games)</li>
          <li class="win">52.9% Sett (17 games)</li>
          <li class="win">52.9% Aatrox (17 games)</li>
          <li class="lose">46.2% Gnar (13 games)</li>
          <li class="lose">33.3% Camille (6 games)</li>
          <li class="lose">28.6% Irelia (7 games)</li>
          <li class="lose">10.0% Fiora (10 games)</li>
        </ul>
        <ul>
          Win rate de Shen :
          <li class="win">80% Irelia (5 games)</li>
          <li class="win">80% TK (5 games)</li>
          <li class="win">76.9% Sett (13 games)</li>
          <li class="win">66.7% Camille (9 games)</li>
          <li class="win">60% Jayce (5 games)</li>
          <li class="win">58.3% Fiora (12 games)</li>
          <li>50% Darius (10 games)</li>
          <li class="lose">33.3% Kennen (3 games)</li>
          <li class="lose">33.3% Voli (3 games)</li>
          <li class="lose">11.1% Riven (9 games)</li>
        </ul>
        <ul>
          Win rate de Sett :
          <li class="win">83.3% Shen (6 games)</li>
          <li class="win">66.7% Jayce (3 games)</li>
          <li class="win">60% Gwenn (5 games)</li>
          <li class="win">57.1% Irelia (5 games)</li>
          <li>50% Fiora (6 games)</li>
          <li class="lose">33% Sion (3 games)</li>
          <li class="lose">33% Kennen (3 games)</li>
          <li class="lose">0% Jax (2 games)</li>
          <li class="lose">0% Aatrox (3 games)</li>
        </ul>
      </div>
      <h3>
        Jungle =>
        <a href="https://euw.op.gg/summoner/champions/userName=AMZA%20Karken%20"
          >Karken</a
        >
      </h3>
      <div>
        <h4>Infos</h4>
        <ul>
          <li>
            Déjà 25 games en pré-saison (majoritairement préda et lethal tempo)
          </li>
          <li>1400 games S11, pratiquement que SoloQ</li>
          <li>
            Joueur qui s'adapte à la meta avec très bon pool, pocket pick Udyr
          </li>
          <li>
            /!\ il semble bon contre Xin de manière générale dans tous ses
            matchups
          </li>
        </ul>
      </div>
      <div class="winrate">
        <ul>
          WinRate de J4
          <li class="win">100% Kindred (3 games)</li>
          <li class="win">81.8% Graves (11 games)</li>
          <li class="win">75% Heca (8 games)</li>
          <li class="win">75% Xin (8 games)</li>
          <li class="win">66.7% Viego (12 games)</li>
          <li class="lose">33.3% Lillia (6 games)</li>
          <li class="lose">33.3% Trundle (3 games)</li>
          <li class="lose">33.3% Voli (3 games)</li>
          <li class="lose">33.3% Talon (3 games</li>
        </ul>
        <ul>
          WinRate de Trundle (must ban ?)
          <li class="win">85.7% J4 (7 games)</li>
          <li class="win">66.7% Diana (3 games)</li>
          <li class="win">63.6% Zac (11 games)</li>
          <li class="win">55.6% Xin (9 games)</li>
          <li class="lose">42.9% Sejuani (7 games)</li>
          <li class="lose">33.3% Volibear (3 games)</li>
        </ul>
        <ul>
          WinRate de Voli
          <li class="win">100% Zac (2 games)</li>
          <li class="win">75% Graves (4 games)</li>
          <li class="win">66.7% Diana (3 games)</li>
          <li>50% Xin (6 games)</li>
          <li class="lose">40% Kha (15 games)</li>
          <li class="lose">33.3% Lillia (3 games)</li>
          <li class="lose">0% J4 (2 games)</li>
        </ul>
        <ul>
          WinRate de Viego
          <li class="win">100% Xin (2 games)</li>
          <li class="win">100% Talon (2 games)</li>
          <li class="win">75% Diana (4 games)</li>
          <li>50% J4 (4 games)</li>
          <li class="lose">33.3% Kindred (3 games)</li>
          <li class="lose">33.3% Graves (6 games)</li>
          <li class="lose">33.3% Kha (9 games)</li>
          <li class="lose">16.7% Elise (6 games)</li>
        </ul>
        <ul>
          WinRate de Xin
          <li class="win">60% J4 (5 games)</li>
          <li>50% Diana (2 games)</li>
          <li>50% Lillia (2 games)</li>
          <li class="lose">33.3% Talon (6 games)</li>
          <li class="lose">33.3% Viego (9 games)</li>
          <li class="lose">20% Nocturne (5 games)</li>
        </ul>
      </div>
      <div>
        <h3>
          Mid =>
          <a href="https://euw.op.gg/summoner/userName=AMZA+MasTou">Mas Tou</a>
        </h3>
        <h4>Infos</h4>
        <ul>
          <li>13 games en pré-saison (10W 3L !)</li>
          <li>Seuelement 450 games S11 sur ce compte</li>
          <li>Bon snowball (+14%) mais mauvais si derrière (-12%)</li>
          <li>Gameplay agressif à priori, pas de mages</li>
          <li>
            PS: Sorry la kimzer mais peu de games donc difficile de sortir des
            datas concluantes
          </li>
        </ul>
      </div>
      <div class="winrate">
        <ul>
          WinRate de Ekko
          <li class="win">66.7% Akali (3 games)</li>
          <li>50% Lucian (2 games)</li>
          <li>50% Sylas (6 games)</li>
          <li class="lose">33.3% Kassadin (3 games)</li>
          <li class="lose">33.3% Viktor (3 games)</li>
        </ul>
        <ul>
          WinRate de Sylas (/!\ 70.6% de WR en 51 games)
          <li class="win">100% Viktor (2 games)</li>
          <li class="win">100% Akali (2 games)</li>
          <li class="win">100% Yasuo (4 games)</li>
          <li>50% Yone (2 games)</li>
          <li>50% Kassadin (2 games)</li>
        </ul>
      </div>
      <div>
        <h3>
          ADC =>
          <a href="https://euw.op.gg/summoner/champions/userName=Tit%CF%86"
            >Titφ</a
          >
        </h3>
        <h4>infos</h4>
        <ul>
          <li>26 games en pré-saison dont 10 de Senna</li>
          <li>1500 games en S11</li>
          <li>Il semble jouer tout avec une préférence pour les hard-carry</li>
          <li>Bon snowball (+8%) très mauvais si derrière (-15%)</li>
        </ul>
      </div>
      <div class="winrate">
        <ul>
          WinRate de Aphelios
          <li class="win">72.7% Jinx (11 games)</li>
          <li class="win">70% Ezreal (20 games)</li>
          <li class="win">66.7% Varus (6 games)</li>
          <li class="win">66.7% Ziggs (6 games)</li>
          <li class="win">53.8% MF (13 games)</li>
          <li class="win">52.6% Kai'sa (19 games)</li>
          <li class="lose">42.9% Kog (7 games)</li>
          <li class="lose">33.3% Lucian (6 games)</li>
          <li class="lose">33.3% Cait (6 games)</li>
          <li class="lose">33.3% Draven (9 games)</li>
          <li class="lose">16.7% Jhin (12 games)</li>
        </ul>
        <ul>
          WinRate de Twitch
          <li class="win">100% Xayah (6 games)</li>
          <li class="win">52.9% Ezreal (17 games)</li>
          <li>50% Cait (4 games)</li>
          <li>50% MF (6 games)</li>
          <li>50% Jhin (10 games)</li>
          <li class="lose">45% Jinx (20 games)</li>
          <li class="lose">40.9% Kai'Sa (22 games)</li>
          <li class="lose">35.7% Varus (14 games)</li>
          <li class="lose">25% Kog (4 games)</li>
          <li class="lose">25% Draven (4 games)</li>
          <li class="lose">0% Aphelios (6 games)</li>
        </ul>
        <ul>
          WinRate de Kai'Sa
          <li class="win">80% Twitch (5 games)</li>
          <li class="win">68.4% Jinx (19 games)</li>
          <li class="win">66.7% Cait (6 games)</li>
          <li class="win">66.7% MF (9 games)</li>
          <li>50% Aphelios (8 games)</li>
          <li>50% Xayah (12 games)</li>
          <li class="lose">47.8% Jhin (23 games)</li>
          <li class="lose">35.7% Ezreal (14 games)</li>
        </ul>
        <ul>
          Win rate de Ezreal
          <li class="win">75% Xayah (4 games)</li>
          <li class="win">66.7% Twitch (6 games)</li>
          <li class="win">60% Kai'Sa (20 games)</li>
          <li class="win">57.1% Lucian (7 games)</li>
          <li class="lose">40% MF (5 games)</li>
          <li class="lose">40% Draven (5 games)</li>
          <li class="lose">37.5% Jinx (8 games)</li>
          <li class="lose">16.7% Jhin (6 games)</li>
        </ul>
        <ul>
          WinRate de Jinx
          <li class="win">100% Xayah (4 games)</li>
          <li class="win">75% Ezreal (12 games)</li>
          <li class="win">72.7% Jhin (11 games)</li>
          <li class="win">60% Varus (5 games)</li>
          <li class="lose">40% Twitch (5 games)</li>
          <li class="lose">40% Kai'Sa (10 games)</li>
          <li class="lose">25% Draven (4 games)</li>
        </ul>
      </div>
      <div>
        <h3>
          Support =>
          <a href="https://euw.op.gg/summoner/champions/userName=L9%20FilanKaze"
            >FilanKaze</a
          >
        </h3>
        <h4>Infos</h4>
        <ul>
          <li>Seulement 9 Games en pré-saison dont 4 de blitz</li>
          <li>Bon Snowball (+9%)</li>
          <li>Joueur de tank/engage pas du tout d'enchanteur dans son pool</li>
        </ul>
      </div>
      <div class="winrate">
        <ul>
          Winrate de Leona
          <li class="win">82.4% Lulu (17 games)</li>
          <li class="win">57.1% Braum (14 games)</li>
          <li class="win">57.1% Alistar (14 games)</li>
          <li class="win">55.6% Nautilus (9 games)</li>
          <li>50% Zilean (6 games)</li>
          <li class="lose">44.4% Thresh (9 games)</li>
          <li class="lose">43.8% Yummi (16 games)</li>
          <li class="lose">40% Bard (10 games)</li>
          <li class="lose">37.5% Nami (8 games)</li>
          <li class="lose">0% Blitz (6 games)</li>
        </ul>
        <ul>
          WinRate de Blitz
          <li class="win">83.3% Leona (6 games)</li>
          <li class="win">70% Nami (10 games)</li>
          <li class="win">60% Yummi (10 games)</li>
          <li class="win">57.1% Braum (7 games)</li>
          <li class="win">57.1% Thresh (21 games)</li>
          <li class="win">56% Lulu (25 games)</li>
          <li class="lose">37.5% Rakan (8 games)</li>
          <li class="lose">25% Nautilus (8 games)</li>
        </ul>
        <ul>
          WinRate de Nautilus (beaucoup de mal contre enchanteur)
          <li class="win">100% Alistar (4 games)</li>
          <li class="win">85.7% Blitz (7 games)</li>
          <li class="win">71.4% Rakan (7 games)</li>
          <li class="win">54.5% Thresh (11 games)</li>
          <li>50% Braum (8 games)</li>
          <li>50% Leona (14 games)</li>
          <li class="lose">41.7% Yummi (12 games)</li>
          <li class="lose">37.5% Lulu (8 games)</li>
          <li class="lose">16.7% Séraphine (6 games)</li>
          <li class="lose">0% Karma (4 games)</li>
        </ul>
        <ul>
          WinRate de Rell
          <li class="win">77.8% Leona (9 games)</li>
          <li class="win">66.7% Yummi (6 games)</li>
          <li class="lose">44.4% Alistar (9 games)</li>
          <li class="lose">40% Lulu (5 games)</li>
          <li class="lose">33.3% Nautilus (3 games)</li>
        </ul>
      </div>
    </div>

    <div v-if="mode === 'galactix'">
      <h1>Galactix</h1>
      <a
        href="https://www.twitch.tv/etvn/clip/TalentedMagnificentHamsterRlyTho-zlL1_opDRENBSZni"
      >
        <img class="draft" src="../assets/Draft1Galactix.png" alt="draft" />
        <p>patch 11.22</p>
      </a>

      <ul class="borderBottom">
        Potentiels flex
        <li>Gragas (Top + Jungle)</li>
        <li>Lucian (Mid + ADC)</li>
        <li>Yasuo (ADC + Mid)</li>
      </ul>
      <h3>
        Top => <a href="https://euw.op.gg/summoner/userName=Binow">Binow</a>
      </h3>
      <h2>Infos</h2>
      <div>
        <ul>
          <li>Une seule game de pré-saison sur Gnar</li>
          <li>Main Gnar mais seulement 457 games S11</li>
          <li>/!\ Très mauvais si derrière !! (-21%)</li>
        </ul>
      </div>
      <div class="winrate">
        <ul>
          WinRate de Gnar
          <li class="win">75% Aatrox (4 games)</li>
          <li class="win">75% Camille (4 games)</li>
          <li class="win">66.7% Jayce (3 games)</li>
          <li class="win">60% Jax (5 games)</li>
          <li>50% Kennen (2 games)</li>
          <li>50% Darius (8 games)</li>
          <li class="lose">33.3% Malphite (3 games)</li>
          <li class="lose">25% Shen (4 games)</li>
          <li class="lose">25% Renekton (4 games)</li>
          <li class="lose">0% TK (2 games)</li>
          <li class="lose">0% Wukong (2 games)</li>
          <li class="lose">0% Sett (4 games)</li>
        </ul>
        <ul>
          WinRate Renekton
          <li class="win">100% Gnar (2 games)</li>
          <li class="win">66.7% Camille (12 games)</li>
          <li class="lose">33.3% Irelia (3 games)</li>
          <li class="lose">20% Gwen (5 games)</li>
        </ul>
      </div>
      <h3>
        Mid => <a href="https://euw.op.gg/summoner/userName=GX+Nono">Nono</a>
      </h3>
      <h2>Infos</h2>
      <div>
        <ul>
          <li>15 games de pré-saison dont 9 sur Vel'koz</li>
          <li>
            Main Vel'Koz mais pas OTP du tout (2112 games S11, 223 sur Vel'Koz)
          </li>
          <li>Mauvais si derrière (-15%)</li>
          <li>
            Il semble avoir du mal contre Corki dans la plupart des matchups
          </li>
        </ul>
      </div>
      <div class="winrate">
        <ul>
          Winrate de Vel'koz
          <li class="win">75% Yasuo (4 games)</li>
          <li class="win">75% Lucian (4 games)</li>
          <li class="win">55.6% Ryze (9 games)</li>
          <li class="win">54.5% Yone (11 games)</li>
          <li class="win">54.5% Viktor (11 games)</li>
          <li>50% Cassio (4 games)</li>
          <li class="lose">44.4% Ori (9 games)</li>
          <li class="lose">42.9% Sylas (7 games)</li>
          <li class="lose">40% Syndra (5 games)</li>
          <li class="lose">33.3% LB (3 games)</li>
          <li class="lose">33.3% Lux (3 games)</li>
          <li class="lose">20% Xerath (5 games)</li>
          <li class="lose">0% Corki (4 games)</li>
        </ul>
        <ul>
          Winrate de Viktor
          <li class="win">100% Lux (2 games)</li>
          <li class="win">100% Ryze (3 games)</li>
          <li class="win">100% Ori (8 games)</li>
          <li class="win">75% Azir (4 games)</li>
          <li class="win">75% Yasuo (4 games)</li>
          <li class="win">66.7% TF (6 games)</li>
          <li>50% Syndra (6 games)</li>
          <li>50% Cassio (6 games)</li>
          <li>50% Lucian (6 games)</li>
          <li class="lose">40% Galio (5 games)</li>
          <li class="lose">40% Yone (5 games)</li>
          <li class="lose">33.3% Sylas (6 games)</li>
          <li class="lose">33.3% Irelia (6 games)</li>
          <li class="lose">33.3% Corki (6 games)</li>
          <li class="lose">0% Akali (4 games)</li>
        </ul>
        <ul>
          WinRate de Cassio
          <li class="win">75% Corki (4 games)</li>
          <li class="win">66.7% Sylas (12 games)</li>
          <li class="win">60% Yone (10 games)</li>
          <li class="win">57.1% LB (7 games)</li>
          <li class="lose">33.3% Syndra (3 games)</li>
          <li class="lose">33.3% Yasuo (3 games)</li>
          <li class="lose">33.3% Lucian (3 games)</li>
          <li class="lose">0% Ryze (4 games)</li>
        </ul>
        <ul>
          WinRate de Sylas
          <li class="win">100% Ryze (2 games)</li>
          <li class="win">100% Cassio (2 games)</li>
          <li class="win">66.7% Yone (3 games)</li>
          <li class="win">57.1% LB (7 games)</li>
          <li class="lose">37.5% TF (8 games)</li>
          <li class="lose">33.3% Akali (3 games)</li>
          <li class="lose">20% Yasuo (5 games)</li>
          <li class="lose">0% Akshan (2 games)</li>
          <li class="lose">0% Corki (3 games)</li>
        </ul>
        <ul>
          WinRate de Xerath
          <li class="win">100% Azir (3 games)</li>
          <li class="win">100% Yasuo (3 games)</li>
          <li class="win">66.7% TF (3 games)</li>
          <li class="win">66.7% Vex (3 games)</li>
          <li class="win">66.7% Yone (3 games)</li>
          <li>50% Corki (4 games)</li>
          <li>50% Sylas (6 games)</li>
          <li class="lose">37.5% Syndra (8 games)</li>
          <li class="lose">0% LB (3 games)</li>
          <li class="lose">0% Irelia (3 games)</li>
        </ul>
      </div>
      <h3>
        ADC =>
        <a href="https://euw.op.gg/summoner/userName=GX+Dertyup">Dertyup</a>
      </h3>
      <h2>Infos</h2>
      <div>
        <ul>
          <li>0 game en pré-saison</li>
          <li>Bon Snowball (+13%) mais mauvais derrière (-13%)</li>
          <li>Main Jhin, (1541 games S11, 367 sur Jhin)</li>
        </ul>
      </div>
      <div class="winrate">
        <ul>
          WinRate de Jhin
          <li class="win">90% Cait (20 games)</li>
          <li class="win">81.3% Aphelios (16 games)</li>
          <li class="win">60.9% Senna (23 games)</li>
          <li class="win">57.1% Xayah (14 games)</li>
          <li class="win">55.6% Kog (9 games)</li>
          <li class="win">54.5% Draven (11 games)</li>
          <li class="win">53.8% Jinx (26 games)</li>
          <li class="win">52.6% Lucian (19 games)</li>
          <li>50% Ezreal (42 games)</li>
          <li class="lose">48.8% Kai'sa (43 games)</li>
          <li class="lose">36.4% Twitch(11 games)</li>
          <li class="lose">31.3% MF (16 games)</li>
          <li class="lose">26.7% Ashe (15 games)</li>
        </ul>
        <ul>
          WinRate de Aphelios
          <li class="win">76.9% Jhin (26 games)</li>
          <li class="win">75% Twitch (4 games)</li>
          <li>50% Xayah (6 games)</li>
          <li>50% Cait (8 games)</li>
          <li>50% Jinx (28 games)</li>
          <li class="lose">45.5% MF (11 games)</li>
          <li class="lose">44.6% Kai'Sa (56 games)</li>
          <li class="lose">44.4% Draven (9 games)</li>
          <li class="lose">40% Ziggs (5 games)</li>
          <li class="lose">38.5% Ezreal (39 games)</li>
          <li class="lose">33.3% Kog (6 games)</li>
          <li class="lose">33.3% Lucian (12 games)</li>
        </ul>
        <ul>
          Winrate de Ezreal
          <li class="win">73.7% Jinx (19 games)</li>
          <li class="win">57.1% Xayah (7 games)</li>
          <li class="win">54.5% Aphelios (11 games)</li>
          <li>50% MF (6 games)</li>
          <li>50% Twitch (6 games)</li>
          <li>50% Kai'Sa (24 games)</li>
          <li class="lose">41.7% Cait (12 games)</li>
          <li class="lose">40% Kog (5 games)</li>
          <li class="lose">38.1% Jhin (21 games)</li>
          <li class="lose">35% Draven (20 games)</li>
          <li class="lose">28.6% Senna (7 games)</li>
          <li class="lose">25% Lucian (8 games)</li>
        </ul>
        <ul>
          WinRate Lucian
          <li class="win">80% Twitch (5 games)</li>
          <li class="win">66.7% Aphelios (3 games)</li>
          <li class="win">63.6% MF (11 games)</li>
          <li class="win">60% Ezreal (15 games)</li>
          <li class="win">57.1% Jinx (7 games)</li>
          <li class="win">56.5% Jhin (23 games)</li>
          <li>50% Cait (4 games)</li>
          <li class="lose">37.5% Kai'Sa (8 games)</li>
          <li class="lose">33.3% (3 games)</li>
          <li class="lose">20% Varus (5 games)</li>
          <li class="lose">0% Kog (2 games)</li>
        </ul>
      </div>
    </div>
    <div v-if="mode === 'ppm'">
      <h1>PPM</h1>
      <h3>
        Top =>
        <a href="https://euw.op.gg/summoner/userName=Fracalos">Fracalos</a>
      </h3>
      <h2>Infos</h2>
      <div>
        <ul>
          <li>
            31 games de pré-saison majoritairement sur Garen, Morde, Jax et
            Darius
          </li>
          <li>768 games S11 dont 318 sur Jax</li>
          <li>Bon snowball (+17%) mais mauvais derrière (-13%)</li>
        </ul>
      </div>
      <div class="winrate">
        <ul>
          WinRate de Jax
          <li class="win">83.3% Gnar (6 games)</li>
          <li class="win">66.7% Ornn (3 games)</li>
          <li class="win">66.7% TK (6 games)</li>
          <li class="win">66.7% Shen (9 games)</li>
          <li class="win">63.6% Sett (11 games)</li>
          <li class="win">62.5% Morde (8 games)</li>
          <li class="win">61.1% Irelia (18 games)</li>
          <li class="win">54.5% Mundo (11 games)</li>
          <li>50% GP (10 games)</li>
          <li>50% Malphite (20 games)</li>
          <li class="lose">44.4% Aatrox (9 games)</li>
          <li class="lose">40% Urgot (5 games)</li>
          <li class="lose">36.8% Camille (19 games)</li>
          <li class="lose">33.3% Graves (3 games)</li>
          <li class="lose">27.3% Wukong (11 games)</li>
          <li class="lose">25% Renek (4 games)</li>
          <li class="lose">0% Kennen (2 games)</li>
        </ul>
        <ul>
          WinRate de Garen
          <li class="win">100% Jayce (2 games)</li>
          <li class="win">100% Urgot (3 games)</li>
          <li class="win">80% Malphite (5 games)</li>
          <li class="win">75% Voli (4 games)</li>
          <li class="win">70% Camille (10 games)</li>
          <li class="win">60% Sett (5 games)</li>
          <li>50% Irelia (2 games)</li>
          <li>50% Aatrox (4 games)</li>
          <li>50% Jax (8 games)</li>
          <li>50% Gnar (10 games)</li>
          <li class="lose">37.5% Renek (8 games)</li>
          <li class="lose">33.3% Ornn (3 games)</li>
          <li class="lose">33.3% GP (3 games)</li>
          <li class="lose">33.3% Morde (6 games)</li>
          <li class="lose">33.3% Shen (6 games)</li>
        </ul>
        <ul>
          WinRate de Darius
          <li class="win">80% Renek (5 games)</li>
          <li class="win">75% Irelia (4 games)</li>
          <li class="win">75% Sett (4 games)</li>
          <li class="win">75% Gnar (12 games)</li>
          <li class="win">71.4% Shen (7 games)</li>
          <li class="win">66.7% Gwen (3 games)</li>
          <li class="win">63.6% Camille (11 games)</li>
          <li>50% Voli (4 games)</li>
          <li class="lose">40% Jax (5 games)</li>
          <li class="lose">40% Malphite (5 games)</li>
          <li class="lose">33.3% GP (3 games)</li>
          <li class="lose">14.3% Wukong (7 games)</li>
          <li class="lose">0% Aatrox (3 games)</li>
        </ul>
      </div>
      <h2>
        Jungle =>
        <a href="https://euw.op.gg/summoner/userName=PPM+B+A+S+T+">BAST</a>
      </h2>
      <h2>Infos</h2>
      <div>
        <ul>
          <li>Seulement 4 games en pré-saison</li>
          <li>
            Seulement 249 games en S11, très mauvais winRate en jungle sauf sur
            Udyr
          </li>
          <li>
            Pas assez de games pour analyser, go ban Udyr/xin et on est fine
          </li>
        </ul>
      </div>
      <h2>
        Mid => <a href="https://euw.op.gg/summoner/userName=PPM+Usah">Usah</a>
      </h2>
      <h2>Infos</h2>
      <div>
        <ul>
          <li>3 games ADC en pré-saison, 0 au mid</li>
          <li>559 games en S11 dont 266 sur Ahri</li>
        </ul>
      </div>
      <div class="winrate">
        <ul>
          WinRate de Ahri
          <li class="win">100% Azir (3 games)</li>
          <li class="win">83.3% Ori (6 games)</li>
          <li class="win">80% Ryze (5 games)</li>
          <li class="win">75% Akali (4 games)</li>
          <li class="win">66.7% Xerath (6 games)</li>
          <li class="win">62.5% Lux (8 games)</li>
          <li class="win">60% TF (5 games)</li>
          <li class="win">58.3% Viktor (12 games)</li>
          <li class="win">57.1% Yasuo (14 games)</li>
          <li class="win">53.8% Yone (13 games)</li>
          <li>50% Cassio (6 games)</li>
          <li>50% Sylas (12 games)</li>
          <li class="lose">44.4% LB (9 games)</li>
          <li class="lose">33.3% Galio (3 games)</li>
          <li class="lose">33.3% Corki (6 games)</li>
          <li class="lose">25% Syndra (4 games)</li>
          <li class="lose">25% Ziggs (4 games)</li>
          <li class="lose">0% Séraphine (4 games)</li>
        </ul>
      </div>
      <h2>
        ADC => <a href="https://euw.op.gg/summoner/userName=Etienne">Etienne</a>
      </h2>
      <h2>Infos</h2>
      <div>
        <ul>
          <li>12 games en pré-saison dont 5 sur Jinx et 4 sur Ezreal</li>
          <li>Main Jungle de base</li>
          <li>
            Moins de 50 games ADC en S11, Semble jouer uniquement Jinx, Ezreal
            et un peu de Jhin
          </li>
          <li>Pas d'analyse à proposer ici non plus mon bro Zelda</li>
        </ul>
      </div>
      <h2>
        Support =>
        <a href="https://euw.op.gg/summoner/userName=Yuq%C4%B1">Yuqi</a>
      </h2>
      <h2>Infos</h2>
      <div>
        <ul>
          <li>31 games en pré-saison dont 11 sur Shaco et 5 sur Rell</li>
          <li>1871 games S11 dont 793 sur Shaco (Quel animal ce toasty)</li>
          <li>Excellent snowball (+21%)</li>
        </ul>
      </div>
      <div class="winrate">
        <ul>
          WinRate de Shaco (MustBan)
          <li class="win">72.4% Yummi (29 games)</li>
          <li class="win">69.8% Leona (43 games)</li>
          <li class="win">69.2% Blitz (13 games)</li>
          <li class="win">63.6% Lux (11 games)</li>
          <li class="win">60% Lulu (35 games)</li>
          <li class="win">57.4% Bard (61 games)</li>
          <li class="win">57.1% Braum (7 games)</li>
          <li class="win">55.9% Nami (34 games)</li>
          <li class="win">55.9% Nauti (34 games)</li>
          <li class="win">55.6% Alistar (27 games)</li>
          <li class="win">52.5% Thresh (99 games)</li>
          <li class="win">51.6% Rakan (31 games)</li>
          <li>50% Zilean (16 games)</li>
          <li class="lose">42% Karma (50 games)</li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "UTT",
  data: function () {
    return {
      mode: "display",
    };
  },
  methods: {
    switchToNunuls: function () {
      this.mode = "nunuls";
    },
    switchToAmazing: function () {
      this.mode = "amazing";
    },
    switchToGalactix: function () {
      this.mode = "galactix";
    },
    switchToPpm: function () {
      this.mode = "ppm";
    },
  },
};
</script>

<style scoped>
.draft {
  width: 75%;
}
.win {
  color: green;
}
.lose {
  color: red;
}

li {
  display: flex;
  justify-content: center;
}
.winrate {
  display: flex;
  justify-content: space-around;
  border-bottom: 1px solid black;
}
h1 {
  border-bottom: 1px solid black;
}
.borderBottom {
  border-bottom: 1px solid black;
}
</style>
