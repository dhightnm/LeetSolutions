function isPalindrome(s: string): boolean {
  s = s.toLowerCase();
  let left = 0;
  let right = s.length - 1;

  const isAlphanumeric = (str: string): boolean =>
    str.match(/^[0-9a-z]/gi) !== null;

  while (left < right) {
    if (!isAlphanumeric(s[left])) {
      left++;
      continue;
    }

    if (!isAlphanumeric(s[right])) {
      right--;
      continue;
    }

    if (s[left] !== s[right]) return false;
    left++;
    right--;
  }

  return true;
}