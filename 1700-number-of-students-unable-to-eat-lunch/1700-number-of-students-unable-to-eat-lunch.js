/**
 * @param {number[]} students
 * @param {number[]} sandwiches
 * @return {number}
 */
function countStudents(students, sandwiches) {
  let position = 0;
  let count = 0;
  let temp;

  while(count < students.length && position < sandwiches.length){
    if(students[0] === sandwiches[position]){
        students.shift();
        position++;
        count = 0;
    }else{
        temp = students.shift();
        students.push(temp);
        count++;
    }
  }
  return students.length;

}

 