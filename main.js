$(document).ready(function () {
    $('#telefone').mask('(00) 0000-00000');
    $('#cpf').mask('000.000.000-00');
    $('#cep').mask('00000-000');

    $('#cadastro-form').submit(function (e) {
        e.preventDefault();

    $('#alerta').text('Formulário enviado com sucesso!').show();
        setTimeout(function () {
        location.reload();
        }, 3000);
    });
    });
