(() => {
    const trigger = document.querySelector('.menu-trigger');
    const menu = document.querySelector('#main-menu');
    if (!trigger || !menu) return;

    const updateExpanded = () => {
        trigger.setAttribute('aria-expanded', String(!menu.classList.contains('hidden')));
    };
    new MutationObserver(updateExpanded).observe(menu, {
        attributes: true,
        attributeFilter: ['class'],
    });
    updateExpanded();

    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && !trigger.classList.contains('hidden') &&
            !menu.classList.contains('hidden')) {
            menu.classList.add('hidden');
            trigger.focus();
        }
    });
})();
