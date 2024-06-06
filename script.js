document.querySelectorAll('.toggleDiv').forEach(function(div) {
    div.addEventListener('click', function() {
        var targetId = this.getAttribute('data-target');
        var content = document.getElementById(targetId);
        if (content.classList.contains('hidden')) {
            content.classList.remove('hidden');
        } else {
            content.classList.add('hidden');
        }
    });
});