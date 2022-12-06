# Style generator

## Author

Parfenov Nikita M33051

## How to use:

-   Выделите текст и введите в командную строку (cmd/ctrl + shift + p) Style generate или выделите текст и нажмите cmd/ctrl + generate

## About Plugin

### С помощью этого плагина, мы можем генерировать стили из json файла, в css в первую очередь это сделано для того чтобы удобно имплементировать темную тему в tailwind 3, и писать вместо `bg-additional dark:bg-additional-dark` => `bg-additional`:

-   json

```json
{
    "light": {
        "additional": "666",
        "secondary": "777"
    },
    "dark": {
        "additional": "666",
        "secondary": "777"
    }
}
```

-   css

```css
.bg-additional {
    background: #666;
}
.dark .bg-additional {
    background: #666;
}
.color-additional {
    color: #666;
}
.dark .color-additional {
    color: #666;
}
.border-additional {
    border-color: #666;
}
.dark .border-additional {
    border-color: #666;
}
.bg-secondary {
    background: #777;
}
.dark .bg-secondary {
    background: #777;
}
.color-secondary {
    color: #777;
}
.dark .color-secondary {
    color: #777;
}
.border-secondary {
    border-color: #777;
}
.dark .border-secondary {
    border-color: #777;
}
```
