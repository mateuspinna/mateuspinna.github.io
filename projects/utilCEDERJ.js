//----------------- Funçoes utilitarias CEDERJ --------------------//

function ordem(char){
    return char.charCodeAt(0);
}

function tamanho(mensuravel){
    return mensuravel.length-1;
} 

function charAt(str,pos){
    return str.charAt(pos-1);
}

function abs(num){
    return num > 0? num : -num;
}

function concat(str1,str2){
    return str1 + str2;
}

function find(string, sub){
    if (!string.match(sub)){
        return -1;
    }

    let matches = 0;
    let index = 0;

    do{
        if(string[index] == sub[matches]){
            matches++;

        }
        else{
            matches = 0;
        }
        index++;
    } while(matches < sub.length)

    return (index - sub.length)+1;
}
//-------------------------------------------------------------------------------/

function abrirCodigoJavascript() {
    let codigo_peteqs = document.querySelector('#codearea').value;
    var code = PeteqsHelper.execute(codigo_peteqs);
    

    var popupContainer = document.querySelector('.popup-code');

    popupContainer.innerHTML = '<pre><b>Tradução do código para JS:</b>\n'
     + js_beautify(code, {
        'indent_size': 1,
        'indent_char': '\t'
    }).replace(/<br>/gi, "\\n") + '</pre>';
    
    abrirPopup();
}

function abrirPopup() {
    document.querySelector('.overlay').style.display = 'flex';
}

function fecharPopup() {
    document.querySelector('.overlay').style.display = 'none';
}
//--------------------------------------------------------------------------------/

const textarea = document.getElementById('codearea');

textarea.addEventListener('keydown', function(event) {
    if (event.key === 'Tab') {
        event.preventDefault();
        
        const start = this.selectionStart;
        const end = this.selectionEnd;
        const text = this.value;
        this.value = text.substring(0, start) + '\t' + text.substring(end);
        
        this.selectionStart = this.selectionEnd = start + 1;
    }
});