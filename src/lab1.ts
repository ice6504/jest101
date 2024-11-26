export const sCheck = (bloodPressure: number, sugar: number): string => {
  if (sugar < 100 && bloodPressure <= 120) {
    //1
    return "General"; //2
  }
  if (
    //3
    sugar >= 100 &&
    sugar < 125 &&
    bloodPressure >= 120 &&
    bloodPressure < 139
  ) {
    return "Risk"; //4
  }
  if (sugar >= 125 && bloodPressure >= 139) {
    //5
    if (sugar <= 154 && bloodPressure <= 159) {
      //6
      return "High Risk level 1"; //7
    }
    if (
      //8
      sugar > 154 &&
      sugar <= 182 &&
      bloodPressure > 159 &&
      bloodPressure <= 179
    ) {
      return "High Risk level 2"; //9
    }
    if (sugar > 183 && bloodPressure > 180) {
      return "High Risk level 3"; //10
    }
  }
  return "Not found"; //11
};
