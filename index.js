const bicos = [
    {
        nomeArquivo: 'bico_5',
        raridade: 5
    },{
        nomeArquivo: 'bico_10',
        raridade: 10
    },{
        nomeArquivo: 'bico_15',
        raridade: 15
    },{
        nomeArquivo: 'bico_20',
        raridade: 20
    },{
        nomeArquivo: 'bico_25',
        raridade: 25
    },{
        nomeArquivo: 'bico_30',
        raridade: 30
    },{
        nomeArquivo: 'bico_35',
        raridade: 35
    },{
        nomeArquivo: 'bico_40',
        raridade: 40
    },{
        nomeArquivo: 'bico_45',
        raridade: 45
    },{
        nomeArquivo: 'bico_50',
        raridade: 50
    },{
        nomeArquivo: 'bico_55',
        raridade: 55
    },{
        nomeArquivo: 'bico_60',
        raridade: 60
    },{
        nomeArquivo: 'bico_80',
        raridade: 80
    },{
        nomeArquivo: 'bico_90',
        raridade: 90
    },
]
const roupa = [
    {
        nomeArquivo: 'roupinha_1',
        raridade: 1
    },{
        nomeArquivo: 'roupinha_5',
        raridade: 5
    },{
        nomeArquivo: 'roupinha_10',
        raridade: 10
    },{
        nomeArquivo: 'roupinha_15',
        raridade: 15
    },{
        nomeArquivo: 'roupinha_20',
        raridade: 20
    },{
        nomeArquivo: 'roupinha_25',
        raridade: 25
    },{
        nomeArquivo: 'roupinha_30',
        raridade: 30
    },{
        nomeArquivo: 'roupinha_40',
        raridade: 40
    },{
        nomeArquivo: 'roupinha_70',
        raridade: 70
    },{
        nomeArquivo: 'roupinha_80',
        raridade: 80
    },{
        nomeArquivo: 'roupinha_90',
        raridade: 90
    },
]
const corpo = [
    {
        nomeArquivo: 'corpinho_1',
        raridade: 1
    },{
        nomeArquivo: 'corpinho_5',
        raridade: 5
    },{
        nomeArquivo: 'corpinho_10',
        raridade: 10
    },{
        nomeArquivo: 'corpinho_15',
        raridade: 15
    },{
        nomeArquivo: 'corpinho_20',
        raridade: 20
    },{
        nomeArquivo: 'corpinho_25',
        raridade: 25
    },{
        nomeArquivo: 'corpinho_30',
        raridade: 30
    },{
        nomeArquivo: 'corpinho_35',
        raridade: 35
    },{
        nomeArquivo: 'corpinho_40',
        raridade: 40
    },{
        nomeArquivo: 'corpinho_45',
        raridade: 45
    },{
        nomeArquivo: 'corpinho_50',
        raridade: 50
    },{
        nomeArquivo: 'corpinho_55',
        raridade: 55
    },{
        nomeArquivo: 'corpinho_60',
        raridade: 60
    },{
        nomeArquivo: 'corpinho_70',
        raridade: 70
    },{
        nomeArquivo: 'corpinho_80',
        raridade: 80
    },{
        nomeArquivo: 'corpinho_90',
        raridade: 90
    },
]
const fundo = [
    {
        nomeArquivo: 'fundo_1',
        raridade: 1
    },{
        nomeArquivo: 'fundo_10',
        raridade: 10
    },{
        nomeArquivo: 'fundo_15',
        raridade: 15
    },{
        nomeArquivo: 'fundo_20',
        raridade: 20
    },{
        nomeArquivo: 'fundo_25',
        raridade: 25
    },{
        nomeArquivo: 'fundo_30',
        raridade: 30
    },{
        nomeArquivo: 'fundo_35',
        raridade: 35
    },{
        nomeArquivo: 'fundo_40',
        raridade: 40
    },{
        nomeArquivo: 'fundo_45',
        raridade: 45
    },{
        nomeArquivo: 'fundo_50',
        raridade: 50
    },{
        nomeArquivo: 'fundo_55',
        raridade: 55
    },{
        nomeArquivo: 'fundo_60',
        raridade: 60
    },{
        nomeArquivo: 'fundo_65',
        raridade: 65
    },{
        nomeArquivo: 'fundo_70',
        raridade: 70
    },{
        nomeArquivo: 'fundo_80',
        raridade: 80
    },{
        nomeArquivo: 'fundo_90',
        raridade: 90
    }
]
document.querySelector('button').addEventListener('click',()=>{
    // gerar um numero aleatorio
    const gerarNumeroFundo = Math.floor(Math.random() * 100);
    const gerarNumeroCorpo = Math.floor(Math.random() * 100);
    const gerarNumeroRoupa = Math.floor(Math.random() * 100);
    const gerarNumeroBico = Math.floor(Math.random() * 100);

    // percorrer o array enquanto o numero aleatorio for menor que a raridade
    let nomeSRC = ''
    for (let i = 0; i < fundo.length; i++) {
        if(gerarNumeroFundo<fundo[i].raridade){
            
            document.querySelector('#fundo').src = "./Imagens/fundos/"+ fundo[i].nomeArquivo + ".png"
            break
        }
        
    }
    nomeSRC = ''
    for (let i = 0; i < corpo.length; i++) {
        if(gerarNumeroCorpo<corpo[i].raridade){
            
            document.querySelector('#corpo').src = "./Imagens/Corpinhos/"+ corpo[i].nomeArquivo + ".png"
            break
        }
        
    }
    nomeSRC = ''
    for (let i = 0; i < roupa.length; i++) {
        if(gerarNumeroRoupa<roupa[i].raridade){
            
            document.querySelector('#roupa').src = "./Imagens/Roupinhas/"+ roupa[i].nomeArquivo + ".png"
            break
        }
        
    }
    nomeSRC = ''
    for (let i = 0; i < bicos.length; i++) {
        if(gerarNumeroBico<bicos[i].raridade){
            
            document.querySelector('#bico').src = "./Imagens/bicos/"+ bicos[i].nomeArquivo + ".png"
            break
        }
        
    }

})
