function getAverage(arr) {
    let acc = 0;
    for (let i = 0; i < arr.length; i++) {
        acc += arr[i];
    }

    return acc / arr.length;
}

function getGrade(score) {
    if (score === 100) {
        return "A+";
    } else if (score >= 90) {
        return "A";
    } else if (score >= 80) {
        return "B";
    } else if (score >= 70) {
        return "C";
    } else if (score >= 60) {
        return "D";
    } else {
        return "F";
    }
}

function hasPassingGrade(grade) {
    if (grade !== "F") {
        return true;
    }
    return false;
}

function studentMsg(average, grade) {
    if (grade !== "F") {
        return `Class average: ${average}. Your grade: ${grade}. You passed the course.`;
    }
    return `Class average: ${average}. Your grade: ${grade}. You failed the course.`;
}