---
title: 'Decrypt Message'
date: '2023-05-31'
topic: 'JavaScript'
---

An infamous gang of cybercriminals named “The Gray Cyber Mob”, which is behind many hacking attacks and drug trafficking scandals, has recently been targeted by the FBI. After intercepting a few messages which looked to be nonsense at first, the agency realized that the group indeed encrypts their messages, and studied their method of encryption.

The essages consist of lowercase Latin letters only, and every word is encrypted separately as follows:

- Convert every letter to its ASCII value.
- Add 1 to the first letter, and then for every letter from the second one to the last one, add the value of the previous letter.
- Subtract 26 from every letter until it is in the range of lowercase letters a-z in ASCII. Convert the values back to letters.

For instance, to encrypt the word "crime"

```
Step 1:	99
Step 2:	100
Step 3:	100
Result:	d
```

The FBI needs an efficient method to decrypt messages. Write a function named decrypt(word) that receives a string that consists of small Latin letters only, and returns the decrypted word.

Since the function should be used on messages with many words, make sure the function is as efficient as possible in both time and space. Explain the correctness of your function, and analyze its asymptotic runtime and space complexity.

Note: Most programming languages have built-in methods of converting letters to ASCII values and vica versa. You may search the internet for the appropriate method.

```
input:  word = "dnotq"
output: "crime"

input:  word = "flgxswdliefy"
output: "encyclopedia"
```

First of all, notice that the first letter is very easy to decrypt:

- Convert the first letter back to its ASCII value.
- Subtract 1 from it.
- Move the value to be in the range of a-z ASCII values (97-122), by adding 26.
- Convert the result back to a character.

The decryption of the rest of the letters is done by almost the same algorithm - given the decrypted previous letter prev, and its value after the second step of encryption - denoted secondStepPrev:

- Convert the current letter back to its ASCII value.
- Subtract secondStepPrev from it.
- Move the value to be in the range of a-z ASCII value (97-122), by adding multiples of 26.
- Convert the result back to a character. Store its ASCII value in prev, and add its value to secondStepPrev (for the decryption of the next letter).

Let’s examine the algorithm using the following notation:

- dec[n] - the n’th letter before encryption.
- enc[n] - the n’th letter after encryption.
- secondStep[n] - the n’th letter immediately after step 2 in the encryption.

The encryption algorithm gives the following relation for some integer m (which represents the number of times we need to add 26 to get to an ascii value):

```
enc[n] = dec[n] + secondStep[n-1] + 26m
```

By isolating dec[n], we get:

```
dec[n] = enc[n] - secondStep[n-1] - 26m
```

Though the value of m isn’t initially known, since the value of the decrypted letter must be in the ASCII range of a-z, the decrypted letter is easily found adding 26's to enc[n] - secondStep[n] until it is in the right range.

```
function decrypt(word) {
  secondStep = 1;
  decryption = "";

  for (let i = 0; i <= word.length - 1; i++) {
    let newLetterAscii = word.charCodeAt(i);
    newLetterAscii = newLetterAscii - secondStep;

    while (newLetterAscii < 97)
      newLetterAscii += 26;

    decryption = decryption + String.fromCharCode(newLetterAscii);
    secondStep += newLetterAscii;
  }

  return decryption;
}

console.log(decrypt('dnotq'));
```

Time Complexity: the function’s asymptotic time complexity is O(N), where N is the length of the input string. the loop that iterates through the letters in the input is performed N times. In the loop, almost every step is done in O(1), except for the loop that is supposed to move the decrypted letter back to the range of a-z. Theoretically, the secondStep may grow linearly with the size of the input. There are two ways to deal with this:

Instead of secondStep itself, we may only keep its remainder after being divided by 26 (since we add/subtract multiples of 26 anyway, the equation

```
dec[N] = enc[N] - (secondStep[N-1] % 26)- 26M
```

still holds, only for a different M). This way all values in every iteration are kept in a constant range.

Note that since in practice this function is used only for words in the English language, the input is bounded and we therefore may ignore the growth of the secondStep anyway.

Space Complexity: the space usage is also O(N) since the output is the same size of the input, and we only keep the output and the second step in storage.
