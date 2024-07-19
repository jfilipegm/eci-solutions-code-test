document.addEventListener('DOMContentLoaded', function () {
    const triggers = document.querySelectorAll('.innerDropdownRow a');
    const contents = document.querySelectorAll('.innerDropdownContent, .innerDropdownContent2, .innerDropdownContent3, .innerDropdownContent4, .innerDropdownContent5, .innerDropdownContent6');
    const spans = document.querySelectorAll('.innerDropdownRow p span');
    const chevrons = document.querySelectorAll('.innerDropdownRow p .chevron-right');
    const svgs = document.querySelectorAll('.innerDropdownRow p .js--cog');

    triggers.forEach(trigger => {
        trigger.addEventListener('click', function () {
            triggers.forEach(btn => btn.classList.remove('js--active-innerDropdown'));
            this.classList.add('js--active-innerDropdown');

            const index = Array.from(triggers).indexOf(this);

            contents.forEach(content => content.classList.add('d-none'));
            contents[index].classList.remove('d-none');

            spans.forEach(span => span.classList.add('d-none'));
            spans[index].classList.remove('d-none');

            chevrons.forEach(chevron => chevron.classList.add('d-none'));
            chevrons[index].classList.remove('d-none');

            svgs.forEach(svg => svg.classList.add('opacity-50'));
            svgs[index].classList.remove('opacity-50');
        });
    });
});
