export const sum = (a: number, b: number): number => {
  return a + b;
};

export const countA = (str: string): number => {
  let count = 0;

  for (let index = 0; index < str.length; index++) {
    if (str.charAt(index).toUpperCase() === "A") {
      count++;
    }
  }

  return count;
};

// export function countA(str: string): number {
//   return (str.match(/a/gi) || []).length; // ใช้ || [] เพื่อจัดการกรณี null
// }
