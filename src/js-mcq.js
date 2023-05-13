1.global, arguments 


2.{a:1}, arguments = [“abc”, “def”] 



3.function chunkArray(array, chunkSize) {
  if (chunkSize <= 0) {
    return [array];
  }
  const chunks = [];
  for (let i = 0; i < array.length; i += chunkSize) {
    const chunk = array.slice(i, i + chunkSize);
    chunks.push(chunk);
  }
  return chunks;
}
