$(document).ready(function () {
    // Mise à jour de l'affichage du prix
    $('.price-range').on('input', function () {
        $('.price-value').text($(this).val());
    });

    // Mise à jour de l'affichage de l'expérience
    $('.experience-input').on('input', function () {
        $('.experience-value').text($(this).val() + ' ans');
    });
});