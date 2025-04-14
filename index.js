const word = 'Vaibhav';

const freq = {};

for (let i = 0; i < word.length; i++) {
  const char = word[i];
  freq[char] = (freq[char] || 0) + 1;
}