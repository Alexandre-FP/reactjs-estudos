//  try catch, seria praticamanete o if dos erros
// ma prativa de programação é colocar o catch vazio isso é muito errado

try {
 //execulta algo
 // consulta de API, Bnaco de dados, arquivos
 console.log("Consultando um bando de dados");
 throw 'Erro 1032 ao conectar ao banco de dados'; // ele dispara o catch(error)
}catch(error){
    //mostra erro
  alert("Algum erro") // mostra isso para o cliente
  console.error(error); // Mostrar isso para mim
}finally{ //ele excuta sempre que eu quiser gravar um arquivo
    // sempre executa ao final (opcional)
    console.log("Execução final");
}