function validUserNames (arr) {
    return arr.filter(name => name.length < 10);
}

console.log('Test:');
console.log(validUserNames(['mark', 'staceysmom1978', 'q29832128238983', 'carrie98', 'MoanaFan']));