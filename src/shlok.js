const SHLOKMAP = {
    'а': 'a',
    'б': 'b',
    'в': ['v', 'w'],
    'г': 'g',
    'д': 'd',
    'е': 'e',
    'ж': ['zh', 'j'],
    'з': 'z',
    'и': 'i',
    'й': ['j', 'y'],
    'к': 'k',
    'л': 'l',
    'м': 'm',
    'н': 'n',
    'о': 'o',
    'п': ['5', 'p'],
    'р': 'r',
    'с': 's',
    'т': 't',
    'у': 'u',
    'ф': 'f',
    'х': ['x', 'h'],
    'ц': ['c', 'tz'],
    'ч': '4',
    'ш': ['sh', '6'],
    'щ': ['sht', '6t'],
    'ь': 'y',
    'ъ': 'y',
    'ю': 'yu',
    'я': ['ya', 'ja'],
    '!': ['!', '!1', '!1!']
}


export const nashlok = (text) => {
    return text.split('').map(letter => {
        const remapped = SHLOKMAP[letter.toLowerCase()];
        if (remapped) {
            let remap_char = remapped;
            if (Array.isArray(remapped)) {
                const index = Math.floor(Math.random() * remapped.length);
                remap_char = remapped[index];
            }
            if (letter === letter.toUpperCase()) {
                remap_char = remap_char.toUpperCase();
            }
            return remap_char
        }
        return letter;
    }).join('')
}



