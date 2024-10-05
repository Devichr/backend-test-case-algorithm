const INPUT = ['xc', 'dz', 'bbb', 'dz'];
const QUERY = ['bbb', 'ac', 'dz'];
function queryCount(INPUT, QUERY) {
    const counts = QUERY.map(q => INPUT.filter(i => i === q).length);
    const details = QUERY.map((q, index) => `${counts[index]} ${q}`).join(', ');
    
    return `[${counts.join(',')}] input memiliki ${details}`;
}


console.log(queryCount(INPUT, QUERY));
