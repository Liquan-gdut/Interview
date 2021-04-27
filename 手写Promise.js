// 数组去重
// 简单数据类型
const a = ['apple', 'pear', 'apple', 'banna', 'pear', 'xxx'];
const b = [
    { sucject: '语文', name: 'li', num: '80' },
    { sucject: '数学', name: 'zhang', num: '74' },
    { sucject: '英语', name: 'li', num: '62' },
    { sucject: '物理', name: 'zhao', num: '90' },
    { sucject: '化学', name: 'zhen', num: '71' },
    { sucject: '生物', name: 'li', num: '88' },
    { sucject: '历史', name: 'li', num: '50' },
];

const uniq = arr => Array.from(new Set(a));

const uniq2 = arr => {
    const res = [];
    arr.forEach(i => {
        !res.find(j => i.id === j.id) && res.push(i);
    });
}

// 数组分组

// 日期格式化


