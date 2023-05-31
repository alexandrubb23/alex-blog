---
title: 'Validate IP Address'
date: '2023-05-31'
topic: 'JavaScript'
---

Validate an IP address (IPv4). An address is valid if and only if it is in the form **X.X.X.X**, where each **X** is a number from 0 to 255.

For example, **"12.34.5.6"**, **"0.23.25.0"**, and **"255.255.255.255"** are valid IP addresses, while **"12.34.56.bleah"**, **"1.2.3.4.5"**, and **"123.235.153.425"** are invalid IP addresses.

The solution:

```
const inRange = (number) => {
	// if it's enmpty string, return false
	if (number.length === 0) return false;

	// If is not a number
	if (isNaN(number)) return false;

	// If the string has a leading zero and isn't
	// zero, return false.
	if (number.length >= 2 && number[0] === '0') return false;

	return 0 <= number && number <= 255;
};

function validateIP(ip) {
	const chunks = ip.split(".");
	if (chunks.length !== 4) return false;

	return chunks.every(inRange);
}

const ip1 = '008.123.34.56';
console.log(ip1, validateIP(ip1));

const ip2 = '0.23.25.0';
console.log(ip2, validateIP(ip2));

const ip3 = '255.255.255.255';
console.log(ip3, validateIP(ip3));

const ip4 = '12.34.56.oops';
console.log(ip4, validateIP(ip4));

const ip5 = '1.2.3.4.5';
console.log(ip5, validateIP(ip5));

const ip6 = '123.235.153.425';
console.log(ip6, validateIP(ip6));
```

## Computational Complexity

Say the given string is N characters. Our split operation takes O(n) time an O(n) space. Our inRange operation takes a lienar amount of time and space for each chunk, and the sum of the chunk is the whole string.

Thus, the time complexity is O(n), and the space complexity is O(n).

Time complexity: O(n), where n is the number of characters in ip. Our split operation takes O(n) time, and our inRange operation takes a linear amount of time for each chunk, and the sum of the chunks is the whole string.

Space Complexity: O(N), the space used when considering each part of the original string ip.
