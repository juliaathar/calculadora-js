function substituicao(){

    event.preventDefault();

    let nickname = document.getElementById('nickname').value;

    document.getElementById('nick').innerText = `Olá, super ${nickname}`;
}