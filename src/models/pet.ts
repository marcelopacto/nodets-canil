type PetType = 'caes' | 'gatos' | 'peixes';

type Pet = {
     type: PetType,
     image: string,
     name: string,
     color: string, 
     sex: 'Masculino' | 'Feminino'


}

const data: Pet[] = [
    {
        type: 'caes',
        image: 'pastor-alemao.jpg',
        name: 'Pastor-alemão',
        color: 'Amarelo e Preto',
        sex: 'Masculino'
    },
    {
        type: 'caes',
        image: 'labrador.jpg',
        name: 'Labrador-retriever',
        color: 'Branco',
        sex: 'Masculino'
    },
    {
        type: 'caes',
        image: 'zwergspitz.jpg',
        name: 'Zwergspitz',
        color: 'Amarelo',
        sex: 'Feminino'
    },
    {
        type: 'caes',
        image: 'husky.jpg',
        name: 'Husky Siberiano',
        color: 'Branco e Preto',
        sex: 'Masculino'
    },
    {
        type: 'caes',
        image: 'golden.jpg',
        name: 'Golden Retriever',
        color: 'Amarelo',
        sex: 'Masculino'
    },
    {
        type: 'caes',
        image: 'poodle.jpg',
        name: 'Poodle',
        color: 'Branco',
        sex: 'Feminino'
    },
    {
        type: 'caes',
        image: 'bulldog.jpg',
        name: 'Bulldog',
        color: 'Branco e Amarelo',
        sex: 'Masculino'
    },
    {
        type: 'gatos',
        image: 'persa.jpg',
        name: 'Persa',
        color: 'Amarelo',
        sex: 'Masculino'
    },
    {
        type: 'gatos',
        image: 'mainecoon.jpg',
        name: 'Maine Coon',
        color: 'Preto e Branco',
        sex: 'Masculino'
    },
    {
        type: 'gatos',
        image: 'bengal.jpg',
        name: 'Bengal',
        color: 'Branco, Preto e Amarelo',
        sex: 'Feminino'
    },
    {
        type: 'gatos',
        image: 'siames.jpg',
        name: 'Siamês',
        color: 'Amarelo e Preto',
        sex: 'Masculino'
    },
    {
        type: 'gatos',
        image: 'sphynx.jpg',
        name: 'Sphynx',
        color: 'Branco',
        sex: 'Masculino'
    },
    {
        type: 'peixes',
        image: 'neon.jpg',
        name: 'Tetra Neon',
        color: 'Vermelho e Azul',
        sex: 'Masculino'
    },
    {
        type: 'peixes',
        image: 'matogrosso.jpg',
        name: 'Mato Grosso',
        color: 'Laranja',
        sex: 'Masculino'
    },
    {
        type: 'peixes',
        image: 'limpavidro.jpg',
        name: 'Limpa Vidro',
        color: 'Verde e Branco',
        sex: 'Masculino'
    },
    {
        type: 'peixes',
        image: 'tanictis.jpg',
        name: 'Tanictis',
        color: 'Vermelho',
        sex: 'Masculino'
    },
    {
        type: 'peixes',
        image: 'acara.jpg',
        name: 'Acará Bandeira',
        color: 'Preto',
        sex: 'Masculino'
    },
]


export const Pet ={
    getAll: (): Pet[] => {
       return data;
    },

    getFromType: (type: PetType): Pet[] => {
        return data.filter(item => item.type === type);
    },

    getFromName: (name: string): Pet[] => {
        return data.filter(item => 
            item.name.toLowerCase().indexOf(name.toLowerCase()) > -1);
    }
    };

