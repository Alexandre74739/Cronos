import "dotenv/config";
import ws from "ws";
import { neonConfig } from "@neondatabase/serverless";
import { PrismaNeon } from "@prisma/adapter-neon";
import { PrismaClient } from "../src/generated/prisma";

neonConfig.webSocketConstructor = ws;

const adapter = new PrismaNeon({ connectionString: process.env.DATABASE_URL! });
const prisma = new PrismaClient({ adapter });

const sources = [
  // ── PRÉHISTOIRE ────────────────────────────────────────────────────────────
  {
    slug: "peintures-lascaux",
    title: "Peintures de la grotte de Lascaux",
    year: -17000,
    nature: "Peintures rupestres",
    author: "Artistes anonymes du Paléolithique supérieur",
    origin: "Grotte de Lascaux, Dordogne, France ; classée au patrimoine mondial de l'UNESCO (1979)",
    description: "Ensemble de peintures rupestres datant d'environ 17 000 ans, représentant chevaux, aurochs et bisons avec une maîtrise artistique considérée comme l'un des sommets de l'art préhistorique mondial.",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/1/1e/Lascaux_painting.jpg",
    color: "#7A9E7E",
    nasdiN: "Les peintures de Lascaux sont des représentations pariétales réalisées sur les parois rocheuses d'une grotte naturelle au moyen de pigments minéraux (ocre, manganèse, charbon de bois) et de graisses animales. On y distingue plusieurs techniques : tracé digital, application au tampon, soufflage de pigment en poudre. Les représentations figurent essentiellement des animaux (chevaux pour 60 %, suivis de cerfs, aurochs, bisons) dans des postures dynamiques, parfois en perspective torsadée. Le complexe comporte plusieurs salles aux fonctions probablement différentes : la salle des Taureaux, le Diverticule axial, le Puits.",
    nasdiA: "Les auteurs sont des membres de communautés de chasseurs-cueilleurs du Paléolithique supérieur (culture Magdalénienne), dont on ne sait rien d'individuel. Leur maîtrise technique suppose une formation spécialisée, probablement transmise au sein d'un groupe de 'spécialistes'. L'accès à ces grottes profondes, difficiles et dangereuses, implique une intentionnalité forte : ces hommes n'entraient pas dans ces espaces par hasard, mais dans un but précis, rituel ou symbolique.",
    nasdiS: "La grotte est découverte le 12 septembre 1940 par quatre adolescents (Marcel Ravidat, Jacques Marsal, Georges Agnel, Simon Coencas) et leur chien. André Leroi-Gourhan et Annette Laming-Emperaire en feront l'étude scientifique fondatrice. La grotte est ouverte au public en 1948 puis fermée en 1963 en raison des dégâts causés par le CO₂ des visiteurs (prolifération d'algues vertes). Lascaux II, réplique fidèle, est inaugurée en 1983. Une fac-similé international, Lascaux IV, ouvre en 2016.",
    nasdiD: "Les peintures ont été réalisées entre -18 000 et -15 000 ans avant notre ère, soit pendant le Paléolithique supérieur (Magdalénien), une période de réchauffement climatique progressif. Les datations au carbone 14 sur les charbons de bois et à l'uranium-thorium sur les calcites de recouvrement permettent de les situer avec précision. Cette époque correspond à une explosion de la créativité symbolique humaine en Europe occidentale.",
    nasdiI: "Lascaux pose la question fondamentale des origines de l'art et de la pensée symbolique : pourquoi des hommes préhistoriques ont-ils risqué leur vie pour descendre dans des grottes obscures et y représenter le monde vivant avec une précision et une beauté stupéfiantes ? Plusieurs hypothèses s'affrontent — magie de chasse, chamanisme, cosmologie, mémoire collective — sans qu'aucune ne soit définitivement établie. L'existence d'un tel art prouve que l'Homo sapiens du Paléolithique possédait déjà toutes les capacités cognitives de l'être humain moderne.",
  },
  {
    slug: "venus-willendorf",
    title: "Vénus de Willendorf",
    year: -25000,
    nature: "Statuette en calcaire oolithique",
    author: "Artiste anonyme du Gravettien",
    origin: "Willendorf, Basse-Autriche ; Naturhistorisches Museum, Vienne",
    description: "Petite statuette féminine de 11,1 cm taillée dans du calcaire oolithique et couverte d'ocre rouge, caractérisée par ses formes anatomiques très développées et l'absence de visage identifiable.",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/5/50/Venus_von_Willendorf_01.jpg",
    color: "#7A9E7E",
    nasdiN: "La Vénus de Willendorf est une sculpture en ronde-bosse de 11,1 cm de hauteur, taillée dans du calcaire oolithique (une roche locale qui n'existe pas à Willendorf, indiquant un transport sur une longue distance). Elle est couverte d'ocre rouge, couleur associée au sang et à la vie dans les sociétés préhistoriques. Ses caractéristiques morphologiques sont intentionnellement exagérées : seins, ventre et hanches volumineux, vulve détaillée, mais visage sans traits individuels, bras minuscules et pieds absents.",
    nasdiA: "L'auteur est un artiste anonyme appartenant à la culture gravettienne, une culture paléolithique présente en Europe de -28 000 à -22 000 ans. L'identité et le genre de l'artiste sont inconnus. Les 'Vénus paléolithiques' (plus de 200 figurines similaires ont été retrouvées de l'Atlantique à la Sibérie) suggèrent une tradition artistique partagée sur un immense territoire, impliquant des échanges culturels sur de longues distances entre groupes de chasseurs-cueilleurs.",
    nasdiS: "Découverte en 1908 par l'archéologue Josef Szombathy lors de fouilles sur le site de Willendorf, en Basse-Autriche, au bord du Danube. Elle est immédiatement reconnue comme exceptionnelle et rejoint les collections du Naturhistorisches Museum de Vienne où elle est exposée aujourd'hui. Le terme 'Vénus' — choisi par les archéologues du XIXe siècle — reflète leur propre culture classique plus que la réalité préhistorique.",
    nasdiD: "Datée entre -28 000 et -25 000 ans (culture Gravettienne), la Vénus de Willendorf est l'une des œuvres d'art figuratif les plus anciennes et les mieux conservées de l'humanité. Elle est contemporaine d'une période glaciaire marquée, où les groupes humains étaient mobiles, vivaient de la chasse au mammouth et au renne, et semblent avoir partagé un système symbolique commun à travers une grande partie de l'Europe.",
    nasdiI: "La Vénus de Willendorf est au cœur d'un débat interprétatif majeur : représente-t-elle un idéal de fertilité féminine, une déesse-mère, un autoportrait féminin, un objet de désir masculin ou une figurine thérapeutique liée à l'accouchement ? L'absence de visage et la présence de détails anatomiques très précis orientent vers une signification symbolique forte plutôt qu'un portrait réaliste. Elle témoigne que la pensée abstraite et la représentation symbolique du corps humain existaient bien avant les premières civilisations.",
  },
  {
    slug: "stonehenge",
    title: "Stonehenge",
    year: -3000,
    nature: "Monument mégalithique",
    author: "Constructeurs anonymes du Néolithique et de l'Âge du bronze",
    origin: "Plaine de Salisbury, Wiltshire, Angleterre ; patrimoine mondial de l'UNESCO (1986)",
    description: "Ensemble monumental de mégalithes disposés en cercles concentriques, construit en plusieurs phases entre -3000 et -1500, dont la fonction astronomique, funéraire et rituelle est partiellement attestée par l'archéologie.",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/3/3c/Stonehenge2007_07_30.jpg",
    color: "#7A9E7E",
    nasdiN: "Stonehenge est un monument composé d'un fossé circulaire, d'un talus et de plusieurs cercles de pierres dressées (menhirs). La phase principale comprend 30 blocs de sarsen (grès siliceux) reliés par des linteaux formant un cercle de 33 m de diamètre, et 5 trilithes centraux (dont certains pèsent jusqu'à 25 tonnes). Un cercle intérieur de 82 blocs de 'bluestones' (diorite tachetée, apportée du Pays de Galles à plus de 250 km) complète l'ensemble. Il s'agit d'un exploit logistique extraordinaire pour des sociétés sans métaux ni roues.",
    nasdiA: "Les constructeurs de Stonehenge restent anonymes : plusieurs cultures successives ont participé à son édification sur 1 500 ans. Les études génétiques récentes (2018-2020) montrent que les premiers bâtisseurs (vers -3000) étaient des agriculteurs venus d'Anatolie via la Méditerranée. Les bluestones auraient été érigées vers -2500 par une population d'éleveurs des steppes pontiques (culture Yamnaya). Cette succession de cultures témoigne de vagues migratoires majeures en Europe préhistorique.",
    nasdiS: "Stonehenge est étudié et fouillé depuis le XVIIe siècle, mais son interprétation a radicalement changé : longtemps attribué aux Druides (une association anachronique de 2000 ans), il est aujourd'hui compris comme un lieu de rassemblement, de rituel funéraire et d'observation astronomique. L'axe principal est parfaitement aligné avec le lever du soleil au solstice d'été et le coucher au solstice d'hiver. Des ossements humains inhumés sur le site sur plus de 500 ans attestent de sa fonction funéraire.",
    nasdiD: "La construction de Stonehenge s'étend sur plus de 1 500 ans (-3000 à -1500), avec plusieurs phases distinctes correspondant à des cultures et des technologies différentes. La phase principale des grandes pierres de sarsen est datée vers -2500, contemporaine de la fin du Néolithique et du début de l'Âge du bronze en Grande-Bretagne. Cette période voit l'émergence de sociétés de plus en plus hiérarchisées et de réseaux d'échanges à longue distance.",
    nasdiI: "Stonehenge témoigne de la capacité des sociétés préhistoriques à mobiliser des ressources humaines considérables au service d'un projet collectif de longue durée, impliquant des connaissances astronomiques précises. Il pose des questions fondamentales sur la nature du pouvoir, de la religion et de l'organisation sociale dans les sociétés sans écriture. La précision de son orientation astronomique (solstices d'été et d'hiver) révèle une observation et une maîtrise du temps qui dépassent la simple survie quotidienne.",
  },

  // ── ANTIQUITÉ ─────────────────────────────────────────────────────────────
  {
    slug: "papyrus-ani",
    title: "Papyrus d'Ani — Livre des Morts",
    year: -1275,
    nature: "Papyrus illustré (manuscrit)",
    author: "Scribes et peintres de l'atelier thébain",
    origin: "Thèbes, Égypte ancienne ; British Museum, Londres (depuis 1888)",
    description: "Version du Livre des Morts réalisée pour le scribe Ani, comprenant des formules magiques et la célèbre scène de la 'pesée du cœur' face au dieu Osiris, témoignage majeur de la religion funéraire égyptienne.",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/f/f8/BD_Weighing_of_the_Heart.jpg",
    color: "#C8902A",
    nasdiN: "Le papyrus d'Ani est un rouleau de 23,67 mètres de long composé de sections de textes hiéroglyphiques et de vignettes peintes à la détrempe, le tout réalisé sur un support de papyrus. Il comprend environ 80 chapitres du corpus appelé Livre des Morts (ou Livre pour sortir au jour). La scène la plus célèbre représente la 'pesée du cœur' (psychostasie) : le cœur du défunt est pesé sur une balance contre la plume de Maât (symbole de vérité et de justice) sous le regard d'Osiris, juge suprême des morts.",
    nasdiA: "Le papyrus a été réalisé pour Ani, scribe royal et gardien des greniers des temples de Karnak et d'Abydos, sous le règne de Ramsès II. Les scribes et peintres qui l'ont exécuté appartenaient à un atelier spécialisé dans la production de documents funéraires de luxe. La qualité exceptionnelle du travail — finesse du tracé, richesse des couleurs, mise en page soignée — témoigne d'une commande de prestige réservée aux hauts fonctionnaires.",
    nasdiS: "Le papyrus est acheté en 1888 par E. A. Wallis Budge pour le compte du British Museum, dans des circonstances peu orthodoxes (il est sorti clandestinement d'Égypte, contournant les lois ottomanes sur les antiquités). Budge en publie la première traduction en 1890, faisant du papyrus d'Ani le texte du Livre des Morts le plus connu dans le monde occidental. Sa restitution à l'Égypte est périodiquement demandée par les autorités égyptiennes.",
    nasdiD: "Réalisé vers -1275, sous le règne de Ramsès II (Nouvel Empire, XIXe Dynastie), période de grande prospérité et d'intense production artistique et religieuse en Égypte. Le Livre des Morts lui-même est un corpus de textes funéraires apparu vers -1550 (Nouvel Empire), dérivé des textes des Pyramides (-2400) et des textes des Sarcophages (-2100). Il représente l'évolution de plus de 1 000 ans de pensée funéraire égyptienne.",
    nasdiI: "Le papyrus d'Ani révèle la sophistication de la théologie funéraire égyptienne : l'au-delà n'est pas un lieu de récompense automatique, mais le résultat d'un jugement moral. Le cœur du défunt doit être 'léger' — c'est-à-dire exempt de péchés — pour passer le jugement d'Osiris. Cette conception d'une justice après la mort et d'un compte moral de l'existence humaine constitue l'une des premières formulations connues d'une éthique fondée sur la responsabilité individuelle.",
  },
  {
    slug: "oraison-funebre-pericles",
    title: "L'Oraison funèbre de Périclès",
    year: -431,
    nature: "Discours retranscrit (texte historique)",
    author: "Périclès / Thucydide (retranscripteur)",
    origin: "Athènes, Grèce ; retranscrit dans 'La Guerre du Péloponnèse' de Thucydide (livre II, chap. 34-46)",
    description: "Discours prononcé par Périclès lors des funérailles officielles des soldats athéniens morts pendant la première année de la guerre du Péloponnèse, éloge de la démocratie athénienne et de ses valeurs fondatrices.",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/e/e5/Perikles_delivering_his_Funeral_Oration.jpg",
    color: "#C8902A",
    nasdiN: "L'Oraison funèbre est un discours prononcé oralement puis retranscrit par Thucydide dans son Histoire de la guerre du Péloponnèse. Ce genre littéraire (l'épitaphios logos) est une institution civique athénienne : chaque automne, un magistrat ou un stratège prononce l'éloge des guerriers morts pour la cité. Le texte que nous possédons n'est pas une transcription directe mais une reconstitution par Thucydide, qui précise en préambule qu'il reproduit le sens des discours plutôt que leurs mots exacts.",
    nasdiA: "Périclès (vers -495 à -429) est le stratège dominant d'Athènes pendant son âge d'or. Homme d'État, orateur et mécène (il supervise la construction du Parthénon), il incarne la démocratie athénienne en même temps qu'il en est un produit aristocratique paradoxal. Thucydide (-460 à -400), stratège lui-même et témoin de la guerre du Péloponnèse, retranscrit le discours avec l'aveu méthodologique qu'il reconstruit les paroles autant qu'il les rapporte.",
    nasdiS: "Prononcé à l'hiver -431, lors des premières funérailles officielles de la guerre du Péloponnèse, ce discours est conservé uniquement grâce à l'œuvre de Thucydide, rédigée après -404. Il n'existe aucun autre témoignage direct. Sa survie à travers les siècles — manuscrits byzantins, humanistes de la Renaissance — en fait l'un des textes politiques les plus influents de la pensée occidentale, abondamment cité par les fondateurs des démocraties modernes (notamment Lincoln dans le discours de Gettysburg).",
    nasdiD: "Prononcé en -431, lors de la première année de la guerre du Péloponnèse qui opposa Athènes à Sparte pendant 27 ans (-431 à -404). Ce conflit fratricide entre les deux modèles politiques dominants du monde grec — démocratie athénienne et oligarchie spartiate — est le contexte dans lequel Périclès choisit de faire l'éloge du régime athénien, non pour pleurer les morts, mais pour justifier pourquoi il valait la peine de mourir pour lui.",
    nasdiI: "L'Oraison funèbre de Périclès est la première grande défense théorique de la démocratie dans l'histoire politique. Périclès y affirme que la supériorité d'Athènes ne repose pas sur ses armées ou ses richesses, mais sur son régime politique : égalité devant la loi, participation citoyenne, ouverture d'esprit, culture du débat. Le discours pose les fondements conceptuels de la démocratie libérale : liberté individuelle, pluralisme, primauté de la loi. Il continue d'être cité comme texte fondateur dans les débats sur la démocratie contemporaine.",
  },

  // ── TEMPS MODERNES ────────────────────────────────────────────────────────
  {
    slug: "theses-luther",
    title: "Les 95 Thèses de Luther",
    year: 1517,
    nature: "Thèses académiques (texte imprimé)",
    author: "Martin Luther",
    origin: "Wittenberg, Saint-Empire romain germanique ; diffusées dans toute l'Europe via l'imprimerie",
    description: "95 propositions affichées par Luther contestant la pratique des indulgences papales, acte fondateur de la Réforme protestante qui fractura l'unité religieuse de l'Occident chrétien.",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/a/a3/Luther95Thesen.jpg",
    color: "#2E8A6E",
    nasdiN: "Les 95 Thèses sont un document académique rédigé en latin selon les règles formelles de la disputatio médiévale — un débat intellectuel organisé entre savants. Elles sont présentées sous forme de propositions numérotées, destinées à être discutées publiquement. La légende de l'affichage sur la porte de l'église de Wittenberg le 31 octobre 1517 est probablement une invention postérieure ; Luther les a surtout envoyées par courrier à l'archevêque de Mayence. Leur diffusion rapide est rendue possible par l'imprimerie de Gutenberg (inventée 60 ans plus tôt).",
    nasdiA: "Martin Luther (1483-1546) est un moine augustinien et professeur de théologie à l'université de Wittenberg. Tourmenté par la question du salut, il développe la théologie de la 'justification par la foi seule' (sola fide), en opposition à l'idée catholique que les bonnes œuvres (dont l'achat d'indulgences) contribuent au salut. Ses 95 Thèses visent d'abord un débat académique, mais la dynamique qu'elles déclenchent le dépasse rapidement.",
    nasdiS: "Grâce à l'imprimerie, les 95 Thèses sont traduites en allemand et diffusées dans tout le Saint-Empire en quelques semaines. Luther est convoqué à Rome puis au concile de Worms (1521) où il refuse de se rétracter. Excommunié par le pape Léon X et mis au ban de l'Empire par Charles Quint, il est protégé par l'Électeur de Saxe Frédéric le Sage. La Réforme protestante qu'il déclenche fragmentera définitivement l'Église d'Occident en catholiques, luthériens, calvinistes et autres courants.",
    nasdiD: "Rédigées en octobre 1517, les 95 Thèses émergent dans un contexte de crise multiple : une Église catholique perçue comme corrompue (vente d'indulgences pour financer la basilique Saint-Pierre de Rome), un empire germanique fragmenté en principautés, une bourgeoisie urbaine alphabétisée grâce à l'imprimerie, et un humanisme renaissant qui prône le retour aux sources (ad fontes). Tous ces facteurs permettent à l'étincelle de Luther d'embraser l'Europe.",
    nasdiI: "Les 95 Thèses affirment que le salut ne peut être acheté ni accordé par une autorité ecclésiastique : il relève uniquement de la relation directe entre le croyant et Dieu, médiatisée par la foi et les Écritures. Ce principe révolutionnaire (le 'sacerdoce universel des croyants') remet en cause l'ensemble de l'édifice institutionnel de l'Église catholique. Au-delà du religieux, la Réforme protestante aura des conséquences immenses sur la politique (guerres de Religion), la culture (traduction de la Bible en langues vernaculaires) et la pensée (émergence du protestantisme libéral et de la laïcité).",
  },
  {
    slug: "carte-mercator",
    title: "Carta universalis de Mercator",
    year: 1569,
    nature: "Carte géographique imprimée",
    author: "Gerardus Mercator (Gerard de Cremer)",
    origin: "Duisbourg, Duché de Clèves ; conservée notamment à la Bibliothèque nationale de France et à la Bibliothèque de Rotterdam",
    description: "Première carte du monde utilisant la projection cylindrique conforme dite 'de Mercator', permettant aux navigateurs de tracer des routes à cap constant (lignes loxodromiques) sous forme de lignes droites.",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/8/80/Mercator_1569.png",
    color: "#2E8A6E",
    nasdiN: "La carta universalis de Mercator est une carte-monde imprimée sur 18 feuilles séparées, couvrant une surface totale d'environ 2 m × 1,24 m. Sa nouveauté technique essentielle est la projection cylindrique conforme : les méridiens et parallèles y forment un quadrillage de lignes droites perpendiculaires, avec un écartement croissant des parallèles vers les pôles qui compense la distorsion des latitudes. Cette projection conserve les angles (conforme) mais déforme les surfaces (les régions polaires paraissent disproportionnément grandes).",
    nasdiA: "Gerardus Mercator (1512-1594), géographe et cartographe flamand, est l'une des figures majeures de la cartographie de la Renaissance. Formé à Louvain, il maîtrise les mathématiques, la géographie ptoléméenne et la gravure sur cuivre. Sa vie est marquée par une arrestation pour hérésie en 1544, dont il ressort innocenté. Il consacre sa vie à la production d'atlas et de globes, dont la carte de 1569 est l'œuvre la plus célèbre.",
    nasdiS: "La carte de 1569 est conservée en seulement 4 exemplaires complets dans le monde. Sa diffusion immédiate est limitée, et les navigateurs tardent à l'adopter — les routes loxodromiques ne seront pleinement exploitées que lorsque les mathématiciens Edward Wright (1599) et Henry Bond (1645) fourniront les tables de calcul nécessaires. Aujourd'hui, la projection de Mercator reste la projection de référence pour les cartes marines et numériques (Google Maps l'utilise dans sa variante Web Mercator).",
    nasdiD: "Publiée en 1569, au cœur des Grandes Découvertes (le tour du monde de Magellan date de 1522, la colonisation des Amériques est en cours), la carte de Mercator répond à un besoin pratique urgent : permettre aux navigateurs de calculer leurs routes sur des océans désormais sillonnés régulièrement. Elle s'inscrit dans la révolution cartographique de la Renaissance qui renouvelle profondément la vision européenne du monde.",
    nasdiI: "La projection de Mercator est une réponse à un défi mathématique et pratique : comment représenter la surface sphérique de la Terre sur un plan de façon utile pour la navigation ? Sa solution est élégante mais a un coût politique et culturel : en déformant les surfaces, elle grossit démesurément les régions proches des pôles (Europe, Amérique du Nord) au détriment des régions équatoriales (Afrique, Amérique latine). Ce 'biais cartographique' a été abondamment commenté et critiqué au XXe siècle comme reflet inconscient de la vision coloniale du monde.",
  },
  {
    slug: "traite-westphalie",
    title: "Traité de Westphalie",
    year: 1648,
    nature: "Traité international",
    author: "Représentants de 109 États européens",
    origin: "Osnabrück et Münster, Westphalie, Saint-Empire romain germanique",
    description: "Ensemble de deux traités de paix (Osnabrück et Münster) mettant fin à la guerre de Trente Ans, fondateurs du système d'États souverains modernes et du principe de non-ingérence dans les affaires intérieures.",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/0/09/Der_Westf%C3%A4lische_Frieden.JPG",
    color: "#2E8A6E",
    nasdiN: "Les traités de Westphalie sont en réalité deux accords distincts : le traité d'Osnabrück (entre le Saint-Empire et la Suède) et le traité de Münster (entre le Saint-Empire et la France, et séparément entre l'Espagne et les Provinces-Unies). Ils sont rédigés en latin et en français. Leur contenu est triple : un règlement territorial (redistribution de territoires), un règlement confessionnel (liberté religieuse pour catholiques, luthériens et calvinistes), et un règlement constitutionnel pour l'empire.",
    nasdiA: "Les négociations impliquent 194 délégations représentant 109 entités politiques — un premier exemple de congrès diplomatique multilatéral. Les grandes puissances qui imposent le texte sont la France (représentée par les plénipotentiaires de Mazarin) et la Suède, alliées protestantes pendant la guerre. Le Saint-Empire romain germanique sort affaibli, les princes allemands obtenant une quasi-souveraineté, ce qui fragmente politiquement l'Allemagne jusqu'en 1871.",
    nasdiS: "Les traités de Westphalie sont signés le 24 octobre 1648 et proclamés dans toute l'Europe comme 'paix perpétuelle'. Ils fondent ce que les juristes appèleront le 'système westphalien' : un ordre international basé sur la souveraineté des États, l'égalité juridique entre eux et le principe de non-ingérence. Ce système reste le cadre du droit international jusqu'à aujourd'hui, même s'il est remis en cause par l'émergence de normes supranationales (droits de l'homme, responsabilité de protéger).",
    nasdiD: "Signés en 1648, après 30 ans d'une guerre catastrophique (1618-1648) qui avait ravagé le Saint-Empire : certaines régions d'Allemagne perdirent entre un tiers et la moitié de leur population. La guerre de Trente Ans avait mêlé conflits religieux (catholiques contre protestants) et rivalités dynastiques (Habsbourg contre Bourbon-Valois). L'épuisement général de toutes les parties explique la durée exceptionnelle des négociations (5 ans, 1643-1648).",
    nasdiI: "La paix de Westphalie consacre trois principes qui structureront le droit international pendant les trois siècles suivants : la souveraineté territoriale des États, l'égalité juridique entre eux (quelle que soit leur taille ou leur religion), et le principe de non-ingérence dans les affaires intérieures. Elle sépare également pour la première fois clairement la politique internationale de la religion, posant les bases d'un ordre séculier entre États. Ces principes restent au cœur des débats contemporains sur la gouvernance mondiale.",
  },
  {
    slug: "discours-methode",
    title: "Discours de la Méthode",
    year: 1637,
    nature: "Texte philosophique imprimé",
    author: "René Descartes",
    origin: "Leyde, Provinces-Unies (Pays-Bas) ; publié anonymement en français",
    description: "Préface aux essais scientifiques de Descartes dans laquelle il expose sa méthode universelle de raisonnement et formule le célèbre 'Je pense, donc je suis', fondement du rationalisme moderne.",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/7/73/Frans_Hals_-_Portret_van_Ren%C3%A9_Descartes.jpg",
    color: "#2E8A6E",
    nasdiN: "Le Discours de la Méthode est un texte rédigé en français (et non en latin, langue savante traditionnelle), ce choix linguistique étant lui-même une déclaration philosophique : Descartes s'adresse à tous les esprits raisonnables, pas seulement aux clercs et universitaires. Il se présente comme le récit d'un itinéraire intellectuel personnel plutôt que comme un traité dogmatique. Il est divisé en six parties : récit de formation, règles de la méthode, morale par provision, preuves de l'existence de Dieu et de l'âme, physique et médecine, retrait de la vie publique.",
    nasdiA: "René Descartes (1596-1650) est un mathématicien, physicien et philosophe français qui vit aux Pays-Bas depuis 1628 pour fuir les contraintes intellectuelles du catholicisme français post-tridentin. La condamnation de Galilée en 1633 le pousse à une prudence extrême : il publie le Discours anonymement et refuse de publier son Traité du Monde (qui défend le mouvement de la Terre). Son milieu est celui des savants correspondants d'un réseau européen animé notamment par le père Mersenne.",
    nasdiS: "Publié à Leyde en 1637 en même temps que trois essais scientifiques (La Dioptrique, Les Météores, La Géométrie) dont il est la préface, le Discours est immédiatement traduit en latin (1644) et diffusé dans toute l'Europe savante. Son influence est fondatrice : il pose les bases du rationalisme continental (Spinoza, Leibniz) et structure pendant deux siècles le débat philosophique entre rationalistes et empiristes (Locke, Hume). La formule 'Cogito ergo sum' devient le point de départ de toute la philosophie moderne.",
    nasdiD: "Rédigé en 1637, dans un contexte de profond renouvellement intellectuel : la révolution astronomique (Copernic, Galilée) a ébranlé les fondements de la cosmologie médiévale, la scolastique aristotélicienne est en crise, et l'Europe cherche de nouveaux fondements pour le savoir. Descartes répond à cette crise en proposant de tout reconstruire depuis le doute radical : seule la pensée elle-même est indubitable.",
    nasdiI: "Le Discours de la Méthode fonde le rationalisme moderne sur trois actes philosophiques : le doute méthodique (rejeter tout ce qui peut être mis en doute), le cogito ('Je pense, donc je suis' — le seul fait indubitable), et la reconstruction du savoir sur ce fondement. En faisant de la raison individuelle le seul critère de la vérité — contre l'autorité des Anciens et de l'Église — Descartes inaugure la philosophie des Lumières et pose les fondements épistémologiques de la science moderne.",
  },
  {
    slug: "encyclopedie-diderot",
    title: "L'Encyclopédie — Frontispice",
    year: 1751,
    nature: "Gravure et ouvrage encyclopédique imprimé",
    author: "Denis Diderot et Jean le Rond d'Alembert (directeurs)",
    origin: "Paris, France ; 28 volumes publiés entre 1751 et 1772 par l'éditeur Le Breton",
    description: "Frontispice du premier tome de l'entreprise encyclopédique la plus ambitieuse des Lumières, visant à rassembler et diffuser l'ensemble du savoir humain et à 'changer la façon commune de penser'.",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Encyclopedie_frontispice_full.jpg/800px-Encyclopedie_frontispice_full.jpg",
    color: "#2E8A6E",
    nasdiN: "Le frontispice de l'Encyclopédie est une gravure allégorique réalisée par Benoît-Louis Prévost d'après un dessin de Charles-Nicolas Cochin fils. Elle représente la Vérité au centre, entourée de la Raison et de la Philosophie qui écartent ses voiles, tandis que les Arts et les Sciences recueillent sa lumière. Cette image-programme condense l'idéologie des Lumières : la raison dissipe les ténèbres de l'ignorance et de la superstition. L'Encyclopédie elle-même comprend 28 volumes (17 de texte, 11 de planches) et plus de 70 000 articles.",
    nasdiA: "L'Encyclopédie est dirigée par Denis Diderot (1713-1784), philosophe matérialiste, et Jean le Rond d'Alembert (1717-1783), mathématicien. Elle rassemble plus de 160 contributeurs, dont Voltaire, Rousseau, d'Holbach, Montesquieu, Quesnay. Ce collectif de 'philosophes' des Lumières forme un réseau intellectuel qui partage la conviction que la diffusion du savoir rationnel est le levier du progrès humain et de la transformation de la société.",
    nasdiS: "L'Encyclopédie est publiée à partir de 1751 dans un contexte de censure : le premier tome est immédiatement condamné par le Conseil du Roi et par l'Église (qui y voit une œuvre athée et subversive). La publication est suspendue deux fois (1752 et 1759) avant de reprendre clandestinement. Malgré ces obstacles, l'œuvre se vend à environ 4 000 exemplaires par souscription — un succès commercial considérable pour l'époque — et circule dans toute l'Europe éclairée.",
    nasdiD: "Le premier tome paraît en 1751, en plein siècle des Lumières. La France de Louis XV est une monarchie absolue dont les fondements théologiques et politiques sont de plus en plus contestés. L'Encyclopédie s'inscrit dans un mouvement de critique rationnel de la tradition, de l'autorité religieuse et des préjugés sociaux. Trente-huit ans plus tard, la Révolution française mettra en pratique de nombreuses idées que les encyclopédistes ont contribué à diffuser.",
    nasdiI: "L'Encyclopédie est un projet politique autant qu'intellectuel : en rendant le savoir accessible à tous (ou du moins à la bourgeoisie lettrée), elle vise à transformer la société par l'éducation et la raison, contre l'obscurantisme et le fanatisme religieux. Son article 'Encyclopédie' formule l'objectif explicitement : 'changer la façon commune de penser'. En faisant de la technique et des métiers artisanaux des sujets dignes d'étude savante (les planches de métiers sont une innovation majeure), elle contribue à légitimer le travail manuel et le progrès industriel, préparant idéologiquement la Révolution industrielle.",
  },
];

async function main() {
  let inserted = 0;
  for (const source of sources) {
    await prisma.source.upsert({
      where: { slug: source.slug },
      create: source,
      update: source,
    });
    inserted++;
  }
  console.log(`✓ ${inserted} nouvelles sources insérées/mises à jour.`);
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
