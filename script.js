// =========================================================================
// 1. DADOS PADRÃO E ESTADO DO SITE
// =========================================================================
const DEFAULT_STATE = {
    recipient: "Meu Amor",
    sender: "Seu Namorado",
    startDate: "2023-08-12",
    message: "CHUVAAAA DE TEXTINHUUUSSSS\n\nOiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii gatinha da minha vidaa, sou taum feliz com nós dois…com o tempo que conquistamos um ao ladinho do outro e me sinto a cada dia mais feliz e a cada dia com mais certeza de que quero te fazer a minha esposa e a minha mulher pra toduu o sempriii, com muituuuu amoor, todos os textinhos que eu tinha no meu bloquinho de notas apaixonaduuu: \n \nOoooiiiiiiiiiiii minha gostosinha. Meu bem todos os dias desde u que aconteceu com o Gabriel vc tem sentido medo de me perder, de Naum realizar os nossos sonhos mas tenho algo paaa tii falar bbzinha, cada sonho nosso, cada momento simples que queremos viver jah fazem parte de mim, além de sentir vontade de viver tudo isso, eu sinto necessidade e falta do que Naum  aconteceu *ainda* , minha princesa eu só vou me sentir completo quando entrarmos juntos na nossa casa, mimirmos juntos e acordarmos um ao lado do outro e dar o primeiro beijo do dia e eu tenho certeza de que Deus Naum vai me levar antes, ele Naum me faria sentir tanta necessidade de fazer algo pra Naum me deixar fazer e eu vou fazer com vc, vou colocar finalmenteeee uma aliança prata no seu dedinho que deveria estar desde sempre, vou te pedir em noivado, mobiliar nossa casa com vc e finalmente colocar a aliança que nunca mais vi sair do seu dedinho, a do nosso casamento. Naum precisa de preocupar minha princesa e muituuu menos ter medo, Naum vou embora tabauum? Toohh aqui e sempre vou estar do seu ladinho sendo chato como sempre kkkkkk fazendo gracinha com vc, te dando carinho ateeh enjoar, te abraçar, te sentir com a minha mão, te ter nos meus braços, ser pa frente as vezes kkkkkkk, papar muito seus docis, falar o quanto euu tiiii amuuuuu e vou fazer essas coisas pro resto das nossas vidas, por muito muito muito muito muito tempo meu bem e vou fazer com vc 2 filhos linduus com a cara da mamãe e quero ser o único branco em casa viu, quero todo mundo moreninho e eu vou realizar tudo com vc, tenho certeza disso. EUUUUUUUUUUUUUUU AMUUUUUUUU MUUUITTTUUUU VOXEEEEEEEE MINHAAAAA FUTURA ESPOSAAAAA \n\nMinha cacheadinha, minha princesa, minha gostosinha, hoje voxee disse que ama quando escrevo, que vc lê e veee que escolheu o homem mais completo paa voxee e eu tenho certeza de que voxee eh a mulher mais completa do mundo, fiquei pensando em como voxe podiii ter tudo que quero em uma mulher pra ser completa, em como voxe consegue ser linda, perfeita, esperta, companheira, amorosa, carinhosa, com todo o talento pra papar de sal e de docii, uma mulher que escolhe estar do meu lado e me apoiar em todas as situações, uma mulher em que eu possuu confiar de olhos fechados, que me valoriza e que sempre diz qui me ama independente de qualquer situação, a mulher que sonha comigo mesmo se parecer improvável, a pessoa que quando eu preciso eh o meu abrigo seguro...a mulher perfeita...e como se Naum fosse o suficiente pra eu me apaixonar e casar com vc, além de ser uma mulher completa, ainda me faz completo todos os dias, me faz completo quando me prioriza antes das outras pessoas, quando fala sobre mim ateh pro cachorrinho da rua e fala que sou seu namorado, me faz completo quando acredita nos planos que tenho pra nós, quando me ajuda a ser um homem melhor nos detalhes, quando fala 'ANIMAÇÃO MOOORR' mesmo quando meu dia Naum foi taum legal, quando eh carinhosa comigo quando vê que Naum toh bem, quando faz feliz com seu carinho, quando faz docii quando Sabi que vou te ver, quando segura a minha mão e quando fica abraçada comigo...todos os dias faz eu me sentir mais completo e mais feliz por ser essa mulher taum perfeita e meu coração sorri quando sinto que eh a mulher certa e quando sinto a certeza de que vai ser minha eterna esposa e mãe dos nossos filhos e a mulher que vou cuidar, amar e fazer feliz pro resto da minha vida. AMUUUUUUUUUUUUUUUUUU DEMAISSSSSSSSSSSSSSSS VOXEEEEEEEEEEEEEEEEE\n\nMinha princesa, tava lembrando das fotinhas que tirou no Banhuu ontem e fiquei pensando...como eu pude conseguir uma mulher assim...uma princesa desse nível, eu tenho uma namorada inteiramente linda e eu amuu cada detalhe dessa linda, amuuuu seus cachinhos mesmo com 4 dias sem finalizar, amuuu eles quando acaba de finalizar, amuuu quando tah preso, solto, com trancinhas, com penteado, com as pontinhas claras, com as pontinhas escuras, amuuuu sua pele, com a cor perfeita,.com o brilho perfeito, o perfume perfeito que me enlouquece...amuuu seus olhinhos que sempre me pedem pra beijar sua boquinha e dizer que tiii amuuuuu e eu sempre acabo obedecendo, amuuuuuu seu narizinho normalz suado, portinha de Lamborghini kkkkkk e amuu quando ele tah juntinho do meu, amuuuuu sua boquinha....com o gostinho mais perfeito de toda a vida na terra, com o formato mais lindo que jaah vi, que esconde o sorriso mais brilhante que todas as estrelas do seu, amuuu seu pescocinho que sempre recebe meus beijos e cheiros de portas abertas, amuuuu o peitinho também kkkkkk amuuu sua barriguinha e cinturinha perfeita que um dia vai abrigar nossos filhinhos e que vou beijar diretuu, a Rebeca ainda vamos nos conhecer mas também amuuu ela, amuuu sua coxa que sempre eh abrigo pra descontar minha saudade e me sentir mais perto ainda de voxeee, amuuuu seu pezinho que eh fofinho e amuuu suas mãozinhas que vão segurar nosso relacionamento em formato de anel, que faz eu me sentir incrível quando tah no meu rosto e que fica perfeitinha junta com a minha mão. Euuuuuuu amuuuuuuu muituuuuuuuuuu todinha meu bem e nunca vou descobrir como consegui seu smor, mas agora jah Naum vivo sem ele nem sem vc entaum vou me casar com vc e viver do seu ladinho todos os dias....e como se Naum bastasse, ainda tem que se vestir bem, ser fofinha e engraçada e ter a personalidade mais linda que jah vi...e quero vc todinha nos meus braços todos os dias logo, casa comigo?? EUUUUUUUU TIIIIIIIIIIIIIIIIIII AMUUUUUUUUUUUUUUUUUU DEMAISSSSSSSSSSSSSSSS \n\n28 de setembro, um dia completamente normal, sem feriado importante, sem comemorações como um aniversário ou algo relevante, uma manhã completamente normal, o sol nasceu como todos os dias, a brisa fria veio e já se foi da mesma forma como ocorreu o ano todo, meu coração está batendo, meu relógio marca o horário sem alterações mas eu ainda sinto algo especial, mesmo vivendo dias estranhamente comuns e repetitivos, ainda sinto um único fator de diferença que me mantém sorrindo nesses dias comuns esse fator é vc meu amor. vc é o que muda meus dias e impede que sejam sem graça ou cinzas e eu não faço ideia do que seria dos meus dias sem a minha mudança favorita, o que seria dos meus dias sem seus bons dias, sem sem humor imprevisível, sem as gracinhas e piadas que inclusive vc roubou de mim, o que seria de mim se eu já tivesse noção de como seria a maioria dos meus dias ao acordar, o que seria de mim sem seu sorriso que consegue ficar mais lindo dia após dia, como eu poderia viver esses dias sem ouvir que me ama a cada 5 mensagens que trocamos, as mensagens…forma de amar vc mesmo de longe e que tem me mantido feliz e alegre tanto nos dias cópias dos anteriores quanto nos dias que parecem que nunca vão acabar e com as suas mensagens eu finalmente posso ter uma pausa do planeta, a realidade a minha volta já não importa tanto e principalmente nesses dias ruins, as horas com vc passam num piscar de olhos e quando me dou conta, já passou do horário que eu deveria dormir e vc continua me fazendo sorrir e mesmo quando vc não está num dia bom, me sinto um homem incrível por ver vc sorrir ao menos uma vez com as minhas piadas nerds ou sem graça que vc já conhece porque ver vc feliz virou uma prioridade pra mim antes que eu notasse e agora não posso fazer nada com tranquilidade sem saber que está feliz e bem e vou fazer tudo que posso pra continuar fazendo vc feliz. Quando digo que não consigo fazer nada com facilidade sem saber que está bem, significa que absolutamente tudo que eu faça tem um pedacinho de vc, eu já vi esse efeito em filmes, já li em livros, vi em séries e animes mas nunca achei que fosse tão literal, pra ser sincero não levava tão a sério antes de adquirir essa habilidade de ver minha pessoa favorita em tudo, num pássaro voando, num vento diferente, em um som alto ou um som extremamente sutil, vc sempre está lá e sinceramente não quero mais que seja diferente, cheguei num ponto em que se tornou difícil olhar qualquer animal ou objeto sem se quer me perguntar o que está fazendo ou se está bem, não posso mais olhar pra uma cadeira vazia sem te imaginar nela, não posso mais ver uma parede branca sem pensar que vc quer que nossa futura casa seja clara mesmo eu sendo contra, não consigo olhar o céu ou uma simples rua asfaltada sem pensar se está vendo o mesmo, sem pensar se vc está bebendo água certinho ou se tá com fome, sem me preocupar com vc.Pra ser totalmente sincero, sinto que nunca vou entender completamente o que sinto por vc, eu sei, tenho certeza de que é bom, que é amor que e me faz bem, mas ao mesmo tempo é tão estranho, me faz sentir uma convicção que nunca senti com nada na vida, uma certeza praticamente absoluta de que já demos certo, de que o fim não é uma opção pra nós. A vida toda eu sempre tive o hábito de planejar o futuro e pensar muito nele pra que tudo dê o mais certo possível, corrigir detalhes, pensar mil vezes antes de tomar uma decisão mas vc veio tão de uma vez kkkk vc veio de uma forma tão intensa e eu nem precisei analisar o que seria de nós no futuro, e pela primeira vez eu pensei apenas no presente momento, no ali e no agora e isso fez eu me sentir feliz em um patamar que não conhecia, vc me ajudou e ajuda todos os dias a aproveitar um dia de cada vez mas sem ignorar os sonhos do futuro, vc me mostrou que o mundo é muito mais do que planejamento e conseguir uma faculdade, o mundo lá fora é incrível, e quando estou ao seu lado fica simplesmente perfeito, cada passeio, cada hora juntos, cada olhar, cada risada e cada palavra com vc me dá forças e motivação pra fazer qualquer coisa.Não sei exatamente como eu, nerd, bobo, projeto de engraçado e meio chato consegui o amor de vc com essa skin suprema, inteligência que humilha a média, mais sociável que as senhorinhas que ficam na rua e extremamente esforçada e carinhosa, eu só sei que consegui seu amor e que não vivo mais sem ele e sem cada detalhe seu que faz minha vida ser mais leve e incrivelmente mais divertida. Te amo meu bem, sempre vou amar vc incondicionalmente e obrigado por dar cor e diferença nos meus dias.\n\nMinha princesa, jah são 2 aninhos...são 24 meses...730 dias vivendo a melhor parte da minha vida, eu já nem lembro mais como era a minha vida a 2 anos atrás, eu só sei quiii eu nunca tão feliz na minha vida....hoje em dia eu olho paaaa minha namorada perfeita e vejo que minha vida começou no primeiro olhar profundo...no primeiro tiiii amuuuu, meu bem, obrigado por 730 dias de puta alegria, de um amor que eu nem sabia sua existia, por olhares que me tocaram como nunca outro chegou perto...por todos esses dias me amar como ninguém nunca amou, por me aceitar e aturar as minhas gracinhas kkkkkkk obrigado meu amor, pelos melhores 730 dias da minha vida que nunca vão acabar.  Minha gatinha, voxe eh a maior fonte e o maior motivo dos meus sonhos...ehhhhhhh o centro de todos eles e quero realizar todos os ao seu ladinho, casar com voxeeee e trocar namoradinha perfeita paaaa esposa perfeita, mamãe perfeita e mulher maravilhosa...hojiiii ehhhhh dia dos namorados mas eu só consigo pensar no nosso futuro....no nosso casamento, no noivado, no pedido de namoro e falando nissuuu, esse eh o último dia dos namorados sem aliança no dedinho e no próximo VOXEEEE VAAAIIIIII TERRRRR UMA ALIANÇA DE PRATA NOOOO DEDINHOOOOOO e euuuuuuu vou realizar um dos meus maiores sonhos, olhar pra minha mão e saber que na sua mãozinha tem uma parecida com a minha... obrigado por me apoiar em tudo, por me fazer sonhar todos os dias meu amor. EUUUUUUUUUUUUUUUUU TIIIIIIIIIII AMUUUUUUUUUU MMMMMUUIIIIIIITUUUU MMMMMUUIIIIIIITUUUU MMMMMUUIIIIIIITUUUU MMMMMUUIIIIIIITUUUU MMMMMUUIIIIIIITUUUU MMMMMUUIIIIIIITUUUU MMMMMUUIIIIIIITUUUU MMMMMUUIIIIIIITUUUU MMMMMUUIIIIIIITUUUU MMMMMUUIIIIIIITUUUU MMMMMUUIIIIIIITUUUU Minha princesa, obrigado por me fazer viver a minha vida como eu nunca nem pensei em viver.FELIZZZZZ DIAAAA DOS NAMORADOOOSSSSS\n\nSabe meu amor, a minha vida toda eu quis ter muita gente ao meu redor, sempre quis ser amado por muita gente, muito conhecido, nunca ficar sozinho e eu sempre busquei isso, mas quando vc chegou...vc conseguiu comprir todos os meus objetivos de vida só sendo voxe mesma...me ama como se eu fosse amado por um bilhão de pessoas, sempre repara em mim e me ouve, nunca me deixa sozinho...voxe veio de uma forma que me deu tudo o que eu queria na vida e me fez querer muito mais mas tudo ao seu lado....e eu vou querer assim por toda a minha vida, bigaduuuuu por ser a melhor pessoa da terraaaaaaa. EUUUUUUUUUUUU TIIIIIIIIIIIII AMUUUUUUUUUU MMMMMUUIIIIIIITUUUU MMMMMUUIIIIIIITUUUU MMMMMUUIIIIIIITUUUU MMMMMUUIIIIIIITUUUU \\nOoooooiiiiiiiiii minha namoradaaaaaa lindaaaaaaa, chegou o dia meu bem, o dia dos namorados. Antes de vir escrever esse textinho eu pensei tanto...jah escrevi tantos textinhos e eu queria falar algo novo nesse dia especial...mas depois de uma semana pensando eu vi que eu jah explorei todas as palavras do mundo que chegam perto de conseguir expressar tudo o que vc eh pra mim meu amor, jah usei palavras rebuscadas, lágrimas, cores, pinturas, mas nunca vou conseguir expressar tudo meu bem, mas mesmo sabendo disso...ainda Naum consigo Naum tentar expressar tuduuu quiii fez e eh por mim minha princesa, voxeee ehhh a pessoa que independente do meu humor, dos meus pensamentos, das minhas dúvidas, sempre vai terminar as mensagens com: euuuuuu amuuuuu voxeeeeeeeee e isso pra mim eh tudo e eu nunca na vida mereci nem vou merecer a pessoinha qui voxeee ehhhh e tuduuu qui fez por mim meu amorzinho, me libertou de tudo de ruim que tinha em mim, me mostrou as melhores coisas que tenho, me fez ver qui aos 16 anos de idade...já sou o homem mais feliz de toda a terra. Voxeeee meu amor ehhh a mulher mais perfeita desse mundo, ao mesmo tempo consegue ser maravilhosamente linda, ter a pele maisssssssss lindaaaaa daaa T E R R A, ter os cachinhos maravilhosuuusss, uma boquinha que me tira o ar...os olhinhos qui fazem meu mundo se resumir ao seu rosto por horas, um nariz fofo ao ponto de dar vontade de morder, um pescocinho que AAAAAHHAHAHAHAAHA Naum aguento....e se Naum bastasse ainda ehhhh a mulher mais inteligente que jah pisou na terra, domina qualquer assunto e conhece ateh quando eu toh mal mal...meu amor, voxe eh a melhor namorada desse mundo e eu nem tenho dúvidas disso puque Naum consigo e nunca consegui passar um momento menos que perfeito ao seu lado...em nenhuma vez eu fui menos que feliz ao máximo ao seu lado meu amor e hojiii eu digo namorada, mas Naum vejo a hora de dizer esposa... obrigado por ser a melhor pessoa, mulher, namorada, amiga e futura esposa do munduuuuu. EUUUUUUUUU AMUUUUUUUUU VOXEEEEEE MUUUUIIITUUUU MUUUUIIITUUUU MUUUUIIITUUUU MUUUUIIITUUUU MUUUUIIITUUUU MUUUUIIITUUUU ❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️.FELIIIZZZZ DIAAAAAAA DOSSSS NAMORAAAADOOOOSSS.\n\nOiiiiiiiiii amor da minha vidaaaa, chegou o seuuuuuu diiaaaa 😁😁😁Meu amor, antes de eu dizer qualquer coisa, quero dizer que vc eh a pessoinha mais importante da minha vida todinha e isso nunca nunca vai mudar. Agola começando  mesmuu, eu sou o Homem mais grato e mais feliz da terra todinha pur ter voxe na minha vida meu amor, por ter voxe com eu sempre paaa me apoiar, por sempre dar carinho quando eu mais preciso, puur nunca deixar neném sozinho. Meu bem, no dia de hojii eh todinho seu mas parece muitu mais um dia pa eu agradecer, eu nem consigo explicar de que forma voxe mudou eu, mudou a minha vida pra melhor, pra um nível que nem eu mesmu imaginava chegar, ondi eu via confusão voxe me mostrou alegria e paz, onde eu via medo voxe me mostrou força e amor, onde eu via solidão, voxe fez se tornar puro carinho e eu naum quero mais deixar de viver essa mudança. Voxe eh a única pessoa que me conhece taum bemm, meus gostos, detalhes,  manias e eh a única pessoa que eu amuuu reparar e ateh decorar cada um dos seus detalhes, mesmo voxe conhecendo todos os meus detalhes,  voxe escolheu ficar meu bem…e issuu paa mim naum tem preço nem tamanho, eh infinitu.	Minha gatinha, euuu amuuuu e admiro tantuu a mulher qui voxe se torna a cada dia, amuuu seu jeitinho de falar comigo e fazer o meu dia tomar cor, amuuuu a sua força que me faz pensar qui mesmo eu sendo sua base, voxeee seria capaz de ser a base do mundo todinho, amuuuuu seu ciuminho qui faiz eu me apaixonar cada vez mais pur voxe, amuuu cada detalhe do seu corpinho e ateeh o jeitinho de andar kkkkkkkkkk meu amor, voxe eh a melhor e mais perfeitinha mulher do planeta todinhoooooo.Agolaaaa a minha gatinha também temmm 16 aninhuuuus e eu quero viver cada momento dos seus 16 meu amor, os bons, os muitu bons, os meeh e os ruins também, puque sempre vou estar ao seu ladinhuu e ser o seu homem, o seu alicerce, base, abrigo e a pessoa que voxe sempre podiii contar.Mesmuu mais nova qui eu, voxe me ensinou e me ensina tanta coisa meu amor…me ensinou coisas qui sempre quis aprender como amar incondicionalmente e me ensinou coisas comuu o significado de “futicar” kkkkkkkkkkkk e voxe me ensina todos os dias a ser feliz meu amor, sempre foi especialista em me ensinar issuu.Minha princesa, ateeh hoji naum consegui colar meus sentimentos inteiros em palavras mas quero dizer qui voxe naum eh só uma pessoa especial pra mim, voxe eh essencial pra que eu exista meu amor e eu naum mereço nem metade do amor que voxe tem por mim mas eu aceito, naum vivo sem e queruu maaiiisss EUUUUUUUUUUUUUUUUUUUUUUUUUU TIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIII AMUUUUUUUUUUUUUUUUUUUUUUUUUUU MEEEEEEEEEUUUUUUUU AMOOOOOOOOOOOOOOOOOOOOOORRRRRRRRRRRRRRRR ❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️FELIIIIZZZZZZZZZZ ANIVERSÁRIOOOOOOOOOOOOOOOOOO GATINHAAAAAAAAAAAA DAAAAAAAAAAAAAAAAAAAA MINHAAAAAAAAAAAA VIDAAAAAAAAAAAAAA 🥳🥳🥳🥳🥳🎂🎂🎂🎂🎂🎂🎂🎂 🎉 🎉 🎉 🎉 🎉 🎉 🎉 🎉 🎉 🎉\n\nNaum tah achando qui acabou neehhh?? Meu amor, vc paa mim eh simplesmente tudo, mas dizendo assim parece meio meh naum neh? vou traduzir…vc eh a pessoa que tah sempre como meu primeiro pensamento, quando acordo, quando mimo, quando paro paa pensar, voxee ehh a pessoa que sempre causa as melhores sensações e que sempre cria os melhores momentos da minha vida, voxee eh a minha primeira preocupação em todos os momentos e ateeh acima de mim meu amor, naum me importo de passar frio, fome ou vontade mas naum aguentaria ver voxe passando pur issu, voxe eh a pessoa que eu naum vejo mais um momento do futuro sem voxe nele, voxe eh a pessoa que eu naum tenho vergonha di nadinha, naum tenho medo ou receio dii voxee, voxe eh pessoa que foi e eh o motivo di eu mudar a minha vida 100% soh paa ver voxe sorrir mais vezes ao dia, ehhh a pessoinha qui eu adio contar uma notícia ruim paaaa aproveitar mais seu sorriso, ehhhh a pessoinha qui eu naum aguentaria perder, ehhh a pessoinha qui eu protejeria com a minha vida e sem arrependimento, ehh a pessoinha qui eu tenho medo de fazer fixar tisti, ehhh a pessoinha qui eu faço tuduuu paaa ver felizzzz e por fim meu amor, ehhh ao redor dii voxe qui a minha vida orbita, puur issu voxee ehh o meu solzinho, o meu tudduuuu. EUUUUUUUUUUUUUUUUUUUU TIIIIIIIIIIIIIIIIIIIIIIIIIIIII AMUUUUUUUUUUUUUUUUU MEEEEEEEEEEEEEU SOLZINHUUUUUUUUUUUUUUUUUUUUU ☀️☀️☀️❤️❤️❤️❤️FELIZZZZZZZZZZZZZZZZZZZZZZZZZZZ ANIVERSÁRIOOOOOOOOoooOOOOOOOOOOOOOOOO\nOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO"
};

let siteState = { ...DEFAULT_STATE };

const REASONS_LIST = [
    {  title: "O seu sorrisu", text: "O sorriso que ilumina minha vida e neus dias." },
    {  title: "O seu abraço", text: "Ondii eu sinto a verdadeira paz e conforto." },
    {  title: "Seus cachinhos", text: "Pontinhas claras ou naum, finalizadoo ou naum, sempre me encantando." },
    {  title: "Seus olhinhos", text: "Meus olhos não conseguem desviar do brilho que seus olhinhos emitem." },
    {  title: "O seu carinho", text: "A fonte da minha felicidade...." },
    {  title: "Sua voizinha", text: "A voiz que falada me faz sorrir e cantada me faz chorar pela beleza." },
    {  title: "Seu beijo", text: "O beijo mais gostoso de toda a terra e que me faz esquecer do mundo ao redor." },
    {  title: "Seu cheirinho", text: "O aroma mais gostoso que existe...e que mesmo sem perfume me encanta demais." },
    {  title: "Seu corpinho", text: "Desenhado de forma perfeitinha...que me atrai e me enloquece todos os dias." },
    {  title: "Seu jeitinho", text: "Sempre carinhosa e paciente com eu(nem sempre paciente, mas amuu mesmo assim)." }
];

// =========================================================================
// 2. CARREGAR E SALVAR VIA URL
// =========================================================================
function loadFromParams() {
    try {
        const params = new URLSearchParams(window.location.search);
        if (params.has("para")) siteState.recipient = params.get("para") || DEFAULT_STATE.recipient;
        if (params.has("de")) siteState.sender = params.get("de") || DEFAULT_STATE.sender;
        if (params.has("data")) siteState.startDate = params.get("data") || DEFAULT_STATE.startDate;
        if (params.has("msg")) siteState.message = params.get("msg") || DEFAULT_STATE.message;
    } catch (err) {
        console.error("Erro ao carregar parâmetros:", err);
    }
}

function updateUI() {
    document.getElementById("display-recipient").textContent = siteState.recipient;
    document.getElementById("display-sender").textContent = siteState.sender;
    document.getElementById("display-message").textContent = siteState.message;
}

// =========================================================================
// 3. CONTADOR DE TEMPO JUNTOS EM TEMPO REAL
// =========================================================================
function updateLoveTimer() {
    const parts = siteState.startDate.split("-");
    if (parts.length !== 3) return;

    const start = new Date(Number(parts[0]), Number(parts[1]) - 1, Number(parts[2]), 0, 0, 0);
    const now = new Date();
    let diff = Math.max(0, now - start);

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    diff -= days * (1000 * 60 * 60 * 24);

    const hours = Math.floor(diff / (1000 * 60 * 60));
    diff -= hours * (1000 * 60 * 60);

    const minutes = Math.floor(diff / (1000 * 60));
    diff -= minutes * (1000 * 60);

    const seconds = Math.floor(diff / 1000);

    document.getElementById("timer-days").textContent = days;
    document.getElementById("timer-hours").textContent = String(hours).padStart(2, "0");
    document.getElementById("timer-minutes").textContent = String(minutes).padStart(2, "0");
    document.getElementById("timer-seconds").textContent = String(seconds).padStart(2, "0");
}

// =========================================================================
// 4. CARTÕES INTERATIVOS DE MOTIVOS PARA AMAR
// =========================================================================
function renderReasons() {
    const grid = document.getElementById("reasons-grid");
    grid.innerHTML = "";

    REASONS_LIST.forEach((item) => {
        const card = document.createElement("button");
        card.type = "button";
        card.className = "text-left bg-white/90 hover:bg-white border border-[#030063] rounded-2xl p-5 shadow-sm shadow-slate-200/50 transition-all hover:-translate-y-0.5 cursor-pointer group";
        card.innerHTML = `
            
            <h3 class="font-bold text-[#0f172a] text-base">${item.title}</h3>
            <p class="text-sm text-slate-600 mt-1.5 hidden" data-desc>${item.text}</p>
        `;

        card.addEventListener("click", () => {
            const desc = card.querySelector("[data-desc]");
            const badge = card.querySelector("[data-badge]");
            const isHidden = desc.classList.contains("hidden");
            if (isHidden) {
                desc.classList.remove("hidden");
                badge.textContent = "💙 Aberto";
                spawnHeartBurst(8);
            } else {
                desc.classList.add("hidden");
                badge.textContent = "Toque para abrir";
            }
        });

        grid.appendChild(card);
    });
}

// =========================================================================
// 5. EFEITOS VISUAIS E BOTÃO FUGITIVO
// =========================================================================
const EMOJIS = ["💙", "🤍", "", "", ""];

function createFloatingHeart() {
    const container = document.getElementById("hearts-bg");
    if (!container) return;

    const el = document.createElement("span");
    el.className = "floating-heart select-none";
    el.textContent = EMOJIS[Math.floor(Math.random() * EMOJIS.length)];

    const left = Math.random() * 100;
    const size = 14 + Math.random() * 16;
    const duration = 8 + Math.random() * 7;

    el.style.left = left + "vw";
    el.style.fontSize = size + "px";
    el.style.animationDuration = duration + "s";

    container.appendChild(el);
    setTimeout(() => el.remove(), duration * 1000);
}

function spawnHeartBurst(count = 24) {
    const cx = window.innerWidth / 2;
    const cy = window.innerHeight / 2;

    for (let i = 0; i < count; i++) {
        const heart = document.createElement("span");
        heart.className = "burst-heart select-none";
        heart.textContent = EMOJIS[Math.floor(Math.random() * EMOJIS.length)];

        const startX = cx + (Math.random() - 0.5) * (window.innerWidth * 0.5);
        const startY = cy + (Math.random() * 80);
        const tx = (Math.random() - 0.5) * 280;
        const ty = -150 - Math.random() * 280;
        const rot = (Math.random() - 0.5) * 90;

        heart.style.left = startX + "px";
        heart.style.top = startY + "px";
        heart.style.fontSize = (18 + Math.random() * 16) + "px";
        heart.style.setProperty("--tx", tx + "px");
        heart.style.setProperty("--ty", ty + "px");
        heart.style.setProperty("--rot", rot + "deg");

        document.body.appendChild(heart);
        setTimeout(() => heart.remove(), 2000);
    }
}

const btnNo = document.getElementById("btn-no");
function dodgeButton() {
    const maxX = 110;
    const maxY = 35;
    const randX = Math.floor((Math.random() - 0.5) * 2 * maxX);
    const randY = Math.floor((Math.random() - 0.5) * 2 * maxY);
    btnNo.style.transform = `translate(${randX}px, ${randY}px)`;
}
btnNo.addEventListener("mouseenter", dodgeButton);
btnNo.addEventListener("click", dodgeButton);
btnNo.addEventListener("touchstart", (e) => {
    e.preventDefault();
    dodgeButton();
}, { passive: false });

document.getElementById("btn-yes").addEventListener("click", () => {
    document.getElementById("answer-feedback").classList.remove("hidden");
    btnNo.classList.add("hidden");
    spawnHeartBurst(40);
});

document.getElementById("btn-love-burst").addEventListener("click", () => {
    spawnHeartBurst(30);
    showToast("Euuuuu amuuuu maisssssiiii 💙");
});

// =========================================================================
// 6. MODAL E COMPARTILHAMENTO (CORRIGIDO)
// =========================================================================
const editorModal = document.getElementById("editor-modal");

function openEditor() {
    document.getElementById("input-recipient").value = siteState.recipient;
    document.getElementById("input-sender").value = siteState.sender;
    document.getElementById("input-date").value = siteState.startDate;
    document.getElementById("input-message").value = siteState.message;

    editorModal.classList.remove("hidden");
    editorModal.classList.add("flex");
}

function closeEditor() {
    editorModal.classList.add("hidden");
    editorModal.classList.remove("flex");
}

function showToast(msg) {
    const toast = document.getElementById("toast");
    document.getElementById("toast-text").textContent = msg;
    toast.classList.remove("hidden");
    toast.classList.add("flex");
    setTimeout(() => {
        toast.classList.add("hidden");
        toast.classList.remove("flex");
    }, 3000);
}

// Apenas os botões que realmente existem no seu index.html:

document.getElementById("btn-close-editor").addEventListener("click", closeEditor);
document.getElementById("btn-cancel-editor").addEventListener("click", closeEditor);

document.getElementById("btn-reset-default").addEventListener("click", () => {
    document.getElementById("input-recipient").value = DEFAULT_STATE.recipient;
    document.getElementById("input-sender").value = DEFAULT_STATE.sender;
    document.getElementById("input-date").value = DEFAULT_STATE.startDate;
    document.getElementById("input-message").value = DEFAULT_STATE.message;
});

document.getElementById("custom-form").addEventListener("submit", (e) => {
    e.preventDefault();
    siteState.recipient = document.getElementById("input-recipient").value.trim() || DEFAULT_STATE.recipient;
    siteState.sender = document.getElementById("input-sender").value.trim() || DEFAULT_STATE.sender;
    siteState.startDate = document.getElementById("input-date").value || DEFAULT_STATE.startDate;
    siteState.message = document.getElementById("input-message").value.trim() || DEFAULT_STATE.message;

    updateUI();
    updateLoveTimer();
    closeEditor();
    spawnHeartBurst(20);
    showToast("Declaração salva com sucesso! 💙");
});

editorModal.addEventListener("click", (e) => {
    if (e.target === editorModal) closeEditor();
});

// Inicialização
window.addEventListener("DOMContentLoaded", () => {
    loadFromParams();
    updateUI();
    renderReasons();
    updateLoveTimer();
    setInterval(updateLoveTimer, 1000);

    for (let i = 0; i < 6; i++) {
        setTimeout(createFloatingHeart, i * 500);
    }
    setInterval(createFloatingHeart, 1600);
});