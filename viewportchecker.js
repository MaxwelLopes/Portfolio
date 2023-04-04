$(document).ready(function(){
    $('section').viewportChecker({
    //Classe que irá adicionar a animação ou estilo quando o item aparecer na tela
    classToAdd: 'c',
  
    // O offset dos elementos, permite que eles apareçam mais cedo ou mais tarde
    offset: 100,
  
    // Adiciona a possibilidade de remover a classe quando o elemento não está visível
    repeat: false,
  
    // Retorno de chamada para fazer depois que uma classe foi adicionada a um elemento. A ação retornará "add" ou "remove", dependendo se a classe foi adicionada ou removida.
    callbackFunction: function(elem, action){}
    });
  });