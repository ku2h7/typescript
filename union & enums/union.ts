type ID = string | number;

function cetakID(id: ID): void {
    if (typeof id === 'string') {
        console.log(`ID String: ${id}`);
    } else {
        console.log(`ID Number: ${id}`);
    }
}

cetakID('ABC123');

cetakID(456);

type HasStatus = { status: 'success' | 'error' };

function getRandomValue(): number | string {
    return Math.random() > 0.5 ? 'success' : 42;
}

const result: number | string = getRandomValue();

if (typeof result === 'number') {
    console.log(`Number Result: ${result}`);
} else {
    console.log(`String Result: ${result}`);
}