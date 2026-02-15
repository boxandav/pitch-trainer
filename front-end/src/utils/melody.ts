function getRandomNumber(max: number) {
    return Math.floor(Math.random() * max);
}

export function generateMelody(noteList: string[], melodyLength: number): string[] {
    const listLength: number = noteList.length;
    if (listLength === 0 || melodyLength <= 0) return [];

    const melody: string[] = [];
    for (let i = 0; i < melodyLength; i++) {
        const idx = getRandomNumber(listLength);
        const newNote = noteList[idx]!;
        melody.push(newNote);
    }

    return melody;
}