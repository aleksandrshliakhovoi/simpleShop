document.querySelectorAll('.price').forEach(node => {
    node.textContent = new Intl.NumberFormat('ru-Ru', {
        currency: 'uah', 
        style: 'currency'
    }).format(node.textContent)
})