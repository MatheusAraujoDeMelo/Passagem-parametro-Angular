import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class NoticiaService {
    
    noticias: any[] = [
        {
            id: 1,
            titulo: 'Um dos melhores doramas da história está de volta à Netflix: acaba de chegar o remake imperdível de um clássico coreano recente, com 10 episódios',
            conteudo: "Quatro anos depois de conquistar fãs com a história de Woo Young-woo, o dorama 'Uma Advogada Extraordinária' ganhou uma nova versão. 'Minami: Uma Advogada Extraordinária' estreou na Netflix no dia 19 de outubro de 2026 e adapta o sucesso sul-coreano para o público japonês, com Mana Ashida no papel principal. A primeira temporada terá 10 episódios, que serão lançados semanalmente, e mantém a proposta original de acompanhar uma jovem advogada autista que precisa enfrentar o preconceito para mostrar sua capacidade profissional. Quem é Minami, a protagonista do novo dorama da Netflix? Na versão japonesa, a personagem principal se chama Minami Minamida. Ela concluiu a Faculdade de Direito da Universidade de Tóquio como a melhor aluna da turma e também alcançou a maior pontuação no exame para advogados, porém encontra dificuldades para conseguir uma oportunidade profissional por causa do preconceito relacionado ao autismo. A situação muda quando Minami é contratada pelo prestigiado escritório Hirokawa & Howard. Por lá, ela precisa aprender a lidar com clientes, colegas e as exigências da profissão, enquanto demonstra uma maneira particular de analisar os casos jurídicos. Então, sua memória extraordinária e sua capacidade de observar detalhes pouco percebidos por outras pessoas se tornam ferramentas importantes no trabalho. Fumiya Takahashi interpreta Funai Minato, um assistente jurídico que trabalha com Minami e passa a ajudá-la nos processos. A convivência entre os dois atinge um novo patamar quando ela começa a desenvolver sentimentos amorosos por ele. Mana Ashida estudou o autismo para interpretar Minami Antes de receber o convite para a adaptação japonesa, Mana Ashida já conhecia a versão sul-coreana e gostava da história de Woo Young-woo. Para construir sua personagem, a atriz conversou com especialistas, teve contato com pessoas no espectro autista e procurou livros sobre o tema. A preparação teve como objetivo compreender as emoções da protagonista, e um dos desafios foi encontrar a maneira de falar de Minami, especialmente nas longas passagens relacionadas ao Direito e às baleias: 'O mais difícil foi encontrar a cadência da fala', explicou a atriz durante a apresentação da série. Quando saem os próximos episódios de 'Minami: Uma Advogada Extraordinária'? 'Minami: Uma Advogada Extraordinária' tem 10 episódios no total, que serão lançados semanalmente no catálogo da Neflix. Veja o cronograma completo:",
            imagem: "https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AA2fTSVk.img?w=768&h=451&m=6&x=314&y=174&s=252&d=252",
        },
        {
            id: 2,
            titulo: 'Previsões de Stephen Hawking: elas estão se tornando realidade?',
            conteudo: "Stephen Hawking (1942-2018) era conhecido por seu trabalho sobre buracos negros e relatividade geral. Mas o famoso físico muitas vezes saiu de seu próprio campo de pesquisa e usou seu reconhecimento para destacar o que via como os grandes desafios e ameaças existenciais para a humanidade nas próximas décadas. Variando de temas como alienígenas ao fim do mundo, suas declarações ganharam as manchetes e, às vezes, se mostraram controversas. Bateu curiosidade? Clique aqui para ver algumas de suas previsões mais famosas. Será que elas estão realmente acontecendo?",
            imagem: "https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AA2dd5Bt.img?w=800&h=435&q=60&m=2&f=jpg",
        },
        {
            id: 3,
            titulo: 'Zé Felipe aluga mansão em Goiânia por R$ 120 mil mensais para acomodar os filhos',
            conteudo: "Zé Felipe inaugura nova mansão em Goiânia para a família Novo endereço! Zé Felipe agora está morando em uma nova casa em Goiânia, Goiás. O cantor, que tem dividido seu tempo entre o Brasil e Miami, nos Estados Unidos, onde está envolvido em um projeto profissional, optou por alugar uma mansão no Brasil para proporcionar mais conforto aos seus três filhos. A residência está localizada no Residencial Aldeia do Vale, o mesmo condomínio onde reside a influenciadora Virginia Fonseca, mãe dos filhos do artista.",
            imagem: "https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AA2fO8aT.img?w=800&h=435&q=60&m=2&f=jpg",
        }
    ];

    getNoticias(): any[] {
        return this.noticias;
    }

    getNoticiaFindById(id: number): any {
        return this.noticias.find(noticia => noticia.id === id);
    }

}
