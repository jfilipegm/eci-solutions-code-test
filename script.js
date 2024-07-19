document.addEventListener('DOMContentLoaded', function() {
    const dropdownContainers = document.querySelectorAll('.dropdown-container');

    dropdownContainers.forEach(function(container) {
        const trigger = container.querySelector('.js--trigger-dropdown');
        const dropdown = container.querySelector('.dropdown-menu-custom');

        if (trigger && dropdown) {
            let isDropdownVisible = false;

            trigger.addEventListener('click', function() {
                isDropdownVisible = !isDropdownVisible;
                dropdown.style.display = isDropdownVisible ? 'block' : 'none';
                
                if (isDropdownVisible) {
                    trigger.classList.add('main-menu-single-click');
                } else {
                    trigger.classList.remove('main-menu-single-click');
                }
            });

            document.addEventListener('click', function(event) {
                if (!container.contains(event.target) && isDropdownVisible) {
                    dropdown.style.display = 'none';
                    isDropdownVisible = false;
                    trigger.classList.remove('main-menu-single-click');
                }
            });
        }
    });
});
