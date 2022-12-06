const vscode = require("vscode");
function activate(context) {
    let disposable = vscode.commands.registerCommand(
        "ColorSchemeSG.generateStyles",
        async function () {
            const editor = vscode.window.activeTextEditor;

            if (editor) {
                const document = editor.document;
                const selection = editor.selection;

                const obj = document.getText(selection);
                eval(`var data = ${obj}`);
                const keys = Object.keys(data["dark"]);

                const lightColors = data["light"];
                const darkColors = data["dark"];

                const styles = keys
                    .map((key) => {
                        return `.bg-${key} {background: ${lightColors[key]}} .dark .bg-${key} {background: ${darkColors[key]}} .color-${key} {color: ${lightColors[key]}} .dark .color-${key} {color: ${darkColors[key]}} .border-${key} {border-color: ${lightColors[key]}} .dark .border-${key} {border-color: ${darkColors[key]}}`;
                    })
                    .reduce((acc, val) => acc + val, "");

                editor.edit((editBuilder) => {
                    editBuilder.replace(selection, styles);
                });
            }
        }
    );

    context.subscriptions.push(disposable);
}

function deactivate() {}

module.exports = {
    activate,
    deactivate,
};
// test case
// {
//     "light": {
//         "additional": "#666",
//         "secondary": "#777"
//     },
//     "dark": {
//         "additional": "#666",
//         "secondary": "#777"
//     }
// }
