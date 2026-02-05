// 样例输入：versions = ['0.1.1', '2.3.3', '0.302.1', '4.2', '4.3.5', '4.3.4.5'] 期望输出：['0.1.1', '0.302.1', '2.3.3', '4.3.4.5', '4.3.5']
// 核心思路：使用sort方法对数组元素两两比较，回调函数里面主要要体现分位比较的过程。
function compareVersion(arr) {
    let copyArr = [...arr];
    copyArr.sort((a, b) => {
        const tempA = a.split('.');
        const tempB = b.split('.');
        const maxLen = Math.max(tempA.length, tempB.length);
        for (let i = 0; i < maxLen; i++) {
            const targetA = Number(tempA[i] ?? 0);
            const targetB = Number(tempB[i] ?? 0);
            if (targetA === targetB) continue; // 如果相等，继续比较下一段
            return targetA - targetB; // 关键！返回差值决定排序, 升序排列
        }
        return 0; // 所有段都相等
    })
    return copyArr;
}

// 测试案例
let versions = ['0.1.1', '2.3.3', '0.302.1', '4.2', '4.3.5', '4.3.4.5', '1.10', '1.2'];
let copyArr = compareVersion(versions);
console.log("versions", versions);
console.log("copyArr", copyArr);
