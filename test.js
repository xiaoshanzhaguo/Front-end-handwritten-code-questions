// 样例输入：versions = ['0.1.1', '2.3.3', '0.302.1', '4.2', '4.3.5', '4.3.4.5'] 期望输出：['0.1.1', '0.302.1', '2.3.3', '4.3.4.5', '4.3.5']
function fun(arr) {
    const copyArr = [...arr];
    copyArr.sort((a, b) => {
        let tempA = a.split('.');
        let tempB = b.split('.');
        let maxLen = Math.max(tempA.length, tempB.length);
        for (let i = 0; i < maxLen; i++) {
            let numA = Number(tempA[i] ?? 0);
            let numB = Number(tempB[i] ?? 0);
            if (numA === numB) continue;
            return numA - numB;
        }
        return 0;
    })
    return copyArr;
}

const versions = ['0.1.1', '2.3.3', '0.302.1', '4.2', '4.3.5', '4.3.4.5'];
const copyArr = fun(versions);
console.log(versions);
console.log(copyArr);
