const chieucao = 154;
const sole = chieucao % 100;
const cannanglytuong = (sole * 9) / 10;
const cannangtoida = sole;
const muccantoithieu = (sole * 8) / 10;
console.log('Cân nặng lý tưởng là:' + cannanglytuong + 'kg', 'Cân nặng tối đa là: ' + cannangtoida + 'kg', 'Cân nặng tối thiểu là: ' + muccantoithieu + 'kg');
