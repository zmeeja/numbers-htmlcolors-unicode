function copyText(x) {
    const text = x.textContent;

    navigator.clipboard.writeText(text)
        .then(() => {
            alert(`Текст "${text}" скопирован в буфер обмена!`);
        })
        .catch(err => {
            console.error(
                'Не удалось скопировать текст:',
                err
            );
        });
}