import "dotenv/config";
import ws from "ws";
import { neonConfig } from "@neondatabase/serverless";
import { PrismaNeon } from "@prisma/adapter-neon";
import { PrismaClient } from "../src/generated/prisma";

neonConfig.webSocketConstructor = ws;

const adapter = new PrismaNeon({ connectionString: process.env.DATABASE_URL! });
const prisma = new PrismaClient({ adapter });

const data = [
  // ─── PRÉHISTOIRE ──────────────────────────────────────────────────────────
  {
    slug: "prehistoire",
    label: "Préhistoire",
    events: [
      {
        slug: "premiers-hommes",
        year: -7000000,
        title: "Apparition des premiers hominidés",
        description: "Il y a 7 millions d'années, en Afrique, apparaissent les premiers hominidés - nos ancêtres lointains qui se distinguent peu à peu des grands singes.",
        content: "Il y a environ 7 millions d'années, dans les savanes africaines, apparaissent les premiers hominidés. Le plus ancien connu, Toumaï, a été découvert au Tchad en 2001. Ces êtres marchent parfois debout, ont un cerveau plus grand que les singes, et commencent à utiliser des outils rudimentaires de pierre.\n\nAu fil des millions d'années, plusieurs espèces d'hominidés se succèdent et coexistent : Homo habilis (l'homme habile), Homo erectus (qui maîtrise le feu et sort d'Afrique), jusqu'à Homo sapiens - nous - apparu il y a environ 300 000 ans. Ce n'est pas une évolution en ligne droite, mais un buissonnement d'espèces dont la plupart ont disparu.\n\nCette immense durée de la Préhistoire nous rappelle à quel point l'histoire humaine telle qu'on la raconte est une infime fraction du temps où des humains ont marché sur cette Terre. Nos ancêtres préhistoriques ont développé le langage, l'art, les rituels funéraires, la coopération sociale - toutes les bases de ce qui fait de nous des humains.",
      },
      {
        slug: "maitrise-feu",
        year: -400000,
        title: "Maîtrise du feu",
        description: "Il y a 400 000 ans, les humains apprennent à produire et contrôler le feu - une révolution qui change tout : nourriture, chaleur, protection, lumière.",
        content: "La maîtrise du feu est peut-être la plus grande découverte de toute l'histoire humaine. Il y a environ 400 000 ans, Homo erectus apprend non seulement à conserver le feu, mais aussi à le produire par friction ou percussion. Cette maîtrise change absolument tout dans la vie de nos ancêtres.\n\nLe feu permet de cuire les aliments - ce qui les rend plus digestes et tue les parasites. Les scientifiques pensent que la cuisson a permis au cerveau humain de grossir, car elle libère bien plus d'énergie que la nourriture crue. Le feu chauffe, éloigne les prédateurs, éclaire les nuits, et soude les groupes humains autour du foyer. C'est autour du feu que naissent les premières conversations, les premières histoires, les premières cultures.\n\nLe feu permet aussi la conquête de nouveaux territoires : avec lui, les humains peuvent survivre dans des régions froides. Aujourd'hui encore, allumer un feu de camp provoque quelque chose de profond et d'ancestral en nous - un écho de ces nuits préhistoriques où le feu était la frontière entre la vie et la mort.",
      },
      {
        slug: "homo-sapiens",
        year: -300000,
        title: "Apparition d'Homo sapiens",
        description: "Il y a 300 000 ans en Afrique, notre espèce fait son apparition - dotée d'un cerveau capable de langage complexe, d'abstraction et de créativité.",
        content: "Il y a environ 300 000 ans, au Maroc actuel (site de Jebel Irhoud), apparaissent les premiers Homo sapiens. Notre espèce se distingue des autres hominidés par un crâne plus arrondi, un visage plus plat et surtout un cerveau exceptionnellement développé, capable de langage articulé, de pensée abstraite et de planification sur le long terme.\n\nHomo sapiens n'est pas la seule espèce humaine de l'époque : les Néandertaliens peuplent l'Europe et le Proche-Orient, les Dénisoviens l'Asie, et d'autres espèces encore coexistent en Afrique. Pendant des dizaines de milliers d'années, ces espèces se côtoient, et même se mélangent parfois - les Européens modernes portent encore environ 2% d'ADN néandertalien.\n\nCe qui distingue Homo sapiens et lui permettra de survivre alors que toutes les autres espèces humaines disparaîtront ? Probablement sa capacité à coopérer en très grands groupes grâce au langage et aux croyances communes. La capacité à imaginer des choses qui n'existent pas - des dieux, des nations, des droits - est à la fois notre plus grande particularité et le secret de notre domination sur la planète.",
      },
      {
        slug: "migration-afrique",
        year: -70000,
        title: "Grande migration hors d'Afrique",
        description: "Il y a 70 000 ans, un petit groupe d'Homo sapiens quitte l'Afrique et entame une migration qui peuplera toute la planète en quelques dizaines de milliers d'années.",
        content: "Il y a environ 70 000 ans, à la suite d'une période de grand stress climatique (peut-être liée à l'éruption cataclysmique du volcan Toba en Indonésie), un petit groupe d'Homo sapiens - peut-être seulement quelques milliers d'individus - franchit le détroit de Bab-el-Mandeb entre l'Afrique et l'Arabie. C'est le début de la plus grande aventure de notre espèce.\n\nEn quelques dizaines de milliers d'années, leurs descendants vont coloniser toute la planète. D'abord l'Asie et l'Australie (il y a 65 000 ans), puis l'Europe (il y a 45 000 ans), et enfin les Amériques en franchissant le détroit de Béring à pied - car le niveau des mers était bien plus bas - il y a environ 15 000 à 20 000 ans. Chaque nouvelle terre est un défi : nouveau climat, nouveaux animaux, nouvelles plantes.\n\nTous les êtres humains qui vivent aujourd'hui hors d'Afrique sub-saharienne descendent de ce petit groupe de migrants. Les analyses génétiques modernes nous permettent de retracer ces migrations avec une précision extraordinaire. Cette histoire nous rappelle que nous sommes tous frères et sœurs, issus d'une même famille africaine qui a osé partir vers l'inconnu.",
      },
      {
        slug: "art-rupestre",
        year: -40000,
        title: "Premières peintures rupestres",
        description: "Il y a 40 000 ans, les humains commencent à peindre sur les parois des grottes - la première expression artistique de l'humanité.",
        content: "Il y a environ 40 000 ans, dans les grottes d'Europe et d'Asie, quelque chose de nouveau apparaît : des humains commencent à peindre les parois rocheuses de pigments naturels. Les grottes de Chauvet (France) et d'Altamira (Espagne) conservent ces chefs-d'œuvre préhistoriques - bisons, mammouths, chevaux, rhinocéros représentés avec une vivacité et un sens du mouvement étonnants.\n\nCes peintures ne sont pas des griffonnages hasardeux. Leurs auteurs choisissaient délibérément des parois aux reliefs expressifs, utilisaient la flamme des torches pour créer des effets d'animation, mélangeaient avec soin ocre, charbon et graisses animales. Certains artistes dessinaient des mains en soufflant la peinture autour - comme une signature personnelle vieille de 40 000 ans.\n\nPourquoi nos ancêtres ont-ils commencé à faire de l'art ? Peut-être pour la magie de la chasse, pour communiquer avec les esprits, pour raconter des histoires, ou simplement par plaisir esthétique. Nous ne le savons pas avec certitude. Mais ces peintures prouvent que les humains d'il y a 40 000 ans avaient exactement le même cerveau que nous - capable de symbolisme, de beauté et d'expression créative.",
      },
      {
        slug: "revolution-neolithique",
        year: -12000,
        title: "Révolution néolithique : l'agriculture",
        description: "Il y a 12 000 ans, des humains apprennent à cultiver les plantes et élever les animaux - transformant radicalement leur mode de vie nomade en sédentaire.",
        content: "Pendant des centaines de milliers d'années, les humains ont vécu en chassant les animaux et en cueillant les plantes sauvages. Puis, il y a environ 12 000 ans, dans le 'Croissant Fertile' (actuel Proche-Orient), quelque chose de révolutionnaire se produit : des humains commencent à semer délibérément des graines et à revenir pour récolter. L'agriculture est née.\n\nCette transition n'est pas instantanée - elle prend des millénaires. Mais ses conséquences sont immenses. Avec l'agriculture, on peut nourrir beaucoup plus de personnes sur un même territoire. Les populations explosent. Les humains deviennent sédentaires, construisent des villages permanents, puis des villes. La division du travail apparaît : certains cultivent, d'autres fabriquent des outils, d'autres gouvernent. Les inégalités sociales naissent avec la propriété.\n\nLa révolution néolithique n'est pas uniquement positive. Les premiers agriculteurs étaient moins bien nourris que les chasseurs-cueilleurs (alimentation moins variée), travaillaient plus dur, et vivaient entassés avec leurs animaux domestiques - source de nouvelles maladies comme la variole, la grippe et la rougeole. Mais elle a rendu possible tout ce qui a suivi : les villes, les empires, la science, l'écriture, et finalement, notre civilisation moderne.",
      },
      {
        slug: "domestication-animaux",
        year: -9000,
        title: "Domestication des animaux",
        description: "Il y a 9 000 ans, les humains apprivoisent les premiers animaux domestiques - chiens, moutons, chèvres, porcs - transformant leur relation avec la nature.",
        content: "La domestication des animaux est l'une des grandes révolutions de la Préhistoire. Le chien est probablement le premier animal domestiqué, il y a peut-être 15 000 ans, à partir du loup gris. Les moutons et chèvres suivent vers -9000, puis les bovins (-8000), les cochons (-7000), les chevaux (-5500) et les poulets (-3000). Chaque domestication change profondément les sociétés humaines.\n\nLes animaux domestiques fournissent de la viande, du lait, de la laine, de la traction pour les champs et le transport. Avec le cheval, les humains peuvent voyager plus vite, mener des guerres à plus grande échelle, et commercer sur de longues distances. Les bovins transforment l'agriculture : là où un homme pouvait labourer un demi-hectare par jour à la main, il en laboure plusieurs avec une paire de bœufs.\n\nMais la domestication a aussi des conséquences inattendues. Vivre au contact étroit des animaux crée des passerelles pour les maladies : la variole vient de la vache, la grippe du porc et des oiseaux, la rougeole des bovins. Ces maladies, auxquelles les éleveurs ont développé des résistances partielles, seront dévastatrices pour les peuples n'ayant jamais côtoyé ces animaux - comme les Amérindiens lors de l'arrivée des Européens.",
      },
      {
        slug: "invention-roue",
        year: -5000,
        title: "Invention de la roue",
        description: "Vers 5000 avant notre ère, des artisans mésopotamiens inventent la roue - une révolution technique qui va transformer le transport et l'artisanat pour toujours.",
        content: "La roue apparaît vers 5000 avant notre ère en Mésopotamie (actuel Irak), d'abord comme tour de potier, puis comme moyen de transport. C'est une invention tellement fondamentale qu'elle semble évidente - et pourtant, elle n'a été inventée qu'une seule fois dans l'histoire, et n'a jamais été découverte indépendamment par les civilisations du Nouveau Monde.\n\nLe premier chariot à roues connu date d'environ -3500. Attelé à un bœuf ou un âne, il permet de transporter des charges que jamais des humains seuls ne pourraient déplacer. Les routes se développent, le commerce longue distance explose. Les armées deviennent mobiles, les empires s'étendent. Plus tard, la roue sera au cœur des moulins à eau, des horloges, des machines à vapeur - toute la révolution industrielle en découlera.\n\nLa roue est aussi liée à une autre invention majeure : la poterie. Le tour de potier (une roue horizontale) permet de créer des céramiques parfaitement rondes en quelques minutes, là où le modelage à la main prenait des heures. Ces céramiques servent à stocker la nourriture, transporter l'eau, cuisiner - elles sont essentielles à la vie sédentaire. Une simple roue, et c'est toute une civilisation qui devient possible.",
      },
      {
        slug: "age-bronze",
        year: -3500,
        title: "L'âge du bronze",
        description: "Vers -3500, les humains apprennent à fondre le cuivre et l'étain pour créer le bronze - un métal bien plus résistant qui révolutionne les outils et les armes.",
        content: "Vers 3500 avant notre ère, des artisans du Proche-Orient découvrent qu'en mélangeant du cuivre et de l'étain à haute température, on obtient un nouveau métal : le bronze. Bien plus dur que le cuivre pur, il permet de fabriquer des outils tranchants, des épées robustes, des armures, des socs de charrue. L'âge du bronze est une révolution technologique et militaire.\n\nLa production du bronze nécessite deux matériaux rarement trouvés au même endroit : le cuivre et l'étain. Cela force le développement de réseaux commerciaux sur de longues distances. Des minerais s'échangent entre la Cornouaille (étain), les Alpes (cuivre), le Proche-Orient et l'Égypte. Les premières grandes civilisations - sumérienne, égyptienne, minoenne - émergent à l'âge du bronze, avec leurs cités, leurs rois, leurs armées et leurs scribes.\n\nL'âge du bronze voit aussi l'apparition des premières grandes guerres organisées. Avec des armes en bronze, les armées peuvent être équipées à grande échelle. Les chars de guerre apparaissent. Les cités s'entourent de murailles. La guerre devient une affaire d'État, avec des stratèges, des généraux et des traités de paix. Vers 1200 avant notre ère, une mystérieuse 'catastrophe de l'âge du bronze' détruit la plupart de ces civilisations, ouvrant la voie à l'âge du fer.",
      },
      {
        slug: "premieres-villes",
        year: -3200,
        title: "Naissance des premières villes",
        description: "Vers -3200, Uruk en Mésopotamie devient la première véritable ville du monde avec plus de 50 000 habitants - inventant l'administration, les lois et la bureaucratie.",
        content: "Vers 3200 avant notre ère, dans les plaines fertiles entre le Tigre et l'Euphrate (actuel Irak), la ville d'Uruk atteint une taille sans précédent : 50 000 à 80 000 habitants dans une zone urbaine de plusieurs kilomètres carrés. C'est la première 'ville' au sens moderne du terme - avec des quartiers spécialisés, des temples géants appelés ziggurats, un marché central et un gouvernement organisé.\n\nUne ville de cette taille pose des problèmes inédits : comment nourrir autant de personnes ? Comment organiser le travail collectif ? Comment régler les conflits ? Les Sumériens inventent les premières solutions : une administration avec des fonctionnaires, des impôts pour financer les travaux publics, des lois écrites (le Code d'Ur-Nammu, vers -2100, précède de plusieurs siècles le Code d'Hammurabi), et surtout l'écriture pour tenir les registres.\n\nLa ville change profondément la nature humaine. Pour la première fois, des milliers de personnes qui ne se connaissent pas personnellement doivent vivre ensemble et coopérer. Cela nécessite des règles abstraites, des institutions, des symboles communs. La religion s'organise avec des prêtres professionnels et des temples permanents. Les métiers se spécialisent. La ville est le berceau de la politique, du droit, du commerce et de la culture organisée.",
      },
      {
        slug: "invention-ecriture",
        year: -3000,
        title: "L'invention de l'écriture",
        description: "Vers -3000, les Sumériens de Mésopotamie inventent l'écriture cunéiforme - permettant pour la première fois de conserver des informations au-delà de la mémoire humaine.",
        content: "Vers 3000 avant notre ère, dans les grandes cités sumériennes de Mésopotamie, des scribes commencent à graver des symboles sur des tablettes d'argile avec un roseau taillé. Ces symboles, qu'on appelle cunéiformes (en forme de clous), servent d'abord à tenir des comptes - combien de jarres d'huile, combien de têtes de bétail. C'est l'écriture la plus ancienne du monde.\n\nPeu après, les Égyptiens développent indépendamment leurs hiéroglyphes. L'écriture n'est pas inventée pour la littérature ou la poésie - elle naît des besoins pratiques d'une économie complexe. Mais très vite, elle permet bien plus : transmettre des lois, des rituels religieux, des recettes médicales, des récits historiques. La mémoire humaine n'est plus la seule gardienne du savoir.\n\nL'invention de l'écriture marque la frontière entre la Préhistoire et l'Histoire. Tout ce qui vient avant est reconstitué par l'archéologie. Tout ce qui vient après peut être lu directement. L'écriture est la technologie la plus révolutionnaire jamais inventée : elle permet à des idées de traverser des millénaires et de survivre à leurs auteurs.",
      },
      {
        slug: "age-fer",
        year: -1200,
        title: "L'âge du fer",
        description: "Vers -1200, les peuples du Proche-Orient maîtrisent la métallurgie du fer - un métal plus résistant et bien plus abondant que le bronze, qui démocratise les outils.",
        content: "Vers 1200 avant notre ère, une mystérieuse catastrophe détruit la plupart des grandes civilisations de l'âge du bronze (Mycènes, les Hittites, Ugarit). Dans ce chaos, une nouvelle technologie émerge : la maîtrise du fer. Contrairement au bronze qui nécessite deux minerais rares, le fer est le métal le plus abondant de la croûte terrestre. Qui sait le travailler peut en faire des outils et des armes partout dans le monde.\n\nLe fer est plus difficile à travailler que le bronze - il faut des températures bien plus élevées et un savoir-faire particulier. Mais une fois maîtrisé, il révolutionne tout. Les outils agricoles en fer (socs de charrue, faucilles, haches) permettent de défricher des terres impossibles à cultiver auparavant. Les forêts reculent, les surfaces cultivées s'étendent, les populations augmentent. La productivité agricole fait un bond spectaculaire.\n\nL'âge du fer voit l'émergence de nouvelles puissances : les Assyriens, les Perses, les Grecs, les Celtes. En Chine, en Inde, en Afrique subsaharienne, le fer se répand et transforme les sociétés. En Afrique, la maîtrise du fer permet l'expansion des peuples bantous qui colonisent tout le continent. L'âge du fer dure jusqu'à l'Antiquité classique et pointe vers les révolutions à venir.",
      },
    ],
  },

  // ─── ANTIQUITÉ ────────────────────────────────────────────────────────────
  {
    slug: "antiquite",
    label: "Antiquité",
    events: [
      {
        slug: "construction-pyramides",
        year: -2560,
        title: "Construction des pyramides",
        description: "Des dizaines de milliers d'ouvriers bâtissent les pyramides de Gizeh, les monuments les plus impressionnants jamais créés par l'être humain.",
        content: "Il y a 4 500 ans, le pharaon Khéops avait un rêve fou : construire le bâtiment le plus grand du monde pour préparer son voyage vers l'au-delà. Pour cela, il réunit des dizaines de milliers d'ouvriers venus de tout l'Égypte. Ces bâtisseurs n'étaient pas des esclaves - ils étaient nourris, soignés et logés par l'État.\n\nEn 20 ans de travail, ils ont empilé plus de 2 millions de blocs de pierre, chacun aussi lourd qu'une petite voiture. La pyramide terminée était aussi haute que 40 maisons superposées ! Pour déplacer ces blocs sans grue ni machine, ils utilisaient des rampes en bois, des cordes solides et beaucoup d'ingéniosité. C'est encore aujourd'hui un mystère fascinant pour les archéologues.\n\nAujourd'hui, 4 500 ans après, les pyramides sont toujours debout. Les pyramides de Gizeh sont l'une des sept merveilles du monde et des millions de visiteurs viennent les admirer chaque année. Elles nous montrent que quand des humains travaillent ensemble avec détermination, ils peuvent accomplir des choses qui semblent impossibles.",
      },
      {
        slug: "jeux-olympiques",
        year: -776,
        title: "Premiers Jeux Olympiques",
        description: "En -776, les cités grecques suspendent leurs guerres pour se retrouver à Olympie et concourir pacifiquement - inventant la plus grande tradition sportive de l'humanité.",
        content: "En 776 avant notre ère, à Olympie dans le Péloponnèse, se tiennent les premiers Jeux Olympiques dont nous ayons la trace écrite. Organisés en l'honneur du dieu Zeus, ces jeux rassemblent des athlètes de toutes les cités grecques - Athènes, Sparte, Corinthe, Syracuse - qui cessent leurs guerres pendant la durée des compétitions. C'est la 'trêve olympique', l'une des premières idées de paix internationale de l'histoire.\n\nLes épreuves sont très différentes de nos Jeux modernes : course à pied (le stade, 192 mètres), lutte, pentathlon, course de chars, pugilat (boxe sans gants ni règles). Les vainqueurs reçoivent une simple couronne de lauriers - mais reviennent chez eux en héros absolus, célébrés, nourris aux frais de leur cité et immortalisés par des statues et des odes poétiques. Le sport est pris au sérieux.\n\nLes Jeux Olympiques ont lieu tous les quatre ans pendant plus de 1 100 ans, jusqu'en 393 de notre ère, quand l'empereur chrétien Théodose les supprime comme 'culte païen'. Ils sont ressuscités en 1896 à Athènes à l'initiative du baron Pierre de Coubertin. Aujourd'hui, les Jeux Olympiques modernes rassemblent plus de 200 pays et des milliards de téléspectateurs - l'héritier direct de cette course à pied organisée dans un vallon grec il y a 2 800 ans.",
      },
      {
        slug: "fondation-rome",
        year: -753,
        title: "Fondation de Rome",
        description: "Selon la légende, le héros Romulus fonde la ville de Rome - un village de cabanes qui deviendra la capitale du monde antique.",
        content: "Il y a environ 2 800 ans, sur les bords du fleuve Tibre en Italie, la légende raconte que deux jumeaux abandonnés, Romulus et Rémus, ont été élevés par une louve. Devenus adultes, ils décident de fonder une ville. Romulus trace un sillon dans la terre et déclare 'Voici Rome !' - et c'est le début d'une aventure extraordinaire.\n\nAu départ, Rome est un tout petit village de cabanes en bois. Mais ses habitants sont ambitieux et organisés. Ils apprennent à se battre, à faire des lois et à accueillir les étrangers. Peu à peu, Rome grandit : d'abord une petite ville, puis une grande cité, puis une République gouvernée par des élus, et enfin un empire immense qui dirige toute l'Europe.\n\nRome nous a laissé des cadeaux que tu utilises chaque jour sans le savoir. Notre alphabet vient du latin, la langue des Romains. Les mots 'janvier' (Janus), 'mars' (Mars), 'juin' (Junius) sont des noms de dieux romains ! Les routes droites, les ponts solides, les lois écrites - tout cela vient de Rome. La ville qui a commencé comme un village de bergers a changé le monde pour toujours.",
      },
      {
        slug: "naissance-bouddha",
        year: -563,
        title: "Naissance de Bouddha",
        description: "Un prince indien quitte son palais pour chercher la vérité sur la souffrance humaine - et fonde une des grandes religions du monde.",
        content: "Vers 563 avant notre ère, dans l'actuel Népal, naît Siddhartha Gautama, fils d'un roi puissant. Son père, voulant le protéger de toute souffrance, l'élève dans un palais de luxe, entouré de beauté et de plaisirs. Mais à 29 ans, lors de sorties secrètes, Siddhartha découvre la maladie, la vieillesse et la mort. Bouleversé par la souffrance humaine, il abandonne tout - palais, femme, enfant - pour chercher une réponse.\n\nPendant six ans, il mène une vie d'ascète extrême, jeûnant presque jusqu'à la mort. Puis il réalise que cette voie n'est pas la bonne. Il s'assoit sous un figuier sacré à Bodh Gaya et médite profondément. Au bout de 49 jours, il atteint l'Éveil (Bodhi) - la compréhension profonde de la nature de la souffrance et du chemin pour s'en libérer. Il devient le Bouddha, 'l'Éveillé'.\n\nBouddha passe les 45 années suivantes à enseigner sa voie dans toute l'Inde. Son message central : la souffrance vient du désir et de l'attachement ; en suivant le 'Noble chemin octuple' (juste pensée, juste parole, juste action...), on peut atteindre le nirvana, état de paix profonde. Aujourd'hui, le bouddhisme compte 500 millions de fidèles, principalement en Asie, et ses techniques de méditation influencent le monde entier.",
      },
      {
        slug: "naissance-democratie",
        year: -507,
        title: "Naissance de la démocratie",
        description: "À Athènes, les citoyens obtiennent pour la première fois le droit de voter et de décider ensemble des lois de leur cité.",
        content: "Imagine que pour décider des règles de ta classe, tous les élèves puissent voter à main levée. C'est exactement ce qu'invente la cité d'Athènes il y a 2 500 ans ! Un homme politique courageux appelé Clisthène organise des grandes assemblées où tous les citoyens athéniens peuvent parler, débattre et voter les lois. Ils appellent ça la 'démocratie', ce qui veut dire 'le pouvoir du peuple' en grec.\n\nChaque semaine, des milliers d'Athéniens se réunissent sur la grande place de la ville, appelée l'Agora. N'importe quel citoyen peut monter sur l'estrade et proposer une loi. Les décisions importantes - partir en guerre, signer la paix, construire un nouveau temple - sont prises ensemble. C'est une idée révolutionnaire dans un monde habitué aux rois et aux pharaons qui décident tout seuls.\n\nAujourd'hui, presque tous les pays du monde s'inspirent de cette idée née à Athènes. La démocratie athénienne n'était pas parfaite - les femmes, les esclaves et les étrangers n'avaient pas le droit de voter - mais elle a planté la graine d'une idée magnifique : les gens doivent pouvoir décider eux-mêmes de leur avenir.",
      },
      {
        slug: "bataille-marathon",
        year: -490,
        title: "La bataille de Marathon",
        description: "Une petite armée grecque repousse l'immense armée perse et invente par la même occasion le marathon !",
        content: "En 490 avant J.-C., une armée perse gigantesque débarque sur la plage de Marathon, près d'Athènes. Les Perses sont si nombreux que leurs bateaux couvrent toute la mer ! Ils veulent punir Athènes qui a osé se révolter contre leur empire. Les Athéniens, bien moins nombreux, doivent choisir : fuir ou se battre contre toute logique.\n\nLes généraux athéniens font un choix audacieux : attaquer en courant à toute vitesse. Leurs soldats chargent si vite que les Perses n'ont pas le temps de riposter avec leurs arcs. Contre toute attente, les Grecs remportent une victoire écrasante ! La légende dit qu'un soldat du nom de Philippidès a couru 40 kilomètres d'une traite jusqu'à Athènes pour crier 'Victoire !' avant de tomber mort d'épuisement.\n\nCette course héroïque est à l'origine de l'épreuve du marathon que tu vois aux Jeux Olympiques. Mais au-delà du sport, la victoire de Marathon a sauvé quelque chose de précieux : la toute jeune démocratie athénienne. Si les Perses avaient gagné, la liberté de voter et de s'exprimer aurait peut-être disparu avant même de se répandre dans le monde.",
      },
      {
        slug: "conquetes-alexandre",
        year: -334,
        title: "Les conquêtes d'Alexandre le Grand",
        description: "À 22 ans, Alexandre part à la conquête du monde et bâtit en 10 ans le plus grand empire jamais vu.",
        content: "Alexandre a grandi avec une seule ambition : devenir le plus grand conquérant de l'histoire. Son professeur n'est autre qu'Aristote, le philosophe le plus brillant de l'époque. À 22 ans, il hérite du royaume de Macédoine et décide aussitôt de partir à l'attaque de l'Empire perse, 50 fois plus grand que son pays. Tout le monde pense qu'il est fou.\n\nEn 10 ans, Alexandre et son armée traversent déserts brûlants, montagnes enneigées et fleuves dangereux. Il bat des armées bien plus grandes grâce à sa stratégie brillante. Égypte, Perse, Afghanistan, Inde... Il conquiert tout ! Il fonde plus de 70 villes qui portent son nom, dont Alexandrie en Égypte, qui deviendra la ville la plus savante du monde.\n\nAlexandre meurt à seulement 32 ans, épuisé et malade. Mais il a changé le monde pour toujours. Partout où il est passé, il a mélangé la culture grecque avec les cultures locales : la philosophie, les mathématiques, l'art grec se répandent ainsi jusqu'en Inde. Alexandre reste aujourd'hui l'un des plus grands stratèges militaires de tous les temps.",
      },
      {
        slug: "unification-chine",
        year: -221,
        title: "Qin Shi Huang unifie la Chine",
        description: "Le premier empereur de Chine unifie pour la première fois les royaumes rivaux en un seul empire - posant les bases de la Chine que nous connaissons aujourd'hui.",
        content: "En 221 avant notre ère, après des siècles de guerres entre royaumes rivaux, le roi du Qin écrase ses derniers adversaires et se proclame 'Qin Shi Huang' - le Premier Empereur de Chine. À 38 ans, il dirige le pays le plus peuplé du monde et entreprend de le transformer radicalement. Il standardise les poids et mesures, l'écriture, la monnaie et même la largeur des roues des chariots pour que toutes les routes soient compatibles.\n\nSon chantier le plus titanesque ? La Grande Muraille de Chine. Pour protéger le nord de l'empire contre les nomades, il relie et étend des murailles existantes sur des milliers de kilomètres. Des centaines de milliers d'ouvriers travaillent dans des conditions épouvantables - beaucoup meurent et sont enterrés dans les murs eux-mêmes selon la légende. Sa tombe, découverte en 1974, contient une armée de 8 000 soldats en terre cuite grandeur nature - l'armée de terre cuite de Xi'an.\n\nQin Shi Huang est à la fois un visionnaire et un tyran. Il brûle les livres qui lui déplaisent, fait enterrer vivants 460 intellectuels qui osent le critiquer, et concentre tout le pouvoir dans sa main. Mais il a créé quelque chose d'extraordinaire : le concept d'une Chine unifiée qui, malgré toutes les crises et divisions ultérieures, a survécu jusqu'à aujourd'hui. Le mot 'Chine' vient d'ailleurs de 'Qin'.",
      },
      {
        slug: "bataille-alesia",
        year: -52,
        title: "La bataille d'Alésia",
        description: "Le chef gaulois Vercingétorix affronte César dans une bataille décisive qui scellera le destin de la Gaule et son intégration à l'Empire romain.",
        content: "En 52 avant J.-C., toute la Gaule se soulève contre l'occupant romain sous la conduite d'un jeune chef arverne, Vercingétorix. Après plusieurs victoires, il se retranche dans la forteresse d'Alésia, en Bourgogne. Jules César décide de l'assiéger et fait construire deux lignes de fortifications : une vers Alésia pour empêcher les Gaulois de sortir, une autre vers l'extérieur pour résister aux renforts gaulois.\n\nLa bataille est épique. Des centaines de milliers de guerriers gaulois de secours attaquent les lignes romaines par l'extérieur, tandis que Vercingétorix tente des sorties depuis Alésia. Pendant des semaines, César se bat sur deux fronts. Mais sa discipline et son génie tactique l'emportent. Les renforts gaulois sont repoussés. Vercingétorix sort seul d'Alésia pour se rendre - un geste de sacrifice pour épargner ses hommes.\n\nLa chute d'Alésia marque la fin de la Gaule indépendante. Vercingétorix est emmené à Rome, emprisonné pendant six ans, puis exécuté. Mais la Gaule romanisée donnera naissance à la France. Vercingétorix reste le premier héros national français - un symbole de résistance que Napoléon III ressuscitera pour forger l'identité nationale.",
      },
      {
        slug: "assassination-cesar",
        year: -44,
        title: "L'assassinat de César",
        description: "Le dirigeant le plus puissant de Rome est poignardé par ses propres amis - et paradoxalement, sa mort détruit ce qu'ils voulaient sauver.",
        content: "Jules César est l'homme le plus célèbre de Rome. Général brillant, il a conquis la Gaule en 8 ans et ramené des richesses immenses. Mais des sénateurs riches et jaloux ont peur de lui. Ils craignent qu'il veuille devenir roi et tout contrôler. Alors 23 d'entre eux décident de le tuer pour 'sauver la République'.\n\nLe 15 mars 44 avant J.-C., César arrive à une réunion du Sénat. Les comploteurs sortent leurs couteaux cachés sous leurs toges. Parmi eux, il y a Brutus, l'un de ses meilleurs amis. En voyant Brutus l'attaquer, César lui dit les mots les plus tristes de toute l'Antiquité : 'Toi aussi, Brutus ?' Il reçoit 23 coups de couteau et s'effondre mort.\n\nLes assassins ont fait exactement le contraire de ce qu'ils voulaient ! L'assassinat déclenche 17 ans de guerres civiles terribles. À la fin, c'est Octave, le neveu de César, qui gagne tout. Il prend le nom d'Auguste et devient le premier vrai empereur de Rome - la République que les assassins voulaient protéger disparaît pour toujours.",
      },
      {
        slug: "naissance-jesus",
        year: -6,
        title: "Naissance de Jésus-Christ",
        description: "Dans une région reculée de l'Empire romain, naît un enfant dont l'enseignement va changer le cours de l'histoire et diviser le calendrier en deux ères.",
        content: "Vers l'an -6 ou -4 (les historiens débattent encore de la date exacte), dans la ville de Bethléem en Judée, province de l'Empire romain, naît Jésus. Sa famille est modeste : son père Joseph est charpentier. Les Évangiles racontent une naissance entourée de prodiges - une étoile, des bergers, des mages venus d'Orient.\n\nJésus grandit à Nazareth, en Galilée. À l'âge d'environ 30 ans, il commence à prêcher. Son message est révolutionnaire : aimer ses ennemis, partager avec les plus pauvres, accueillir les exclus, pardonner plutôt que punir. Les autorités religieuses et politiques le voient comme un dangereux agitateur. Il est condamné et crucifié. Ses disciples, qui croient à sa résurrection, fondent le christianisme.\n\nLa naissance de Jésus a tellement marqué l'histoire que notre calendrier actuel divise le temps en deux : avant et après lui. Même si la plupart des pays du monde ne sont pas chrétiens, ils utilisent ce calendrier hérité de la chrétienté. Plus de 2 milliards de personnes se réclament aujourd'hui du christianisme - la religion la plus répandue du monde.",
      },
      {
        slug: "eruption-vesuve",
        year: 79,
        title: "L'éruption du Vésuve et Pompéi",
        description: "En l'an 79, le volcan Vésuve entre en éruption et ensevelit en quelques heures la ville romaine de Pompéi sous des tonnes de cendres, la préservant pour toujours.",
        content: "Le 24 août de l'an 79, les habitants de Pompéi, ville romaine prospère près de Naples, voient une colonne de fumée s'élever du Vésuve voisin. La montagne, qu'ils croyaient éteinte, est en réalité un volcan terriblement actif. En quelques heures, des milliers de tonnes de cendres, de pierres ponces et de gaz brûlants s'abattent sur la ville. 2 000 habitants sur 11 000 n'ont pas le temps de fuir. Ils sont asphyxiés et ensevelis.\n\nCe désastre a un effet paradoxal extraordinaire : en ensevelissant Pompéi sous 6 mètres de cendres, le Vésuve l'a parfaitement conservée pendant 1 700 ans. Quand les fouilles commencent au XVIIIe siècle, les archéologues découvrent une ville romaine intacte : maisons, fresques, meubles, commerces, graffitis, et même les corps fossilisés des victimes figées dans leurs derniers instants.\n\nPompéi nous donne une fenêtre unique sur la vie quotidienne romaine. On y découvre des snack-bars avec leurs comptoirs de marbre et leurs amphores encore en place, des affiches électorales sur les murs, des graffitis d'amour et d'insultes, des boulangeries avec leurs fours. Plus qu'aucun texte antique, Pompéi nous dit comment vivaient vraiment les Romains ordinaires - pas les empereurs et les généraux, mais les boulangers, les marchands et les amoureux.",
      },
      {
        slug: "apogee-empire-romain",
        year: 117,
        title: "L'apogée de l'Empire romain",
        description: "Sous l'empereur Trajan, l'Empire romain atteint sa plus grande taille : 70 millions de personnes sur trois continents, reliées par 80 000 km de routes.",
        content: "En l'an 117, l'Empire romain est au sommet de sa puissance. Il s'étend de l'Écosse jusqu'au désert du Sahara, et de l'Espagne jusqu'à l'Irak actuel. Imagine un seul pays qui couvrirait toute l'Europe, une partie de l'Afrique et du Moyen-Orient - c'est l'Empire romain ! 70 millions de personnes vivent sous ses lois et parlent son langage.\n\nVivre dans l'Empire romain, c'est vivre dans un monde super moderne pour l'époque. Les villes romaines ont de l'eau courante grâce à des aqueducs, des bains publics, des bibliothèques, des marchés et même des restaurants. Un réseau de 80 000 kilomètres de routes pavées relie tout l'empire. 'Tous les chemins mènent à Rome', dit-on encore !\n\nL'héritage romain est partout autour de toi. Le français, l'espagnol, l'italien et le portugais descendent tous du latin. Les mots 'janvier', 'mars', 'août' viennent de noms romains. Notre façon d'organiser les villes, notre droit, notre calendrier - tout cela vient de Rome.",
      },
      {
        slug: "chute-rome",
        year: 476,
        title: "La chute de l'Empire romain",
        description: "Après 1 000 ans de grandeur, l'Empire romain d'Occident s'effondre sous les invasions barbares - mais son héritage ne mourra jamais.",
        content: "Depuis des décennies, des peuples guerriers venus du nord et de l'est - les Wisigoths, les Vandales, les Huns dirigés par le terrible Attila - attaquent les frontières de l'Empire romain. L'empire est trop grand pour être bien défendu, et ses empereurs se succèdent si vite que tout le monde est perdu.\n\nEn 410, l'impensable se produit : la ville de Rome est pillée pour la première fois depuis 800 ans. En 476, le chef barbare Odoacre dépose le dernier empereur d'Occident, Romulus Augustule. C'est la fin officielle de l'Empire romain d'Occident. En Orient, l'Empire byzantin, lui, survivra encore 1 000 ans.\n\nLa chute de Rome marque le début du Moyen Âge. Les grandes villes se vident, beaucoup de connaissances romaines sont perdues. Mais Rome ne disparaît pas vraiment : son Église catholique continue à unir les Européens, sa langue latine reste celle des savants pendant 1 000 ans, et ses lois inspirent encore nos codes civils aujourd'hui.",
      },
    ],
  },

  // ─── MOYEN ÂGE ────────────────────────────────────────────────────────────
  {
    slug: "moyen-age",
    label: "Moyen Âge",
    events: [
      {
        slug: "mahomet-islam",
        year: 622,
        title: "Mahomet fonde l'islam",
        description: "Dans le désert d'Arabie, un marchand reçoit ce qu'il croit être la parole de Dieu et fonde une religion qui rassemblera 2 milliards de personnes.",
        content: "Il y a 1 400 ans, dans la ville de La Mecque en Arabie, un homme de 40 ans appelé Mahomet dit avoir reçu des révélations de l'ange Gabriel. Ces messages forment un livre sacré appelé le Coran. Mahomet prêche une idée simple mais puissante : il n'y a qu'un seul Dieu, Allah, et tous les êtres humains sont égaux devant lui.\n\nEn 622, Mahomet et ses fidèles doivent fuir vers la ville de Médine : c'est l'Hégire, le grand départ qui marque le début du calendrier musulman. De Médine, Mahomet organise sa communauté et finit par revenir conquérir La Mecque en 630.\n\nAprès la mort de Mahomet en 632, l'islam se répand à une vitesse stupéfiante : en moins de 100 ans, il couvre l'Arabie, l'Égypte, l'Afrique du Nord, l'Espagne et la Perse. Les savants musulmans du Moyen Âge préservent et enrichissent les connaissances grecques en mathématiques, astronomie et médecine - des connaissances qui reviennent en Europe et alimentent la Renaissance.",
      },
      {
        slug: "vikings",
        year: 793,
        title: "Les Vikings attaquent l'Europe",
        description: "Des guerriers venus de Scandinavie terrorisent l'Europe sur leurs drakkars, mais sont aussi d'extraordinaires explorateurs et commerçants.",
        content: "En 793, des bateaux étranges à tête de dragon apparaissent au large des côtes d'Angleterre. Des guerriers blonds et barbus, armés de haches et d'épées, débarquent et pillent un monastère sur l'île de Lindisfarne. L'Europe découvre les Vikings ! Pendant deux siècles, ces guerriers venus de Scandinavie vont semer la terreur dans toute l'Europe.\n\nMais les Vikings ne sont pas seulement des pillards. Ce sont aussi des marins extraordinaires et des explorateurs courageux. Leurs drakkars peuvent naviguer aussi bien en pleine mer que sur les rivières peu profondes. Ils atteignent l'Islande, le Groenland, et même l'Amérique du Nord 500 ans avant Christophe Colomb ! Certains Vikings s'installent en France (les Normands), en Russie, en Angleterre et en Sicile.\n\nLes descendants des Vikings ont profondément marqué l'histoire. En 1066, Guillaume le Conquérant - un descendant de Vikings - conquiert l'Angleterre et mélange le français et l'anglais pour créer la langue anglaise telle qu'on la parle aujourd'hui. Des mots anglais comme 'sky', 'knife' ou 'egg' viennent directement du vieux norrois, la langue des Vikings.",
      },
      {
        slug: "couronnement-charlemagne",
        year: 800,
        title: "Sacre de Charlemagne",
        description: "Le jour de Noël 800, Charlemagne est couronné empereur d'Occident - un moment qui dessine les premières frontières de l'Europe.",
        content: "Le 25 décembre 800, lors de la messe de Noël à Rome, le pape Léon III s'approche de Charlemagne, le puissant roi des Francs, et pose une couronne dorée sur sa tête. La foule crie : 'Longue vie à Charles, Auguste, couronné par Dieu !' Charlemagne devient empereur d'Occident, le chef le plus puissant d'Europe depuis la chute de Rome.\n\nCharlemagne règne sur un empire immense qui couvre l'actuelle France, l'Allemagne, l'Italie du Nord, la Belgique et une partie de l'Espagne. Il rassemble à sa cour les meilleurs professeurs et savants d'Europe, crée des écoles dans tout son empire. C'est la 'renaissance carolingienne' - l'Europe recommence à apprendre après des siècles sombres.\n\nAprès la mort de Charlemagne, son empire est partagé entre ses petits-fils. Ce partage dessine pour la première fois des frontières qui ressemblent à celles de la France et de l'Allemagne d'aujourd'hui. C'est pour cette raison que Charlemagne est souvent appelé 'le père de l'Europe'.",
      },
      {
        slug: "guillaume-conquerant",
        year: 1066,
        title: "Guillaume le Conquérant",
        description: "Un duc normand traverse la Manche et conquiert l'Angleterre en une seule bataille, transformant pour toujours la langue et la culture anglaises.",
        content: "En 1066, Guillaume, duc de Normandie, apprend que le roi d'Angleterre vient de mourir et qu'un autre a pris le trône à sa place. Il rassemble une armée de 10 000 hommes, construit une flotte de bateaux et traverse la Manche avec ses chevaliers normands.\n\nLe 14 octobre 1066, les deux armées se retrouvent à Hastings. Le roi anglais Harold est tué - selon la légende, d'une flèche dans l'œil - et ses soldats s'enfuient. Guillaume a gagné ! Il est couronné roi d'Angleterre à Noël 1066 dans l'abbaye de Westminster, exactement là où les rois britanniques sont encore couronnés aujourd'hui.\n\nLa conquête normande transforme l'Angleterre de fond en comble. Les nobles français apportent leur langue avec eux. Pendant 300 ans, les rois d'Angleterre parlent français ! Le résultat : la langue anglaise devient un mélange fascinant de l'ancien anglais et du français normand. Des milliers de mots anglais viennent directement du français : 'beef' (bœuf), 'justice', 'castle' (château).",
      },
      {
        slug: "premiere-croisade",
        year: 1095,
        title: "Les croisades",
        description: "Des milliers de chevaliers et de pèlerins partent reconquérir Jérusalem, déclenchant deux siècles de guerres religieuses en Terre Sainte.",
        content: "En 1095, le pape Urbain II lance un appel qui fait trembler l'Europe : 'Partez délivrer Jérusalem des mains des Turcs !' La foule répond en criant 'Dieu le veut !' Des milliers de chevaliers cousent une croix rouge sur leur manteau et se préparent à un voyage de plusieurs milliers de kilomètres vers la Terre Sainte.\n\nAprès trois ans d'une marche épuisante, les croisés arrivent devant Jérusalem en 1099. Après un siège de 5 semaines, ils entrent dans la ville. Les croisades dureront jusqu'en 1291, soit presque deux siècles de guerres religieuses entre chrétiens et musulmans.\n\nLes croisades créent aussi des échanges extraordinaires entre l'Europe chrétienne et le monde arabe. Les croisés découvrent des épices, des mathématiques et des connaissances médicales qu'ils ramènent en Europe. Ces échanges enrichissent les deux civilisations et préparent la voie vers la Renaissance.",
      },
      {
        slug: "construction-notre-dame",
        year: 1163,
        title: "Construction de Notre-Dame de Paris",
        description: "Des milliers d'ouvriers passent 200 ans à bâtir la plus belle cathédrale du monde - un chef-d'œuvre de pierre et de lumière.",
        content: "En 1163, l'évêque de Paris pose la première pierre d'une cathédrale qui va devenir l'une des plus belles du monde. Construire Notre-Dame prend 200 ans - des générations entières d'ouvriers, de sculpteurs et de verriers travaillent sur ce chantier gigantesque sans jamais le voir terminé. Ces bâtisseurs inventent un nouveau style d'architecture révolutionnaire : le gothique, avec ses grandes arches pointues et ses vitraux colorés qui font entrer la lumière à flots.\n\nComment faire tenir des murs si hauts et si minces, avec d'immenses fenêtres ? Les architectes inventent les arcs-boutants, des sortes de béquilles de pierre en arc qui maintiennent les murs de l'extérieur. Grâce à cette astuce géniale, les murs peuvent être percés d'immenses vitraux multicolores.\n\nNotre-Dame a traversé des siècles d'histoire : des révolutions, des guerres, des profanations. En 2019, un incendie terrible l'a ravagée sous les yeux du monde entier. Des millions de personnes ont pleuré en regardant les flammes dévorer sa flèche. Mais elle a été reconstruite grâce à la solidarité internationale - preuve que les chefs-d'œuvre de l'humanité appartiennent à tous.",
      },
      {
        slug: "magna-carta",
        year: 1215,
        title: "La Magna Carta",
        description: "Les nobles anglais forcent leur roi à signer un document qui dit que même un roi doit respecter des règles - une idée révolutionnaire.",
        content: "En 1215, le roi Jean d'Angleterre est détesté de tout le monde. Il lève des impôts trop élevés, fait emprisonner des gens sans raison. Les nobles en ont assez ! Ils forment une armée et forcent Jean à signer un parchemin : 'Signe, ou on te chasse !' Jean signe.\n\nCe parchemin s'appelle la Magna Carta. Il dit des choses révolutionnaires pour l'époque : personne ne peut être emprisonné sans jugement. Le roi lui-même doit respecter les lois. C'est la première fois dans l'histoire qu'on écrit noir sur blanc que le pouvoir du roi a des limites !\n\nLa Magna Carta est le grand-père de toutes les constitutions et déclarations des droits du monde. Quand les Américains ont rédigé leur Constitution en 1787, ils s'en sont directement inspirés. Nos idées modernes sur l'habeas corpus et le procès équitable remontent à ce parchemin signé dans un champ anglais il y a 800 ans.",
      },
      {
        slug: "marco-polo",
        year: 1271,
        title: "Marco Polo part pour la Chine",
        description: "Un jeune Vénitien de 17 ans s'engage dans le plus grand voyage de l'histoire médiévale et revient avec des récits qui font rêver l'Europe entière.",
        content: "En 1271, un jeune homme de 17 ans appelé Marco Polo quitte Venise avec son père et son oncle. Leur destination ? La Chine, à l'autre bout du monde. Le voyage dure 3 ans : ils traversent la Turquie, l'Iran, l'Afghanistan, le désert de Gobi...\n\nQuand il arrive en Chine, Marco Polo est ébloui. L'empire du grand Khan Kubilaï est d'une richesse et d'une organisation que l'Europe ne peut pas imaginer. Il y a des villes immenses, des papiers-monnaie (en Europe on n'utilise que des pièces !), des services postaux efficaces. Marco Polo reste 17 ans en Chine et travaille comme diplomate pour l'Empereur.\n\nQuand il rentre à Venise, personne ne le reconnaît. Il raconte ses aventures dans un livre qui devient le best-seller du Moyen Âge. Ses descriptions de la Chine et des épices de l'Orient vont donner des idées à de nombreux explorateurs. Christophe Colomb avait une copie annotée du livre de Marco Polo quand il a traversé l'Atlantique.",
      },
      {
        slug: "guerre-cent-ans",
        year: 1337,
        title: "La guerre de Cent Ans",
        description: "Pendant 116 ans, la France et l'Angleterre s'affrontent dans une guerre épuisante qui forge l'identité nationale française et fait émerger Jeanne d'Arc.",
        content: "En 1337, le roi d'Angleterre Édouard III revendique le trône de France, arguant de liens dynastiques. C'est le début de ce qu'on appellera la guerre de Cent Ans - en réalité 116 ans de conflits, d'armistices et de reprises des combats entre 1337 et 1453. Ce n'est pas une guerre continue, mais une série de campagnes et de batailles qui ravagent le territoire français pendant plus d'un siècle.\n\nLes batailles de Crécy (1346) et d'Azincourt (1415) voient des armées anglaises bien plus petites écraser la chevalerie française grâce à leurs archers armés de l'arc long. À Azincourt, 6 000 Anglais battent 25 000 Français. La situation devient si désespérée pour la France que la moitié du pays, dont Paris, passe sous domination anglaise ou bourguignonne.\n\nC'est dans ce contexte que surgit Jeanne d'Arc en 1429. Sa victoire à Orléans relance la résistance française. En 1453, la bataille de Castillon voit la dernière armée anglaise vaincue - sans traité de paix formel, la guerre se termine simplement parce qu'il ne reste plus d'Anglais en France. La guerre de Cent Ans a forgé la conscience nationale française : pour la première fois, les Français se sentent appartenir à la même nation.",
      },
      {
        slug: "peste-noire",
        year: 1347,
        title: "La Peste Noire",
        description: "Une terrible maladie venue d'Asie tue un tiers des Européens en seulement 6 ans - la plus grande catastrophe sanitaire de l'histoire.",
        content: "En 1347, des bateaux génois arrivent en Sicile avec leurs marins mourants. Ces marins ont le corps couvert de grosses boules noires qui suintent du sang et du pus. C'est la peste bubonique, une maladie mortelle transmise par les puces qui vivent sur les rats. En quelques mois, elle se répand comme un feu de forêt dans toute l'Europe.\n\nPersonne ne comprend ce qui se passe. Les médecins sont impuissants, les prières ne servent à rien. En 6 ans, la Peste Noire tue entre 25 et 50 millions de personnes en Europe - c'est comme si un Européen sur trois mourrait ! Des villes entières disparaissent, les corps s'entassent dans les rues.\n\nParadoxalement, la Peste Noire va provoquer des changements étonnants. Comme il y a beaucoup moins de travailleurs, ceux qui survivent peuvent exiger de meilleures conditions et de meilleurs salaires. L'Église, incapable d'expliquer ou d'arrêter la maladie, perd de sa crédibilité. Tout cela va accélérer la fin du Moyen Âge et l'arrivée de la Renaissance.",
      },
      {
        slug: "jeanne-d-arc",
        year: 1429,
        title: "Jeanne d'Arc sauve la France",
        description: "Une jeune paysanne de 17 ans entend des voix célestes et galvanise une armée entière pour sauver la France de l'occupation anglaise.",
        content: "En 1429, la France est dans une situation désespérée. Les Anglais occupent presque tout le pays depuis des années. C'est alors qu'apparaît Jeanne, une jeune fille de 17 ans venue d'un village de Lorraine. Elle dit avoir entendu les voix de saints lui commandant de chasser les Anglais et de faire couronner le prince Charles comme roi de France.\n\nEn quelques semaines, Jeanne d'Arc, vêtue d'une armure blanche, galvanise les soldats démoralisés. Elle lève le siège d'Orléans en 9 jours, conduit l'armée de victoire en victoire, et accompagne Charles jusqu'à Reims pour son sacre. Malheureusement, Jeanne est capturée et jugée pour hérésie dans un procès truqué. Elle est brûlée vive à Rouen en 1431. Elle a 19 ans.\n\nVingt-cinq ans plus tard, un nouveau procès la réhabilite. Canonisée sainte en 1920, Jeanne d'Arc est aujourd'hui le symbole de la France courageuse face à l'oppression. Son histoire prouve qu'une seule personne déterminée peut changer le cours de l'histoire.",
      },
      {
        slug: "imprimerie-gutenberg",
        year: 1450,
        title: "L'imprimerie de Gutenberg",
        description: "Johannes Gutenberg invente la presse à imprimer et révolutionne la diffusion du savoir - c'est l'internet du XVe siècle !",
        content: "Avant 1450, si tu voulais un livre, il fallait le payer très cher car des moines le copiaient à la main - un travail de plusieurs mois ! C'est alors que Johannes Gutenberg, un orfèvre de Mayence en Allemagne, invente la presse à caractères mobiles : de petites lettres en métal qu'on assemble, qu'on encre et qu'on presse sur du papier.\n\nL'effet est immédiat et révolutionnaire. On peut imprimer des centaines de copies d'un livre en quelques jours. Les livres deviennent beaucoup moins chers. En 50 ans, plus de 15 millions de livres circulent en Europe - plus que tout ce qui avait été produit depuis l'Antiquité ! Les idées se répandent à une vitesse que le monde n'a jamais connue.\n\nL'imprimerie de Gutenberg est l'internet du XVe siècle : elle brise le monopole de l'Église sur le savoir et permet à des idées comme celles de Luther ou de Copernic de toucher des milliers de lecteurs en quelques semaines. Sans l'imprimerie, pas de Réforme protestante, pas de Révolution scientifique, pas de Lumières.",
      },
      {
        slug: "chute-constantinople",
        year: 1453,
        title: "La chute de Constantinople",
        description: "La capitale de l'Empire byzantin tombe après 1 000 ans de résistance - et ses savants fuient vers l'Occident, apportant la Renaissance avec eux.",
        content: "Constantinople est la plus belle ville du monde médiéval - la capitale de l'Empire byzantin, avec ses palais dorés, ses bibliothèques remplies de manuscrits grecs et ses immenses murailles. En 1453, le sultan ottoman Mehmed II l'assiège avec une armée de 100 000 hommes et des canons gigantesques. Les murailles qui ont résisté 1 000 ans s'effondrent en quelques semaines.\n\nLe 29 mai 1453, les soldats ottomans entrent dans Constantinople. Le dernier empereur byzantin préfère mourir au combat plutôt que de capituler. Mehmed II rebaptise la ville Istanbul et en fait sa nouvelle capitale.\n\nLa chute de Constantinople a une conséquence inattendue : des centaines de savants byzantins fuient vers l'Italie avec leurs précieux manuscrits grecs. Ces textes anciens relancent l'étude de la philosophie et des mathématiques grecques. Les savants byzantins déclenchent ainsi involontairement la Renaissance italienne - un désastre pour Byzance devient une chance pour l'Occident.",
      },
    ],
  },

  // ─── LES TEMPS MODERNES ───────────────────────────────────────────────────
  {
    slug: "temps-modernes",
    label: "Les Temps modernes",
    events: [
      {
        slug: "decouverte-amerique",
        year: 1492,
        title: "La découverte de l'Amérique",
        description: "Christophe Colomb traverse l'Atlantique vers l'ouest et atteint un continent dont les Européens ignoraient totalement l'existence.",
        content: "En 1492, Christophe Colomb, navigateur génois au service de l'Espagne, traverse l'Atlantique en naviguant vers l'ouest. Après 70 jours de navigation, le 12 octobre 1492, un marin crie 'Terre !'. Colomb a découvert les Bahamas, croyant avoir atteint les Indes - c'est pourquoi il appelle les habitants 'Indiens', une erreur qui reste dans le vocabulaire jusqu'à aujourd'hui.\n\nIl ignore qu'il vient de mettre le pied sur un continent inconnu peuplé de 50 à 100 millions d'habitants : Aztèques, Incas, Mayas et centaines d'autres peuples. En quelques décennies, les Espagnols conquièrent ces empires - souvent à cause des maladies européennes (variole, rougeole) contre lesquelles les Amérindiens n'ont aucune défense.\n\n1492 change le monde des deux côtés de l'Atlantique. De l'Amérique arrive en Europe : la pomme de terre, le maïs, la tomate, le chocolat, le piment, la vanille. Imagine la cuisine italienne sans tomates, ou l'Europe sans pommes de terre... C'est le début d'une mondialisation qui ne s'arrêtera plus jamais.",
      },
      {
        slug: "vasco-de-gama",
        year: 1498,
        title: "Vasco de Gama ouvre la route des Indes",
        description: "Le navigateur portugais contourne l'Afrique et ouvre une nouvelle route maritime vers les épices de l'Inde - sans passer par les territoires arabes.",
        content: "En 1498, le navigateur portugais Vasco de Gama réalise quelque chose qu'on croyait impossible : contourner toute l'Afrique par le sud pour atteindre l'Inde par la mer. Avec 4 bateaux et 170 hommes, il part de Lisbonne, longe les côtes africaines, passe le cap de Bonne-Espérance dans des tempêtes terribles et arrive enfin à Calicut en Inde, 10 mois et demi après son départ.\n\nPourquoi était-ce si important ? Parce que les épices - poivre, cannelle, muscade - valaient plus cher que l'or en Europe. Ces épices venaient d'Asie mais les routes terrestres étaient contrôlées par les marchands arabes qui prenaient des prix exorbitants. En ouvrant une route maritime directe, le Portugal peut maintenant acheter les épices à la source, devenant immensément riche.\n\nLa route de Vasco de Gama transforme l'économie mondiale. Lisbonne devient la capitale commerciale de l'Europe. Le Portugal construit un empire maritime gigantesque qui s'étend de l'Afrique au Brésil, en passant par l'Inde et l'Asie du Sud-Est. Cette domination du commerce maritime par les Européens va durer 400 ans.",
      },
      {
        slug: "leonard-de-vinci",
        year: 1503,
        title: "Léonard de Vinci peint la Joconde",
        description: "Le génie universel de la Renaissance crée en secret le tableau le plus célèbre et le plus mystérieux du monde.",
        content: "Léonard de Vinci est l'homme le plus curieux du monde. Peintre, sculpteur, architecte, ingénieur, musicien, anatomiste - il veut tout comprendre, tout maîtriser. Ses carnets de notes débordent de schémas de machines volantes, de sous-marins, de chars d'assaut - des inventions qui ne seront réalisées que des siècles plus tard.\n\nEntre 1503 et 1519, il travaille à un portrait de femme - probablement Lisa Gherardini. Pour peindre ce tableau qu'on appellera la Joconde, il invente le sfumato : estomper les contours comme dans un rêve, donnant à la peinture une profondeur et une douceur jamais vues. Le sourire de la Joconde, légèrement ambigu, semble changer selon l'angle où on la regarde.\n\nAujourd'hui, la Joconde est exposée au Louvre à Paris et attire 10 millions de visiteurs chaque année - c'est le tableau le plus visité du monde ! Volée en 1911, retrouvée deux ans plus tard, elle est considérée comme inestimable. La Joconde nous montre que la perfection technique et le mystère peuvent créer quelque chose d'immortel.",
      },
      {
        slug: "michel-ange-sixtine",
        year: 1512,
        title: "Michel-Ange peint la chapelle Sixtine",
        description: "Un génie obstiné passe 4 ans allongé sur un échafaudage à peindre le plus grand chef-d'œuvre religieux de l'humanité.",
        content: "En 1508, le pape Jules II convoque Michel-Ange et lui donne une mission : peindre le plafond de la chapelle Sixtine à Rome. Michel-Ange proteste - il est sculpteur, pas peintre ! Mais il accepte et décide de faire quelque chose d'extraordinaire : peindre toute la Genèse avec des dizaines de scènes et des centaines de personnages. Seul, presque sans aide.\n\nDurant 4 ans, Michel-Ange travaille allongé sur un échafaudage en bois à 20 mètres de hauteur, la tête penchée en arrière, de la peinture qui lui tombe dans les yeux. Quand il descend enfin en 1512, le résultat est stupéfiant : 500 mètres carrés de fresques, 300 personnages, avec au centre la scène la plus reproduite de l'art occidental - Dieu tendant le doigt vers Adam pour lui donner la vie.\n\nLa chapelle Sixtine est aujourd'hui l'œuvre d'art la plus visitée du monde avec 7 millions de visiteurs par an au Vatican. Sa vie entière nous montre que la passion pour ce qu'on fait peut permettre des choses extraordinaires.",
      },
      {
        slug: "reforme-protestante",
        year: 1517,
        title: "La Réforme protestante de Luther",
        description: "Un moine allemand cloue 95 critiques sur une porte d'église et déclenche une révolution religieuse qui fracture l'Europe pour des siècles.",
        content: "En 1517, Martin Luther, un moine allemand, est furieux. L'Église catholique vend des 'indulgences' - des papiers qui promettent que tes péchés seront pardonnés si tu paies assez cher. Pour Luther, c'est une arnaque scandaleuse ! Il écrit 95 arguments contre cette pratique et les affiche sur la porte de l'église de Wittenberg. Grâce à l'imprimerie de Gutenberg, ses idées se répandent en quelques semaines dans toute l'Europe.\n\nLe pape ordonne à Luther de se taire. Luther refuse et brûle publiquement la lettre du pape ! Convoqué devant l'empereur, il prononce des mots qui resteront célèbres : 'Me voici, je ne peux pas faire autrement.' Il est excommunié mais des princes allemands le protègent. Luther traduit alors la Bible en allemand pour que tout le monde puisse la lire sans passer par les prêtres.\n\nLa Réforme de Luther brise l'unité religieuse de l'Europe en deux : catholiques contre protestants. Cela déclenche des guerres de religion terribles pendant 130 ans. Mais la Réforme produit aussi des effets positifs : elle stimule l'éducation et encourage la liberté de conscience - l'idée que chacun peut croire ce qu'il veut.",
      },
      {
        slug: "magellan",
        year: 1519,
        title: "Magellan fait le tour du monde",
        description: "Pour la première fois dans l'histoire, une expédition fait le tour complet de la Terre - prouvant définitivement que notre planète est ronde.",
        content: "En 1519, le navigateur portugais Magellan part d'Espagne avec 5 bateaux et 270 hommes avec un objectif fou : faire le tour complet de la Terre par l'ouest. Après avoir traversé l'Atlantique, il passe par un détroit terrible au bout de l'Amérique du Sud (qui porte aujourd'hui son nom) et entre dans un océan si calme qu'il l'appelle 'Pacifique'.\n\nLe voyage du Pacifique dure 4 mois terribles sans voir la terre. Les marins mangent du cuir bouilli et des rats pour survivre. Quand ils atteignent les Philippines, Magellan est tué dans un combat avec des guerriers locaux. Mais son second, Elcano, prend le commandement. Avec un seul bateau et 18 hommes épuisés (sur 270 au départ !), il réussit à rentrer en Espagne en septembre 1522.\n\nCe voyage de 3 ans change la vision du monde pour toujours. La Terre est définitivement ronde - on peut en faire le tour ! L'océan Pacifique, inconnu des Européens, est cartographié pour la première fois. L'expédition de Magellan-Elcano est l'équivalent pour l'époque d'un voyage sur la Lune : une aventure terrifiante vers l'inconnu qui repousse les limites du possible.",
      },
      {
        slug: "copernic-heliocentrisme",
        year: 1543,
        title: "Copernic : la Terre tourne autour du Soleil",
        description: "Un astronome polonais ose dire que c'est la Terre qui tourne autour du Soleil - et non l'inverse - renversant 1 500 ans de certitudes.",
        content: "Depuis 1 500 ans, tout le monde est convaincu que la Terre est au centre de l'univers. Mais Nicolas Copernic, un astronome polonais, observe le ciel nuit après nuit et quelque chose cloche : les planètes ne se déplacent pas comme elles devraient si la Terre était au centre. Il en tire une conclusion terrifiante : c'est la Terre qui tourne autour du Soleil !\n\nCopernic est tellement conscient du scandale que sa théorie va provoquer qu'il attend d'être mourant pour la publier. Le livre sort en 1543, l'année de sa mort. L'Église place le livre à l'Index - la liste des livres interdits. Galilée, qui défend Copernic avec son télescope, est condamné par l'Inquisition en 1633 et forcé de se rétracter.\n\nLa révolution de Copernic est la plus grande révolution intellectuelle de l'histoire humaine. Elle dit quelque chose de vertigineux : nous, les humains, ne sommes pas au centre de l'univers. La Terre n'est qu'une petite planète parmi des milliards d'autres. Sans Copernic, pas de Newton, pas d'Einstein, pas de fusées spatiales.",
      },
      {
        slug: "shakespeare",
        year: 1599,
        title: "Shakespeare et le théâtre Globe",
        description: "Le plus grand écrivain de la langue anglaise crée des pièces qui parlent de l'amour, de la jalousie et du pouvoir - toujours aussi vraies 400 ans plus tard.",
        content: "En 1599, à Londres, William Shakespeare et sa troupe construisent un théâtre en bois qu'ils appellent le Globe. Ce théâtre circulaire peut accueillir 3 000 spectateurs debout autour de la scène. À une époque sans télévision ni cinéma, le théâtre est le divertissement numéro un.\n\nShakespeare écrit 37 pièces en tout : Roméo et Juliette (le plus célèbre histoire d'amour impossible), Hamlet (un prince qui veut venger son père assassiné), Macbeth (un général qui devient fou après avoir tué le roi)... Chacune plonge dans les émotions les plus profondes des humains : l'amour, la jalousie, l'ambition, la peur de la mort.\n\nAujourd'hui, 400 ans après sa mort, Shakespeare est l'écrivain le plus joué du monde. Ses pièces sont traduites dans plus de 100 langues. Le Roi Lion est inspiré de Hamlet ! Et des milliers de mots et d'expressions que tu utilises viennent de ses pièces. Shakespeare a littéralement inventé des mots qui font partie de l'anglais courant.",
      },
      {
        slug: "newton-gravitation",
        year: 1687,
        title: "Newton et la loi de la gravitation",
        description: "Isaac Newton publie les lois de la mécanique et de la gravitation universelle - posant les fondements de la physique moderne pour les 200 années suivantes.",
        content: "La légende dit qu'une pomme tomba sur la tête d'Isaac Newton alors qu'il se reposait sous un pommier. Vraie ou fausse, cette histoire illustre parfaitement le génie de Newton : là où tout le monde voyait simplement un objet tomber, lui se demanda pourquoi. En 1687, il publie les Principia Mathematica, l'un des livres les plus importants de l'histoire de la science.\n\nNewton y formule trois grandes lois du mouvement et la loi de la gravitation universelle : tout objet attire tout autre objet avec une force proportionnelle à leurs masses et inversement proportionnelle au carré de leur distance. Cette loi, avec une seule formule élégante, explique pourquoi la pomme tombe, pourquoi la Lune reste en orbite autour de la Terre, et pourquoi les planètes tournent autour du Soleil.\n\nLes lois de Newton permettent de prédire avec une précision extraordinaire le mouvement des corps célestes. Elles serviront de fondement à toute la physique et l'ingénierie pendant 200 ans - jusqu'à ce qu'Einstein les complète et les révise pour les vitesses proches de celle de la lumière. Aujourd'hui encore, les ingénieurs utilisent les lois de Newton pour calculer les trajectoires des fusées et des satellites.",
      },
      {
        slug: "encyclopedie-diderot",
        year: 1751,
        title: "L'Encyclopédie de Diderot",
        description: "Denis Diderot et ses collaborateurs publient la première grande encyclopédie - un projet révolutionnaire pour rassembler et partager tout le savoir humain.",
        content: "En 1751, Denis Diderot et Jean d'Alembert lancent la publication de l'Encyclopédie, ou Dictionnaire raisonné des sciences, des arts et des métiers. L'ambition est folle : rassembler dans un seul ouvrage tout le savoir humain - sciences, arts, artisanat, philosophie, histoire - et le rendre accessible à tous. À une époque où le savoir est jalousement gardé par l'Église et les corporations, c'est une provocation.\n\nLe projet mobilise les plus grands esprits des Lumières : Voltaire, Rousseau, Montesquieu contribuent des articles. En 28 volumes publiés entre 1751 et 1772, l'Encyclopédie traite de tout - de la construction des épingles à la philosophie politique. Elle affirme que la raison humaine, non la foi ou la tradition, doit guider la connaissance. C'est une bombe intellectuelle que les autorités cherchent à interdire à plusieurs reprises.\n\nL'Encyclopédie de Diderot est la mère de toutes les encyclopédies modernes - y compris Wikipedia. Elle symbolise l'esprit des Lumières : la croyance que la connaissance libère l'homme de l'ignorance et de la superstition. Ses idées nourrissent la Révolution française de 1789 : comment accepter des rois de droit divin quand on a lu Voltaire et Rousseau ?",
      },
      {
        slug: "machine-vapeur-watt",
        year: 1769,
        title: "La machine à vapeur de Watt",
        description: "James Watt invente une machine révolutionnaire qui transforme la vapeur d'eau en mouvement - et déclenche la révolution industrielle.",
        content: "Avant James Watt, toute l'énergie du monde venait des muscles : des humains, des chevaux, des bœufs. Mais en 1769, cet ingénieur écossais perfectionne la machine à vapeur. En chauffant de l'eau, on crée de la vapeur, et cette vapeur pousse un piston qui fait tourner des roues. L'énergie du charbon se transforme en mouvement mécanique - sans muscles !\n\nL'effet est immédiat. Les mines pompent plus profondément. Les usines textiles remplacent les tisserands à la main par des machines qui produisent 100 fois plus vite. Les locomotives à vapeur tirent des trains à des vitesses jamais vues. En 50 ans, le monde change plus qu'il n'a changé en 500 ans auparavant.\n\nLa machine à vapeur de Watt lance la révolution industrielle qui transforme complètement la société. Des millions de paysans quittent leurs villages pour aller travailler dans les usines des grandes villes. Cette révolution crée des richesses immenses et accouche lentement de nos droits du travail, de nos retraites et de nos congés payés.",
      },
      {
        slug: "independance-americaine",
        year: 1776,
        title: "L'indépendance des États-Unis",
        description: "Treize colonies britanniques déclarent leur indépendance et inventent une nouvelle façon de gouverner un pays : la démocratie républicaine.",
        content: "En 1776, les treize colonies britanniques d'Amérique du Nord sont épuisées par les impôts que leur impose l'Angleterre sans qu'elles aient leur mot à dire. 'No taxation without representation !' crie-t-on dans les rues. Le 4 juillet 1776, les représentants des colonies signent la Déclaration d'Indépendance rédigée par Thomas Jefferson, proclamant que 'tous les hommes sont créés égaux'.\n\nS'ensuit une guerre de 7 ans contre la puissante armée britannique. Le général George Washington, avec l'aide de la France, résiste à toutes les attaques. En 1783, l'Angleterre reconnaît l'indépendance des États-Unis. En 1787, une Constitution révolutionnaire sépare les pouvoirs en trois pour éviter qu'une seule personne concentre tout le pouvoir.\n\nLes États-Unis deviennent le premier exemple moderne d'une démocratie républicaine fédérale - un modèle qui inspire les révolutions européennes et que des dizaines de pays vont copier. La Déclaration d'Indépendance américaine reste l'un des textes les plus influents de l'histoire humaine.",
      },
      {
        slug: "revolution-francaise",
        year: 1789,
        title: "La Révolution française",
        description: "Le peuple français renverse la monarchie et invente les idées de liberté, d'égalité et de fraternité qui inspirent encore le monde entier.",
        content: "En 1789, la France est à bout. Le roi Louis XVI dépense des fortunes tandis que le peuple meurt de faim. Les nobles et le clergé ne paient pas d'impôts. Le 14 juillet 1789, des Parisiens furieux prennent d'assaut la forteresse de la Bastille, symbole de l'oppression royale. La Révolution a commencé !\n\nEn quelques années, tout change à une vitesse folle. La féodalité est abolie. La Déclaration des droits de l'homme et du citoyen est proclamée. Le roi Louis XVI et Marie-Antoinette sont guillotinés en 1793. Robespierre, qui voulait une France parfaite et pure, fait guillotiner 17 000 personnes en moins d'un an pendant la Terreur. Finalement, un jeune général nommé Napoléon Bonaparte prend le pouvoir en 1799.\n\nLa Révolution française exporte ses idées dans le monde entier. 'Liberté, Égalité, Fraternité' - ces trois mots deviennent la devise de la France et inspirent des révolutions dans toute l'Europe et en Amérique latine. Nos idées modernes sur les droits de l'homme et la démocratie viennent en grande partie de 1789.",
      },
    ],
  },

  // ─── ÉPOQUE CONTEMPORAINE ─────────────────────────────────────────────────
  {
    slug: "epoque-contemporaine",
    label: "Époque contemporaine",
    events: [
      {
        slug: "napoleon-empereur",
        year: 1804,
        title: "Napoléon se couronne Empereur",
        description: "Le général le plus brillant de l'époque prend le pouvoir en France et conquiert toute l'Europe - avant de tout perdre en 10 ans.",
        content: "Le 2 décembre 1804, dans la cathédrale Notre-Dame de Paris, Napoléon Bonaparte prend la couronne des mains du pape et se couronne lui-même ! Ce geste dit tout : Napoléon ne reconnaît aucune autorité au-dessus de la sienne. Né en Corse d'une famille modeste, il est devenu l'homme le plus puissant d'Europe à 35 ans.\n\nNapoléon est un génie militaire hors du commun. En 10 ans, il bat les armées de presque toute l'Europe. Mais il crée aussi le Code civil (qui organise encore notre société), les lycées, la Légion d'honneur, la Banque de France. Il modernise le pays de fond en comble.\n\nMais Napoléon fait des erreurs fatales. L'invasion de la Russie en 1812 se transforme en désastre : son armée de 600 000 hommes est détruite par l'hiver russe. Battu à Waterloo en 1815, il est exilé sur l'île de Sainte-Hélène où il mourra 6 ans plus tard. Le Code civil qu'il a créé est toujours en vigueur dans 40 pays du monde aujourd'hui.",
      },
      {
        slug: "waterloo",
        year: 1815,
        title: "La bataille de Waterloo",
        description: "La dernière grande bataille de Napoléon se termine par une défaite qui remodèle l'Europe et crée un ordre de paix qui durera un siècle.",
        content: "Le 18 juin 1815, dans un champ boueux près de Waterloo en Belgique, deux armées s'affrontent pour décider du sort de l'Europe. D'un côté, Napoléon avec 72 000 soldats français. De l'autre, le duc de Wellington commandant les forces britanniques et alliées, bientôt rejointes par les Prussiens. Napoléon est revenu d'exil depuis seulement 100 jours et veut reprendre le pouvoir.\n\nPendant des heures, les deux armées s'affrontent dans un carnage terrible. Napoléon attend la fin des pluies pour attaquer - une erreur fatale. Quand ses fameux carrés d'infanterie chargent la colline tenue par Wellington, ils sont accueillis par un feu nourri. Puis les Prussiens arrivent sur les flancs français. La déroute est totale.\n\nAprès Waterloo, les vainqueurs redessinentla carte de l'Europe au Congrès de Vienne. Ils créent un système d'équilibre entre les grandes puissances qui va maintenir une paix relative en Europe pendant presque 100 ans - jusqu'en 1914 et la Première Guerre mondiale. Le mot 'Waterloo' est entré dans toutes les langues pour désigner une défaite totale et définitive.",
      },
      {
        slug: "darwin-evolution",
        year: 1859,
        title: "Darwin et la théorie de l'évolution",
        description: "Un naturaliste anglais publie une idée révolutionnaire : toutes les espèces vivantes, y compris les humains, ont évolué à partir d'ancêtres communs.",
        content: "Charles Darwin est un naturaliste anglais passionné par les animaux. De 1831 à 1836, il fait le tour du monde sur un bateau appelé le Beagle et observe des milliers d'espèces. Aux îles Galápagos, il remarque que les pinsons ont des becs différents selon les îles, parfaitement adaptés à la nourriture disponible. Cette observation lui donne une idée révolutionnaire.\n\nEn 1859, Darwin publie 'De l'Origine des espèces'. Son idée ? Toutes les espèces vivantes descendent d'ancêtres communs et évoluent lentement par 'sélection naturelle' : les individus les mieux adaptés survivent et se reproduisent. Sur des millions d'années, de petites adaptations créent de nouvelles espèces. Et oui, les humains aussi ont évolué.\n\nLa théorie de Darwin provoque un scandale immense. L'Église crie au blasphème. Mais aujourd'hui, l'évolution est le fondement de toute la biologie moderne. Grâce à Darwin, on comprend pourquoi les virus mutent et comment la résistance aux antibiotiques se développe. C'est l'une des découvertes scientifiques les plus importantes de l'histoire humaine.",
      },
      {
        slug: "tour-eiffel",
        year: 1889,
        title: "La Tour Eiffel est inaugurée",
        description: "Une immense tour de fer construite pour une exposition universelle devient le symbole le plus reconnu de Paris et du monde.",
        content: "En 1889, Paris organise une grande exposition universelle pour célébrer le centenaire de la Révolution française. L'ingénieur Gustave Eiffel propose une tour de fer de 300 mètres - la plus haute construction du monde ! Ses critiques sont nombreux : des artistes et des intellectuels la surnomment 'l'affreuse tour en fer'. Victor Hugo lui-même proteste !\n\nMalgré les critiques, la construction commence en 1887. 300 ouvriers travaillent nuit et jour pendant 2 ans pour assembler 18 000 pièces de métal avec 2,5 millions de rivets. La tour est si bien calculée qu'elle oscille seulement de quelques centimètres dans les vents violents. Inaugurée le 31 mars 1889, elle accueille 2 millions de visiteurs pendant l'exposition.\n\nAujourd'hui, la Tour Eiffel est le monument payant le plus visité du monde avec 7 millions de visiteurs par an. Ce que ses contemporains détestaient est devenu l'un des trésors les plus aimés de l'humanité. La leçon ? Il ne faut jamais juger une œuvre avant qu'elle soit terminée !",
      },
      {
        slug: "premiere-guerre-mondiale",
        year: 1914,
        title: "La Première Guerre mondiale",
        description: "L'assassinat d'un prince autrichien déclenche la guerre la plus meurtrière que le monde ait jamais connue - 18 millions de morts en 4 ans.",
        content: "Le 28 juin 1914, à Sarajevo, l'archiduc François-Ferdinand d'Autriche est assassiné par un jeune nationaliste serbe. Ce qui aurait pu rester un incident régional déclenche une catastrophe mondiale à cause des alliances : l'Autriche attaque la Serbie, la Russie défend la Serbie, l'Allemagne défend l'Autriche, la France et l'Angleterre défendent la Russie. En quelques semaines, toute l'Europe est en guerre.\n\nCette guerre est différente de toutes celles qui l'ont précédée. Les soldats s'enterrent dans des tranchées - de longs fossés profonds sur des centaines de kilomètres. Ils vivent dans la boue, parmi les rats et les corps de leurs camarades, sous des bombardements incessants. Les nouvelles armes - mitrailleuses, gaz de combat, avions, chars d'assaut - causent des destructions inimaginables.\n\nEn novembre 1918, l'armistice arrête enfin les combats. Le bilan est terrifiant : 18 millions de morts, 4 grands empires effondrés. La paix imposée à l'Allemagne est si humiliante qu'elle prépare le terrain de la prochaine guerre. Cette 'Grande Guerre' sera suivie de la Seconde Guerre mondiale 20 ans plus tard.",
      },
      {
        slug: "revolution-russe",
        year: 1917,
        title: "La Révolution russe",
        description: "Le tsar de Russie est renversé, et les communistes de Lénine prennent le pouvoir - lançant 70 ans d'expérience communiste qui marquera le monde.",
        content: "En 1917, la Russie est épuisée par trois ans de guerre mondiale catastrophique. Des millions de soldats sont morts. Le peuple meurt de faim. Le tsar Nicolas II gouverne comme si on était encore au Moyen Âge et refuse tout changement. En février 1917, les femmes de Petrograd descendent dans la rue pour réclamer du pain. La révolution commence - et cette fois, même les soldats rejoignent les manifestants. Le tsar abdique.\n\nEn octobre 1917, Lénine et ses bolcheviks organisent un coup d'État et prennent le pouvoir. Leur programme : tout partager, les usines aux ouvriers, les terres aux paysans, plus de riches ni de pauvres. C'est la mise en pratique des idées de Karl Marx. L'Union Soviétique est créée en 1922. Staline, qui prend le pouvoir après la mort de Lénine, construit une dictature sanglante qui fera des millions de victimes.\n\nLa Révolution russe partage le monde en deux pendant 70 ans : monde capitaliste contre monde communiste. Cette Guerre Froide entre les deux blocs va dominer toute la politique mondiale jusqu'en 1991. L'expérience communiste soviétique se termine en échec : incapable de produire assez de biens pour ses habitants, l'URSS s'effondre en 1991 sans même qu'une seule bombe soit tirée.",
      },
      {
        slug: "crise-1929",
        year: 1929,
        title: "La grande crise de 1929",
        description: "La Bourse de New York s'effondre en une semaine, déclenchant une catastrophe économique mondiale qui plonge des millions de familles dans la misère.",
        content: "Dans les années 1920, les États-Unis vivent dans l'euphorie. Tout le monde achète des actions en Bourse en espérant s'enrichir rapidement. Les prix des actions montent, montent, montent... jusqu'au 24 octobre 1929, le 'Jeudi Noir'. Ce jour-là, les investisseurs paniquent et vendent toutes leurs actions en même temps. Les prix s'effondrent. En quelques jours, des millions de personnes perdent toutes leurs économies.\n\nLa crise se répand à toute l'économie comme une maladie. Les banques font faillite. Les usines ferment car personne n'achète plus rien. Des millions de travailleurs perdent leur emploi. Aux États-Unis, 1 Américain sur 4 se retrouve sans travail ! Des files de milliers de chômeurs attendent devant les soupes populaires pour avoir un repas.\n\nLa crise de 1929 aura des conséquences terribles. En Allemagne, la misère économique pousse des millions de gens désespérés à voter pour un agitateur qui leur promet un avenir radieux : Adolf Hitler. Sans la crise de 1929, Hitler n'aurait peut-être jamais pris le pouvoir, et la Seconde Guerre mondiale n'aurait peut-être pas eu lieu.",
      },
      {
        slug: "seconde-guerre-mondiale",
        year: 1939,
        title: "La Seconde Guerre mondiale",
        description: "La guerre la plus meurtrière de l'histoire humaine fait 70 millions de morts - dont 6 millions de Juifs exterminés par les nazis.",
        content: "Le 1er septembre 1939, les armées d'Adolf Hitler envahissent la Pologne. L'Angleterre et la France déclarent la guerre. Le monde bascule dans un conflit qui va durer 6 ans et tuer entre 60 et 80 millions de personnes - soit 3 fois la population actuelle de la France.\n\nLa Shoah est le crime le plus abominable de ce conflit. Le régime nazi décide d'exterminer tous les Juifs d'Europe. Des hommes, des femmes et des enfants sont envoyés dans des camps d'extermination - Auschwitz, Treblinka. En 5 ans, 6 millions de Juifs sont ainsi assassinés - les deux tiers des Juifs d'Europe. Ce génocide industriel est unique dans l'histoire humaine.\n\nEn mai 1945, l'Allemagne capitule. En août, les États-Unis larguent deux bombes atomiques sur Hiroshima et Nagasaki. Le Japon capitule. De ces cendres naît un espoir : l'ONU, créée pour que les pays règlent leurs conflits par la discussion, et la Déclaration universelle des droits de l'homme.",
      },
      {
        slug: "bombe-atomique",
        year: 1945,
        title: "La bombe atomique",
        description: "L'humanité invente l'arme la plus destructrice de son histoire - et entre dans une ère où elle peut s'autodétruire.",
        content: "Le 6 août 1945 à 8h15, un avion américain largue une bombe sur la ville japonaise d'Hiroshima. En une fraction de seconde, une explosion d'une puissance inimaginable ravage la ville. 80 000 personnes meurent instantanément. Des dizaines de milliers d'autres meurent dans les semaines suivantes à cause des radiations. Trois jours plus tard, une deuxième bombe est larguée sur Nagasaki. Le Japon capitule.\n\nCette bombe est le résultat du 'Projet Manhattan', un programme secret américain qui a réuni les plus grands physiciens du monde - dont beaucoup étaient des réfugiés juifs ayant fui l'Europe nazie. En moins de 3 ans, ils ont transformé la théorie d'Einstein (E=mc²) en la plus terrible arme de destruction jamais créée.\n\nLa bombe atomique change tout dans les relations entre pays. Désormais, des nations peuvent s'anéantir mutuellement en quelques minutes. Cette 'destruction mutuelle assurée' crée une paix paradoxale : personne n'ose attaquer l'autre de peur d'être anéanti. Aujourd'hui encore, 9 pays possèdent des armes nucléaires, et le désarmement nucléaire reste l'un des grands défis de notre époque.",
      },
      {
        slug: "gagarine",
        year: 1961,
        title: "Youri Gagarine dans l'espace",
        description: "Un pilote soviétique de 27 ans devient le premier humain à voyager dans l'espace - et à voir la Terre de l'extérieur pour la première fois.",
        content: "Le 12 avril 1961, une fusée soviétique décolle du Kazakhstan avec à son bord un homme de 27 ans nommé Youri Gagarine. Il tourne autour de la Terre une fois en 108 minutes. Depuis l'espace, il contemple notre planète - une sphère bleue et verte suspendue dans le noir infini - et dit simplement : 'La Terre est bleue. Comme c'est magnifique !' L'humanité vient de quitter sa planète pour la première fois.\n\nCet exploit est le résultat de la course à l'espace entre les États-Unis et l'Union Soviétique. Les Soviétiques ont déjà marqué des points : ils ont lancé le premier satellite (Spoutnik, 1957) et le premier être vivant dans l'espace (la chienne Laïka, 1957). Avec Gagarine, ils remportent la palme la plus précieuse : le premier humain dans l'espace.\n\nL'exploit de Gagarine inspire des millions d'enfants à rêver de conquête spatiale. Les États-Unis, piqués au vif, investissent des milliards dans leur programme Apollo. En 1969, Neil Armstrong marche sur la Lune. Depuis Gagarine, plus de 600 humains ont voyagé dans l'espace et des missions habitées vers Mars sont planifiées pour les années 2030.",
      },
      {
        slug: "alunissage",
        year: 1969,
        title: "Les premiers pas sur la Lune",
        description: "Neil Armstrong pose le pied sur la Lune le 21 juillet 1969 - un milliard de personnes regardent en direct ce moment historique.",
        content: "Le 20 juillet 1969, le module lunaire Eagle se pose doucement sur la surface de la Lune. Neil Armstrong ouvre la trappe, descend lentement l'échelle, et pose le pied sur le sol lunaire. Il dit alors des mots que des milliards de gens entendront : 'C'est un petit pas pour l'homme, un bond de géant pour l'humanité.' Buzz Aldrin le rejoint quelques minutes plus tard. Pendant 2h30, ils marchent sur la Lune.\n\nCet exploit est le résultat de 8 ans de travail acharné de 400 000 ingénieurs, techniciens et scientifiques américains, pour remplir la promesse du président Kennedy en 1961 : 'Nous irons sur la Lune avant la fin de la décennie.' La fusée Saturn V qui les a emportés est encore aujourd'hui la plus puissante jamais construite.\n\nL'alunissage reste le plus grand exploit technologique de l'histoire humaine. Des civilisations qui regardaient la Lune comme une déesse ont vu des humains y marcher en moins de 10 000 ans. Depuis, 12 humains ont marché sur la Lune - tous Américains. Et la NASA prépare actuellement le programme Artemis pour retourner sur la Lune dans les années 2030.",
      },
      {
        slug: "chute-mur-berlin",
        year: 1989,
        title: "La chute du mur de Berlin",
        description: "Le 9 novembre 1989, le mur qui divise Berlin depuis 28 ans s'effondre en direct à la télévision - et avec lui, la division de l'Europe.",
        content: "Depuis 1961, un mur de béton de 155 kilomètres divise la ville de Berlin en deux : à l'Ouest, une ville libre et prospère ; à l'Est, une ville sous régime communiste. Ce mur a été construit pour empêcher les Allemands de l'Est de fuir vers l'Ouest. Plus de 140 personnes ont été tuées en essayant de le franchir. Ce mur est le symbole de la division du monde entre liberté et dictature.\n\nLe 9 novembre 1989, un porte-parole du gouvernement est-allemand annonce maladroitement que les frontières sont ouvertes 'immédiatement, sans délai'. Des milliers de Berlinois se précipitent vers les checkpoints. Les gardes, dépassés par les événements, s'écartent. Des Berlinois de l'Est et de l'Ouest se retrouvent et s'embrassent en pleurant. Ensemble, avec des marteaux, ils commencent à démolir le mur.\n\nLa chute du mur déclenche un effet domino : en quelques mois, les régimes communistes d'Europe de l'Est s'effondrent les uns après les autres. En 1990, l'Allemagne se réunifie. En 1991, l'URSS se dissout. La Guerre Froide est terminée. Cette nuit du 9 novembre 1989 reste l'un des moments les plus joyeux et les plus émouvants de l'histoire récente.",
      },
      {
        slug: "naissance-internet",
        year: 1991,
        title: "Naissance d'Internet",
        description: "Un ingénieur du CERN rend le World Wide Web accessible à tous - déclenchant une révolution qui connecte aujourd'hui 5 milliards d'humains.",
        content: "En 1989, un ingénieur britannique du CERN, Tim Berners-Lee, propose un système où des documents peuvent être reliés entre eux via des 'liens' et accessibles depuis n'importe quel ordinateur connecté. Son chef écrit simplement en haut de la note : 'Vague, mais intéressant.' Il venait pourtant d'inventer le World Wide Web. En 1991, Tim Berners-Lee rend le Web accessible à tous gratuitement.\n\nEn quelques années, des millions de pages apparaissent. Les premiers navigateurs comme Mosaic (1993) puis Netscape permettent aux gens ordinaires de surfer sur le web. L'email, les forums, les premiers sites d'actualité transforment la façon dont les gens communiquent et accèdent au savoir. Les dot-com de la fin des années 1990 marquent la première euphorie économique liée à Internet.\n\nAujourd'hui, Internet connecte plus de 5 milliards de personnes dans le monde. Il a révolutionné le commerce, la politique, la culture, les relations sociales, la science et l'éducation. La moindre information est accessible en quelques secondes depuis n'importe quel coin de la planète. Jamais dans l'histoire humaine une invention n'a transformé la vie quotidienne aussi vite et aussi profondément.",
      },
      {
        slug: "accord-paris-climat",
        year: 2015,
        title: "L'Accord de Paris sur le climat",
        description: "195 pays s'engagent pour la première fois ensemble à lutter contre le réchauffement climatique - le plus grand défi de notre époque.",
        content: "Le 12 décembre 2015, au Bourget près de Paris, 195 pays signent un accord historique : limiter le réchauffement de la Terre à 1,5 ou 2 degrés par rapport à avant la révolution industrielle. C'est la première fois dans l'histoire que presque tous les pays du monde s'engagent ensemble sur un objectif commun pour protéger notre planète.\n\nPourquoi est-ce si urgent ? Parce que depuis 150 ans, nos usines, nos voitures et nos centrales électriques brûlent du pétrole, du charbon et du gaz, libérant du CO2 dans l'atmosphère. Ce gaz crée un 'effet de serre' qui réchauffe la planète. La Terre s'est déjà réchauffée de 1,2 degrés - suffisant pour dérègler les saisons, faire fondre les glaciers et rendre les tempêtes plus violentes.\n\nEn 2018, une lycéenne suédoise de 15 ans, Greta Thunberg, commence à faire grève devant le Parlement de son pays pour réclamer une action climatique. Elle inspire le mouvement mondial des 'Fridays for Future', avec des millions de jeunes manifestant dans le monde entier. La lutte contre le changement climatique est le grand défi de ta génération.",
      },
    ],
  },
];

async function main() {
  await prisma.event.deleteMany();
  await prisma.epoch.deleteMany();

  for (const epoch of data) {
    await prisma.epoch.create({
      data: {
        slug: epoch.slug,
        label: epoch.label,
        events: { create: epoch.events },
      },
    });
  }
  console.log(`Base de données alimentée : ${data.reduce((acc, e) => acc + e.events.length, 0)} événements sur ${data.length} époques ✓`);
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
