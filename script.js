async function enviarScript() {
    const message = "esto es guerra:";
    const main = document.querySelector("#main");
    const textarea = main.querySelector(`div[contenteditable="true"]`);

    if (!textarea) throw new Error("No hay una conversación abierta");

    for (let i = 0; i < 100; i++) {
        console.log(message);

        textarea.focus();
        document.execCommand('insertText', false, message);
        textarea.dispatchEvent(new Event('change', { bubbles: true }));

        setTimeout(() => {
            (main.querySelector(`[data-testid="send"]`) || main.querySelector(`[data-icon="send"]`)).click();
        }, 100);

        await new Promise(resolve => setTimeout(resolve, 250));
    }

    return 100;
}
